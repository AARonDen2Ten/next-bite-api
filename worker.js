export default {
  async fetch(request) {
    const corsHeaders = {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
      "Content-Type": "application/json; charset=UTF-8"
    };

    if (request.method === "OPTIONS") {
      return new Response(null, {
        status: 204,
        headers: corsHeaders
      });
    }

    if (request.method !== "GET") {
      return json(
        { error: "Method not allowed" },
        405,
        corsHeaders
      );
    }

    try {
      const url = new URL(request.url);

      // BASIC TEST
      if (
        url.pathname === "/" ||
        url.pathname === "/health"
      ) {
        return json(
          {
            ok: true,
            service: "NEXT // BITE API"
          },
          200,
          corsHeaders
        );
      }

      // FOOD SEARCH
      if (url.pathname === "/search") {
        const query =
          (
            url.searchParams.get("q") ||
            ""
          ).trim();

        if (query.length < 2) {
          return json(
            {
              error:
                "Enter at least 2 characters."
            },
            400,
            corsHeaders
          );
        }

        const searchUrl =
          new URL(
            "https://world.openfoodfacts.org/cgi/search.pl"
          );

        searchUrl.searchParams.set(
          "search_terms",
          query
        );

        searchUrl.searchParams.set(
          "search_simple",
          "1"
        );

        searchUrl.searchParams.set(
          "action",
          "process"
        );

        searchUrl.searchParams.set(
          "json",
          "1"
        );

        // Pull extra records so we can clean them
        // before sending the best results to the app.
        searchUrl.searchParams.set(
          "page_size",
          "40"
        );

        searchUrl.searchParams.set(
          "fields",
          [
            "code",
            "product_name",
            "brands",
            "quantity",
            "serving_size",
            "serving_quantity",
            "nutriments"
          ].join(",")
        );

        const response =
          await fetch(
            searchUrl.toString(),
            {
              headers: {
                Accept:
                  "application/json",
                "User-Agent":
                  "NEXT-BITE/1.0"
              }
            }
          );

        if (!response.ok) {
          return json(
            {
              error:
                "Food database search failed.",
              status:
                response.status
            },
            502,
            corsHeaders
          );
        }

        const data =
          await response.json();

        let products =
          (data.products || [])
            .map(normalizeProduct)
            .filter(Boolean);

        // Remove exact duplicate database records.
        products =
          removeDuplicates(products);

        // Rank complete, believable records first.
        products.sort(
          (a, b) =>
            getQualityScore(b) -
            getQualityScore(a)
        );

        // Send only the best 20 results.
        products =
          products.slice(0, 20);

        return json(
          {
            ok: true,
            query,
            count:
              products.length,
            products
          },
          200,
          corsHeaders
        );
      }

      // BARCODE / PRODUCT LOOKUP
      if (url.pathname === "/product") {
        const code =
          (
            url.searchParams.get(
              "code"
            ) || ""
          ).replace(/\D/g, "");

        if (!code) {
          return json(
            {
              error:
                "Barcode is required."
            },
            400,
            corsHeaders
          );
        }

        const productUrl =
          `https://world.openfoodfacts.org/api/v2/product/` +
          `${encodeURIComponent(code)}.json?fields=` +
          [
            "code",
            "product_name",
            "brands",
            "quantity",
            "serving_size",
            "serving_quantity",
            "nutriments"
          ].join(",");

        const response =
          await fetch(
            productUrl,
            {
              headers: {
                Accept:
                  "application/json",
                "User-Agent":
                  "NEXT-BITE/1.0"
              }
            }
          );

        if (!response.ok) {
          return json(
            {
              error:
                "Product lookup failed."
            },
            502,
            corsHeaders
          );
        }

        const data =
          await response.json();

        if (
          data.status !== 1 ||
          !data.product
        ) {
          return json(
            {
              ok: false,
              found: false
            },
            404,
            corsHeaders
          );
        }

        const product =
          normalizeProduct(
            data.product
          );

        if (!product) {
          return json(
            {
              ok: false,
              found: false,
              error:
                "Product does not have usable nutrition data."
            },
            422,
            corsHeaders
          );
        }

        return json(
          {
            ok: true,
            found: true,
            product
          },
          200,
          corsHeaders
        );
      }

      return json(
        {
          error:
            "Route not found"
        },
        404,
        corsHeaders
      );
    } catch (error) {
      return json(
        {
          error:
            "NEXT // BITE API error",
          message:
            error instanceof Error
              ? error.message
              : String(error)
        },
        500,
        corsHeaders
      );
    }
  }
};


