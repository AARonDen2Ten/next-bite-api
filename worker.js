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

        products =
          removeDuplicates(products);

        products.sort(
          (a, b) =>
            getQualityScore(b) -
            getQualityScore(a)
        );

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

  const servingQuantity =
    num(
      product.serving_quantity
    );

  // -------------------------
  // PER-100G VALUES
  // -------------------------

  let calories100 =
    num(
      n["energy-kcal_100g"]
    );

  if (
    !calories100 &&
    num(n.energy_100g)
  ) {
    calories100 =
      num(n.energy_100g) /
      4.184;
  }

  let protein100 =
    num(n.proteins_100g);

  let carbs100 =
    num(
      n.carbohydrates_100g
    );

  let fat100 =
    num(n.fat_100g);

  let fiber100 =
    num(n.fiber_100g);

  let sugar100 =
    num(n.sugars_100g);

  let sodium100 =
    num(n.sodium_100g) *
    1000;


  // -------------------------
  // LABEL SERVING VALUES
  // -------------------------

  let servingCalories =
    num(
      n["energy-kcal_serving"]
    );

  if (
    !servingCalories &&
    num(n.energy_serving)
  ) {
    servingCalories =
      num(n.energy_serving) /
      4.184;
  }

  const servingProtein =
    num(
      n.proteins_serving
    );

  const servingCarbs =
    num(
      n.carbohydrates_serving
    );

  const servingFat =
    num(
      n.fat_serving
    );

  const servingFiber =
    num(
      n.fiber_serving
    );

  const servingSugar =
    num(
      n.sugars_serving
    );

  const servingSodium =
    num(
      n.sodium_serving
    ) *
    1000;


  // -------------------------
  // SERVING DATA WINS
  // -------------------------
  //
  // If Open Food Facts provides nutrition
  // for the actual label serving, use it to
  // rebuild the per-100g values.
  //
  // This prevents bad per-100g conversions
  // from turning a 160-calorie shake into
  // a 520-calorie shake.

  if (
    servingQuantity > 0
  ) {
    const to100 =
      100 /
      servingQuantity;

    if (
      servingCalories > 0
    ) {
      calories100 =
        servingCalories *
        to100;
    }

    if (
      servingProtein > 0
    ) {
      protein100 =
        servingProtein *
        to100;
    }

    if (
      servingCarbs > 0
    ) {
      carbs100 =
        servingCarbs *
        to100;
    }

    if (
      servingFat > 0
    ) {
      fat100 =
        servingFat *
        to100;
    }

    if (
      servingFiber > 0
    ) {
      fiber100 =
        servingFiber *
        to100;
    }

    if (
      servingSugar > 0
    ) {
      sugar100 =
        servingSugar *
        to100;
    }

    if (
      servingSodium > 0
    ) {
      sodium100 =
        servingSodium *
        to100;
    }
  }


  // -------------------------
  // BASIC VALIDATION
  // -------------------------

  if (
    calories100 <= 0 &&
    protein100 <= 0 &&
    carbs100 <= 0 &&
    fat100 <= 0
  ) {
    return null;
  }

  if (
    protein100 > 100 ||
    carbs100 > 100 ||
    fat100 > 100 ||
    fiber100 > 100 ||
    sugar100 > 100
  ) {
    return null;
  }

  if (
    calories100 < 0 ||
    calories100 > 950
  ) {
    return null;
  }


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
      round(calories100),

    protein:
      round(protein100),

    carbs:
      round(carbs100),

    fat:
      round(fat100),

    fiber:
      round(fiber100),

    sugar:
      round(sugar100),

    sodium:
      round(sodium100),

    units
  };
}


function getQualityScore(product) {
  let score = 0;

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