function normalizeProduct(product) {
  if (
    !product ||
    !product.product_name
  ) {
    return null;
  }

  const n =
    product.nutriments || {};

  let calories =
    num(
      n["energy-kcal_100g"]
    );

  // Some records only provide energy in kJ.
  if (
    !calories &&
    num(n.energy_100g)
  ) {
    calories =
      num(n.energy_100g) /
      4.184;
  }

  const protein =
    num(n.proteins_100g);

  const carbs =
    num(
      n.carbohydrates_100g
    );

  const fat =
    num(n.fat_100g);

  const fiber =
    num(n.fiber_100g);

  const sugar =
    num(n.sugars_100g);

  // OFF generally stores sodium_100g
  // in grams. NEXT // BITE uses mg.
  const sodium =
    num(n.sodium_100g) *
    1000;

  // Reject records with no useful
  // nutrition information.
  if (
    calories <= 0 &&
    protein <= 0 &&
    carbs <= 0 &&
    fat <= 0
  ) {
    return null;
  }

  // Impossible macro values are usually
  // bad community-entered records.
  if (
    protein > 100 ||
    carbs > 100 ||
    fat > 100 ||
    fiber > 100 ||
    sugar > 100
  ) {
    return null;
  }

  // Basic calorie sanity check.
  // Leave plenty of room for rounding,
  // fiber, sugar alcohols, etc.
  if (
    calories < 0 ||
    calories > 950
  ) {
    return null;
  }

  const servingQuantity =
    num(
      product.serving_quantity
    );

  const units =
    ["g", "oz"];

  if (
    servingQuantity > 0
  ) {
    units.push(
      "serving"
    );
  }

  return {
    id:
      `off-${product.code || crypto.randomUUID()}`,

    code:
      product.code || "",

    name:
      product.product_name,

    brand:
      product.brands || "",

    quantity:
      product.quantity || "",

    servingSize:
      product.serving_size || "",

    servingQuantity:
      servingQuantity || null,

    source:
      "OPEN FOOD FACTS",

    baseAmount:
      100,

    baseUnit:
      "g",

    calories:
      round(calories),

    protein:
      round(protein),

    carbs:
      round(carbs),

    fat:
      round(fat),

    fiber:
      round(fiber),

    sugar:
      round(sugar),

    sodium:
      round(sodium),

    units
  };
}


function getQualityScore(product) {
  let score = 0;

  // A barcode is valuable because it identifies
  // a specific packaged product.
  if (product.code) {
    score += 4;
  }

  if (product.brand) {
    score += 3;
  }

  if (product.quantity) {
    score += 2;
  }

  if (product.servingSize) {
    score += 4;
  }

  if (
    num(
      product.servingQuantity
    ) > 0
  ) {
    score += 4;
  }

  if (
    num(product.calories) > 0
  ) {
    score += 2;
  }

  if (
    num(product.protein) > 0
  ) {
    score += 2;
  }

  if (
    num(product.carbs) > 0
  ) {
    score += 1;
  }

  if (
    num(product.fat) > 0
  ) {
    score += 1;
  }

  return score;
}


function removeDuplicates(products) {
  const seen =
    new Set();

  return products.filter(
    product => {
      // Barcode is the strongest duplicate key.
      const key =
        product.code
          ? `code:${product.code}`
          : [
              product.name,
              product.brand,
              product.servingQuantity,
              product.calories,
              product.protein,
              product.carbs,
              product.fat
            ]
              .map(value =>
                String(
                  value ?? ""
                )
                  .trim()
                  .toLowerCase()
              )
              .join("|");

      if (
        seen.has(key)
      ) {
        return false;
      }

      seen.add(key);

      return true;
    }
  );
}


function num(value) {
  const result =
    Number(value);

  return Number.isFinite(
    result
  )
    ? result
    : 0;
}


function round(
  value,
  digits = 1
) {
  const factor =
    10 ** digits;

  return (
    Math.round(
      (
        num(value) +
        Number.EPSILON
      ) *
      factor
    ) /
    factor
  );
}


function json(
  data,
  status,
  headers
) {
  return new Response(
    JSON.stringify(
      data,
      null,
      2
    ),
    {
      status,
      headers
    }
  );
}
