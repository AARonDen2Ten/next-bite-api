
Today 1:19 AM
All right, possibly looking to see what it takes to create a food tracker calorie physically like your input for the day where you could log everything. Not sure what all that entails but being able to create something to where you could you know like I said, create and log all your calories, your intake, your protein, and keep you on track for the day 

Ohhh yes. And because you already built the workout tracker, a food tracker is very doable. It could basically become your own stripped-down MyFitnessPal without 47 screens trying to sell you premium. 😂

The first version could be something like this:

Daily targets: calories, protein, carbs, fat, and fiber.

Big progress display: 1,425 / 2,100 calories and 118 / 165g protein, with progress bars showing how close you are.

Meals: Breakfast, Lunch, Dinner, Snacks/Drinks, each with an + Add Food button.

Food entry: food name, serving amount, calories, protein, carbs, fat, and fiber. Once added, everything totals automatically.

Running "remaining" numbers: for example, 675 calories left and 47g protein left.

Saved foods: your repeat foods could be one-tap additions. So your Premier Protein shake, overnight oats, turkey/cottage cheese/sweet potato/lentil lunch, etc. don't have to be entered from scratch every freaking day.

Saved meals/recipes: "Overnight Oats" could be saved as one meal even though it contains six ingredients.

Copy from yesterday/recent foods: because realistically, you eat a lot of the same stuff.

Daily history: swipe/select a previous date and see exactly what you ate and your totals.

Weekly averages: calories, protein, fiber, etc., so one weird Tuesday doesn't look like the end of civilization.

Eventually we could add weight tracking, measurements, water, streaks, and charts if you wanted them.

The one part that changes how complicated it gets is the food database. Version 1 could have you enter the nutrition info yourself and then save foods forever. That's pretty straightforward. A more advanced version could eventually connect to a nutrition database so you could type "Fage 0% Greek yogurt" and search for it, or potentially scan barcodes. That's a bigger jump because now we're dealing with an external database/API.

I actually think the sweet spot would be to start with manual entry + saved foods + saved meals + recent foods. After you've used it for a week, we'd know whether a giant food database is even necessary. Most of your day might end up being two or three taps because your regular foods are already saved.

And we can make it phone-first like your workout tracker, so you could put it on your iPhone Home Screen and it would feel much more like an actual calorie-tracking app than a spreadsheet.

If you want to play with the concept before we build the real thing, here's roughly what I have in mind:



Yeah, I’ve looked at a few apps like this and yeah, they’re just full of ads and all kinds of shit. I don’t need. I think what you have. There is a good base. I think what I could do is just start a repository and we can start working on a version, one to play with some tweaks and see what we got what I would like to do is tell me what you think. Keep it relatively similar to how the workout app is possibly with the same color scheme and then maybe some kind of a catchy name very similar to the next rep or should I go with something completely different try and build like a brand or what? 

Yeah, I’d keep it in the same family as Next Rep rather than making a totally unrelated food app.

You accidentally have the beginnings of a little fitness ecosystem here. 😂 Next Rep handles the workout side, and this handles the nutrition side. If we keep the same black/dark charcoal base, clean white text, restrained accent color, rounded cards, progress bars, checkmarks, etc., they’ll feel like two apps made by the same brand.

I wouldn’t name the food tracker “Next Rep Food” or anything quite that literal, though. I’d give each app its own name while keeping the branding visually connected.

Some names in the same short, punchy style as Next Rep:

Next Bite — probably my favorite pairing. Next Rep / Next Bite feels intentional without trying too hard.

Fuel Up — good fitness connection, but a little more generic.

Daily Fuel — very clear about what it does.

Fuel Log — clean and app-y.

Next Fuel — connects directly to Next Rep, although I like Next Bite more.

Macro — extremely clean, but probably too generic.

On Track — works nicely because the whole point is keeping your nutrition on track.

Fuel'd — brandable, although intentionally misspelled names can get annoying.

Bite Log — functional, but doesn't have quite the same personality.

Next Plate — another good companion to Next Rep.

I think Next Bite has something.
You'd have:

NEXT REP
Train. Track. Progress.

and

NEXT BITE
Eat. Track. Progress.

Or we don't even need taglines on the actual apps. The names and matching design could do the work.

And here's where I think it gets even cooler: don't build the food tracker into Next Rep right now. Keep them as separate repositories/apps, because that keeps development much cleaner. But design them from day one as siblings.

So your iPhone could eventually look like:

🏋️ Next Rep | 🍴 Next Bite

Same icon treatment. Same typography. Same dark theme. Same navigation style. Same overall UX. Open either one and you immediately know they're related.

Then, if we get ridiculous later—which, judging by what happened with the workout tracker, we absolutely will 😂—we could eventually create one overall fitness app that contains Training + Nutrition + Progress, and Next Rep/Next Bite become sections of it.

For V1 of Next Bite, I wouldn't go nuts yet. I'd build the foundation around daily calorie and macro goals, Breakfast/Lunch/Dinner/Snacks, quick-add food, saved foods, saved meals, recent foods, editable servings, daily totals, calories/protein remaining, previous-day navigation, and persistent history. Once that works beautifully on your phone, we start adding toys.

And I already know one thing I'd change from the little demo above: protein needs to be almost as visually important as calories. This shouldn't feel like a generic weight-loss calorie counter. It should feel like "Here's what I've eaten, here's where I am on calories, and am I actually going to hit my damn protein today?"

So yes: I'd create a new GitHub repository for it. My vote for the working name is next-bite. Keep Next Rep exactly where it is, and we'll build this separately using the same visual language. Once the blank repo is up, we can start V1 from scratch instead of trying to Frankenstein that little demo into a real app.


OK, I think I like that next bite using those two backwards slashes how we did next rep keeps it similar but still different

Yep — NEXT // BITE.

I like that even more than treating “Next Bite” as a completely separate brand. The // becomes the little visual thread tying the apps together:

NEXT // REP
NEXT // BITE

Same family, same dark/clean aesthetic, but each app has its own purpose. And if we ever make a third companion app, the naming system is already sitting there waiting for us.

For Next Bite specifically, we could differentiate it subtly through the icon/symbol and secondary accent, while keeping the overall interface unmistakably related to Next Rep.

I’d lock in NEXT // BITE as the working name. 👌


All right, perfect I’m gonna create a repository. Can you create me a iPhone icon Apple screen very similar to how next trip is but with the next bite moving forward.

Generated image: Next Bite Fitness Icon


Edit


OK, that logo looks pretty dope. Now you’re making me second-guess. The next rep one. Is there a way you could redo next rep? Keep it very similar but like make it with the same aspect of how you did next fight but working like a dumbbell and make that the two backwards slashes or something I don’t know just an idea.

Generated image: Next Rep Fitness App Icon


Edit


OK, not bad. I like the idea of the fork and knife on the logo, but can you create me one very similar to how the next rep the workout logo is gonna be but just going in the same sense of like next fight with the two backlashes breaking them up and maybe we run with the color scheme of black and green and like a dark gray charcoal on this one.

Generated image: Next // Bite Fitness Nutrition Logo


Edit


OK, if you could run it just like this, but doing next bite in a very similar layout almost identical to this, but then switching the colors scheme from black and yellow to a black and green with charcoal basically changing the green out I like the green that you selected I think that’s catchy and then I need to come up with a catchy slogan that goes with it. Kind of follow on brand with what we’re doing. 

Generated image: Neon Next Bite Fitness Logo


Edit


I like the logo. I think we need a catcher like punch line on the bottom.

Yeah — “FUEL YOUR NEXT.” looks good visually, but it doesn’t hit nearly as hard as NEXT // REP — BEAT YOUR LAST. That one has attitude. Next Bite needs its own version of that.

A few directions I like:

EAT WITH PURPOSE. ← probably my favorite. Short, punchy, and fits the whole reason for the tracker.

FUEL THE PROGRESS. ← connects really well to Next Rep.

FUEL WHAT’S NEXT. ← stronger than “Fuel Your Next.”

MAKE IT COUNT. ← clever because calories/macros literally count, but also bigger than that.

TRACK IT. CRUSH IT. ← more aggressive/fitness-y.

OWN YOUR INTAKE. ← strong, but slightly clinical.

FEED THE GOAL. ← I actually really like this one too.

BITE BY BITE. ← catchy, but softer than the Next Rep branding.

PROGRESS STARTS HERE. ← works, although generic.

FUEL YOUR GOALS. ← clean and obvious, but less distinctive.

For the pairing, I think these two are strongest:

NEXT // REP
BEAT YOUR LAST.

NEXT // BITE
EAT WITH PURPOSE.

That feels like the same brand without trying to make the slogans match word-for-word.

But MAKE IT COUNT. is sneaky good for a calorie/macro tracker. It has the double meaning, and visually:

NEXT // BITE
MAKE IT COUNT.

...that's pretty damn clean. 😏


OK, I like it with purpose. Let’s throw that on that logo if you could re-create that.

Generated image: Neon Next Bite Fitness Logo


Edit


Perfect I like it. Give me a few minutes. I’m gonna start working on repository if you could keep it on brand and the same way that we were doing the next rep building that app keeping everything once it’s saved to your home screen it’s all simple and one spot there’ll be some minimal scrolling, but keep everything out of the iPhone island with your camera and everything and then possibly a couple breakdowns on a few different pages between meals adding things keep things neat and organized or drop downs as you’re adding and taking things out through the day possibly a way to duplicate if you’re having the same thing or meal prep

Yep, I’ve got the direction. And I think NEXT // BITE should feel like the sibling of Next Rep, not like we accidentally wandered into MyFitnessPal wearing a green shirt. 😂

For the build, I’d keep the same mobile-first/PWA approach we used with Next Rep: designed around the iPhone Home Screen experience, safe-area spacing around the Dynamic Island and bottom home indicator, dark black/charcoal UI with that bright green accent, big tap targets, and minimal unnecessary scrolling.

I’m picturing the app organized around three main areas rather than cramming everything onto one monster page:

Today — the main screen. Calories and protein front and center, smaller carbs/fat/fiber totals, remaining amounts, and collapsible Breakfast, Lunch, Dinner, and Snacks sections. You can see your entire day quickly without every individual ingredient taking over the screen.

Add Food — search your saved foods, recent foods, saved meals, or manually create something new. Serving size can be adjusted before adding it.

History / Progress — move between previous days and eventually see weekly averages, calories, protein, weight, etc.

And meal prep absolutely needs to be baked in from V1. If you make your turkey/cottage-cheese/sweet-potato/lentil lunch once, you should be able to save the entire thing as something like Turkey Bowl. Tomorrow: tap it → Add to Lunch. If today's portion is identical to yesterday's: Duplicate. If you ate the exact same breakfast and lunch: Copy from Yesterday. No entering cottage cheese 900 damn times.

I'd also like foods themselves to remember portions. So if you normally use 170 g of Fage, tapping your saved Fage entry starts at 170 g, but you can change it to 120 g that day and the nutrition recalculates.

One other thing I want to preserve from Next Rep: progressive complexity. The main screen stays ridiculously easy. Advanced stuff lives behind taps/dropdowns instead of us covering the screen in buttons and numbers. You shouldn't need instructions to log breakfast.

So once you have the repository created, don't start adding files yet. Send me what you've got and we'll build the first clean version together like we did with Next Rep. I already have a pretty clear picture of the V1 structure.


OK and before I forget about it, I don’t know if it’s a possibility if there’s a way that you could make that happen to where it’s gonna smart adapt to what you’re doing so for example I could put in 4 ounces of ground turkey and then you could come back and answer and let me know what the caloric breakdown or nutritional facts would be of that i.e. how much protein and calories and all that is that something you could also incorporate with food as we’re adding to the app

Yes — absolutely, and I think that's important enough that we should design Next // Bite around it from the beginning.

There are actually two levels we can build:

For foods you've already saved, it's easy and very accurate. Say we save your ground turkey with its nutrition per 4 oz / 112 g. Later you enter 6 oz, and Next Bite automatically scales the calories, protein, carbs, fat, etc. If tomorrow you weigh it in grams instead, we can support that too.

For foods you haven't saved yet, we can eventually connect Next Bite to a food/nutrition database. Then you'd be able to search something like “93/7 cooked ground turkey”, choose the appropriate result, enter 4 oz, and have the app calculate the nutrition rather than making you manually Google every damn thing.

I'd want the workflow to be roughly:

Ground Turkey
4 oz ▾
170 cal · 22g protein · 8g fat · 0g carbs
Add to Lunch

Then once you've used that food, Next Bite remembers it. Next time you type ground..., your saved/recent ground turkey appears first rather than making you search the database again.

We can take it even further with recipes. You could build Turkey Bowl from ground turkey + cottage cheese + sweet potato + lentils, tell Next Bite the recipe makes four portions, and it calculates the nutrition per serving. Then meal prep becomes one tap for the rest of the week.

The one distinction I'd make is that Next Bite shouldn't guess nutrition from a food name when accuracy matters. Different brands, fat percentages, cooked vs. raw weights, etc. can change the numbers substantially. We'd either use nutrition information you've entered from the package or a known database result, and we'd show which one we're using.

So yes: smart serving calculations, unit conversion, nutrition lookup, saved foods, recent foods, recipes, and automatic portion scaling can all be part of where we're headed. That's the piece that takes this from a homemade calorie log to something that actually starts feeling like a real app.


OK perfect and is there a way we could have those kind of inputs as well? You know maybe breaking down between the difference between like an 8515 to like a 93 seven on some leaner meats also another thing would be could we scan barcodes or is that way out of the realm before we can create here?

Yep. Both are possible, and the 85/15 vs. 93/7 example is exactly why I don't want Next // Bite blindly assuming nutrition from “ground beef.”

Meat variations should be built into the food entry
If you search Ground Beef, we could present choices such as 80/20, 85/15, 90/10, 93/7, 96/4, plus whether you're logging raw or cooked weight when that distinction matters.

Then you'd enter:

93/7 Ground Beef → 4 oz → cooked

…and Next Bite calculates calories, protein, fat, etc. from the nutrition record for that specific choice. Same concept for ground turkey, chicken, different cuts of steak, and so on.

Once you've used 93/7 ground turkey, that exact version goes into your Recent/Saved foods. We don't make you answer the same questions every Tuesday until you throw your phone. 😂

And yes — we can do barcode scanning.
That's not out of the realm at all. It's just something I'd add after the basic tracker is working because it introduces two additional pieces: accessing the iPhone camera and looking the UPC up in an external food database.

The finished experience could be extremely slick. You hit + Add Food → Scan Barcode, point your camera at your Premier Protein bottle, and Next Bite finds the product. It could display the product name, serving size, calories, protein, carbs, fat, fiber, etc. You confirm the serving and hit Add.

Even better, we don't have to build our own database containing every Pop-Tart known to mankind. 😂 We can use an existing food-product database/API for barcode lookups.

I'd actually structure our eventual Add Food screen with four big options:

🔎 Search Food · ▦ Scan Barcode · ★ Saved Foods · ＋ Create Food

And underneath those, Recent Foods and Saved Meals.

That gives us a nice fallback system too. Barcode found? Great. Not found? Next Bite immediately lets you create the food manually from the nutrition label and saves the barcode association locally, so your app knows what that barcode means from then on.

We can also eventually investigate using the iPhone camera to read a nutrition label, which would make creating a missing food much faster. That's a later feature rather than something I'd put into V1.

So our roadmap is getting pretty damn good:

V1: daily tracking + calorie/macros + portion scaling + saved foods + saved meals/recipes + duplicate/copy meals + history.

V1.x: searchable nutrition database + specific food variations such as 85/15 vs. 93/7 + raw/cooked distinctions.

V2: barcode scanner + product lookup + manual fallback + potentially nutrition-label scanning.

Most importantly, we should architect V1 so these features slot into it later instead of having to tear apart half the app when we decide we want barcode scanning. That's the part worth planning now.


Yes, I agree. I think V2 is already coming online and we just kind of sidestep a little bit of the extra work how we did with the workout app and just jump straight in with a much larger scale, but something to where we can make some more minor tweaks and changes now knowing what I’m looking for I think that could work out really well. Is there anything else possibly missing that certain other apps may use or try to incorporate still keeping it simple but the basic input of what we’re trying to do is input your your food intake for the day. I love the idea of being able to throw in a meal prep. That’s what my wife and I do we meal prep. The meals are pretty much the exact same for the entire week for my breakfast and for my lunch they’re like within a handful of grams to the tea so being able to tap and duplicate or set that for the week is awesome, but then being able to add and say you know, 2 ounces of chips and scan the barcode and have that just added straight to my daily what have you and then work through being able to set goals as well so you don’t have the breakdown of like hey if I weigh amount of weight, this is the calories that I should be shooting for in a daily basis along with the amount of protein and yada yada yada, etc. to hit a caloric deficit or a bulk or whatever the goal may be trying to break that in if somebody’s got a certain goal of what they’re trying to achieve as well with this nutrition 

Yeah. At this point I would skip the tiny V1. We already learned from Next // Rep that we're going to build the bigger version anyway, so there's not much point spending hours making a version we'll immediately gut. 😂

The trick is making NEXT // BITE powerful underneath but stupidly simple on the surface. Opening the app should still answer three things immediately: What have I eaten? Where am I now? What do I have left?

There are a few features I think we're missing that would make a big difference without turning it into an ad-infested nutrition spaceship:

Goal setup/onboarding. Height, weight, age, sex, activity level and goal: lose, maintain, or gain. From there we can estimate maintenance calories and offer a starting calorie target plus protein/macros. The important part is making every number manually editable. The app can recommend; the person ultimately controls the target.

Goal pace. Rather than just “Lose weight,” something like 0.5, 1, or perhaps 1.5 lb/week where appropriate. That lets us translate the goal into a calorie target instead of pulling a deficit out of thin air. We'd also put sensible guardrails around aggressive targets.

Protein-first goals. Calories get the big daily ring/bar, but protein gets almost equal billing. Carbs, fat and fiber can sit underneath. That fits what we're actually building much better than obsessing over every micronutrient on the home screen.

Meal-prep scheduling. This one is huge for you guys. Create “Breakfast Meal Prep,” tell it Monday–Friday, and Next Bite can pre-fill those five days. Same with lunch. If Wednesday's portion is 7 g different, edit Wednesday without altering the master meal.

Quick portions. Ounces, grams, cups, tablespoons, servings, pieces, etc. When the database has enough information, changing 2 oz → 1.5 oz instantly recalculates everything.

Barcode → quantity → done. Scan the chips, product appears, enter 2 oz, Add to Snack. Three steps and you're out.

Favorites + recents. Foods you actually eat should always beat database search results. Your Premier Protein shouldn't require searching through 900 protein shakes every morning.

Copy controls at several levels. Duplicate one food, duplicate a meal, copy yesterday, copy a meal to selected days, or repeat a meal for the week.

Flexible meal names. Breakfast/Lunch/Dinner/Snacks by default, but someone could create Pre-Workout, Post-Workout, Dessert, Second Breakfast if they're secretly a Hobbit, whatever.

Weight check-ins and trend. Not a giant analytics suite. Just optional weight entries and a trend line so someone pursuing a deficit or bulk can see whether the intake target is producing the intended direction over several weeks.

Goal adjustments without silently moving the target. Eventually Next Bite could notice that someone's weight trend isn't lining up with their selected goal and say something like, “Your recent trend differs from your current goal. Review calorie target?” It should never secretly slash somebody's calories.

Notes / hunger / adherence. Optional and tucked away. Being able to mark “hungry as hell today,” “restaurant meal,” “sick,” etc. could make the history much more useful later.

Custom recipes. Enter the entire recipe once, including every ingredient, tell Next Bite it makes six servings, and it calculates each serving. Change the portion to 1.3 servings and everything scales.

Restaurant/manual quick add. Sometimes you don't give a shit about perfectly cataloguing dinner. If you know it was approximately 750 calories and 40g protein, enter those two numbers and move on.

I'd also add a small Daily Summary at the bottom:

1,842 / 2,150 calories
158 / 170g protein
308 calories remaining • 12g protein remaining

No red YOU FAILED nonsense because you ate 2,178 calories instead of 2,150. 😂 We can indicate over/under without making food tracking feel like a punishment.

The goal system could be particularly good
During setup, someone chooses something like:

Goal: Fat Loss
Current: 225 lb
Target: 200 lb
Activity: Moderately Active
Pace: 1 lb/week

Next Bite calculates an estimated maintenance range and a suggested starting intake. Then:

Daily Calories: 2,150
Protein: 170g
Fiber: 30g
Carbs: 205g
Fat: 70g

And every one of those can be overridden.

I'd also make it clear that these are starting estimates, not promises about exactly how much weight somebody will lose. Real-world energy expenditure varies, and the person's actual multi-week weight trend is ultimately more informative than a calculator.

Then your home screen isn't cluttered with any of that. It just knows your targets.

And I think we've landed on what makes NEXT // BITE different.

It's not supposed to be a diet coach constantly yelling suggestions at you. It's a fast food logger that does the annoying math for you.

For your actual use case, Monday morning could eventually be:

Breakfast Meal Prep ✓
Lunch Meal Prep ✓
Premier Protein ✓

Then at dinner you enter what you ate. Later you grab chips:

Scan → 2 oz → Add.

Done.

That's the experience I'd use as our test for every feature we consider: does this make logging faster or make today's numbers more useful? If not, it probably doesn't belong on the main screen.

So when that repository is ready, I think we build what is technically a pretty beefy V2, but visually it still feels like a ridiculously simple V1. And we'll structure the code from the beginning around foods, servings, recipes, meals, days, goals and history, so we aren't rebuilding the foundation every time you come back with another “okay, hear me out...” at 1:30 in the morning. 😂


OK, yes I think that could be sweet too. Just have a quick little reference of. Hey I went to Chick-fil-A and I got this this and this and I can get a quick breakdown based off of that. I think a lot of just simple breakdown so just quick easy, simple inputs makes it so that it’s easy to use and easy to calculate what we’re doing and keep everything super simple so we’re not over complicating and dropping off with the process. I’ll like everything we got rolling here. What else should we have added that way this first version is gonna have a huge bit of stuff to look at we can kind of come through.

Yep. I think we should treat this first build as “put basically everything useful in the architecture, then decide what deserves to be visible.” That way we can play with it and remove clutter rather than constantly rebuilding the foundation.

And the Chick-fil-A example gives us another important category: restaurant meals. Ideally you type/search Chick-fil-A, pick your items, and Next // Bite totals the meal. If we have reliable nutrition data available, great. If not, quick-add still gets you through it.

I think our feature map is almost complete. I'd add these pieces before we start coding:

Universal Add button. One big + from Today gives you Food Search, Barcode, Restaurant, Saved Food, Saved Meal/Recipe, and Quick Add. You shouldn't have to remember where anything lives.

Natural quick logging. Eventually I'd love a box where you can type something like 4 oz 93/7 ground turkey, 150g sweet potato, 1/2 cup cottage cheese and have Next Bite help turn that into individual entries for confirmation. Same idea with Chick-fil-A spicy deluxe + medium fries + Coke Zero. We'd need a reliable data source behind the nutrition values, but the interface can be designed for it now.

Meal totals. Breakfast shouldn't just list foods. The collapsed header can say Breakfast · 487 cal · 46g protein. Tap it to expand everything inside.

Undo. Accidentally delete dinner? Little Undo prompt. Tiny feature, enormous reduction in rage. 😂

Edit anything after logging. Tap an item and change quantity, meal, serving unit, nutrition info, or date without deleting and recreating it.

Partial servings. 0.5 serving, 1.25 servings, 37 g, 2.3 oz, etc. We shouldn't force neat portions onto food that refused to weigh itself nicely.

Custom serving presets. If your meal-prepped oats are normally one container, save 1 container as the serving while Next Bite still knows what's actually inside it.

Food source indicator. Tiny distinction between Verified/Database, Package/Barcode, Custom, and perhaps Estimated. Especially useful with restaurant foods so you know whether you're looking at published nutrition or an estimate.

Optional micronutrients. Sodium, sugar, saturated fat, cholesterol, potassium, etc. can exist in the food record without cluttering Today. Someone who cares can expand Full Nutrition.

Water tracking, but optional and small. I wouldn't make Next Bite suddenly think it's a Stanley Cup management app.

Calendar/history. Tap September 21 and see exactly what happened that day. Days could eventually get subtle indicators for calorie/protein targets.

Weekly dashboard. Average calories, protein, fiber and weight trend. Weekly averages are much more useful than panicking because Saturday was high.

Progress photos/measurements could eventually exist, but I would leave those out of this first build unless we decide Next Bite should become the overall body-progress app too.

There is one feature I particularly want: “What can I eat?”

Not some AI telling you that you have sinned and must eat six almonds. 😂 More like:

Remaining today
540 calories
43g protein
18g fiber

Then tapping it could show your saved foods/meals that fit reasonably well. If you've got 540 calories and need protein, your saved turkey bowl might appear above something that blows through the remaining calories while barely adding protein.

That actually makes the tracker useful before you eat instead of merely documenting the crime afterward.

I'd also build Meal Prep as a real feature instead of just “duplicate.” You could create a batch recipe, enter the ingredient weights once, tell it 5 containers, and either divide nutrition evenly or record the weight of each container if yours aren't perfectly identical. Schedule them Monday–Friday, and they're sitting there ready to confirm each day rather than automatically pretending you ate something you didn't.

And I think confirmation rather than automatic logging is important. Your scheduled breakfast can appear faded with Log Meal. One tap confirms you actually ate it. That prevents the tracker from saying you consumed 1,800 calories on a day you got abducted by aliens and never opened the app.

The overall navigation I'd keep brutally small: Today | Add | History | More. Goals, recipes, saved foods, meal prep, settings, weight, etc. can live under the appropriate secondary screens. We don't need seven icons across the bottom.

The other thing we should build from day one is data export/import/backup. Even if everything initially lives locally on your phone, I want a way to export your Next Bite data and restore it. After you've spent six months building a food library and recipes, losing all of it because Safari had a tantrum would be unacceptable.

At this point, I think we have enough. I'd actually stop adding features until we see the first build, because we're right at the line where brainstorming stops helping and starts creating a tiny green-and-black monster. 😂

The guiding rule for NEXT // BITE should stay:

Open → log → know where you stand → get out.

Everything we've discussed can exist underneath that without making the user feel like they're using a complicated app.


Yep sounds good

Perfect. We’ve got the concept locked in: NEXT // BITE — EAT WITH PURPOSE.

Go get the repo set up. Once you’re ready, send me what you have and we’ll start with the foundation and build it mobile-first from the beginning, just like Next // Rep. This one is going to get dangerous once we start putting it together. 😂


Oh, one more thing since we’re working on multiple projects can we rename the icon piece so that I don’t have to keep changing my pictures in my files can we have this one like Apple touch icon 2.PNG or something like that where I can read a different name?

Yep. That’s actually the better way to handle it so the two projects never step on each other.

For NEXT // BITE, let's use:

apple-touch-icon-bite.png

And keep NEXT // REP as:

apple-touch-icon.png

Then when we build Next Bite, I'll make sure its HTML specifically references:

<link rel="apple-touch-icon" href="apple-touch-icon-bite.png">
So you can keep both images in Files/GitHub without iPhone constantly asking which identical apple-touch-icon.png you mean. 😂

We can also name the other Next Bite assets consistently as we build it, like next-bite-icon.png, so the two projects stay completely separate.


OK, I like it. The bike thing works. Can you just incorporate in the code and start putting that all together? I am just about ready for it.

Yep — and I’m assuming “bike thing” was autocorrect having a moment and you mean the Bite icon. 😂

I’ll build the Next // Bite code expecting this asset from the start:

<link rel="apple-touch-icon" href="apple-touch-icon-bite.png">
I’ll also keep the whole project separated from Next // Rep with Next Bite-specific naming wherever it makes sense, so we don’t end up accidentally swapping icons/assets between repos.

Once your NEXT // BITE repository is created, send me the repo/file setup you’re looking at (a screenshot is fine). Then we can start with the full larger-scale foundation we mapped out, rather than building a throwaway mini version first.


All right, let me get that code. Let’s get this thing rolling. Also, if you could real quick too, let me get what the name of that picture is I can get that uploaded real quick while you work on the code.

Yep. Upload the logo to the repository with this exact filename:

apple-touch-icon-bite.png

All lowercase, hyphens exactly like that.

And I’ve got the build scope. For the first code drop, I’ll include the NEXT // BITE branding and iPhone/PWA setup, safe-area spacing for the Dynamic Island/home indicator, Today dashboard, calorie/protein/macro targets, collapsible meals, Add Food flow, saved/recent foods, meal prep/duplication structure, history, goals, and the underlying structure we'll need for barcode/database additions.

Once you’ve got the repo open, tell me what files are currently in it (or send me a screenshot), and I’ll give you the actual first code files in the right order so we can start dropping them in without making a mess.


OK, that all works and if you could possibly maybe just incorporate it to where you’d have like a different user safer example like it out myself and another person said they don’t have a access to the app right off the rip

Yep — if I'm reading you right, you mean multiple user profiles, so you could have your profile and your wife's profile inside Next // Bite without needing two completely separate copies of the app. I think we should build that into the foundation now.

I’d do it without accounts/logins initially. On first launch, you'd create a profile with name, goals, calorie/macro targets, weight/goal information, etc. Then you could create another profile for someone else. At the top of Today we'd have a small profile selector, something like Aaron ▾, and tapping it switches to the other person.

Crucially, each profile would have its own daily food log, calorie/macro targets, weight history, meal schedule, favorites, and progress, while we could optionally allow shared foods and recipes. That last part would be fantastic for meal prep: build your meal-prep recipe once, then you and your wife can each log different serving amounts without recreating the whole recipe.

And we'll structure the saved data by a unique profile ID rather than just the person's name. That means if we eventually add actual accounts/cloud syncing, we aren't stuck rebuilding the whole data model.

So yes — I'm adding multi-profile support to our initial architecture. That is exactly the kind of thing that's WAY easier to account for now than six versions from now when we've got food history scattered everywhere. 😂

Icon filename remains: apple-touch-icon-bite.png

Once that sucker is uploaded, we're ready to start coding.


That works just different. That’s all I’m looking for is just a different profile with a drop tap. I don’t need a whole login and none of that. OK pictures uploading now. I’m just waiting on you for the code for the index.

Yep. Keep profiles dead simple: tap the profile name at the top, switch profiles, or add another. No accounts, passwords, emails, or login nonsense.

And yep, we're ready for index.html. Since this is going to be a fairly large first build rather than a tiny demo, I don't want to dump half an app on you and then immediately replace it. I'll build the first index around everything we mapped out, including the reference to:

<link rel="apple-touch-icon" href="apple-touch-icon-bite.png">
One thing before I give you the code: you don't need to wait on me while the picture uploads. Once GitHub shows apple-touch-icon-bite.png in the repo, leave it there.

For the initial file structure, we're going to use:

next-bite/
├── index.html
├── apple-touch-icon-bite.png
├── manifest.json
└── sw.js
index.html will contain the actual app UI/logic to start, and we'll use manifest.json + sw.js to make the Home Screen/PWA behavior cleaner.

I'm ready to generate the full first index.html now. Send me the screenshot of the repo once the icon finishes uploading, just so I can match what you've actually created and we don't repeat the little GitHub-file dance from Next // Rep. 😂


Make me the index and then let’s go over how to make the other things

Absolutely. We can start with one self-contained index.html so you only have one chunk of code to deal with right now. This gives us the working shell for NEXT // BITE, including the profile switcher, Today screen, calorie/protein/macros, meals, adding/editing/duplicating foods, saved foods, saved meals, meal prep, history, goals, local saving, and the iPhone safe-area setup.

Paste this entire thing into your index.html:

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport"
        content="width=device-width, initial-scale=1, viewport-fit=cover" />

  <meta name="theme-color" content="#090b0a" />
  <meta name="apple-mobile-web-app-capable" content="yes" />
  <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
  <meta name="apple-mobile-web-app-title" content="Next Bite" />

  <title>NEXT // BITE</title>

  <link rel="apple-touch-icon" href="apple-touch-icon-bite.png" />
  <link rel="manifest" href="manifest.json" />

  <style>
    :root {
      --bg: #080a09;
      --panel: #111411;
      --panel-2: #171b17;
      --panel-3: #1d221e;
      --border: #2b312c;
      --text: #f4f7f4;
      --muted: #929b94;
      --green: #78ff38;
      --green-soft: rgba(120, 255, 56, 0.12);
      --green-border: rgba(120, 255, 56, 0.28);
      --danger: #ff6767;
      --warning: #ffd166;

      --top-safe: env(safe-area-inset-top, 0px);
      --bottom-safe: env(safe-area-inset-bottom, 0px);
    }

    * {
      box-sizing: border-box;
      -webkit-tap-highlight-color: transparent;
    }

    html {
      background: var(--bg);
    }

    body {
      margin: 0;
      min-height: 100%;
      background:
        radial-gradient(circle at top right, rgba(120,255,56,.05), transparent 32%),
        var(--bg);
      color: var(--text);
      font-family:
        -apple-system,
        BlinkMacSystemFont,
        "SF Pro Display",
        "SF Pro Text",
        "Helvetica Neue",
        Arial,
        sans-serif;
      overscroll-behavior-y: none;
    }

    button,
    input,
    select,
    textarea {
      font: inherit;
    }

    button {
      cursor: pointer;
    }

    .app {
      width: min(100%, 620px);
      margin: 0 auto;
      min-height: 100vh;

      padding-top: max(calc(var(--top-safe) + 12px), 22px);
      padding-left: 16px;
      padding-right: 16px;

      padding-bottom: calc(105px + var(--bottom-safe));
    }

    /* HEADER */

    .topbar {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 12px;
      margin-bottom: 18px;
    }

    .brand {
      min-width: 0;
    }

    .brand-title {
      font-size: 24px;
      line-height: 1;
      font-weight: 900;
      letter-spacing: -1px;
      white-space: nowrap;
    }

    .slashes {
      color: var(--green);
    }

    .tagline {
      color: var(--muted);
      font-size: 10px;
      font-weight: 800;
      letter-spacing: 2.1px;
      margin-top: 6px;
    }

    .profile-button {
      border: 1px solid var(--border);
      background: var(--panel);
      color: var(--text);
      min-height: 44px;
      max-width: 46%;
      padding: 8px 12px;
      border-radius: 14px;

      display: flex;
      align-items: center;
      gap: 8px;

      font-size: 13px;
      font-weight: 800;
    }

    .profile-avatar {
      width: 27px;
      height: 27px;
      flex: 0 0 27px;
      border-radius: 50%;
      background: var(--green-soft);
      border: 1px solid var(--green-border);

      display: grid;
      place-items: center;

      color: var(--green);
      font-size: 12px;
      font-weight: 900;
    }

    .profile-name {
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }

    /* DATE */

    .date-row {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 8px;
      margin-bottom: 14px;
    }

    .date-nav {
      width: 44px;
      height: 44px;
      border: 1px solid var(--border);
      background: var(--panel);
      color: var(--text);
      border-radius: 14px;
      font-size: 21px;
    }

    .date-center {
      text-align: center;
      min-width: 0;
      flex: 1;
    }

    .date-label {
      font-size: 17px;
      font-weight: 850;
    }

    .date-sub {
      margin-top: 2px;
      color: var(--muted);
      font-size: 12px;
    }

    /* CARDS */

    .card {
      border: 1px solid var(--border);
      background: linear-gradient(180deg, var(--panel-2), var(--panel));
      border-radius: 20px;
      padding: 16px;
    }

    .summary {
      margin-bottom: 16px;
    }

    .summary-head {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      gap: 12px;
    }

    .eyebrow {
      color: var(--muted);
      font-size: 11px;
      font-weight: 850;
      text-transform: uppercase;
      letter-spacing: 1.25px;
    }

    .big-number {
      margin-top: 3px;
      font-size: 32px;
      line-height: 1;
      font-weight: 900;
      letter-spacing: -1.5px;
    }

    .big-number small {
      font-size: 14px;
      color: var(--muted);
      font-weight: 750;
      letter-spacing: 0;
    }

    .remaining {
      text-align: right;
    }

    .remaining-number {
      color: var(--green);
      font-size: 21px;
      font-weight: 900;
    }

    .remaining-label {
      color: var(--muted);
      font-size: 11px;
      margin-top: 2px;
    }

    .progress {
      width: 100%;
      height: 10px;
      background: #242925;
      border-radius: 999px;
      overflow: hidden;
      margin: 12px 0 17px;
    }

    .progress-fill {
      height: 100%;
      width: 0%;
      border-radius: inherit;
      background: var(--green);
      transition: width 0.25s ease;
    }

    .macro-grid {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 7px;
    }

    .macro {
      min-width: 0;
      background: rgba(255,255,255,.025);
      border: 1px solid rgba(255,255,255,.05);
      border-radius: 14px;
      padding: 10px 5px;
      text-align: center;
    }

    .macro-value {
      font-size: 15px;
      font-weight: 900;
    }

    .macro-label {
      color: var(--muted);
      font-size: 9px;
      margin-top: 3px;
      text-transform: uppercase;
      letter-spacing: .7px;
    }

    .macro-target {
      color: #667068;
      font-size: 9px;
      margin-top: 2px;
    }

    /* REMAINING STRIP */

    .remaining-strip {
      border: 1px solid var(--green-border);
      background: var(--green-soft);
      border-radius: 16px;
      padding: 12px 14px;
      margin-bottom: 18px;

      display: flex;
      justify-content: space-between;
      gap: 10px;
      align-items: center;
    }

    .remaining-strip strong {
      color: var(--green);
    }

    .remaining-strip span {
      color: var(--muted);
      font-size: 12px;
    }

    /* MEALS */

    .section-title-row {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 10px;
      margin: 18px 2px 10px;
    }

    .section-title {
      font-size: 18px;
      font-weight: 900;
    }

    .small-action {
      border: 0;
      background: transparent;
      color: var(--green);
      padding: 8px;
      font-size: 12px;
      font-weight: 800;
    }

    .meal-card {
      border: 1px solid var(--border);
      background: var(--panel);
      border-radius: 18px;
      margin-bottom: 10px;
      overflow: hidden;
    }

    .meal-header {
      width: 100%;
      min-height: 62px;
      padding: 12px 14px;

      border: 0;
      background: transparent;
      color: var(--text);

      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 10px;
      text-align: left;
    }

    .meal-title {
      font-size: 15px;
      font-weight: 900;
    }

    .meal-summary {
      color: var(--muted);
      font-size: 11px;
      margin-top: 3px;
    }

    .meal-chevron {
      color: var(--muted);
      transition: transform .2s ease;
    }

    .meal-card.open .meal-chevron {
      transform: rotate(180deg);
    }

    .meal-body {
      display: none;
      border-top: 1px solid var(--border);
      padding: 8px 12px 12px;
    }

    .meal-card.open .meal-body {
      display: block;
    }

    .food-row {
      display: grid;
      grid-template-columns: 1fr auto;
      gap: 10px;
      padding: 11px 2px;
      border-bottom: 1px solid rgba(255,255,255,.055);
    }

    .food-row:last-of-type {
      border-bottom: 0;
    }

    .food-name {
      font-size: 14px;
      font-weight: 750;
    }

    .food-details {
      color: var(--muted);
      font-size: 11px;
      margin-top: 3px;
    }

    .food-actions {
      display: flex;
      align-items: center;
      gap: 3px;
    }

    .icon-btn {
      border: 0;
      background: transparent;
      color: var(--muted);
      width: 36px;
      height: 36px;
      border-radius: 10px;
      font-size: 16px;
    }

    .meal-actions {
      display: flex;
      gap: 8px;
      padding-top: 10px;
    }

    .meal-add,
    .meal-copy {
      min-height: 42px;
      border-radius: 12px;
      font-size: 12px;
      font-weight: 850;
    }

    .meal-add {
      flex: 1;
      border: 1px solid var(--green-border);
      background: var(--green-soft);
      color: var(--green);
    }

    .meal-copy {
      border: 1px solid var(--border);
      background: var(--panel-2);
      color: var(--text);
      padding: 0 13px;
    }

    .empty-meal {
      color: var(--muted);
      font-size: 12px;
      padding: 10px 2px 3px;
    }

    /* BUTTONS */

    .primary-btn {
      width: 100%;
      min-height: 50px;
      border: 0;
      border-radius: 15px;
      background: var(--green);
      color: #071005;
      font-weight: 950;
      font-size: 14px;
    }

    .secondary-btn {
      min-height: 46px;
      border-radius: 14px;
      border: 1px solid var(--border);
      background: var(--panel-2);
      color: var(--text);
      font-weight: 800;
      padding: 0 14px;
    }

    .danger-btn {
      color: var(--danger);
    }

    /* BOTTOM NAV */

    .bottom-nav-wrap {
      position: fixed;
      left: 0;
      right: 0;
      bottom: 0;
      z-index: 20;

      padding:
        8px
        max(12px, env(safe-area-inset-right))
        calc(8px + var(--bottom-safe))
        max(12px, env(safe-area-inset-left));

      background:
        linear-gradient(
          180deg,
          rgba(8,10,9,0),
          rgba(8,10,9,.96) 24%,
          rgba(8,10,9,.99)
        );
    }

    .bottom-nav {
      width: min(calc(100% - 0px), 590px);
      margin: 0 auto;
      border: 1px solid var(--border);
      background: rgba(17,20,17,.97);
      border-radius: 20px;
      padding: 6px;

      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 4px;
    }

    .nav-btn {
      min-height: 54px;
      border: 0;
      background: transparent;
      color: var(--muted);
      border-radius: 14px;

      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 3px;

      font-size: 10px;
      font-weight: 800;
    }

    .nav-icon {
      font-size: 18px;
    }

    .nav-btn.active {
      background: var(--green-soft);
      color: var(--green);
    }

    /* PAGES */

    .page {
      display: none;
    }

    .page.active {
      display: block;
    }

    .page-heading {
      margin: 6px 0 4px;
      font-size: 26px;
      font-weight: 950;
      letter-spacing: -1px;
    }

    .page-sub {
      color: var(--muted);
      font-size: 13px;
      line-height: 1.45;
      margin-bottom: 18px;
    }

    /* ADD */

    .add-grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 10px;
      margin-bottom: 18px;
    }

    .add-option {
      min-height: 100px;
      border: 1px solid var(--border);
      background: var(--panel);
      color: var(--text);
      border-radius: 18px;
      padding: 14px;
      text-align: left;
    }

    .add-option-icon {
      color: var(--green);
      font-size: 24px;
      margin-bottom: 9px;
    }

    .add-option strong {
      display: block;
      font-size: 14px;
    }

    .add-option span {
      display: block;
      color: var(--muted);
      font-size: 10px;
      margin-top: 3px;
      line-height: 1.35;
    }

    .list-card {
      border: 1px solid var(--border);
      background: var(--panel);
      border-radius: 17px;
      overflow: hidden;
    }

    .list-row {
      min-height: 60px;
      padding: 11px 13px;
      border-bottom: 1px solid var(--border);

      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 10px;
    }

    .list-row:last-child {
      border-bottom: 0;
    }

    .list-main {
      min-width: 0;
    }

    .list-title {
      font-size: 13px;
      font-weight: 850;
    }

    .list-sub {
      color: var(--muted);
      font-size: 10px;
      margin-top: 3px;
    }

    .quick-plus {
      width: 38px;
      height: 38px;
      border-radius: 12px;
      border: 1px solid var(--green-border);
      background: var(--green-soft);
      color: var(--green);
      font-size: 20px;
      flex: 0 0 38px;
    }

    /* FORMS */

    .form-group {
      margin-bottom: 13px;
    }

    label {
      display: block;
      color: var(--muted);
      font-size: 11px;
      font-weight: 800;
      margin-bottom: 6px;
    }

    input,
    select,
    textarea {
      width: 100%;
      min-height: 48px;
      border: 1px solid var(--border);
      background: var(--panel-2);
      color: var(--text);
      border-radius: 13px;
      padding: 10px 12px;
      outline: none;
      font-size: 16px;
    }

    input:focus,
    select:focus,
    textarea:focus {
      border-color: var(--green);
      box-shadow: 0 0 0 3px var(--green-soft);
    }

    .form-grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 10px;
    }

    .nutrition-preview {
      margin: 14px 0;
      padding: 13px;
      border: 1px solid var(--green-border);
      background: var(--green-soft);
      border-radius: 15px;
    }

    .nutrition-preview strong {
      color: var(--green);
    }

    /* HISTORY */

    .history-day {
      border: 1px solid var(--border);
      background: var(--panel);
      border-radius: 17px;
      padding: 14px;
      margin-bottom: 9px;
    }

    .history-top {
      display: flex;
      justify-content: space-between;
      gap: 12px;
    }

    .history-date {
      font-weight: 850;
      font-size: 13px;
    }

    .history-cals {
      font-size: 13px;
      font-weight: 850;
    }

    .history-macros {
      color: var(--muted);
      font-size: 10px;
      margin-top: 5px;
    }

    .mini-progress {
      margin-top: 9px;
      height: 5px;
      background: #262b27;
      border-radius: 999px;
      overflow: hidden;
    }

    .mini-progress div {
      height: 100%;
      background: var(--green);
    }

    /* MORE */

    .settings-group {
      margin-bottom: 18px;
    }

    .settings-title {
      color: var(--muted);
      font-size: 10px;
      font-weight: 900;
      text-transform: uppercase;
      letter-spacing: 1.1px;
      margin: 0 4px 7px;
    }

    .settings-row {
      width: 100%;
      min-height: 58px;
      padding: 10px 13px;
      border: 1px solid var(--border);
      border-bottom: 0;
      background: var(--panel);
      color: var(--text);

      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 10px;

      text-align: left;
    }

    .settings-row:first-of-type {
      border-radius: 15px 15px 0 0;
    }

    .settings-row:last-of-type {
      border-bottom: 1px solid var(--border);
      border-radius: 0 0 15px 15px;
    }

    .settings-row:only-of-type {
      border-bottom: 1px solid var(--border);
      border-radius: 15px;
    }

    .settings-row-title {
      font-size: 13px;
      font-weight: 800;
    }

    .settings-row-sub {
      color: var(--muted);
      font-size: 10px;
      margin-top: 2px;
    }

    .settings-arrow {
      color: var(--muted);
    }

    /* MODALS */

    .modal-backdrop {
      position: fixed;
      inset: 0;
      z-index: 100;

      background: rgba(0,0,0,.72);
      backdrop-filter: blur(5px);
      -webkit-backdrop-filter: blur(5px);

      display: none;
      align-items: flex-end;
      justify-content: center;
    }

    .modal-backdrop.open {
      display: flex;
    }

    .modal {
      width: min(100%, 620px);
      max-height: 88%;
      overflow-y: auto;

      background: #101310;
      border: 1px solid var(--border);
      border-radius: 24px 24px 0 0;

      padding:
        18px
        16px
        calc(18px + var(--bottom-safe));
    }

    .modal-handle {
      width: 42px;
      height: 4px;
      background: #3b423c;
      border-radius: 999px;
      margin: 0 auto 17px;
    }

    .modal-title-row {
      display: flex;
      justify-content: space-between;
      gap: 10px;
      align-items: center;
      margin-bottom: 16px;
    }

    .modal-title {
      font-size: 21px;
      font-weight: 950;
    }

    .close-btn {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      border: 1px solid var(--border);
      background: var(--panel-2);
      color: var(--text);
      font-size: 18px;
    }

    /* PROFILE */

    .profile-choice {
      width: 100%;
      min-height: 58px;
      border: 1px solid var(--border);
      background: var(--panel);
      color: var(--text);
      border-radius: 15px;
      padding: 10px 12px;
      margin-bottom: 8px;

      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 10px;
      text-align: left;
    }

    .profile-choice.active {
      border-color: var(--green-border);
      background: var(--green-soft);
    }

    .check {
      color: var(--green);
      font-weight: 900;
    }

    /* TOAST */

    .toast {
      position: fixed;
      z-index: 200;
      left: 50%;
      bottom: calc(92px + var(--bottom-safe));
      transform: translate(-50%, 20px);

      width: min(calc(100% - 32px), 520px);
      background: #202520;
      border: 1px solid #353d36;
      color: var(--text);
      border-radius: 14px;
      padding: 12px 14px;

      font-size: 12px;
      font-weight: 750;

      opacity: 0;
      pointer-events: none;
      transition: .2s ease;
    }

    .toast.show {
      opacity: 1;
      transform: translate(-50%, 0);
    }

    .muted {
      color: var(--muted);
    }

    .hidden {
      display: none !important;
    }

    .spacer-10 {
      height: 10px;
    }

    @media (min-width: 650px) {
      .app {
        padding-left: 22px;
        padding-right: 22px;
      }

      .modal {
        margin-bottom: 14px;
        border-radius: 24px;
      }

      .modal-backdrop {
        align-items: center;
      }
    }
  </style>
</head>

<body>

  <main class="app">

    <header class="topbar">
      <div class="brand">
        <div class="brand-title">
          NEXT <span class="slashes">//</span> BITE
        </div>
        <div class="tagline">EAT WITH PURPOSE.</div>
      </div>

      <button class="profile-button" id="profileButton" type="button">
        <div class="profile-avatar" id="profileAvatar">A</div>
        <span class="profile-name" id="profileName">My Profile</span>
        <span>⌄</span>
      </button>
    </header>

    <!-- TODAY -->
    <section class="page active" id="page-today">

      <div class="date-row">
        <button class="date-nav" id="prevDay" type="button">‹</button>

        <div class="date-center">
          <div class="date-label" id="dateLabel">Today</div>
          <div class="date-sub" id="dateSub"></div>
        </div>

        <button class="date-nav" id="nextDay" type="button">›</button>
      </div>

      <div class="card summary">
        <div class="summary-head">
          <div>
            <div class="eyebrow">Calories</div>

            <div class="big-number">
              <span id="caloriesUsed">0</span>
              <small>/ <span id="calorieGoal">2200</span></small>
            </div>
          </div>

          <div class="remaining">
            <div class="remaining-number" id="caloriesRemaining">2200</div>
            <div class="remaining-label">remaining</div>
          </div>
        </div>

        <div class="progress">
          <div class="progress-fill" id="calorieProgress"></div>
        </div>

        <div class="macro-grid">

          <div class="macro">
            <div class="macro-value" id="proteinUsed">0g</div>
            <div class="macro-label">Protein</div>
            <div class="macro-target" id="proteinTarget">of 170g</div>
          </div>

          <div class="macro">
            <div class="macro-value" id="carbsUsed">0g</div>
            <div class="macro-label">Carbs</div>
            <div class="macro-target" id="carbsTarget">of 220g</div>
          </div>

          <div class="macro">
            <div class="macro-value" id="fatUsed">0g</div>
            <div class="macro-label">Fat</div>
            <div class="macro-target" id="fatTarget">of 70g</div>
          </div>

          <div class="macro">
            <div class="macro-value" id="fiberUsed">0g</div>
            <div class="macro-label">Fiber</div>
            <div class="macro-target" id="fiberTarget">of 30g</div>
          </div>

        </div>
      </div>

      <div class="remaining-strip">
        <div>
          <strong id="remainingProtein">170g protein</strong>
          <span> left today</span>
        </div>

        <button class="small-action" id="quickAddTop" type="button">
          + Quick Add
        </button>
      </div>

      <div class="section-title-row">
        <div class="section-title">Meals</div>

        <button class="small-action" id="copyYesterday" type="button">
          Copy Yesterday
        </button>
      </div>

      <div id="mealsContainer"></div>

    </section>

    <!-- ADD -->
    <section class="page" id="page-add">

      <div class="page-heading">Add Food</div>

      <div class="page-sub">
        Get it logged and get on with your day.
      </div>

      <div class="add-grid">

        <button class="add-option" data-add="manual" type="button">
          <div class="add-option-icon">＋</div>
          <strong>Quick Add</strong>
          <span>Enter a food and nutrition manually.</span>
        </button>

        <button class="add-option" data-add="barcode" type="button">
          <div class="add-option-icon">▥</div>
          <strong>Scan Barcode</strong>
          <span>Product scanning will plug into this button.</span>
        </button>

        <button class="add-option" data-add="saved" type="button">
          <div class="add-option-icon">★</div>
          <strong>Saved Foods</strong>
          <span>Use foods you've already logged.</span>
        </button>

        <button class="add-option" data-add="meal" type="button">
          <div class="add-option-icon">▤</div>
          <strong>Saved Meals</strong>
          <span>Log meal prep or a whole meal at once.</span>
        </button>

      </div>

      <div class="section-title-row">
        <div class="section-title">Recent Foods</div>
      </div>

      <div class="list-card" id="recentFoods"></div>

    </section>

    <!-- HISTORY -->
    <section class="page" id="page-history">

      <div class="page-heading">History</div>

      <div class="page-sub">
        The trend matters more than one weird Tuesday.
      </div>

      <div id="historyList"></div>

    </section>

    <!-- MORE -->
    <section class="page" id="page-more">

      <div class="page-heading">More</div>

      <div class="page-sub">
        Goals, meal prep, saved foods and the stuff you don't need cluttering Today.
      </div>

      <div class="settings-group">

        <div class="settings-title">Nutrition</div>

        <button class="settings-row" id="goalsButton" type="button">
          <div>
            <div class="settings-row-title">Goals</div>
            <div class="settings-row-sub">
              Calories, protein, carbs, fat and fiber
            </div>
          </div>

          <div class="settings-arrow">›</div>
        </button>

        <button class="settings-row" id="savedFoodsButton" type="button">
          <div>
            <div class="settings-row-title">Saved Foods</div>
            <div class="settings-row-sub">
              Foods you've created and reused
            </div>
          </div>

          <div class="settings-arrow">›</div>
        </button>

        <button class="settings-row" id="savedMealsButton" type="button">
          <div>
            <div class="settings-row-title">Meals & Meal Prep</div>
            <div class="settings-row-sub">
              Save combinations and reuse them
            </div>
          </div>

          <div class="settings-arrow">›</div>
        </button>

      </div>

      <div class="settings-group">

        <div class="settings-title">Profiles</div>

        <button class="settings-row" id="manageProfilesButton" type="button">
          <div>
            <div class="settings-row-title">Manage Profiles</div>
            <div class="settings-row-sub">
              Switch or add another person
            </div>
          </div>

          <div class="settings-arrow">›</div>
        </button>

      </div>

      <div class="settings-group">

        <div class="settings-title">Data</div>

        <button class="settings-row" id="exportButton" type="button">
          <div>
            <div class="settings-row-title">Export Backup</div>
            <div class="settings-row-sub">
              Download your Next Bite data
            </div>
          </div>

          <div class="settings-arrow">›</div>
        </button>

      </div>

    </section>

  </main>

  <!-- BOTTOM NAV -->

  <div class="bottom-nav-wrap">
    <nav class="bottom-nav">

      <button class="nav-btn active" data-page="today" type="button">
        <span class="nav-icon">⌂</span>
        <span>Today</span>
      </button>

      <button class="nav-btn" data-page="add" type="button">
        <span class="nav-icon">＋</span>
        <span>Add</span>
      </button>

      <button class="nav-btn" data-page="history" type="button">
        <span class="nav-icon">◷</span>
        <span>History</span>
      </button>

      <button class="nav-btn" data-page="more" type="button">
        <span class="nav-icon">•••</span>
        <span>More</span>
      </button>

    </nav>
  </div>

  <!-- FOOD MODAL -->

  <div class="modal-backdrop" id="foodModal">
    <div class="modal">

      <div class="modal-handle"></div>

      <div class="modal-title-row">
        <div class="modal-title" id="foodModalTitle">Add Food</div>
        <button class="close-btn" data-close="foodModal" type="button">×</button>
      </div>

      <form id="foodForm">

        <input type="hidden" id="editingFoodId" />

        <div class="form-group">
          <label for="foodName">Food</label>
          <input
            id="foodName"
            type="text"
            placeholder="93/7 Ground Turkey"
            required
          />
        </div>

        <div class="form-grid">

          <div class="form-group">
            <label for="foodAmount">Amount</label>
            <input
              id="foodAmount"
              type="number"
              inputmode="decimal"
              min="0.01"
              step="0.01"
              value="1"
              required
            />
          </div>

          <div class="form-group">
            <label for="foodUnit">Unit</label>
            <select id="foodUnit">
              <option value="serving">serving</option>
              <option value="g">grams</option>
              <option value="oz">ounces</option>
              <option value="cup">cup</option>
              <option value="tbsp">tbsp</option>
              <option value="tsp">tsp</option>
              <option value="piece">piece</option>
              <option value="container">container</option>
            </select>
          </div>

        </div>

        <div class="form-group">
          <label for="foodMeal">Meal</label>
          <select id="foodMeal">
            <option value="breakfast">Breakfast</option>
            <option value="lunch">Lunch</option>
            <option value="dinner">Dinner</option>
            <option value="snacks">Snacks</option>
          </select>
        </div>

        <div class="form-grid">

          <div class="form-group">
            <label for="foodCalories">Calories</label>
            <input
              id="foodCalories"
              type="number"
              inputmode="decimal"
              min="0"
              step="0.1"
              value="0"
              required
            />
          </div>

          <div class="form-group">
            <label for="foodProtein">Protein (g)</label>
            <input
              id="foodProtein"
              type="number"
              inputmode="decimal"
              min="0"
              step="0.1"
              value="0"
            />
          </div>

          <div class="form-group">
            <label for="foodCarbs">Carbs (g)</label>
            <input
              id="foodCarbs"
              type="number"
              inputmode="decimal"
              min="0"
              step="0.1"
              value="0"
            />
          </div>

          <div class="form-group">
            <label for="foodFat">Fat (g)</label>
            <input
              id="foodFat"
              type="number"
              inputmode="decimal"
              min="0"
              step="0.1"
              value="0"
            />
          </div>

        </div>

        <div class="form-group">
          <label for="foodFiber">Fiber (g)</label>
          <input
            id="foodFiber"
            type="number"
            inputmode="decimal"
            min="0"
            step="0.1"
            value="0"
          />
        </div>

        <div class="nutrition-preview" id="nutritionPreview">
          <strong>0 calories</strong> · 0g protein
        </div>

        <button class="primary-btn" type="submit">
          Add to Day
        </button>

      </form>

    </div>
  </div>

  <!-- PROFILE MODAL -->

  <div class="modal-backdrop" id="profileModal">
    <div class="modal">

      <div class="modal-handle"></div>

      <div class="modal-title-row">
        <div class="modal-title">Profiles</div>
        <button class="close-btn" data-close="profileModal" type="button">×</button>
      </div>

      <div id="profileChoices"></div>

      <div class="spacer-10"></div>

      <button class="primary-btn" id="addProfileButton" type="button">
        + Add Profile
      </button>

    </div>
  </div>

  <!-- ADD PROFILE MODAL -->

  <div class="modal-backdrop" id="newProfileModal">
    <div class="modal">

      <div class="modal-handle"></div>

      <div class="modal-title-row">
        <div class="modal-title">New Profile</div>
        <button class="close-btn" data-close="newProfileModal" type="button">×</button>
      </div>

      <form id="profileForm">

        <div class="form-group">
          <label for="newProfileName">Name</label>
          <input
            id="newProfileName"
            type="text"
            placeholder="Name"
            required
          />
        </div>

        <div class="form-grid">

          <div class="form-group">
            <label for="newProfileCalories">Calories</label>
            <input
              id="newProfileCalories"
              type="number"
              min="500"
              value="2200"
            />
          </div>

          <div class="form-group">
            <label for="newProfileProtein">Protein</label>
            <input
              id="newProfileProtein"
              type="number"
              min="0"
              value="170"
            />
          </div>

        </div>

        <button class="primary-btn" type="submit">
          Create Profile
        </button>

      </form>

    </div>
  </div>

  <!-- GOALS MODAL -->

  <div class="modal-backdrop" id="goalsModal">
    <div class="modal">

      <div class="modal-handle"></div>

      <div class="modal-title-row">
        <div class="modal-title">Daily Goals</div>
        <button class="close-btn" data-close="goalsModal" type="button">×</button>
      </div>

      <form id="goalsForm">

        <div class="form-grid">

          <div class="form-group">
            <label for="goalCalories">Calories</label>
            <input id="goalCalories" type="number" min="500" />
          </div>

          <div class="form-group">
            <label for="goalProtein">Protein (g)</label>
            <input id="goalProtein" type="number" min="0" />
          </div>

          <div class="form-group">
            <label for="goalCarbs">Carbs (g)</label>
            <input id="goalCarbs" type="number" min="0" />
          </div>

          <div class="form-group">
            <label for="goalFat">Fat (g)</label>
            <input id="goalFat" type="number" min="0" />
          </div>

        </div>

        <div class="form-group">
          <label for="goalFiber">Fiber (g)</label>
          <input id="goalFiber" type="number" min="0" />
        </div>

        <button class="primary-btn" type="submit">
          Save Goals
        </button>

      </form>

    </div>
  </div>

  <!-- SAVED FOOD MODAL -->

  <div class="modal-backdrop" id="savedFoodModal">
    <div class="modal">

      <div class="modal-handle"></div>

      <div class="modal-title-row">
        <div class="modal-title">Saved Foods</div>
        <button class="close-btn" data-close="savedFoodModal" type="button">×</button>
      </div>

      <div id="savedFoodsList"></div>

    </div>
  </div>

  <!-- SAVED MEALS MODAL -->

  <div class="modal-backdrop" id="savedMealsModal">
    <div class="modal">

      <div class="modal-handle"></div>

      <div class="modal-title-row">
        <div class="modal-title">Meals & Meal Prep</div>
        <button class="close-btn" data-close="savedMealsModal" type="button">×</button>
      </div>

      <div id="savedMealsList"></div>

      <div class="spacer-10"></div>

      <button class="primary-btn" id="saveCurrentMealButton" type="button">
        Save a Meal From Today
      </button>

    </div>
  </div>

  <div class="toast" id="toast"></div>

  <script>
    (() => {

      const STORAGE_KEY = "nextBiteDataV1";

      const mealNames = {
        breakfast: "Breakfast",
        lunch: "Lunch",
        dinner: "Dinner",
        snacks: "Snacks"
      };

      const defaultData = {
        activeProfileId: "profile-1",

        profiles: [
          {
            id: "profile-1",
            name: "My Profile",

            goals: {
              calories: 2200,
              protein: 170,
              carbs: 220,
              fat: 70,
              fiber: 30
            },

            logs: {},
            savedFoods: [],
            recentFoods: [],
            savedMeals: []
          }
        ]
      };

      let data = loadData();
      let selectedDate = todayKey();
      let toastTimer = null;

      function loadData() {
        try {
          const stored = localStorage.getItem(STORAGE_KEY);

          if (!stored) {
            return structuredClone(defaultData);
          }

          const parsed = JSON.parse(stored);

          if (!parsed.profiles || !parsed.profiles.length) {
            return structuredClone(defaultData);
          }

          return parsed;

        } catch (error) {
          return structuredClone(defaultData);
        }
      }

      function saveData() {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
      }

      function uid(prefix = "id") {
        return `${prefix}-${Date.now()}-${Math.random()
          .toString(36)
          .slice(2, 8)}`;
      }

      function todayKey() {
        const d = new Date();

        return [
          d.getFullYear(),
          String(d.getMonth() + 1).padStart(2, "0"),
          String(d.getDate()).padStart(2, "0")
        ].join("-");
      }

      function shiftDate(dateKey, amount) {
        const [y, m, d] = dateKey.split("-").map(Number);
        const date = new Date(y, m - 1, d);

        date.setDate(date.getDate() + amount);

        return [
          date.getFullYear(),
          String(date.getMonth() + 1).padStart(2, "0"),
          String(date.getDate()).padStart(2, "0")
        ].join("-");
      }

      function prettyDate(dateKey) {
        const [y, m, d] = dateKey.split("-").map(Number);

        const date = new Date(y, m - 1, d);

        return date.toLocaleDateString(undefined, {
          weekday: "long",
          month: "long",
          day: "numeric"
        });
      }

      function shortDate(dateKey) {
        const [y, m, d] = dateKey.split("-").map(Number);

        return new Date(y, m - 1, d).toLocaleDateString(undefined, {
          month: "short",
          day: "numeric"
        });
      }

      function getProfile() {
        let profile = data.profiles.find(
          p => p.id === data.activeProfileId
        );

        if (!profile) {
          profile = data.profiles[0];
          data.activeProfileId = profile.id;
        }

        profile.logs ||= {};
        profile.savedFoods ||= [];
        profile.recentFoods ||= [];
        profile.savedMeals ||= [];

        profile.goals ||= {
          calories: 2200,
          protein: 170,
          carbs: 220,
          fat: 70,
          fiber: 30
        };

        return profile;
      }

      function getDay(dateKey = selectedDate) {
        const profile = getProfile();

        if (!profile.logs[dateKey]) {
          profile.logs[dateKey] = {
            breakfast: [],
            lunch: [],
            dinner: [],
            snacks: []
          };
        }

        return profile.logs[dateKey];
      }

      function totalsForDay(dateKey = selectedDate) {
        const day = getDay(dateKey);

        const totals = {
          calories: 0,
          protein: 0,
          carbs: 0,
          fat: 0,
          fiber: 0
        };

        Object.values(day).flat().forEach(food => {
          totals.calories += Number(food.calories) || 0;
          totals.protein += Number(food.protein) || 0;
          totals.carbs += Number(food.carbs) || 0;
          totals.fat += Number(food.fat) || 0;
          totals.fiber += Number(food.fiber) || 0;
        });

        return totals;
      }

      function round(value) {
        return Math.round((Number(value) || 0) * 10) / 10;
      }

      function clampPercent(value, max) {
        if (!max) return 0;

        return Math.min(
          100,
          Math.max(0, (value / max) * 100)
        );
      }

      function showToast(message) {
        const toast = document.getElementById("toast");

        toast.textContent = message;
        toast.classList.add("show");

        clearTimeout(toastTimer);

        toastTimer = setTimeout(() => {
          toast.classList.remove("show");
        }, 2200);
      }

      function openModal(id) {
        document.getElementById(id).classList.add("open");
      }

      function closeModal(id) {
        document.getElementById(id).classList.remove("open");
      }

      function closeAllModals() {
        document
          .querySelectorAll(".modal-backdrop")
          .forEach(modal => modal.classList.remove("open"));
      }

      function renderAll() {
        renderProfile();
        renderDate();
        renderSummary();
        renderMeals();
        renderRecentFoods();
        renderHistory();
        renderProfileChoices();
        renderSavedFoods();
        renderSavedMeals();
      }

      function renderProfile() {
        const profile = getProfile();

        document.getElementById("profileName").textContent =
          profile.name;

        document.getElementById("profileAvatar").textContent =
          profile.name.trim().charAt(0).toUpperCase() || "?";
      }

      function renderDate() {
        const label = document.getElementById("dateLabel");
        const sub = document.getElementById("dateSub");

        if (selectedDate === todayKey()) {
          label.textContent = "Today";
          sub.textContent = prettyDate(selectedDate);
        } else {
          label.textContent = shortDate(selectedDate);
          sub.textContent = prettyDate(selectedDate);
        }

        document.getElementById("nextDay").disabled =
          selectedDate === todayKey();

        document.getElementById("nextDay").style.opacity =
          selectedDate === todayKey() ? ".35" : "1";
      }

      function renderSummary() {
        const profile = getProfile();
        const goals = profile.goals;
        const totals = totalsForDay();

        document.getElementById("caloriesUsed").textContent =
          Math.round(totals.calories);

        document.getElementById("calorieGoal").textContent =
          goals.calories;

        const calRemaining =
          Math.round(goals.calories - totals.calories);

        document.getElementById("caloriesRemaining").textContent =
          calRemaining >= 0
            ? calRemaining
            : `${Math.abs(calRemaining)} over`;

        document.getElementById("calorieProgress").style.width =
          `${clampPercent(totals.calories, goals.calories)}%`;

        document.getElementById("proteinUsed").textContent =
          `${round(totals.protein)}g`;

        document.getElementById("carbsUsed").textContent =
          `${round(totals.carbs)}g`;

        document.getElementById("fatUsed").textContent =
          `${round(totals.fat)}g`;

        document.getElementById("fiberUsed").textContent =
          `${round(totals.fiber)}g`;

        document.getElementById("proteinTarget").textContent =
          `of ${goals.protein}g`;

        document.getElementById("carbsTarget").textContent =
          `of ${goals.carbs}g`;

        document.getElementById("fatTarget").textContent =
          `of ${goals.fat}g`;

        document.getElementById("fiberTarget").textContent =
          `of ${goals.fiber}g`;

        const proteinRemaining = Math.max(
          0,
          round(goals.protein - totals.protein)
        );

        document.getElementById("remainingProtein").textContent =
          `${proteinRemaining}g protein`;
      }

      function renderMeals() {
        const container = document.getElementById("mealsContainer");
        const day = getDay();

        container.innerHTML = "";

        Object.keys(mealNames).forEach(mealKey => {

          const foods = day[mealKey] || [];

          const mealTotals = foods.reduce(
            (sum, food) => {
              sum.calories += Number(food.calories) || 0;
              sum.protein += Number(food.protein) || 0;
              return sum;
            },
            { calories: 0, protein: 0 }
          );

          const card = document.createElement("div");
          card.className = "meal-card";

          if (foods.length) {
            card.classList.add("open");
          }

          const header = document.createElement("button");
          header.type = "button";
          header.className = "meal-header";

          header.innerHTML = `
            <div>
              <div class="meal-title">${mealNames[mealKey]}</div>
              <div class="meal-summary">
                ${Math.round(mealTotals.calories)} cal
                · ${round(mealTotals.protein)}g protein
              </div>
            </div>

            <div class="meal-chevron">⌄</div>
          `;

          header.addEventListener("click", () => {
            card.classList.toggle("open");
          });

          const body = document.createElement("div");
          body.className = "meal-body";

          if (!foods.length) {
            const empty = document.createElement("div");
            empty.className = "empty-meal";
            empty.textContent = "Nothing logged yet.";
            body.appendChild(empty);
          }

          foods.forEach(food => {

            const row = document.createElement("div");
            row.className = "food-row";

            const info = document.createElement("div");

            info.innerHTML = `
              <div class="food-name"></div>
              <div class="food-details"></div>
            `;

            info.querySelector(".food-name").textContent =
              food.name;

            info.querySelector(".food-details").textContent =
              `${food.amount} ${food.unit} ·
               ${Math.round(food.calories)} cal ·
               ${round(food.protein)}g protein`;

            const actions = document.createElement("div");
            actions.className = "food-actions";

            const duplicate = document.createElement("button");
            duplicate.type = "button";
            duplicate.className = "icon-btn";
            duplicate.title = "Duplicate";
            duplicate.textContent = "⧉";

            duplicate.addEventListener("click", () => {
              duplicateFood(mealKey, food.id);
            });

            const edit = document.createElement("button");
            edit.type = "button";
            edit.className = "icon-btn";
            edit.title = "Edit";
            edit.textContent = "✎";

            edit.addEventListener("click", () => {
              editFood(mealKey, food.id);
            });

            const remove = document.createElement("button");
            remove.type = "button";
            remove.className = "icon-btn";
            remove.title = "Delete";
            remove.textContent = "×";

            remove.addEventListener("click", () => {
              removeFood(mealKey, food.id);
            });

            actions.append(duplicate, edit, remove);
            row.append(info, actions);
            body.appendChild(row);
          });

          const actionRow = document.createElement("div");
          actionRow.className = "meal-actions";

          const add = document.createElement("button");
          add.type = "button";
          add.className = "meal-add";
          add.textContent = `+ Add to ${mealNames[mealKey]}`;

          add.addEventListener("click", () => {
            openFoodForm(mealKey);
          });

          const save = document.createElement("button");
          save.type = "button";
          save.className = "meal-copy";
          save.textContent = "Save Meal";

          save.addEventListener("click", () => {
            saveMeal(mealKey);
          });

          actionRow.append(add, save);
          body.appendChild(actionRow);

          card.append(header, body);
          container.appendChild(card);
        });
      }

      function openFoodForm(mealKey = "breakfast", food = null) {

        document.getElementById("foodForm").reset();

        document.getElementById("editingFoodId").value =
          food?.id || "";

        document.getElementById("foodMeal").value =
          mealKey;

        document.getElementById("foodAmount").value =
          food?.amount ?? 1;

        document.getElementById("foodUnit").value =
          food?.unit ?? "serving";

        document.getElementById("foodName").value =
          food?.name ?? "";

        document.getElementById("foodCalories").value =
          food?.calories ?? 0;

        document.getElementById("foodProtein").value =
          food?.protein ?? 0;

        document.getElementById("foodCarbs").value =
          food?.carbs ?? 0;

        document.getElementById("foodFat").value =
          food?.fat ?? 0;

        document.getElementById("foodFiber").value =
          food?.fiber ?? 0;

        document.getElementById("foodModalTitle").textContent =
          food ? "Edit Food" : "Add Food";

        updateNutritionPreview();
        openModal("foodModal");
      }

      function updateNutritionPreview() {
        const calories =
          Number(document.getElementById("foodCalories").value) || 0;

        const protein =
          Number(document.getElementById("foodProtein").value) || 0;

        document.getElementById("nutritionPreview").innerHTML =
          `<strong>${round(calories)} calories</strong>
           · ${round(protein)}g protein`;
      }

      function addRecentFood(food) {
        const profile = getProfile();

        const reusable = {
          name: food.name,
          amount: food.amount,
          unit: food.unit,
          calories: food.calories,
          protein: food.protein,
          carbs: food.carbs,
          fat: food.fat,
          fiber: food.fiber
        };

        profile.recentFoods =
          profile.recentFoods.filter(
            item =>
              item.name.toLowerCase() !==
              reusable.name.toLowerCase()
          );

        profile.recentFoods.unshift(reusable);

        profile.recentFoods =
          profile.recentFoods.slice(0, 12);

        const exists = profile.savedFoods.some(
          item =>
            item.name.toLowerCase() ===
            reusable.name.toLowerCase()
        );

        if (!exists) {
          profile.savedFoods.push({
            ...reusable,
            id: uid("saved")
          });
        }
      }

      function duplicateFood(mealKey, foodId) {
        const day = getDay();

        const food = day[mealKey].find(
          item => item.id === foodId
        );

        if (!food) return;

        day[mealKey].push({
          ...food,
          id: uid("food")
        });

        saveData();
        renderAll();
        showToast(`${food.name} duplicated.`);
      }

      function editFood(mealKey, foodId) {
        const day = getDay();

        const food = day[mealKey].find(
          item => item.id === foodId
        );

        if (!food) return;

        openFoodForm(mealKey, food);
      }

      function removeFood(mealKey, foodId) {
        const day = getDay();

        const index = day[mealKey].findIndex(
          item => item.id === foodId
        );

        if (index === -1) return;

        const [removed] = day[mealKey].splice(index, 1);

        saveData();
        renderAll();

        showToast(`${removed.name} removed.`);
      }

      function renderRecentFoods() {
        const container =
          document.getElementById("recentFoods");

        const foods = getProfile().recentFoods || [];

        container.innerHTML = "";

        if (!foods.length) {
          const row = document.createElement("div");
          row.className = "list-row";

          row.innerHTML = `
            <div class="list-main">
              <div class="list-title">No recent foods yet</div>
              <div class="list-sub">
                Foods you log will show up here.
              </div>
            </div>
          `;

          container.appendChild(row);
          return;
        }

        foods.slice(0, 8).forEach(food => {

          const row = document.createElement("div");
          row.className = "list-row";

          const main = document.createElement("div");
          main.className = "list-main";

          main.innerHTML = `
            <div class="list-title"></div>
            <div class="list-sub"></div>
          `;

          main.querySelector(".list-title").textContent =
            food.name;

          main.querySelector(".list-sub").textContent =
            `${Math.round(food.calories)} cal ·
             ${round(food.protein)}g protein`;

          const plus = document.createElement("button");
          plus.type = "button";
          plus.className = "quick-plus";
          plus.textContent = "+";

          plus.addEventListener("click", () => {
            openFoodForm("snacks", food);
          });

          row.append(main, plus);
          container.appendChild(row);
        });
      }

      function renderHistory() {
        const container =
          document.getElementById("historyList");

        const profile = getProfile();
        const dates = Object.keys(profile.logs || {})
          .sort()
          .reverse()
          .slice(0, 30);

        container.innerHTML = "";

        if (!dates.length) {
          container.innerHTML = `
            <div class="history-day">
              <div class="muted">
                Your logged days will show up here.
              </div>
            </div>
          `;

          return;
        }

        dates.forEach(date => {

          const totals = totalsForDay(date);

          const row = document.createElement("div");
          row.className = "history-day";

          row.innerHTML = `
            <div class="history-top">
              <div class="history-date">${prettyDate(date)}</div>
              <div class="history-cals">
                ${Math.round(totals.calories)}
                / ${profile.goals.calories}
              </div>
            </div>

            <div class="history-macros">
              ${round(totals.protein)}g protein ·
              ${round(totals.carbs)}g carbs ·
              ${round(totals.fat)}g fat ·
              ${round(totals.fiber)}g fiber
            </div>

            <div class="mini-progress">
              <div style="width:
                ${clampPercent(
                  totals.calories,
                  profile.goals.calories
                )}%">
              </div>
            </div>
          `;

          row.addEventListener("click", () => {
            selectedDate = date;
            switchPage("today");
            renderAll();
          });

          container.appendChild(row);
        });
      }

      function renderProfileChoices() {
        const container =
          document.getElementById("profileChoices");

        container.innerHTML = "";

        data.profiles.forEach(profile => {

          const button = document.createElement("button");
          button.type = "button";

          button.className =
            "profile-choice" +
            (
              profile.id === data.activeProfileId
                ? " active"
                : ""
            );

          button.innerHTML = `
            <div>
              <div class="list-title"></div>
              <div class="list-sub">
                ${profile.goals.calories} cal ·
                ${profile.goals.protein}g protein
              </div>
            </div>

            <div class="check">
              ${
                profile.id === data.activeProfileId
                  ? "✓"
                  : ""
              }
            </div>
          `;

          button.querySelector(".list-title").textContent =
            profile.name;

          button.addEventListener("click", () => {
            data.activeProfileId = profile.id;
            selectedDate = todayKey();

            saveData();
            closeAllModals();
            renderAll();

            showToast(`Switched to ${profile.name}.`);
          });

          container.appendChild(button);
        });
      }

      function renderSavedFoods() {
        const container =
          document.getElementById("savedFoodsList");

        const foods = getProfile().savedFoods || [];

        container.innerHTML = "";

        if (!foods.length) {
          container.innerHTML = `
            <div class="list-card">
              <div class="list-row">
                <div class="muted">
                  Foods you log will automatically become reusable.
                </div>
              </div>
            </div>
          `;

          return;
        }

        const list = document.createElement("div");
        list.className = "list-card";

        foods.forEach(food => {

          const row = document.createElement("div");
          row.className = "list-row";

          const main = document.createElement("div");
          main.className = "list-main";

          main.innerHTML = `
            <div class="list-title"></div>
            <div class="list-sub"></div>
          `;

          main.querySelector(".list-title").textContent =
            food.name;

          main.querySelector(".list-sub").textContent =
            `${Math.round(food.calories)} cal ·
             ${round(food.protein)}g protein`;

          const plus = document.createElement("button");
          plus.type = "button";
          plus.className = "quick-plus";
          plus.textContent = "+";

          plus.addEventListener("click", () => {
            closeModal("savedFoodModal");
            openFoodForm("snacks", food);
          });

          row.append(main, plus);
          list.appendChild(row);
        });

        container.appendChild(list);
      }

      function saveMeal(mealKey) {
        const profile = getProfile();
        const day = getDay();
        const foods = day[mealKey];

        if (!foods.length) {
          showToast("Add some food to that meal first.");
          return;
        }

        const name = prompt(
          `Name this saved meal:`,
          `${mealNames[mealKey]} Meal Prep`
        );

        if (!name) return;

        profile.savedMeals.push({
          id: uid("meal"),
          name: name.trim(),
          defaultMeal: mealKey,
          foods: foods.map(food => ({
            ...food,
            id: uid("template")
          }))
        });

        saveData();
        renderSavedMeals();

        showToast(`${name.trim()} saved.`);
      }

      function renderSavedMeals() {
        const container =
          document.getElementById("savedMealsList");

        const meals = getProfile().savedMeals || [];

        container.innerHTML = "";

        if (!meals.length) {
          container.innerHTML = `
            <div class="list-card">
              <div class="list-row">
                <div>
                  <div class="list-title">
                    No saved meals yet
                  </div>
                  <div class="list-sub">
                    Build a meal on Today and tap Save Meal.
                  </div>
                </div>
              </div>
            </div>
          `;

          return;
        }

        const list = document.createElement("div");
        list.className = "list-card";

        meals.forEach(meal => {

          const totals = meal.foods.reduce(
            (sum, food) => {
              sum.calories += Number(food.calories) || 0;
              sum.protein += Number(food.protein) || 0;
              return sum;
            },
            { calories: 0, protein: 0 }
          );

          const row = document.createElement("div");
          row.className = "list-row";

          const main = document.createElement("div");
          main.className = "list-main";

          main.innerHTML = `
            <div class="list-title"></div>
            <div class="list-sub">
              ${Math.round(totals.calories)} cal ·
              ${round(totals.protein)}g protein ·
              ${meal.foods.length} items
            </div>
          `;

          main.querySelector(".list-title").textContent =
            meal.name;

          const plus = document.createElement("button");
          plus.type = "button";
          plus.className = "quick-plus";
          plus.textContent = "+";

          plus.addEventListener("click", () => {
            logSavedMeal(meal);
          });

          row.append(main, plus);
          list.appendChild(row);
        });

        container.appendChild(list);
      }

      function logSavedMeal(meal) {
        const day = getDay();

        meal.foods.forEach(food => {
          day[meal.defaultMeal].push({
            ...food,
            id: uid("food")
          });
        });

        saveData();
        closeAllModals();
        renderAll();
        switchPage("today");

        showToast(`${meal.name} added.`);
      }

      function copyYesterday() {
        const profile = getProfile();
        const yesterday = shiftDate(selectedDate, -1);

        const source = profile.logs[yesterday];

        if (!source) {
          showToast("Nothing was logged the previous day.");
          return;
        }

        const target = getDay();

        Object.keys(mealNames).forEach(mealKey => {
          target[mealKey] = (source[mealKey] || []).map(food => ({
            ...food,
            id: uid("food")
          }));
        });

        saveData();
        renderAll();

        showToast("Previous day copied.");
      }

      function renderGoalsForm() {
        const goals = getProfile().goals;

        document.getElementById("goalCalories").value =
          goals.calories;

        document.getElementById("goalProtein").value =
          goals.protein;

        document.getElementById("goalCarbs").value =
          goals.carbs;

        document.getElementById("goalFat").value =
          goals.fat;

        document.getElementById("goalFiber").value =
          goals.fiber;
      }

      function switchPage(pageName) {

        document.querySelectorAll(".page").forEach(page => {
          page.classList.remove("active");
        });

        document.querySelectorAll(".nav-btn").forEach(button => {
          button.classList.remove("active");
        });

        document
          .getElementById(`page-${pageName}`)
          .classList.add("active");

        document
          .querySelector(`[data-page="${pageName}"]`)
          .classList.add("active");

        window.scrollTo({
          top: 0,
          behavior: "smooth"
        });

        if (pageName === "history") {
          renderHistory();
        }

        if (pageName === "add") {
          renderRecentFoods();
        }
      }

      /* NAV */

      document
        .querySelectorAll(".nav-btn")
        .forEach(button => {

          button.addEventListener("click", () => {
            switchPage(button.dataset.page);
          });

        });

      /* DATE */

      document
        .getElementById("prevDay")
        .addEventListener("click", () => {

          selectedDate = shiftDate(selectedDate, -1);
          renderAll();

        });

      document
        .getElementById("nextDay")
        .addEventListener("click", () => {

          if (selectedDate === todayKey()) return;

          selectedDate = shiftDate(selectedDate, 1);

          if (selectedDate > todayKey()) {
            selectedDate = todayKey();
          }

          renderAll();

        });

      /* PROFILE */

      document
        .getElementById("profileButton")
        .addEventListener("click", () => {

          renderProfileChoices();
          openModal("profileModal");

        });

      document
        .getElementById("manageProfilesButton")
        .addEventListener("click", () => {

          renderProfileChoices();
          openModal("profileModal");

        });

      document
        .getElementById("addProfileButton")
        .addEventListener("click", () => {

          closeModal("profileModal");
          openModal("newProfileModal");

        });

      document
        .getElementById("profileForm")
        .addEventListener("submit", event => {

          event.preventDefault();

          const name =
            document
              .getElementById("newProfileName")
              .value
              .trim();

          if (!name) return;

          const profile = {
            id: uid("profile"),
            name,

            goals: {
              calories:
                Number(
                  document.getElementById(
                    "newProfileCalories"
                  ).value
                ) || 2200,

              protein:
                Number(
                  document.getElementById(
                    "newProfileProtein"
                  ).value
                ) || 170,

              carbs: 220,
              fat: 70,
              fiber: 30
            },

            logs: {},
            savedFoods: [],
            recentFoods: [],
            savedMeals: []
          };

          data.profiles.push(profile);
          data.activeProfileId = profile.id;

          saveData();

          document.getElementById("profileForm").reset();

          closeAllModals();
          renderAll();

          showToast(`${name} profile created.`);

        });

      /* FOOD */

      document
        .getElementById("quickAddTop")
        .addEventListener("click", () => {
          openFoodForm("snacks");
        });

      document
        .querySelectorAll('[data-add="manual"]')
        .forEach(button => {

          button.addEventListener("click", () => {
            openFoodForm("snacks");
          });

        });

      document
        .querySelectorAll('[data-add="saved"]')
        .forEach(button => {

          button.addEventListener("click", () => {
            renderSavedFoods();
            openModal("savedFoodModal");
          });

        });

      document
        .querySelectorAll('[data-add="meal"]')
        .forEach(button => {

          button.addEventListener("click", () => {
            renderSavedMeals();
            openModal("savedMealsModal");
          });

        });

      document
        .querySelectorAll('[data-add="barcode"]')
        .forEach(button => {

          button.addEventListener("click", () => {
            showToast(
              "Barcode scanning is wired into the UI. We'll connect the camera/database next."
            );
          });

        });

      [
        "foodCalories",
        "foodProtein"
      ].forEach(id => {

        document
          .getElementById(id)
          .addEventListener(
            "input",
            updateNutritionPreview
          );

      });

      document
        .getElementById("foodForm")
        .addEventListener("submit", event => {

          event.preventDefault();

          const day = getDay();

          const meal =
            document.getElementById("foodMeal").value;

          const editingId =
            document.getElementById("editingFoodId").value;

          const food = {
            id: editingId || uid("food"),

            name:
              document
                .getElementById("foodName")
                .value
                .trim(),

            amount:
              Number(
                document.getElementById("foodAmount").value
              ) || 1,

            unit:
              document.getElementById("foodUnit").value,

            calories:
              Number(
                document.getElementById("foodCalories").value
              ) || 0,

            protein:
              Number(
                document.getElementById("foodProtein").value
              ) || 0,

            carbs:
              Number(
                document.getElementById("foodCarbs").value
              ) || 0,

            fat:
              Number(
                document.getElementById("foodFat").value
              ) || 0,

            fiber:
              Number(
                document.getElementById("foodFiber").value
              ) || 0
          };

          if (!food.name) return;

          if (editingId) {

            Object.keys(mealNames).forEach(key => {
              day[key] =
                day[key].filter(
                  item => item.id !== editingId
                );
            });

          }

          day[meal].push(food);

          addRecentFood(food);

          saveData();
          closeModal("foodModal");
          renderAll();
          switchPage("today");

          showToast(
            editingId
              ? `${food.name} updated.`
              : `${food.name} added.`
          );

        });

      /* COPY */

      document
        .getElementById("copyYesterday")
        .addEventListener("click", copyYesterday);

      /* GOALS */

      document
        .getElementById("goalsButton")
        .addEventListener("click", () => {

          renderGoalsForm();
          openModal("goalsModal");

        });

      document
        .getElementById("goalsForm")
        .addEventListener("submit", event => {

          event.preventDefault();

          const profile = getProfile();

          profile.goals = {
            calories:
              Number(
                document.getElementById("goalCalories").value
              ) || 2200,

            protein:
              Number(
                document.getElementById("goalProtein").value
              ) || 0,

            carbs:
              Number(
                document.getElementById("goalCarbs").value
              ) || 0,

            fat:
              Number(
                document.getElementById("goalFat").value
              ) || 0,

            fiber:
              Number(
                document.getElementById("goalFiber").value
              ) || 0
          };

          saveData();
          closeModal("goalsModal");
          renderAll();

          showToast("Goals updated.");

        });

      /* SAVED */

      document
        .getElementById("savedFoodsButton")
        .addEventListener("click", () => {

          renderSavedFoods();
          openModal("savedFoodModal");

        });

      document
        .getElementById("savedMealsButton")
        .addEventListener("click", () => {

          renderSavedMeals();
          openModal("savedMealsModal");

        });

      document
        .getElementById("saveCurrentMealButton")
        .addEventListener("click", () => {

          closeModal("savedMealsModal");
          switchPage("today");

          showToast(
            "Open a meal and tap Save Meal."
          );

        });

      /* EXPORT */

      document
        .getElementById("exportButton")
        .addEventListener("click", () => {

          const blob = new Blob(
            [JSON.stringify(data, null, 2)],
            { type: "application/json" }
          );

          const url = URL.createObjectURL(blob);

          const link = document.createElement("a");
          link.href = url;
          link.download =
            `next-bite-backup-${todayKey()}.json`;

          document.body.appendChild(link);
          link.click();
          link.remove();

          URL.revokeObjectURL(url);

          showToast("Backup created.");

        });

      /* MODAL CLOSE */

      document
        .querySelectorAll("[data-close]")
        .forEach(button => {

          button.addEventListener("click", () => {
            closeModal(button.dataset.close);
          });

        });

      document
        .querySelectorAll(".modal-backdrop")
        .forEach(backdrop => {

          backdrop.addEventListener("click", event => {

            if (event.target === backdrop) {
              backdrop.classList.remove("open");
            }

          });

        });

      /* FIRST RENDER */

      saveData();
      renderAll();

    })();
  </script>

</body>
</html>
What this first build already gives us
This isn't just a pretty shell. Once you paste it in and GitHub Pages updates, you should actually be able to add food, edit it, delete it, duplicate it, save meals, reuse meals, switch dates, copy yesterday, change calorie/macro goals, create another profile, switch between profiles, view history, and close/reopen the app without losing the locally stored data.

Your apple-touch-icon-bite.png is already referenced in the code.

There are also deliberate placeholders for barcode scanning and the real nutrition database. Those require the next layer because we'll need to connect the app to outside nutrition data rather than fake it.

One important thing: don't create manifest.json or sw.js yourself yet. Get this index.html committed first and get your green check.

Then send me what you see. We'll do those other two files one at a time, and I'll tell you exactly where to click in GitHub like we did with Next // Rep. After that, we can put it on the iPhone and start actually beating the hell out of this first version to see what needs changing. 😂


Today 5:46 AM
Ok index is done 

Perfect. Next up is manifest.json. This is the piece that tells the iPhone/browser how NEXT // BITE should behave when it's installed to the Home Screen.

1. Create manifest.json
In the same repository where index.html and apple-touch-icon-bite.png live:

Add file → Create new file

Name it exactly:

manifest.json
Paste this in:

{
  "name": "NEXT // BITE",
  "short_name": "Next Bite",
  "description": "Eat with purpose. Track calories, protein, macros, meals and nutrition goals.",
  "start_url": "./",
  "scope": "./",
  "display": "standalone",
  "orientation": "portrait",
  "background_color": "#080a09",
  "theme_color": "#080a09",
  "icons": [
    {
      "src": "apple-touch-icon-bite.png",
      "sizes": "any",
      "type": "image/png",
      "purpose": "any"
    }
  ]
}
Then hit Commit changes.

This matches the black/charcoal NEXT // BITE theme and tells the browser to launch it standalone, so when it's saved to the Home Screen we don't have Safari's normal browser interface eating up space.

Once you get the green check, tell me. Then we'll create sw.js, which is the last little infrastructure file before we get GitHub Pages running and actually open this sucker on your iPhone. 😎


Whoops added the Jason first before getting my green check adding it an getting my green check now

😂 You're fine. GitHub doesn't care which order we add them in.

Go ahead and let manifest.json finish and make sure you get the green check. Your repo should then have:

index.html ✅

apple-touch-icon-bite.png ✅

manifest.json ✅

Once that check turns green, tell me “green” and we'll add sw.js next. That's a much smaller chunk of code than the index monster. 😂


Ok ready for the sw.js I got a green check 

Yep! Create one more new file in the same place as index.html.

Name it exactly:

sw.js
Paste this entire thing in:

const CACHE_NAME = "next-bite-v1";

const APP_FILES = [
  "./",
  "./index.html",
  "./manifest.json",
  "./apple-touch-icon-bite.png"
];

// Install and cache the core app files
self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(APP_FILES);
    })
  );

  self.skipWaiting();
});

// Remove old caches when we update versions later
self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames
          .filter(name => name !== CACHE_NAME)
          .map(name => caches.delete(name))
      );
    })
  );

  self.clients.claim();
});

// Use the network when available.
// Fall back to the cached app when offline.
self.addEventListener("fetch", event => {
  if (event.request.method !== "GET") return;

  event.respondWith(
    fetch(event.request)
      .then(response => {
        const copy = response.clone();

        caches.open(CACHE_NAME).then(cache => {
          cache.put(event.request, copy);
        });

        return response;
      })
      .catch(() => {
        return caches.match(event.request).then(cached => {
          return cached || caches.match("./index.html");
        });
      })
  );
});
Then Commit changes and wait for your green check.

One tiny thing after that
I caught something before we go any farther: your index.html references sw.js, basically by us creating it, but it doesn't actually register the service worker yet. That's my miss in that giant index. 😂

So after sw.js gets its green check, we're going to make one very small addition to the bottom of index.html to turn it on.

Then our basic app files will all be in place:

index.html + manifest.json + sw.js + apple-touch-icon-bite.png

Get me that green check and we'll make that tiny index edit next.


Green check is good 

Nice. 🟢 Now we need one tiny edit to index.html so the service worker actually turns on.

Open index.html → tap the pencil/edit button. Scroll all the way to the bottom.

Right now, near the very end, you should see something like:

      saveData();
      renderAll();

    })();
  </script>

</body>
</html>
Replace just that ending section with this:

      saveData();
      renderAll();

    })();

    // Register NEXT // BITE service worker
    if ("serviceWorker" in navigator) {
      window.addEventListener("load", () => {
        navigator.serviceWorker
          .register("./sw.js")
          .catch(error => {
            console.log("Service worker registration failed:", error);
          });
      });
    }
  </script>

</body>
</html>
Then Commit changes and wait for the green check again.

After that, don't add anything else yet. Our four pieces will officially be connected, and we'll move to turning on/checking GitHub Pages so you can actually open NEXT // BITE on your phone and see what we built. 😎


OK got all that done now what

Now we get this sucker live. 😂

In your NEXT // BITE GitHub repository:

Tap Settings at the top of the repository.

Find Pages in the Settings menu. On iPhone you may need to scroll quite a bit.

Under Build and deployment, find Source and choose Deploy from a branch.

Under Branch, select main.

Leave the folder set to / (root).

Tap Save.

GitHub will start deploying it. It can take a minute or two. Once it's ready, the Pages section should show something like “Your site is live at…” with a link.

Don't add it to your Home Screen yet. Open that live link in Safari first and tell me what you see — or send me a screenshot. I want to check the actual mobile layout before we install it like an app.


Remember, I already did that so what’s next?

Yep — you're right. GitHub Pages is already set up from when you created the repo, so we don't need to touch that again.

We're at the fun part now: open the live NEXT // BITE site and see what this first build actually looks like.

Since Pages is already running, your new index.html, manifest.json, sw.js, and icon should deploy automatically after those green checks.

Open your existing GitHub Pages URL in Safari and refresh it. If it still shows an older/blank version, give it a minute and refresh once more.

Then send me a screenshot of the Today screen.

I want to look at it before we add it to the Home Screen because this is where we'll catch things like spacing, sizing, colors, profile dropdown placement, whether the macro card is too busy, whether we're scrolling too much, etc.

Once the visual shell looks right, we'll start making the bigger pieces actually smart — food search/database, portion scaling (4 oz → 6 oz automatically), meat variations like 93/7, barcode scanning, restaurant foods, recipes/meal prep, and the goal calculator.


All right sounds good. Give me a link. I’ll open it up.

I have your GitHub username as AARonDen2Ten, but I don't have the exact NEXT // BITE repository name yet, so I don't want to make up the Pages URL.

Send me the repo name you just used — just the name, like NextBite — and I'll give you the clickable live link immediately.


Remind me, where do I find that again if I’m thinking right it’s just Next-Bite

Yep, if the repository is Next-Bite, that's the piece we need.

To double-check in GitHub: open the repository and look at the top of the page. It should show something like:

AARonDen2Ten / Next-Bite

If that's what it says, your GitHub Pages address should be:

Open NEXT // BITE

Tap that in Safari and let's see what we've got. 😎


Says this about scanning a barcode

Yep — that's expected right now. 👍

That message is coming from the placeholder I intentionally put on the Scan Barcode button:

“Barcode scanning is wired into the UI. We'll connect the camera/database next.”

So nothing is broken. When you tapped Scan Barcode, it proved the button itself is working; we just haven't built the actual camera/database connection yet.

Also, looking at your screenshot, the app itself rendered really well on the iPhone. Safe-area spacing is good, the green looks MUCH better than the blue we were fighting with on NEXT // REP, and the bottom navigation fits nicely. 😂

What I want to do next
Before we mess with styling, I'd go straight into making Add Food actually useful. Specifically:

Food search/database — search “93/7 ground turkey,” “Fage 0% Greek yogurt,” “Premier Protein,” etc., and get real nutrition data.

Serving scaling — choose 4 oz, 6 oz, 170g, 1.5 servings, etc., and have all nutrition automatically recalculate.

Barcode scanner — tap Scan Barcode → camera opens → scan UPC → product nutrition comes in → adjust serving → Add.

Then we tackle restaurant foods and the more advanced meal-prep stuff.

And yes, barcode scanning can actually use the iPhone camera from this web app. That button doesn't have to stay pretend.

I would do food database + serving math first, because the barcode scanner needs somewhere to get the nutrition information after it reads the UPC anyway.

So we're officially past the “does NEXT // BITE exist?” stage. It exists. Now we make it smart. 😎


Yeah, cause right now you have to type in what you’re doing but if there was some kind of a database or just a big understanding of a lot of different foods like a small library that either was like a quick drop down, which would be the easiest way in my opinion or if you could type in a couple key letters and it would pop up, but I think the drop-down an alphabetical although I know that would be a pretty good size category or library but that would be the easiest way to scroll through and just pick your food 

Yep — and looking at this screen, I think typing the nutrition numbers yourself should become the fallback, not the normal way you log food.

I wouldn't actually make you scroll through one gigantic A–Z dropdown, though. Once we have hundreds or thousands of foods, scrolling from A to “Turkey” would get old fast. 😂 We can make it feel like the dropdown you're describing while also making it searchable.

What I think the Food box should do
You tap Food, and instead of it being a plain text field, a food picker opens. At the top is a search box, with an alphabetical, scrollable library underneath.

So you could either:

Scroll alphabetically and tap Ground Turkey → 93/7 → Cooked

Type tur and immediately see 93/7 Ground Turkey, 85/15 Ground Turkey, Turkey Breast, Turkey Sausage, etc.

Type fag and see your Fage yogurt.

Type prem and get Premier Protein.

Tap Recent or Favorites and barely search at all for the stuff you eat constantly.

Once you choose something, we fill in the nutrition automatically. Then this screen really only needs you to tell it the amount:

93/7 Ground Turkey
4 → oz
170 calories · 22g protein · 0g carbs · 8g fat (example—not the database value I'm proposing we hard-code)

Change 4 oz to 6 oz and everything recalculates. You shouldn't be sitting here Googling calories and typing five nutrition fields into your own damn food tracker. 😂

Where the library should come from
Rather than manually stuffing 500 foods into index.html, I'd connect NEXT // BITE to a real nutrition database, then let the app build your personal library as you use it.

That gives us the best combination: a huge searchable catalog when you need something new, but after a couple weeks the first results are mostly your foods. Barcode products can feed into that same saved-food system too.

I'd also keep a Manual / Custom Food option at the bottom for weird recipes, local products, or anything the database doesn't have.

And this is actually the piece I'd build next, before barcode scanning. Once food search + selection + automatic portion scaling work, the barcode scanner can feed products into the exact same system rather than us building two separate logging systems.

So yes: let's turn that Food field into a searchable dropdown/library next. That will make this screen feel like an actual food tracker instead of a nutrition spreadsheet.


Yeah, and then being able to once you select it just have it popped up with all the nutritional facts that way I’m not having them all that the app doesn’t work for me

Exactly. That is the goal. Once you select a food, NEXT // BITE should do the nutrition work for you.

For example, you search/select 93/7 ground turkey. The app should immediately load its nutrition information and then you only deal with the stuff that actually changes:

Amount: 4
Unit: oz
Meal: Lunch

Under that, it automatically shows calories, protein, carbs, fat, fiber, and we can have a little “More Nutrition” dropdown for things like sodium, sugar, saturated fat, cholesterol, potassium, etc. Change 4 oz to 5.3 oz? Every number recalculates automatically.

And I agree with the bigger point: we should not build a food tracker where half the foods are missing. A little hard-coded library inside the app would eventually drive you nuts. 😂

So I want a hybrid library:

A large external nutrition database for foods you haven't used before.

Search-as-you-type and an A–Z browse option.

Your Recent/Favorites/Saved foods shown first.

Branded/package foods available through search and barcode.

Generic foods with useful variations such as ground turkey 93/7 vs 85/15, raw vs cooked, different cuts of meat, etc.

Once you've selected something before, NEXT // BITE remembers it so you aren't repeatedly waiting on a database.

Custom Food stays available for the oddball thing we can't find.

There's one more thing I want to change from what you're looking at now: those five nutrition boxes shouldn't normally be editable after you've selected a database food. They should become a clean Nutrition Facts/summary panel. We'd only show the editable boxes when you choose Create Custom Food.

So the normal flow becomes:

Food → pick/search → amount → unit → meal → nutrition automatically appears → Add to Day.

That's dramatically faster.

Next step is the actual database connection. Before I hand you another giant chunk of code, I want to choose the right food-data source because that decision determines how good search, branded foods, UPCs, serving sizes, and restaurant coverage will be. I'll compare the realistic options and then we'll wire the best one into the code rather than building ourselves into a corner.


Sounds good let’s run it. What are we gonna do to change it?

Yep. I checked the current API options, and I know how I'd change it.

For NEXT // BITE, I'd use a hybrid food library rather than trying to maintain our own giant list. Open Food Facts gives us branded/package products, nutrition data, serving information, and barcode lookup; its current API supports retrieving products directly by barcode. 
 For ordinary foods like meats, produce, rice, potatoes, etc., we'll also want a more structured nutrition source rather than relying only on packaged-product data.

What we're changing in the app
The screen you just showed me is going to behave differently.

1. “Food” becomes a food picker.
Tap it and a sheet opens with a search field at the top. Start typing tur and results narrow immediately. We'll also have Recent, Favorites, and A–Z so you can browse instead of type.

2. Selecting a food fills everything automatically.
Choose something like Ground Turkey, 93/7, cooked, and the app gets the nutrition record. You won't see five blank boxes asking you to supply calories and macros.

Instead you'll get something closer to:

Ground Turkey • 93/7 • Cooked
Amount: 4 | Unit: oz
Meal: Lunch

Nutrition
170 Calories · 22g Protein
0g Carbs · 8g Fat · 0g Fiber
More Nutrition ⌄

Those numbers above are just illustrating the interface, not values I'm going to hard-code.

3. Portions recalculate.
Change 4 oz → 5 oz, or ounces → grams, and NEXT // BITE recalculates the nutrition instead of making you re-enter it.

4. Manual entry moves out of the way.
We'll keep Create Custom Food, because there will inevitably be some random food the databases don't know. But it becomes the backup plan rather than the main logging screen.

5. Every food you use makes your app faster.
Once you use a particular ground turkey, yogurt, protein shake, etc., we'll save it locally. Next time your own foods appear before the giant external catalog.

6. Then barcode plugs into this exact system.
Open Food Facts can look products up from their barcode and return product/nutrient information. 
 So Scan Barcode won't be a separate weird feature. Scan → product found → same portion/nutrition screen → Add to Day.

One important reason I'm doing it this way: Open Food Facts itself notes that its database can sometimes be missing product information. 
 So we won't make NEXT // BITE dependent on one source being perfect.

First coding change
We're going to change index.html again, but this time I don't want you hunting around that monster and replacing 14 different little sections. 😂

I'll give you a complete replacement index.html for the next version so you can Select All → Delete → Paste → Commit. Your existing profiles/data structure will stay compatible.

That next version will introduce the searchable food picker + automatic nutrition panel + serving calculation architecture. Then we'll hook the live database into it and test it with foods you actually eat before moving to barcode scanning.

That's the next code change I'd make.


All right, give me the code. I’m ready to change it.

Yep. Since we're replacing the whole index.html, I want to make sure I give you a complete working replacement rather than a patch that accidentally kills something we already built.

One important thing before the code: this version does not require an API key. I'm setting the food-search architecture up so we can use the Open Food Facts database for packaged/branded foods while keeping our own built-in common-food library and your saved foods. That means you won't have to paste a private key into public GitHub code.

Replace everything in index.html with the code below:

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />

  <title>NEXT // BITE</title>

  <meta name="theme-color" content="#080a09" />
  <meta name="apple-mobile-web-app-capable" content="yes" />
  <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
  <meta name="apple-mobile-web-app-title" content="NEXT // BITE" />

  <link rel="apple-touch-icon" href="apple-touch-icon-bite.png" />
  <link rel="manifest" href="manifest.json" />

  <style>
    :root {
      --bg: #080a09;
      --panel: #101411;
      --panel2: #151a16;
      --panel3: #1a211b;
      --border: #303831;
      --text: #f5f7f5;
      --muted: #959d97;
      --green: #63ff27;
      --green-dark: #193914;
      --green-soft: rgba(99, 255, 39, 0.1);
      --danger: #ff6b6b;
      --radius: 22px;
    }

    * {
      box-sizing: border-box;
      -webkit-tap-highlight-color: transparent;
    }

    html {
      background: var(--bg);
    }

    body {
      margin: 0;
      background: var(--bg);
      color: var(--text);
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
      min-height: 100vh;
    }

    button,
    input,
    select {
      font: inherit;
    }

    button {
      cursor: pointer;
    }

    .app {
      width: 100%;
      max-width: 720px;
      margin: 0 auto;
      padding:
        calc(env(safe-area-inset-top) + 22px)
        18px
        calc(env(safe-area-inset-bottom) + 125px);
    }

    .header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 16px;
      margin-bottom: 30px;
    }

    .brand {
      min-width: 0;
    }

    .logo {
      font-size: clamp(26px, 7vw, 36px);
      font-weight: 950;
      letter-spacing: -1.5px;
      white-space: nowrap;
    }

    .slashes {
      color: var(--green);
    }

    .tagline {
      color: var(--muted);
      font-size: 12px;
      font-weight: 900;
      letter-spacing: 4px;
      margin-top: 8px;
    }

    .profile-select {
      max-width: 190px;
      background: var(--panel);
      color: var(--text);
      border: 1px solid var(--border);
      border-radius: 18px;
      padding: 14px 12px;
      font-weight: 800;
    }

    h1 {
      font-size: 34px;
      margin: 0 0 6px;
      letter-spacing: -1px;
    }

    h2 {
      font-size: 24px;
      margin: 0 0 16px;
    }

    h3 {
      margin: 0;
    }

    .subtitle {
      color: var(--muted);
      margin: 0 0 24px;
      font-size: 17px;
    }

    .hidden {
      display: none !important;
    }

    .card {
      background: var(--panel);
      border: 1px solid var(--border);
      border-radius: var(--radius);
      padding: 18px;
      margin-bottom: 14px;
    }

    .grid2 {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 12px;
    }

    .action-card {
      min-height: 130px;
      text-align: left;
      background: var(--panel);
      border: 1px solid var(--border);
      border-radius: var(--radius);
      color: var(--text);
      padding: 18px;
    }

    .action-icon {
      display: block;
      color: var(--green);
      font-size: 31px;
      line-height: 1;
      margin-bottom: 22px;
    }

    .action-title {
      display: block;
      font-size: 18px;
      font-weight: 900;
      margin-bottom: 5px;
    }

    .action-copy {
      color: var(--muted);
      font-size: 14px;
      line-height: 1.35;
    }

    .date-row {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 10px;
      margin-bottom: 18px;
    }

    .date-button,
    .icon-button {
      border: 1px solid var(--border);
      background: var(--panel);
      color: var(--text);
      min-width: 46px;
      min-height: 46px;
      border-radius: 50%;
      font-size: 20px;
    }

    .date-label {
      text-align: center;
      font-weight: 900;
    }

    .macro-hero {
      background: var(--panel);
      border: 1px solid var(--border);
      border-radius: 26px;
      padding: 20px;
      margin-bottom: 14px;
    }

    .hero-calories {
      font-size: 42px;
      font-weight: 950;
      letter-spacing: -2px;
    }

    .hero-calories span {
      color: var(--muted);
      font-size: 16px;
      font-weight: 700;
      letter-spacing: 0;
    }

    .progress {
      height: 9px;
      background: #252b26;
      border-radius: 99px;
      overflow: hidden;
      margin: 14px 0 10px;
    }

    .progress > div {
      height: 100%;
      width: 0%;
      background: var(--green);
      border-radius: inherit;
      transition: width 0.2s ease;
    }

    .remaining {
      color: var(--muted);
      font-size: 14px;
    }

    .macro-grid {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 8px;
      margin-top: 18px;
    }

    .macro {
      background: var(--panel2);
      border-radius: 15px;
      padding: 12px 8px;
      text-align: center;
    }

    .macro strong {
      display: block;
      font-size: 17px;
    }

    .macro span {
      display: block;
      color: var(--muted);
      font-size: 11px;
      margin-top: 4px;
    }

    .meal-card {
      background: var(--panel);
      border: 1px solid var(--border);
      border-radius: var(--radius);
      margin-bottom: 12px;
      overflow: hidden;
    }

    .meal-head {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 17px;
    }

    .meal-title {
      font-weight: 900;
      font-size: 18px;
    }

    .meal-total {
      color: var(--muted);
      font-size: 14px;
    }

    .food-row {
      padding: 14px 17px;
      border-top: 1px solid var(--border);
    }

    .food-row-top {
      display: flex;
      justify-content: space-between;
      gap: 12px;
    }

    .food-name {
      font-weight: 800;
    }

    .food-meta {
      color: var(--muted);
      font-size: 13px;
      margin-top: 4px;
    }

    .food-actions {
      display: flex;
      gap: 8px;
      margin-top: 10px;
    }

    .tiny-btn {
      background: var(--panel2);
      border: 1px solid var(--border);
      color: var(--muted);
      border-radius: 10px;
      padding: 7px 10px;
      font-size: 12px;
      font-weight: 800;
    }

    .primary {
      width: 100%;
      min-height: 54px;
      border: 0;
      border-radius: 18px;
      background: var(--green);
      color: #071005;
      font-weight: 950;
      font-size: 17px;
    }

    .secondary {
      width: 100%;
      min-height: 50px;
      border-radius: 16px;
      border: 1px solid var(--border);
      background: var(--panel2);
      color: var(--text);
      font-weight: 850;
    }

    .danger {
      color: var(--danger);
    }

    .bottom-nav {
      position: fixed;
      left: 50%;
      transform: translateX(-50%);
      bottom: calc(env(safe-area-inset-bottom) + 10px);
      width: min(calc(100% - 24px), 696px);
      background: rgba(14, 18, 15, 0.97);
      border: 1px solid var(--border);
      border-radius: 26px;
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      padding: 8px;
      z-index: 30;
      backdrop-filter: blur(18px);
    }

    .nav-btn {
      min-height: 62px;
      border: 0;
      background: transparent;
      color: var(--muted);
      border-radius: 18px;
      font-weight: 850;
    }

    .nav-btn span {
      display: block;
      font-size: 23px;
      line-height: 1;
      margin-bottom: 6px;
    }

    .nav-btn.active {
      color: var(--green);
      background: var(--green-dark);
    }

    .modal {
      position: fixed;
      inset: 0;
      z-index: 100;
      background: rgba(0, 0, 0, 0.76);
      display: flex;
      align-items: flex-end;
      justify-content: center;
      padding-top: env(safe-area-inset-top);
    }

    .sheet {
      width: min(100%, 720px);
      max-height: 92vh;
      overflow-y: auto;
      background: var(--panel);
      border: 1px solid var(--border);
      border-radius: 28px 28px 0 0;
      padding: 20px 18px calc(env(safe-area-inset-bottom) + 24px);
    }

    .sheet-head {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 14px;
      margin-bottom: 20px;
    }

    .sheet-head h2 {
      margin: 0;
    }

    label {
      display: block;
      color: var(--muted);
      font-size: 13px;
      font-weight: 850;
      margin-bottom: 7px;
    }

    input,
    select {
      width: 100%;
      min-height: 52px;
      border-radius: 15px;
      border: 1px solid var(--border);
      background: var(--panel2);
      color: var(--text);
      padding: 0 14px;
      font-size: 16px;
      outline: none;
    }

    input:focus,
    select:focus {
      border-color: var(--green);
    }

    .field {
      margin-bottom: 15px;
    }

    .food-picker-search {
      position: sticky;
      top: -20px;
      background: var(--panel);
      padding: 6px 0 12px;
      z-index: 3;
    }

    .search-wrap {
      position: relative;
    }

    .search-wrap input {
      padding-left: 44px;
    }

    .search-icon {
      position: absolute;
      left: 15px;
      top: 15px;
      color: var(--muted);
    }

    .tabs {
      display: flex;
      gap: 8px;
      overflow-x: auto;
      padding: 2px 0 14px;
      scrollbar-width: none;
    }

    .tabs::-webkit-scrollbar {
      display: none;
    }

    .tab {
      white-space: nowrap;
      border: 1px solid var(--border);
      background: var(--panel2);
      color: var(--muted);
      border-radius: 99px;
      padding: 9px 14px;
      font-weight: 850;
    }

    .tab.active {
      background: var(--green-dark);
      border-color: #387c23;
      color: var(--green);
    }

    .library-section-title {
      color: var(--muted);
      font-size: 12px;
      font-weight: 900;
      letter-spacing: 1.5px;
      margin: 12px 2px 8px;
    }

    .food-option {
      width: 100%;
      text-align: left;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 14px;
      background: transparent;
      border: 0;
      border-bottom: 1px solid var(--border);
      color: var(--text);
      padding: 15px 4px;
    }

    .food-option:last-child {
      border-bottom: 0;
    }

    .food-option-name {
      font-weight: 850;
      font-size: 16px;
    }

    .food-option-detail {
      color: var(--muted);
      font-size: 12px;
      margin-top: 4px;
    }

    .food-option-cal {
      flex: 0 0 auto;
      text-align: right;
      font-weight: 900;
    }

    .food-option-cal small {
      display: block;
      color: var(--muted);
      font-size: 11px;
      font-weight: 700;
      margin-top: 3px;
    }

    .selected-food {
      background: var(--panel2);
      border: 1px solid var(--border);
      border-radius: 18px;
      padding: 16px;
      margin-bottom: 16px;
    }

    .selected-food h3 {
      font-size: 19px;
      margin-bottom: 4px;
    }

    .selected-source {
      color: var(--muted);
      font-size: 12px;
    }

    .nutrition-card {
      border: 1px solid #397c25;
      background: var(--green-soft);
      border-radius: 20px;
      padding: 16px;
      margin: 18px 0;
    }

    .nutrition-heading {
      font-size: 12px;
      font-weight: 950;
      color: var(--green);
      letter-spacing: 1.5px;
      margin-bottom: 12px;
    }

    .nutrition-calories {
      font-size: 29px;
      font-weight: 950;
      letter-spacing: -1px;
    }

    .nutrition-calories small {
      color: var(--muted);
      font-size: 14px;
      font-weight: 700;
    }

    .nutrition-grid {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 7px;
      margin-top: 14px;
    }

    .nutrition-stat {
      background: rgba(0, 0, 0, 0.18);
      border-radius: 12px;
      padding: 10px 6px;
      text-align: center;
    }

    .nutrition-stat strong {
      display: block;
      font-size: 15px;
    }

    .nutrition-stat span {
      color: var(--muted);
      font-size: 10px;
    }

    .more-nutrition {
      margin-top: 13px;
      padding-top: 13px;
      border-top: 1px solid rgba(255,255,255,0.08);
      color: var(--muted);
      font-size: 13px;
      line-height: 1.6;
    }

    .source-badge {
      display: inline-block;
      color: var(--green);
      background: var(--green-dark);
      border-radius: 999px;
      padding: 5px 8px;
      font-size: 10px;
      font-weight: 900;
      margin-top: 8px;
    }

    .loading {
      color: var(--muted);
      padding: 22px 4px;
      text-align: center;
    }

    .empty {
      color: var(--muted);
      padding: 20px 4px;
      text-align: center;
    }

    .toast {
      position: fixed;
      left: 50%;
      transform: translateX(-50%);
      bottom: calc(env(safe-area-inset-bottom) + 105px);
      width: min(calc(100% - 36px), 650px);
      background: #202721;
      border: 1px solid #3a443b;
      border-radius: 16px;
      padding: 14px 16px;
      font-weight: 800;
      z-index: 200;
    }

    .history-day {
      margin-bottom: 10px;
    }

    .history-date {
      font-weight: 900;
    }

    .history-macros {
      color: var(--muted);
      margin-top: 5px;
      font-size: 14px;
    }

    .settings-row {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 14px;
    }

    .settings-row + .settings-row {
      border-top: 1px solid var(--border);
      margin-top: 14px;
      padding-top: 14px;
    }

    @media (max-width: 440px) {
      .app {
        padding-left: 14px;
        padding-right: 14px;
      }

      .header {
        align-items: flex-start;
      }

      .profile-select {
        max-width: 145px;
      }

      .grid2 {
        gap: 9px;
      }

      .action-card {
        padding: 15px;
      }

      .macro-grid,
      .nutrition-grid {
        grid-template-columns: repeat(2, 1fr);
      }
    }
  </style>
</head>

<body>

  <main class="app">

    <header class="header">
      <div class="brand">
        <div class="logo">NEXT <span class="slashes">//</span> BITE</div>
        <div class="tagline">EAT WITH PURPOSE.</div>
      </div>

      <select id="profileSelect" class="profile-select" aria-label="Profile"></select>
    </header>

    <!-- TODAY -->
    <section id="page-today">
      <div class="date-row">
        <button class="date-button" id="prevDay" aria-label="Previous day">‹</button>
        <div class="date-label" id="todayDate"></div>
        <button class="date-button" id="nextDay" aria-label="Next day">›</button>
      </div>

      <div class="macro-hero">
        <div class="hero-calories">
          <span id="usedCalories">0</span>
          <span>/ <span id="goalCalories">2200</span> calories</span>
        </div>

        <div class="progress">
          <div id="calorieProgress"></div>
        </div>

        <div class="remaining" id="remainingCalories">2200 remaining</div>

        <div class="macro-grid">
          <div class="macro">
            <strong id="proteinTotal">0g</strong>
            <span>Protein</span>
          </div>
          <div class="macro">
            <strong id="carbTotal">0g</strong>
            <span>Carbs</span>
          </div>
          <div class="macro">
            <strong id="fatTotal">0g</strong>
            <span>Fat</span>
          </div>
          <div class="macro">
            <strong id="fiberTotal">0g</strong>
            <span>Fiber</span>
          </div>
        </div>
      </div>

      <div id="mealList"></div>
    </section>

    <!-- ADD -->
    <section id="page-add" class="hidden">
      <h1>Add Food</h1>
      <p class="subtitle">Find it. Pick your portion. Done.</p>

      <div class="grid2">
        <button class="action-card" id="browseFoodBtn">
          <span class="action-icon">⌕</span>
          <span class="action-title">Find Food</span>
          <span class="action-copy">Search or browse the food library.</span>
        </button>

        <button class="action-card" id="barcodeBtn">
          <span class="action-icon">▥</span>
          <span class="action-title">Scan Barcode</span>
          <span class="action-copy">Packaged foods by UPC.</span>
        </button>

        <button class="action-card" id="savedFoodsBtn">
          <span class="action-icon">★</span>
          <span class="action-title">Saved Foods</span>
          <span class="action-copy">Foods you've used before.</span>
        </button>

        <button class="action-card" id="manualBtn">
          <span class="action-icon">＋</span>
          <span class="action-title">Custom Food</span>
          <span class="action-copy">Manual entry when you need it.</span>
        </button>
      </div>

      <h2 style="margin-top:28px;">Recent Foods</h2>
      <div id="recentFoods" class="card"></div>
    </section>

    <!-- HISTORY -->
    <section id="page-history" class="hidden">
      <h1>History</h1>
      <p class="subtitle">Your days, without the guilt trip.</p>
      <div id="historyList"></div>
    </section>

    <!-- MORE -->
    <section id="page-more" class="hidden">
      <h1>More</h1>
      <p class="subtitle">Goals, profiles and backup.</p>

      <div class="card">
        <div class="settings-row">
          <div>
            <strong>Daily Goals</strong>
            <div class="food-meta">Calories and macros</div>
          </div>
          <button class="tiny-btn" id="goalsBtn">Edit</button>
        </div>

        <div class="settings-row">
          <div>
            <strong>Profiles</strong>
            <div class="food-meta">Keep each person's data separate</div>
          </div>
          <button class="tiny-btn" id="addProfileBtn">Add</button>
        </div>

        <div class="settings-row">
          <div>
            <strong>Backup</strong>
            <div class="food-meta">Export your NEXT // BITE data</div>
          </div>
          <button class="tiny-btn" id="exportBtn">Export</button>
        </div>
      </div>
    </section>

  </main>

  <!-- BOTTOM NAV -->
  <nav class="bottom-nav">
    <button class="nav-btn active" data-page="today">
      <span>⌂</span>Today
    </button>
    <button class="nav-btn" data-page="add">
      <span>＋</span>Add
    </button>
    <button class="nav-btn" data-page="history">
      <span>◷</span>History
    </button>
    <button class="nav-btn" data-page="more">
      <span>•••</span>More
    </button>
  </nav>

  <!-- FOOD LIBRARY -->
  <div id="foodLibraryModal" class="modal hidden">
    <div class="sheet">
      <div class="sheet-head">
        <h2>Find Food</h2>
        <button class="icon-button" data-close="foodLibraryModal">×</button>
      </div>

      <div class="food-picker-search">
        <div class="search-wrap">
          <span class="search-icon">⌕</span>
          <input
            id="foodSearch"
            type="search"
            placeholder="Search turkey, yogurt, rice..."
            autocomplete="off"
          />
        </div>

        <div class="tabs">
          <button class="tab active" data-food-tab="all">All</button>
          <button class="tab" data-food-tab="recent">Recent</button>
          <button class="tab" data-food-tab="favorites">Favorites</button>
          <button class="tab" data-food-tab="protein">Protein</button>
          <button class="tab" data-food-tab="carbs">Carbs</button>
          <button class="tab" data-food-tab="produce">Produce</button>
        </div>
      </div>

      <div id="foodResults"></div>
    </div>
  </div>

  <!-- PORTION / NUTRITION -->
  <div id="portionModal" class="modal hidden">
    <div class="sheet">
      <div class="sheet-head">
        <h2>Add Food</h2>
        <button class="icon-button" data-close="portionModal">×</button>
      </div>

      <div class="selected-food">
        <h3 id="selectedFoodName"></h3>
        <div class="selected-source" id="selectedFoodDetail"></div>
        <span class="source-badge" id="selectedFoodSource">NEXT // BITE LIBRARY</span>
      </div>

      <div class="grid2">
        <div class="field">
          <label for="portionAmount">Amount</label>
          <input id="portionAmount" type="number" inputmode="decimal" min="0.01" step="0.1" value="1" />
        </div>

        <div class="field">
          <label for="portionUnit">Unit</label>
          <select id="portionUnit"></select>
        </div>
      </div>

      <div class="field">
        <label for="portionMeal">Meal</label>
        <select id="portionMeal">
          <option value="breakfast">Breakfast</option>
          <option value="lunch">Lunch</option>
          <option value="dinner">Dinner</option>
          <option value="snacks">Snacks</option>
        </select>
      </div>

      <div class="nutrition-card">
        <div class="nutrition-heading">NUTRITION</div>

        <div class="nutrition-calories">
          <span id="previewCalories">0</span>
          <small> calories</small>
        </div>

        <div class="nutrition-grid">
          <div class="nutrition-stat">
            <strong id="previewProtein">0g</strong>
            <span>Protein</span>
          </div>
          <div class="nutrition-stat">
            <strong id="previewCarbs">0g</strong>
            <span>Carbs</span>
          </div>
          <div class="nutrition-stat">
            <strong id="previewFat">0g</strong>
            <span>Fat</span>
          </div>
          <div class="nutrition-stat">
            <strong id="previewFiber">0g</strong>
            <span>Fiber</span>
          </div>
        </div>

        <div class="more-nutrition" id="moreNutrition"></div>
      </div>

      <button class="primary" id="addSelectedFoodBtn">Add to Day</button>
    </div>
  </div>

  <!-- CUSTOM FOOD -->
  <div id="manualModal" class="modal hidden">
    <div class="sheet">
      <div class="sheet-head">
        <h2>Custom Food</h2>
        <button class="icon-button" data-close="manualModal">×</button>
      </div>

      <div class="field">
        <label>Food</label>
        <input id="manualName" placeholder="Food name" />
      </div>

      <div class="grid2">
        <div class="field">
          <label>Amount</label>
          <input id="manualAmount" type="number" value="1" min="0.01" step="0.1" />
        </div>

        <div class="field">
          <label>Unit</label>
          <select id="manualUnit">
            <option>serving</option>
            <option>g</option>
            <option>oz</option>
            <option>cup</option>
            <option>tbsp</option>
            <option>tsp</option>
            <option>piece</option>
            <option>container</option>
          </select>
        </div>
      </div>

      <div class="field">
        <label>Meal</label>
        <select id="manualMeal">
          <option value="breakfast">Breakfast</option>
          <option value="lunch">Lunch</option>
          <option value="dinner">Dinner</option>
          <option value="snacks">Snacks</option>
        </select>
      </div>

      <div class="grid2">
        <div class="field">
          <label>Calories</label>
          <input id="manualCalories" type="number" value="0" />
        </div>

        <div class="field">
          <label>Protein (g)</label>
          <input id="manualProtein" type="number" value="0" step="0.1" />
        </div>

        <div class="field">
          <label>Carbs (g)</label>
          <input id="manualCarbs" type="number" value="0" step="0.1" />
        </div>

        <div class="field">
          <label>Fat (g)</label>
          <input id="manualFat" type="number" value="0" step="0.1" />
        </div>
      </div>

      <div class="field">
        <label>Fiber (g)</label>
        <input id="manualFiber" type="number" value="0" step="0.1" />
      </div>

      <button class="primary" id="addManualBtn">Add to Day</button>
    </div>
  </div>

  <!-- GOALS -->
  <div id="goalsModal" class="modal hidden">
    <div class="sheet">
      <div class="sheet-head">
        <h2>Daily Goals</h2>
        <button class="icon-button" data-close="goalsModal">×</button>
      </div>

      <div class="field">
        <label>Calories</label>
        <input id="goalCaloriesInput" type="number" />
      </div>

      <div class="grid2">
        <div class="field">
          <label>Protein</label>
          <input id="goalProteinInput" type="number" />
        </div>

        <div class="field">
          <label>Carbs</label>
          <input id="goalCarbsInput" type="number" />
        </div>

        <div class="field">
          <label>Fat</label>
          <input id="goalFatInput" type="number" />
        </div>

        <div class="field">
          <label>Fiber</label>
          <input id="goalFiberInput" type="number" />
        </div>
      </div>

      <button class="primary" id="saveGoalsBtn">Save Goals</button>
    </div>
  </div>

  <div id="toast" class="toast hidden"></div>

  <script>
    (() => {
      const STORAGE_KEY = "nextBiteDataV1";

      /*
        Built-in foods are intentionally a starter library.
        Values are approximate reference values and can vary by brand/preparation.
        Live packaged-food search will be layered on top of this library.
      */
      const FOOD_LIBRARY = [
        {
          id: "turkey-93-7-cooked",
          name: "Ground Turkey, 93/7, Cooked",
          category: "protein",
          detail: "Generic • cooked",
          baseAmount: 100,
          baseUnit: "g",
          calories: 203,
          protein: 27.4,
          carbs: 0,
          fat: 10.4,
          fiber: 0,
          sodium: 87,
          sugar: 0,
          units: ["g", "oz"]
        },
        {
          id: "turkey-93-7-raw",
          name: "Ground Turkey, 93/7, Raw",
          category: "protein",
          detail: "Generic • raw",
          baseAmount: 100,
          baseUnit: "g",
          calories: 172,
          protein: 21,
          carbs: 0,
          fat: 9,
          fiber: 0,
          sodium: 75,
          sugar: 0,
          units: ["g", "oz"]
        },
        {
          id: "chicken-breast-cooked",
          name: "Chicken Breast, Skinless, Cooked",
          category: "protein",
          detail: "Generic • cooked",
          baseAmount: 100,
          baseUnit: "g",
          calories: 165,
          protein: 31,
          carbs: 0,
          fat: 3.6,
          fiber: 0,
          sodium: 74,
          sugar: 0,
          units: ["g", "oz"]
        },
        {
          id: "egg-large",
          name: "Egg, Large",
          category: "protein",
          detail: "1 large egg",
          baseAmount: 1,
          baseUnit: "piece",
          calories: 72,
          protein: 6.3,
          carbs: 0.4,
          fat: 4.8,
          fiber: 0,
          sodium: 71,
          sugar: 0.2,
          units: ["piece"]
        },
        {
          id: "fage-0",
          name: "Fage Total 0% Plain Greek Yogurt",
          category: "protein",
          detail: "Plain nonfat Greek yogurt",
          baseAmount: 170,
          baseUnit: "g",
          calories: 90,
          protein: 18,
          carbs: 5,
          fat: 0,
          fiber: 0,
          sodium: 65,
          sugar: 5,
          units: ["g", "serving"]
        },
        {
          id: "cottage-cheese-lowfat",
          name: "Cottage Cheese, Low Fat",
          category: "protein",
          detail: "Generic",
          baseAmount: 113,
          baseUnit: "g",
          calories: 90,
          protein: 13,
          carbs: 5,
          fat: 2.5,
          fiber: 0,
          sodium: 350,
          sugar: 4,
          units: ["g", "oz", "serving"]
        },
        {
          id: "premier-vanilla",
          name: "Premier Protein Shake, Vanilla",
          category: "protein",
          detail: "11 fl oz shake",
          baseAmount: 1,
          baseUnit: "container",
          calories: 160,
          protein: 30,
          carbs: 5,
          fat: 3,
          fiber: 1,
          sodium: 370,
          sugar: 1,
          units: ["container"]
        },
        {
          id: "white-rice-cooked",
          name: "White Rice, Cooked",
          category: "carbs",
          detail: "Generic • cooked",
          baseAmount: 100,
          baseUnit: "g",
          calories: 130,
          protein: 2.7,
          carbs: 28.2,
          fat: 0.3,
          fiber: 0.4,
          sodium: 1,
          sugar: 0.1,
          units: ["g", "oz"]
        },
        {
          id: "brown-rice-cooked",
          name: "Brown Rice, Cooked",
          category: "carbs",
          detail: "Generic • cooked",
          baseAmount: 100,
          baseUnit: "g",
          calories: 123,
          protein: 2.7,
          carbs: 25.6,
          fat: 1,
          fiber: 1.6,
          sodium: 4,
          sugar: 0.2,
          units: ["g", "oz"]
        },
        {
          id: "oats-dry",
          name: "Old Fashioned Oats, Dry",
          category: "carbs",
          detail: "Generic rolled oats",
          baseAmount: 40,
          baseUnit: "g",
          calories: 150,
          protein: 5,
          carbs: 27,
          fat: 3,
          fiber: 4,
          sodium: 0,
          sugar: 1,
          units: ["g", "oz", "serving"]
        },
        {
          id: "sweet-potato-cooked",
          name: "Sweet Potato, Cooked",
          category: "carbs",
          detail: "Generic",
          baseAmount: 100,
          baseUnit: "g",
          calories: 90,
          protein: 2,
          carbs: 20.7,
          fat: 0.2,
          fiber: 3.3,
          sodium: 36,
          sugar: 6.5,
          units: ["g", "oz"]
        },
        {
          id: "lentils-cooked",
          name: "Lentils, Cooked",
          category: "carbs",
          detail: "Generic",
          baseAmount: 100,
          baseUnit: "g",
          calories: 116,
          protein: 9,
          carbs: 20.1,
          fat: 0.4,
          fiber: 7.9,
          sodium: 2,
          sugar: 1.8,
          units: ["g", "oz"]
        },
        {
          id: "banana",
          name: "Banana",
          category: "produce",
          detail: "1 medium",
          baseAmount: 1,
          baseUnit: "piece",
          calories: 105,
          protein: 1.3,
          carbs: 27,
          fat: 0.4,
          fiber: 3.1,
          sodium: 1,
          sugar: 14.4,
          units: ["piece"]
        },
        {
          id: "apple",
          name: "Apple",
          category: "produce",
          detail: "1 medium",
          baseAmount: 1,
          baseUnit: "piece",
          calories: 95,
          protein: 0.5,
          carbs: 25,
          fat: 0.3,
          fiber: 4.4,
          sodium: 2,
          sugar: 19,
          units: ["piece"]
        },
        {
          id: "raspberries",
          name: "Raspberries",
          category: "produce",
          detail: "Fresh",
          baseAmount: 100,
          baseUnit: "g",
          calories: 52,
          protein: 1.2,
          carbs: 11.9,
          fat: 0.7,
          fiber: 6.5,
          sodium: 1,
          sugar: 4.4,
          units: ["g", "oz"]
        },
        {
          id: "broccoli",
          name: "Broccoli",
          category: "produce",
          detail: "Raw",
          baseAmount: 100,
          baseUnit: "g",
          calories: 34,
          protein: 2.8,
          carbs: 6.6,
          fat: 0.4,
          fiber: 2.6,
          sodium: 33,
          sugar: 1.7,
          units: ["g", "oz"]
        },
        {
          id: "avocado",
          name: "Avocado",
          category: "produce",
          detail: "Raw",
          baseAmount: 100,
          baseUnit: "g",
          calories: 160,
          protein: 2,
          carbs: 8.5,
          fat: 14.7,
          fiber: 6.7,
          sodium: 7,
          sugar: 0.7,
          units: ["g", "oz"]
        }
      ];

      const defaultData = {
        activeProfileId: "profile-1",
        profiles: [
          {
            id: "profile-1",
            name: "My Profile",
            goals: {
              calories: 2200,
              protein: 170,
              carbs: 220,
              fat: 70,
              fiber: 30
            },
            logs: {},
            recentFoodIds: [],
            favoriteFoodIds: []
          }
        ]
      };

      let data = loadData();
      let selectedDate = dateKey(new Date());
      let currentFoodTab = "all";
      let selectedFood = null;

      function loadData() {
        try {
          const stored = localStorage.getItem(STORAGE_KEY);

          if (!stored) {
            return JSON.parse(JSON.stringify(defaultData));
          }

          const parsed = JSON.parse(stored);

          if (!parsed.profiles || !parsed.profiles.length) {
            return JSON.parse(JSON.stringify(defaultData));
          }

          parsed.profiles.forEach(profile => {
            profile.logs = profile.logs || {};
            profile.recentFoodIds = profile.recentFoodIds || [];
            profile.favoriteFoodIds = profile.favoriteFoodIds || [];

            profile.goals = {
              calories: 2200,
              protein: 170,
              carbs: 220,
              fat: 70,
              fiber: 30,
              ...(profile.goals || {})
            };
          });

          return parsed;
        } catch {
          return JSON.parse(JSON.stringify(defaultData));
        }
      }

      function saveData() {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
      }

      function activeProfile() {
        return data.profiles.find(p => p.id === data.activeProfileId) || data.profiles[0];
      }

      function dateKey(date) {
        const y = date.getFullYear();
        const m = String(date.getMonth() + 1).padStart(2, "0");
        const d = String(date.getDate()).padStart(2, "0");
        return `${y}-${m}-${d}`;
      }

      function dateFromKey(key) {
        const [y, m, d] = key.split("-").map(Number);
        return new Date(y, m - 1, d);
      }

      function dayLog(create = false) {
        const profile = activeProfile();

        if (!profile.logs[selectedDate] && create) {
          profile.logs[selectedDate] = {
            breakfast: [],
            lunch: [],
            dinner: [],
            snacks: []
          };
        }

        return profile.logs[selectedDate] || {
          breakfast: [],
          lunch: [],
          dinner: [],
          snacks: []
        };
      }

      function uid() {
        return `${Date.now()}-${Math.random().toString(36).slice(2)}`;
      }

      function num(value) {
        const n = Number(value);
        return Number.isFinite(n) ? n : 0;
      }

      function round(value, digits = 1) {
        const factor = 10 ** digits;
        return Math.round((num(value) + Number.EPSILON) * factor) / factor;
      }

      function escapeHTML(value) {
        return String(value ?? "")
          .replaceAll("&", "&amp;")
          .replaceAll("<", "&lt;")
          .replaceAll(">", "&gt;")
          .replaceAll('"', "&quot;")
          .replaceAll("'", "&#039;");
      }

      function showToast(message) {
        const toast = document.getElementById("toast");
        toast.textContent = message;
        toast.classList.remove("hidden");

        clearTimeout(showToast.timer);

        showToast.timer = setTimeout(() => {
          toast.classList.add("hidden");
        }, 2600);
      }

      function openModal(id) {
        document.getElementById(id).classList.remove("hidden");
      }

      function closeModal(id) {
        document.getElementById(id).classList.add("hidden");
      }

      function showPage(page) {
        ["today", "add", "history", "more"].forEach(name => {
          document
            .getElementById(`page-${name}`)
            .classList.toggle("hidden", name !== page);
        });

        document.querySelectorAll(".nav-btn").forEach(btn => {
          btn.classList.toggle("active", btn.dataset.page === page);
        });

        if (page === "today") renderToday();
        if (page === "add") renderRecentFoods();
        if (page === "history") renderHistory();

        window.scrollTo({ top: 0, behavior: "smooth" });
      }

      function renderProfiles() {
        const select = document.getElementById("profileSelect");

        select.innerHTML = data.profiles.map(profile => `
          <option value="${escapeHTML(profile.id)}">
            ${escapeHTML(profile.name)}
          </option>
        `).join("");

        select.value = activeProfile().id;
      }

      function totalsForLog(log) {
        const total = {
          calories: 0,
          protein: 0,
          carbs: 0,
          fat: 0,
          fiber: 0
        };

        Object.values(log).flat().forEach(food => {
          total.calories += num(food.calories);
          total.protein += num(food.protein);
          total.carbs += num(food.carbs);
          total.fat += num(food.fat);
          total.fiber += num(food.fiber);
        });

        return total;
      }

      function renderToday() {
        const profile = activeProfile();
        const goals = profile.goals;
        const log = dayLog();
        const totals = totalsForLog(log);

        const date = dateFromKey(selectedDate);

        document.getElementById("todayDate").textContent =
          date.toLocaleDateString(undefined, {
            weekday: "long",
            month: "short",
            day: "numeric"
          });

        document.getElementById("usedCalories").textContent =
          Math.round(totals.calories);

        document.getElementById("goalCalories").textContent =
          goals.calories;

        const remaining = goals.calories - totals.calories;

        document.getElementById("remainingCalories").textContent =
          remaining >= 0
            ? `${Math.round(remaining)} remaining`
            : `${Math.abs(Math.round(remaining))} over target`;

        const pct = goals.calories
          ? Math.min((totals.calories / goals.calories) * 100, 100)
          : 0;

        document.getElementById("calorieProgress").style.width =
          `${pct}%`;

        document.getElementById("proteinTotal").textContent =
          `${round(totals.protein)}g`;

        document.getElementById("carbTotal").textContent =
          `${round(totals.carbs)}g`;

        document.getElementById("fatTotal").textContent =
          `${round(totals.fat)}g`;

        document.getElementById("fiberTotal").textContent =
          `${round(totals.fiber)}g`;

        renderMeals(log);
      }

      function renderMeals(log) {
        const names = {
          breakfast: "Breakfast",
          lunch: "Lunch",
          dinner: "Dinner",
          snacks: "Snacks"
        };

        document.getElementById("mealList").innerHTML =
          Object.keys(names).map(meal => {
            const foods = log[meal] || [];

            const mealCalories = foods.reduce(
              (sum, food) => sum + num(food.calories),
              0
            );

            return `
              <div class="meal-card">
                <div class="meal-head">
                  <div>
                    <div class="meal-title">${names[meal]}</div>
                    <div class="meal-total">
                      ${Math.round(mealCalories)} calories
                    </div>
                  </div>

                  <button
                    class="tiny-btn meal-add-btn"
                    data-meal="${meal}"
                  >
                    + Add
                  </button>
                </div>

                ${
                  foods.length
                    ? foods.map(food => `
                        <div class="food-row">
                          <div class="food-row-top">
                            <div>
                              <div class="food-name">
                                ${escapeHTML(food.name)}
                              </div>

                              <div class="food-meta">
                                ${escapeHTML(food.amount)}
                                ${escapeHTML(food.unit)}
                                · ${Math.round(num(food.calories))} cal
                                · ${round(food.protein)}g protein
                              </div>
                            </div>
                          </div>

                          <div class="food-actions">
                            <button
                              class="tiny-btn duplicate-food"
                              data-meal="${meal}"
                              data-id="${food.id}"
                            >
                              Duplicate
                            </button>

                            <button
                              class="tiny-btn danger delete-food"
                              data-meal="${meal}"
                              data-id="${food.id}"
                            >
                              Delete
                            </button>
                          </div>
                        </div>
                      `).join("")
                    : ""
                }
              </div>
            `;
          }).join("");

        document.querySelectorAll(".meal-add-btn").forEach(btn => {
          btn.addEventListener("click", () => {
            document.getElementById("portionMeal").value = btn.dataset.meal;
            openFoodLibrary();
          });
        });

        document.querySelectorAll(".delete-food").forEach(btn => {
          btn.addEventListener("click", () => {
            const log = dayLog(true);

            log[btn.dataset.meal] =
              log[btn.dataset.meal].filter(
                food => food.id !== btn.dataset.id
              );

            saveData();
            renderAll();
          });
        });

        document.querySelectorAll(".duplicate-food").forEach(btn => {
          btn.addEventListener("click", () => {
            const log = dayLog(true);

            const original =
              log[btn.dataset.meal].find(
                food => food.id === btn.dataset.id
              );

            if (!original) return;

            log[btn.dataset.meal].push({
              ...original,
              id: uid()
            });

            saveData();
            renderAll();
            showToast("Food duplicated.");
          });
        });
      }

      function openFoodLibrary() {
        currentFoodTab = "all";
        document.getElementById("foodSearch").value = "";

        document.querySelectorAll("[data-food-tab]").forEach(tab => {
          tab.classList.toggle(
            "active",
            tab.dataset.foodTab === "all"
          );
        });

        renderFoodResults();
        openModal("foodLibraryModal");

        setTimeout(() => {
          document.getElementById("foodSearch").focus();
        }, 100);
      }

      function getFilteredFoods() {
        const profile = activeProfile();

        const query =
          document.getElementById("foodSearch")
            .value
            .trim()
            .toLowerCase();

        let foods = [...FOOD_LIBRARY];

        if (currentFoodTab === "recent") {
          foods = profile.recentFoodIds
            .map(id => FOOD_LIBRARY.find(food => food.id === id))
            .filter(Boolean);
        }

        if (currentFoodTab === "favorites") {
          foods = profile.favoriteFoodIds
            .map(id => FOOD_LIBRARY.find(food => food.id === id))
            .filter(Boolean);
        }

        if (
          ["protein", "carbs", "produce"].includes(currentFoodTab)
        ) {
          foods = foods.filter(
            food => food.category === currentFoodTab
          );
        }

        if (query) {
          foods = foods.filter(food =>
            `${food.name} ${food.detail}`
              .toLowerCase()
              .includes(query)
          );
        }

        if (currentFoodTab === "all") {
          foods.sort((a, b) =>
            a.name.localeCompare(b.name)
          );
        }

        return foods;
      }

      function renderFoodResults() {
        const foods = getFilteredFoods();
        const container = document.getElementById("foodResults");

        if (!foods.length) {
          container.innerHTML = `
            <div class="empty">
              No matching foods yet.<br><br>
              Try another search or use Custom Food.
            </div>
          `;
          return;
        }

        container.innerHTML = `
          <div class="library-section-title">
            ${foods.length} FOOD${foods.length === 1 ? "" : "S"}
          </div>

          ${foods.map(food => `
            <button
              class="food-option"
              data-food-id="${food.id}"
            >
              <div>
                <div class="food-option-name">
                  ${escapeHTML(food.name)}
                </div>

                <div class="food-option-detail">
                  ${escapeHTML(food.detail)}
                </div>
              </div>

              <div class="food-option-cal">
                ${Math.round(food.calories)}
                <small>
                  per ${food.baseAmount}${food.baseUnit === "piece" ? " piece" : food.baseUnit}
                </small>
              </div>
            </button>
          `).join("")}
        `;

        container.querySelectorAll(".food-option").forEach(btn => {
          btn.addEventListener("click", () => {
            const food =
              FOOD_LIBRARY.find(
                item => item.id === btn.dataset.foodId
              );

            if (food) selectFood(food);
          });
        });
      }

      function selectFood(food) {
        selectedFood = food;

        document.getElementById("selectedFoodName").textContent =
          food.name;

        document.getElementById("selectedFoodDetail").textContent =
          food.detail;

        document.getElementById("selectedFoodSource").textContent =
          "NEXT // BITE LIBRARY";

        const unitSelect =
          document.getElementById("portionUnit");

        unitSelect.innerHTML = food.units.map(unit => `
          <option value="${unit}">
            ${unit}
          </option>
        `).join("");

        unitSelect.value = food.baseUnit;

        document.getElementById("portionAmount").value =
          food.baseAmount;

        updateNutritionPreview();

        closeModal("foodLibraryModal");
        openModal("portionModal");
      }

      function gramsFromAmount(amount, unit) {
        if (unit === "g") return amount;
        if (unit === "oz") return amount * 28.3495;
        return null;
      }

      function foodMultiplier(food, amount, unit) {
        amount = num(amount);

        if (amount <= 0) return 0;

        if (food.baseUnit === "g") {
          const grams = gramsFromAmount(amount, unit);

          if (grams !== null) {
            return grams / food.baseAmount;
          }

          if (unit === "serving") {
            return amount;
          }
        }

        if (food.baseUnit === "piece" && unit === "piece") {
          return amount / food.baseAmount;
        }

        if (
          food.baseUnit === "container" &&
          unit === "container"
        ) {
          return amount / food.baseAmount;
        }

        if (unit === "serving") {
          return amount;
        }

        return amount / food.baseAmount;
      }

      function nutritionForSelection() {
        if (!selectedFood) return null;

        const amount =
          num(document.getElementById("portionAmount").value);

        const unit =
          document.getElementById("portionUnit").value;

        const multiplier =
          foodMultiplier(selectedFood, amount, unit);

        return {
          amount,
          unit,
          calories: round(selectedFood.calories * multiplier),
          protein: round(selectedFood.protein * multiplier),
          carbs: round(selectedFood.carbs * multiplier),
          fat: round(selectedFood.fat * multiplier),
          fiber: round(selectedFood.fiber * multiplier),
          sodium: round(num(selectedFood.sodium) * multiplier),
          sugar: round(num(selectedFood.sugar) * multiplier)
        };
      }

      function updateNutritionPreview() {
        const nutrition = nutritionForSelection();

        if (!nutrition) return;

        document.getElementById("previewCalories").textContent =
          Math.round(nutrition.calories);

        document.getElementById("previewProtein").textContent =
          `${nutrition.protein}g`;

        document.getElementById("previewCarbs").textContent =
          `${nutrition.carbs}g`;

        document.getElementById("previewFat").textContent =
          `${nutrition.fat}g`;

        document.getElementById("previewFiber").textContent =
          `${nutrition.fiber}g`;

        document.getElementById("moreNutrition").innerHTML = `
          Sodium: ${Math.round(nutrition.sodium)}mg
          &nbsp; · &nbsp;
          Sugar: ${nutrition.sugar}g
        `;
      }

      function addSelectedFood() {
        if (!selectedFood) return;

        const nutrition = nutritionForSelection();

        if (!nutrition || nutrition.amount <= 0) {
          showToast("Enter an amount greater than zero.");
          return;
        }

        const meal =
          document.getElementById("portionMeal").value;

        const log = dayLog(true);

        log[meal].push({
          id: uid(),
          libraryId: selectedFood.id,
          name: selectedFood.name,
          amount: nutrition.amount,
          unit: nutrition.unit,
          calories: nutrition.calories,
          protein: nutrition.protein,
          carbs: nutrition.carbs,
          fat: nutrition.fat,
          fiber: nutrition.fiber,
          sodium: nutrition.sodium,
          sugar: nutrition.sugar
        });

        const profile = activeProfile();

        profile.recentFoodIds =
          profile.recentFoodIds.filter(
            id => id !== selectedFood.id
          );

        profile.recentFoodIds.unshift(selectedFood.id);

        profile.recentFoodIds =
          profile.recentFoodIds.slice(0, 20);

        saveData();
        closeModal("portionModal");

        selectedFood = null;

        renderAll();
        showPage("today");
        showToast("Added to your day.");
      }

      function renderRecentFoods() {
        const profile = activeProfile();

        const foods = profile.recentFoodIds
          .map(id => FOOD_LIBRARY.find(food => food.id === id))
          .filter(Boolean)
          .slice(0, 6);

        const container =
          document.getElementById("recentFoods");

        if (!foods.length) {
          container.innerHTML = `
            <strong>No recent foods yet</strong>
            <div class="food-meta">
              Foods you log will show up here.
            </div>
          `;
          return;
        }

        container.innerHTML = foods.map(food => `
          <button
            class="food-option recent-food-option"
            data-food-id="${food.id}"
          >
            <div>
              <div class="food-option-name">
                ${escapeHTML(food.name)}
              </div>
              <div class="food-option-detail">
                ${escapeHTML(food.detail)}
              </div>
            </div>
            <div>›</div>
          </button>
        `).join("");

        container
          .querySelectorAll(".recent-food-option")
          .forEach(btn => {
            btn.addEventListener("click", () => {
              const food =
                FOOD_LIBRARY.find(
                  item => item.id === btn.dataset.foodId
                );

              if (food) selectFood(food);
            });
          });
      }

      function addManualFood() {
        const name =
          document.getElementById("manualName")
            .value
            .trim();

        if (!name) {
          showToast("Give the food a name first.");
          return;
        }

        const meal =
          document.getElementById("manualMeal").value;

        const log = dayLog(true);

        log[meal].push({
          id: uid(),
          name,
          amount:
            num(document.getElementById("manualAmount").value),
          unit:
            document.getElementById("manualUnit").value,
          calories:
            num(document.getElementById("manualCalories").value),
          protein:
            num(document.getElementById("manualProtein").value),
          carbs:
            num(document.getElementById("manualCarbs").value),
          fat:
            num(document.getElementById("manualFat").value),
          fiber:
            num(document.getElementById("manualFiber").value)
        });

        saveData();
        closeModal("manualModal");

        document.getElementById("manualName").value = "";

        renderAll();
        showPage("today");
        showToast("Custom food added.");
      }

      function renderHistory() {
        const profile = activeProfile();

        const dates = Object.keys(profile.logs)
          .sort()
          .reverse();

        const container =
          document.getElementById("historyList");

        if (!dates.length) {
          container.innerHTML = `
            <div class="card">
              <strong>No history yet</strong>
              <div class="food-meta">
                Start logging and your days will appear here.
              </div>
            </div>
          `;
          return;
        }

        container.innerHTML = dates.map(key => {
          const totals = totalsForLog(profile.logs[key]);
          const date = dateFromKey(key);

          return `
            <div class="card history-day">
              <div class="history-date">
                ${date.toLocaleDateString(undefined, {
                  weekday: "short",
                  month: "short",
                  day: "numeric"
                })}
              </div>

              <div class="history-macros">
                ${Math.round(totals.calories)} cal
                · ${round(totals.protein)}g protein
                · ${round(totals.carbs)}g carbs
                · ${round(totals.fat)}g fat
              </div>
            </div>
          `;
        }).join("");
      }

      function openGoals() {
        const goals = activeProfile().goals;

        document.getElementById("goalCaloriesInput").value =
          goals.calories;

        document.getElementById("goalProteinInput").value =
          goals.protein;

        document.getElementById("goalCarbsInput").value =
          goals.carbs;

        document.getElementById("goalFatInput").value =
          goals.fat;

        document.getElementById("goalFiberInput").value =
          goals.fiber;

        openModal("goalsModal");
      }

      function saveGoals() {
        const goals = activeProfile().goals;

        goals.calories =
          num(document.getElementById("goalCaloriesInput").value);

        goals.protein =
          num(document.getElementById("goalProteinInput").value);

        goals.carbs =
          num(document.getElementById("goalCarbsInput").value);

        goals.fat =
          num(document.getElementById("goalFatInput").value);

        goals.fiber =
          num(document.getElementById("goalFiberInput").value);

        saveData();
        closeModal("goalsModal");
        renderAll();
        showToast("Goals updated.");
      }

      function addProfile() {
        const name =
          prompt("Profile name:");

        if (!name || !name.trim()) return;

        const id = `profile-${uid()}`;

        data.profiles.push({
          id,
          name: name.trim(),
          goals: {
            calories: 2200,
            protein: 170,
            carbs: 220,
            fat: 70,
            fiber: 30
          },
          logs: {},
          recentFoodIds: [],
          favoriteFoodIds: []
        });

        data.activeProfileId = id;

        saveData();
        renderAll();
        showToast("Profile added.");
      }

      function exportData() {
        const blob = new Blob(
          [JSON.stringify(data, null, 2)],
          { type: "application/json" }
        );

        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");

        a.href = url;
        a.download =
          `next-bite-backup-${dateKey(new Date())}.json`;

        document.body.appendChild(a);
        a.click();
        a.remove();

        URL.revokeObjectURL(url);
      }

      function renderAll() {
        renderProfiles();
        renderToday();
        renderRecentFoods();
        renderHistory();
      }

      // Navigation
      document.querySelectorAll(".nav-btn").forEach(btn => {
        btn.addEventListener("click", () => {
          showPage(btn.dataset.page);
        });
      });

      // Modal close buttons
      document.querySelectorAll("[data-close]").forEach(btn => {
        btn.addEventListener("click", () => {
          closeModal(btn.dataset.close);
        });
      });

      // Profile switching
      document
        .getElementById("profileSelect")
        .addEventListener("change", event => {
          data.activeProfileId = event.target.value;
          saveData();
          renderAll();
        });

      // Date navigation
      document
        .getElementById("prevDay")
        .addEventListener("click", () => {
          const date = dateFromKey(selectedDate);
          date.setDate(date.getDate() - 1);
          selectedDate = dateKey(date);
          renderToday();
        });

      document
        .getElementById("nextDay")
        .addEventListener("click", () => {
          const date = dateFromKey(selectedDate);
          date.setDate(date.getDate() + 1);
          selectedDate = dateKey(date);
          renderToday();
        });

      // Food library
      document
        .getElementById("browseFoodBtn")
        .addEventListener("click", openFoodLibrary);

      document
        .getElementById("savedFoodsBtn")
        .addEventListener("click", () => {
          currentFoodTab = "recent";
          document.getElementById("foodSearch").value = "";

          document.querySelectorAll("[data-food-tab]").forEach(tab => {
            tab.classList.toggle(
              "active",
              tab.dataset.foodTab === "recent"
            );
          });

          renderFoodResults();
          openModal("foodLibraryModal");
        });

      document
        .getElementById("foodSearch")
        .addEventListener("input", renderFoodResults);

      document.querySelectorAll("[data-food-tab]").forEach(tab => {
        tab.addEventListener("click", () => {
          currentFoodTab = tab.dataset.foodTab;

          document.querySelectorAll("[data-food-tab]").forEach(item => {
            item.classList.toggle(
              "active",
              item === tab
            );
          });

          renderFoodResults();
        });
      });

      // Portion
      document
        .getElementById("portionAmount")
        .addEventListener("input", updateNutritionPreview);

      document
        .getElementById("portionUnit")
        .addEventListener("change", updateNutritionPreview);

      document
        .getElementById("addSelectedFoodBtn")
        .addEventListener("click", addSelectedFood);

      // Custom
      document
        .getElementById("manualBtn")
        .addEventListener("click", () => {
          openModal("manualModal");
        });

      document
        .getElementById("addManualBtn")
        .addEventListener("click", addManualFood);

      // Barcode placeholder
      document
        .getElementById("barcodeBtn")
        .addEventListener("click", () => {
          showToast(
            "Barcode camera is next. Food library comes first."
          );
        });

      // Goals
      document
        .getElementById("goalsBtn")
        .addEventListener("click", openGoals);

      document
        .getElementById("saveGoalsBtn")
        .addEventListener("click", saveGoals);

      // Profiles
      document
        .getElementById("addProfileBtn")
        .addEventListener("click", addProfile);

      // Export
      document
        .getElementById("exportBtn")
        .addEventListener("click", exportData);

      renderAll();

    })();

    // Register NEXT // BITE service worker
    if ("serviceWorker" in navigator) {
      window.addEventListener("load", () => {
        navigator.serviceWorker
          .register("./sw.js")
          .catch(error => {
            console.log(
              "Service worker registration failed:",
              error
            );
          });
      });
    }
  </script>

</body>
</html>
Do this part now
Go into index.html → Edit → Select All → Delete → paste this entire code → Commit changes.

This version gives us the new Find Food experience immediately, including searchable foods, categories, automatic nutrition display, ounces/grams conversion, portion recalculation, recent foods, and keeping Custom Food as the fallback.

Don't change manifest.json or sw.js yet.

Once you get the green check, tell me. Then we'll open the live app and test Find Food → Ground Turkey → change the ounces together before I add the live database.


Ok got a green check 

Perfect. Green check means GitHub accepted the new index.html. ✅

Now open/refresh the live app in Safari:

Open NEXT // BITE

Go to Add → Find Food.

Try searching turkey, select Ground Turkey, 93/7, Cooked, and then change the amount between 100 g and something like 4 oz. The calories/macros should automatically change.

Send me a screenshot of what you get. Don't add anything else yet — I want to make sure this new picker and portion calculator are behaving correctly before we connect the big live food database.


OK, the search part works great but I’m pretty sure the math on this is pretty wrong. I don’t think 10 ounces of 93 seven ground turkeys almost 600 cal.

Yep — good catch. The calculator is doing exactly what I coded it to do, but the starter nutrition value I gave it for cooked 93/7 turkey is the problem. 🤦

I put the entry at 203 calories per 100 g cooked. Ten ounces is about 283.5 g, so the app calculates:

203 × 2.835 = ~576 calories

That's exactly the 576 you're seeing. So the oz → grams conversion and scaling math are working correctly; the questionable part is the nutrition record feeding the calculator.

And this actually reinforces why I don't want us hard-coding a bunch of nutrition values ourselves. Different databases and labels can vary substantially based on whether a meat is raw/cooked, drained, brand-specific, etc.

I want to change our approach slightly
Instead of spending time correcting my little starter library food by food, let's go directly to the real database connection now.

Then when you search 93/7 ground turkey, NEXT // BITE can show choices such as a generic database entry and specific branded products, with their serving size and nutrition source clearly identified. You pick the one that matches what you're actually eating, and then our portion calculator scales those verified numbers.

That's especially important for things like:

93/7 turkey → raw vs cooked → Butterball vs Jennie-O vs store brand.

Those aren't necessarily interchangeable nutrition records.

So don't change anything yet based on the 576. The portion calculator passed its test; the starter data didn't. 😂

Next code change: connect the real searchable food database and replace these placeholder nutrition values as the primary source.


All right that works. Give me the code. I’ll change it. Good night.

Absolutely. One correction before you disappear for the night: I checked the current Open Food Facts documentation, and they specifically warn not to hit their search endpoint on every keystroke because search is limited to 10 requests/minute per IP. 
 So I'm not going to give you code tonight that looks slick but gets NEXT // BITE rate-limited.

The right next version will work like this: your local/recent foods filter instantly while you type, and the external database search runs when you tap Search Foods (or after a deliberately controlled search), returning branded products with their nutrition data. Open Food Facts supports product search and lets us request only the fields we need. 

For barcode scanning, we're in even better shape: their current v3 API supports retrieving a specific product by barcode, which fits exactly what we need once we turn the camera on. 

I don't want you replacing the whole file again tonight with rushed code, especially since the current version is working and preserving your data. The next change touches search results, nutrition normalization, serving-size handling, caching, API failure states, and the service worker. That's the point where a tiny mistake can make the app look like it works while feeding you bad numbers—which is exactly what we don't want in a food tracker.

Your current version is safely committed with a green check. Leave it exactly where it is tonight. Next build is the real-data build: database search → choose exact food → verified nutrition appears → portion scaling → Add to Day. And we'll remove that questionable hard-coded turkey from being treated like authoritative nutrition data.


All right, I’m good to keep going at it tonight. Are we not allowed to continue this process or what?

Oh, no — we can absolutely keep going. 😅 I interpreted “good night” as you telling me you were done for the night. That's on me.

You're ready, I'm ready. We're continuing.

And we already learned something useful from the turkey test: the portion calculator works; now we need trustworthy food data feeding it.

Here's what we're doing next
We're upgrading NEXT // BITE so Find Food searches the live Open Food Facts database in addition to our local foods. When you search something like Premier Protein vanilla, you'll get actual matching products. Selecting one will pull its calories, protein, carbs, fat, fiber, serving size, etc., into the nutrition screen automatically.

I'm also going to change sw.js so it doesn't cache external nutrition API calls. Right now it caches every GET request, which isn't what we want once food data becomes live.

So there are two changes this round:

index.html — live food search + automatic nutrition import.

sw.js — safer caching behavior for the live database.

We'll do them one at a time, like we've been doing, so if something breaks we know exactly where it happened.

Start with index.html. I'll give you the complete replacement again so you can Select All → Delete → Paste → Commit, rather than making you play Where's Waldo inside 1,000 lines of JavaScript.

And yes — we're allowed to keep building all night if you want. 😂


Oh, that’s my fault AutoCorrect

😂 That makes WAY more sense. I was like, “Well damn, I guess we're calling it a night right when we got to the good part.”

We're good. Keep everything exactly as it is right now.

Next up: index.html with the live food database. I'll give you the full replacement code, you'll paste it and get the green check, then we'll test an actual food before touching sw.js.

Ready for round two. 😆


OK, so I guess I just need a new index coding to change that correct

Correct. 👍

For the next step, you only need a new index.html. We'll replace the current one with the version that connects Find Food to the live food database.

That update will make:

Find Food → search → actual matching foods/products → select one → nutrition fills automatically → change serving/amount → macros recalculate → Add to Day.

It'll also keep the stuff we already have working: profiles, Today, History, goals, recent foods, manual/custom foods, your existing logged data, and the NEXT // BITE design.

After we confirm that works, then I'll give you the small sw.js update separately. No need to change manifest.json.

So yes: one full replacement index.html is what you need next.


Send it let’s change it

Yep. And because your current index.html is already working, the safest move is not to replace another 1,000+ lines just to add the database. We're going to make three precise edits to the current file. Much less chance of me accidentally murdering a feature we already built. 😂

This version uses Open Food Facts for the live search. Their API allows product search, but search is rate-limited, so we'll use a Search Foods button rather than firing an API request after every letter you type.

Edit 1 — Add the live-search button
In index.html, find this exact section:

<div class="search-wrap">
  <span class="search-icon">⌕</span>
  <input
    id="foodSearch"
    type="search"
    placeholder="Search turkey, yogurt, rice..."
    autocomplete="off"
  />
</div>
Replace only that section with:

<div class="search-wrap">
  <span class="search-icon">⌕</span>
  <input
    id="foodSearch"
    type="search"
    placeholder="Search turkey, yogurt, rice..."
    autocomplete="off"
  />
</div>

<button
  id="liveFoodSearchBtn"
  class="primary"
  style="margin-top:10px;"
>
  Search Food Database
</button>

<div
  id="liveSearchStatus"
  style="
    color:var(--muted);
    font-size:12px;
    margin-top:8px;
    text-align:center;
  "
></div>
Don't commit yet.

Edit 2 — Add the live database code
Now search your file for:

function renderFoodResults() {
Immediately above that line, paste this entire block:

      let liveFoodResults = [];

      function normalizeOFFProduct(product) {
        const n = product.nutriments || {};

        const calories =
          num(n["energy-kcal_100g"]) ||
          (num(n.energy_100g) ? num(n.energy_100g) / 4.184 : 0);

        const protein = num(n.proteins_100g);
        const carbs = num(n.carbohydrates_100g);
        const fat = num(n.fat_100g);
        const fiber = num(n.fiber_100g);
        const sugar = num(n.sugars_100g);
        const sodium = num(n.sodium_100g) * 1000;

        if (!product.product_name) return null;

        // Skip results that don't contain useful nutrition data.
        if (
          calories <= 0 &&
          protein <= 0 &&
          carbs <= 0 &&
          fat <= 0
        ) {
          return null;
        }

        return {
          id: `off-${product.code || uid()}`,
          externalCode: product.code || "",
          source: "Open Food Facts",

          name: product.product_name,

          category: "database",

          detail: [
            product.brands,
            product.quantity
          ]
            .filter(Boolean)
            .join(" • ") || "Packaged food",

          baseAmount: 100,
          baseUnit: "g",

          calories: round(calories),
          protein: round(protein),
          carbs: round(carbs),
          fat: round(fat),
          fiber: round(fiber),
          sodium: round(sodium),
          sugar: round(sugar),

          units: ["g", "oz"],

          servingSize:
            product.serving_size || "",

          image:
            product.image_front_small_url || ""
        };
      }

      async function searchLiveFoodDatabase() {
        const query =
          document
            .getElementById("foodSearch")
            .value
            .trim();

        const status =
          document.getElementById("liveSearchStatus");

        const button =
          document.getElementById("liveFoodSearchBtn");

        if (query.length < 2) {
          showToast("Type at least 2 letters first.");
          return;
        }

        status.textContent = "Searching food database...";
        button.disabled = true;
        button.textContent = "Searching...";

        try {
          const params = new URLSearchParams({
            search_terms: query,
            search_simple: "1",
            action: "process",
            json: "1",
            page_size: "20",
            fields: [
              "code",
              "product_name",
              "brands",
              "quantity",
              "serving_size",
              "nutriments",
              "image_front_small_url"
            ].join(",")
          });

          const url =
            `https://world.openfoodfacts.org/cgi/search.pl?${params.toString()}`;

          const response = await fetch(url, {
            method: "GET",
            headers: {
              "Accept": "application/json"
            }
          });

          if (!response.ok) {
            throw new Error(
              `Food search failed: ${response.status}`
            );
          }

          const result = await response.json();

          liveFoodResults =
            (result.products || [])
              .map(normalizeOFFProduct)
              .filter(Boolean);

          if (!liveFoodResults.length) {
            status.textContent =
              "No database matches found. Try another search.";
          } else {
            status.textContent =
              `${liveFoodResults.length} database match${
                liveFoodResults.length === 1 ? "" : "es"
              } found`;
          }

          renderFoodResults();

        } catch (error) {
          console.error(error);

          liveFoodResults = [];

          status.textContent =
            "Couldn't reach the food database. Your saved foods still work.";

          renderFoodResults();

        } finally {
          button.disabled = false;
          button.textContent = "Search Food Database";
        }
      }
Still don't commit. One more.

Edit 3 — Replace renderFoodResults()
Find the entire existing function beginning with:

function renderFoodResults() {
and ending right before:

function selectFood(food) {
Delete that whole function only and replace it with:

      function renderFoodResults() {
        const localFoods = getFilteredFoods();
        const container =
          document.getElementById("foodResults");

        const query =
          document
            .getElementById("foodSearch")
            .value
            .trim()
            .toLowerCase();

        const matchingLiveFoods =
          query
            ? liveFoodResults.filter(food =>
                `${food.name} ${food.detail}`
                  .toLowerCase()
                  .includes(query)
              )
            : [];

        if (
          !localFoods.length &&
          !matchingLiveFoods.length
        ) {
          container.innerHTML = `
            <div class="empty">
              No matching foods in your library yet.<br><br>
              Tap <strong>Search Food Database</strong>
              to look for it online.
            </div>
          `;

          return;
        }

        let html = "";

        if (localFoods.length) {
          html += `
            <div class="library-section-title">
              YOUR LIBRARY
            </div>

            ${localFoods.map(food => `
              <button
                class="food-option"
                data-local-food-id="${food.id}"
              >
                <div>
                  <div class="food-option-name">
                    ${escapeHTML(food.name)}
                  </div>

                  <div class="food-option-detail">
                    ${escapeHTML(food.detail)}
                  </div>
                </div>

                <div class="food-option-cal">
                  ${Math.round(food.calories)}
                  <small>
                    per ${food.baseAmount}${
                      food.baseUnit === "piece"
                        ? " piece"
                        : food.baseUnit
                    }
                  </small>
                </div>
              </button>
            `).join("")}
          `;
        }

        if (matchingLiveFoods.length) {
          html += `
            <div
              class="library-section-title"
              style="margin-top:22px;"
            >
              FOOD DATABASE
            </div>

            ${matchingLiveFoods.map((food, index) => `
              <button
                class="food-option"
                data-live-food-index="${index}"
              >
                <div>
                  <div class="food-option-name">
                    ${escapeHTML(food.name)}
                  </div>

                  <div class="food-option-detail">
                    ${escapeHTML(food.detail)}
                  </div>

                  ${
                    food.servingSize
                      ? `
                        <div class="food-option-detail">
                          Serving: ${escapeHTML(food.servingSize)}
                        </div>
                      `
                      : ""
                  }
                </div>

                <div class="food-option-cal">
                  ${Math.round(food.calories)}
                  <small>per 100g</small>
                </div>
              </button>
            `).join("")}
          `;
        }

        container.innerHTML = html;

        container
          .querySelectorAll("[data-local-food-id]")
          .forEach(btn => {

            btn.addEventListener("click", () => {

              const food =
                FOOD_LIBRARY.find(
                  item =>
                    item.id ===
                    btn.dataset.localFoodId
                );

              if (food) {
                selectFood(food);
              }
            });
          });

        container
          .querySelectorAll("[data-live-food-index]")
          .forEach(btn => {

            btn.addEventListener("click", () => {

              const food =
                matchingLiveFoods[
                  Number(btn.dataset.liveFoodIndex)
                ];

              if (food) {
                selectFood(food);
              }
            });
          });
      }
One tiny addition
Now find this existing section near the bottom:

document
  .getElementById("foodSearch")
  .addEventListener("input", renderFoodResults);
Immediately under it, add:

      document
        .getElementById("liveFoodSearchBtn")
        .addEventListener(
          "click",
          searchLiveFoodDatabase
        );
And one cosmetic fix
Inside selectFood(food), you currently have:

document.getElementById("selectedFoodSource").textContent =
  "NEXT // BITE LIBRARY";
Replace it with:

document.getElementById("selectedFoodSource").textContent =
  food.source || "NEXT // BITE LIBRARY";
Then commit it
That's the whole index.html change.

After you get the green check, we're going straight back to the live app and searching something unmistakably branded like Premier Protein Vanilla. That'll tell us immediately whether we're pulling actual database nutrition instead of my rogue 600-calorie turkey situation. 😂

Don't change sw.js yet. We'll do that immediately after we prove the database search works.


OK, what line am I gonna be looking for? What line is this on for this first edit?

Yep. In the index.html I gave you, the first edit is around line 660-ish. GitHub may show it a few lines higher/lower, but that's the neighborhood.

The easiest way is actually to use Find on Page and search for:

id="foodSearch"
You’re looking for this block:

<div class="search-wrap">
  <span class="search-icon">⌕</span>
  <input
    id="foodSearch"
    type="search"
    placeholder="Search turkey, yogurt, rice..."
    autocomplete="off"
  />
</div>
Once you find id="foodSearch", stop there. Replace that entire <div class="search-wrap"> ... </div> block with the new block from Edit 1.

If you want, send me a screenshot once you're at that spot and I'll point out exactly what to highlight/delete before you touch anything.


Yeah, it’s just difficult to do that kind of a search. I’m on my iPhone doing this work. Is there anyway that you can just redo the whole thing completely edit the entire index like I said it’s kind of a pain in the butt on the iPhone to edit just a handful of lines without messing anything up. 

Yes — and that is how we should do it from now on. Editing individual chunks of a giant HTML file on an iPhone is asking for chaos. 😂

I’ll redo the entire index.html with the live food-database changes already incorporated. Your process will just be:

GitHub → index.html → Edit → Select All → Delete → Paste the new file → Commit.

No hunting for line 660. No trying to select exactly 14 lines with those stupid little iPhone selection handles. No wondering whether you accidentally deleted a closing brace.

I’ll also make sure the full replacement preserves everything we already built: Today, Add, History, More, profiles, goals, existing logs/localStorage, recent foods, portion calculations, custom foods, the design, PWA registration, plus the new Search Food Database functionality.

And going forward, when we make substantial changes to NEXT // BITE, I'll default to giving you the complete replacement file unless it's something extremely easy like changing one word.

Give me one sec and I'll build the clean full index.html replacement with the database code already integrated.


All right sounds good. Send it.

Yep. Since you’re doing this on the iPhone, full replacement it is from here on out.

One thing I caught while putting the integrated version together: I don't want the built-in turkey result sitting above the live results and confusing things again. So this version treats the built-in library as quick/local foods, while clearly separating live database results.

Replace everything in index.html with this:

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />

  <title>NEXT // BITE</title>

  <meta name="theme-color" content="#080a09" />
  <meta name="apple-mobile-web-app-capable" content="yes" />
  <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
  <meta name="apple-mobile-web-app-title" content="NEXT // BITE" />

  <link rel="apple-touch-icon" href="apple-touch-icon-bite.png" />
  <link rel="manifest" href="manifest.json" />

  <style>
    :root {
      --bg: #080a09;
      --panel: #101411;
      --panel2: #151a16;
      --panel3: #1a211b;
      --border: #303831;
      --text: #f5f7f5;
      --muted: #959d97;
      --green: #63ff27;
      --green-dark: #193914;
      --green-soft: rgba(99, 255, 39, 0.1);
      --danger: #ff6b6b;
      --radius: 22px;
    }

    * {
      box-sizing: border-box;
      -webkit-tap-highlight-color: transparent;
    }

    html {
      background: var(--bg);
    }

    body {
      margin: 0;
      background: var(--bg);
      color: var(--text);
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
      min-height: 100vh;
    }

    button,
    input,
    select {
      font: inherit;
    }

    button {
      cursor: pointer;
    }

    button:disabled {
      opacity: 0.55;
      cursor: default;
    }

    .app {
      width: 100%;
      max-width: 720px;
      margin: 0 auto;
      padding:
        calc(env(safe-area-inset-top) + 22px)
        18px
        calc(env(safe-area-inset-bottom) + 125px);
    }

    .header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 16px;
      margin-bottom: 30px;
    }

    .brand {
      min-width: 0;
    }

    .logo {
      font-size: clamp(26px, 7vw, 36px);
      font-weight: 950;
      letter-spacing: -1.5px;
      white-space: nowrap;
    }

    .slashes {
      color: var(--green);
    }

    .tagline {
      color: var(--muted);
      font-size: 12px;
      font-weight: 900;
      letter-spacing: 4px;
      margin-top: 8px;
    }

    .profile-select {
      max-width: 190px;
      background: var(--panel);
      color: var(--text);
      border: 1px solid var(--border);
      border-radius: 18px;
      padding: 14px 12px;
      font-weight: 800;
    }

    h1 {
      font-size: 34px;
      margin: 0 0 6px;
      letter-spacing: -1px;
    }

    h2 {
      font-size: 24px;
      margin: 0 0 16px;
    }

    h3 {
      margin: 0;
    }

    .subtitle {
      color: var(--muted);
      margin: 0 0 24px;
      font-size: 17px;
    }

    .hidden {
      display: none !important;
    }

    .card {
      background: var(--panel);
      border: 1px solid var(--border);
      border-radius: var(--radius);
      padding: 18px;
      margin-bottom: 14px;
    }

    .grid2 {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 12px;
    }

    .action-card {
      min-height: 130px;
      text-align: left;
      background: var(--panel);
      border: 1px solid var(--border);
      border-radius: var(--radius);
      color: var(--text);
      padding: 18px;
    }

    .action-icon {
      display: block;
      color: var(--green);
      font-size: 31px;
      line-height: 1;
      margin-bottom: 22px;
    }

    .action-title {
      display: block;
      font-size: 18px;
      font-weight: 900;
      margin-bottom: 5px;
    }

    .action-copy {
      color: var(--muted);
      font-size: 14px;
      line-height: 1.35;
    }

    .date-row {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 10px;
      margin-bottom: 18px;
    }

    .date-button,
    .icon-button {
      border: 1px solid var(--border);
      background: var(--panel);
      color: var(--text);
      min-width: 46px;
      min-height: 46px;
      border-radius: 50%;
      font-size: 20px;
    }

    .date-label {
      text-align: center;
      font-weight: 900;
    }

    .macro-hero {
      background: var(--panel);
      border: 1px solid var(--border);
      border-radius: 26px;
      padding: 20px;
      margin-bottom: 14px;
    }

    .hero-calories {
      font-size: 42px;
      font-weight: 950;
      letter-spacing: -2px;
    }

    .hero-calories span {
      color: var(--muted);
      font-size: 16px;
      font-weight: 700;
      letter-spacing: 0;
    }

    .progress {
      height: 9px;
      background: #252b26;
      border-radius: 99px;
      overflow: hidden;
      margin: 14px 0 10px;
    }

    .progress > div {
      height: 100%;
      width: 0%;
      background: var(--green);
      border-radius: inherit;
      transition: width 0.2s ease;
    }

    .remaining {
      color: var(--muted);
      font-size: 14px;
    }

    .macro-grid {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 8px;
      margin-top: 18px;
    }

    .macro {
      background: var(--panel2);
      border-radius: 15px;
      padding: 12px 8px;
      text-align: center;
    }

    .macro strong {
      display: block;
      font-size: 17px;
    }

    .macro span {
      display: block;
      color: var(--muted);
      font-size: 11px;
      margin-top: 4px;
    }

    .meal-card {
      background: var(--panel);
      border: 1px solid var(--border);
      border-radius: var(--radius);
      margin-bottom: 12px;
      overflow: hidden;
    }

    .meal-head {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 17px;
    }

    .meal-title {
      font-weight: 900;
      font-size: 18px;
    }

    .meal-total {
      color: var(--muted);
      font-size: 14px;
    }

    .food-row {
      padding: 14px 17px;
      border-top: 1px solid var(--border);
    }

    .food-row-top {
      display: flex;
      justify-content: space-between;
      gap: 12px;
    }

    .food-name {
      font-weight: 800;
    }

    .food-meta {
      color: var(--muted);
      font-size: 13px;
      margin-top: 4px;
    }

    .food-actions {
      display: flex;
      gap: 8px;
      margin-top: 10px;
    }

    .tiny-btn {
      background: var(--panel2);
      border: 1px solid var(--border);
      color: var(--muted);
      border-radius: 10px;
      padding: 7px 10px;
      font-size: 12px;
      font-weight: 800;
    }

    .primary {
      width: 100%;
      min-height: 54px;
      border: 0;
      border-radius: 18px;
      background: var(--green);
      color: #071005;
      font-weight: 950;
      font-size: 17px;
    }

    .secondary {
      width: 100%;
      min-height: 50px;
      border-radius: 16px;
      border: 1px solid var(--border);
      background: var(--panel2);
      color: var(--text);
      font-weight: 850;
    }

    .danger {
      color: var(--danger);
    }

    .bottom-nav {
      position: fixed;
      left: 50%;
      transform: translateX(-50%);
      bottom: calc(env(safe-area-inset-bottom) + 10px);
      width: min(calc(100% - 24px), 696px);
      background: rgba(14, 18, 15, 0.97);
      border: 1px solid var(--border);
      border-radius: 26px;
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      padding: 8px;
      z-index: 30;
      backdrop-filter: blur(18px);
    }

    .nav-btn {
      min-height: 62px;
      border: 0;
      background: transparent;
      color: var(--muted);
      border-radius: 18px;
      font-weight: 850;
    }

    .nav-btn span {
      display: block;
      font-size: 23px;
      line-height: 1;
      margin-bottom: 6px;
    }

    .nav-btn.active {
      color: var(--green);
      background: var(--green-dark);
    }

    .modal {
      position: fixed;
      inset: 0;
      z-index: 100;
      background: rgba(0, 0, 0, 0.76);
      display: flex;
      align-items: flex-end;
      justify-content: center;
      padding-top: env(safe-area-inset-top);
    }

    .sheet {
      width: min(100%, 720px);
      max-height: 92vh;
      overflow-y: auto;
      background: var(--panel);
      border: 1px solid var(--border);
      border-radius: 28px 28px 0 0;
      padding: 20px 18px calc(env(safe-area-inset-bottom) + 24px);
    }

    .sheet-head {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 14px;
      margin-bottom: 20px;
    }

    .sheet-head h2 {
      margin: 0;
    }

    label {
      display: block;
      color: var(--muted);
      font-size: 13px;
      font-weight: 850;
      margin-bottom: 7px;
    }

    input,
    select {
      width: 100%;
      min-height: 52px;
      border-radius: 15px;
      border: 1px solid var(--border);
      background: var(--panel2);
      color: var(--text);
      padding: 0 14px;
      font-size: 16px;
      outline: none;
    }

    input:focus,
    select:focus {
      border-color: var(--green);
    }

    .field {
      margin-bottom: 15px;
    }

    .food-picker-search {
      position: sticky;
      top: -20px;
      background: var(--panel);
      padding: 6px 0 12px;
      z-index: 3;
    }

    .search-wrap {
      position: relative;
    }

    .search-wrap input {
      padding-left: 44px;
    }

    .search-icon {
      position: absolute;
      left: 15px;
      top: 15px;
      color: var(--muted);
    }

    .search-status {
      color: var(--muted);
      font-size: 12px;
      text-align: center;
      min-height: 18px;
      margin-top: 8px;
    }

    .tabs {
      display: flex;
      gap: 8px;
      overflow-x: auto;
      padding: 12px 0 2px;
      scrollbar-width: none;
    }

    .tabs::-webkit-scrollbar {
      display: none;
    }

    .tab {
      white-space: nowrap;
      border: 1px solid var(--border);
      background: var(--panel2);
      color: var(--muted);
      border-radius: 99px;
      padding: 9px 14px;
      font-weight: 850;
    }

    .tab.active {
      background: var(--green-dark);
      border-color: #387c23;
      color: var(--green);
    }

    .library-section-title {
      color: var(--muted);
      font-size: 12px;
      font-weight: 900;
      letter-spacing: 1.5px;
      margin: 18px 2px 8px;
    }

    .food-option {
      width: 100%;
      text-align: left;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 14px;
      background: transparent;
      border: 0;
      border-bottom: 1px solid var(--border);
      color: var(--text);
      padding: 15px 4px;
    }

    .food-option:last-child {
      border-bottom: 0;
    }

    .food-option-name {
      font-weight: 850;
      font-size: 16px;
    }

    .food-option-detail {
      color: var(--muted);
      font-size: 12px;
      margin-top: 4px;
    }

    .food-option-cal {
      flex: 0 0 auto;
      text-align: right;
      font-weight: 900;
    }

    .food-option-cal small {
      display: block;
      color: var(--muted);
      font-size: 11px;
      font-weight: 700;
      margin-top: 3px;
    }

    .selected-food {
      background: var(--panel2);
      border: 1px solid var(--border);
      border-radius: 18px;
      padding: 16px;
      margin-bottom: 16px;
    }

    .selected-food h3 {
      font-size: 19px;
      margin-bottom: 4px;
    }

    .selected-source {
      color: var(--muted);
      font-size: 12px;
    }

    .nutrition-card {
      border: 1px solid #397c25;
      background: var(--green-soft);
      border-radius: 20px;
      padding: 16px;
      margin: 18px 0;
    }

    .nutrition-heading {
      font-size: 12px;
      font-weight: 950;
      color: var(--green);
      letter-spacing: 1.5px;
      margin-bottom: 12px;
    }

    .nutrition-calories {
      font-size: 29px;
      font-weight: 950;
      letter-spacing: -1px;
    }

    .nutrition-calories small {
      color: var(--muted);
      font-size: 14px;
      font-weight: 700;
    }

    .nutrition-grid {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 7px;
      margin-top: 14px;
    }

    .nutrition-stat {
      background: rgba(0, 0, 0, 0.18);
      border-radius: 12px;
      padding: 10px 6px;
      text-align: center;
    }

    .nutrition-stat strong {
      display: block;
      font-size: 15px;
    }

    .nutrition-stat span {
      color: var(--muted);
      font-size: 10px;
    }

    .more-nutrition {
      margin-top: 13px;
      padding-top: 13px;
      border-top: 1px solid rgba(255,255,255,0.08);
      color: var(--muted);
      font-size: 13px;
      line-height: 1.6;
    }

    .source-badge {
      display: inline-block;
      color: var(--green);
      background: var(--green-dark);
      border-radius: 999px;
      padding: 5px 8px;
      font-size: 10px;
      font-weight: 900;
      margin-top: 8px;
    }

    .empty {
      color: var(--muted);
      padding: 20px 4px;
      text-align: center;
      line-height: 1.5;
    }

    .toast {
      position: fixed;
      left: 50%;
      transform: translateX(-50%);
      bottom: calc(env(safe-area-inset-bottom) + 105px);
      width: min(calc(100% - 36px), 650px);
      background: #202721;
      border: 1px solid #3a443b;
      border-radius: 16px;
      padding: 14px 16px;
      font-weight: 800;
      z-index: 200;
    }

    .history-day {
      margin-bottom: 10px;
    }

    .history-date {
      font-weight: 900;
    }

    .history-macros {
      color: var(--muted);
      margin-top: 5px;
      font-size: 14px;
    }

    .settings-row {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 14px;
    }

    .settings-row + .settings-row {
      border-top: 1px solid var(--border);
      margin-top: 14px;
      padding-top: 14px;
    }

    @media (max-width: 440px) {
      .app {
        padding-left: 14px;
        padding-right: 14px;
      }

      .header {
        align-items: flex-start;
      }

      .profile-select {
        max-width: 145px;
      }

      .grid2 {
        gap: 9px;
      }

      .action-card {
        padding: 15px;
      }

      .macro-grid,
      .nutrition-grid {
        grid-template-columns: repeat(2, 1fr);
      }
    }
  </style>
</head>

<body>

  <main class="app">

    <header class="header">
      <div class="brand">
        <div class="logo">NEXT <span class="slashes">//</span> BITE</div>
        <div class="tagline">EAT WITH PURPOSE.</div>
      </div>

      <select id="profileSelect" class="profile-select" aria-label="Profile"></select>
    </header>

    <!-- TODAY -->
    <section id="page-today">
      <div class="date-row">
        <button class="date-button" id="prevDay" aria-label="Previous day">‹</button>
        <div class="date-label" id="todayDate"></div>
        <button class="date-button" id="nextDay" aria-label="Next day">›</button>
      </div>

      <div class="macro-hero">
        <div class="hero-calories">
          <span id="usedCalories">0</span>
          <span>/ <span id="goalCalories">2200</span> calories</span>
        </div>

        <div class="progress">
          <div id="calorieProgress"></div>
        </div>

        <div class="remaining" id="remainingCalories">2200 remaining</div>

        <div class="macro-grid">
          <div class="macro">
            <strong id="proteinTotal">0g</strong>
            <span>Protein</span>
          </div>
          <div class="macro">
            <strong id="carbTotal">0g</strong>
            <span>Carbs</span>
          </div>
          <div class="macro">
            <strong id="fatTotal">0g</strong>
            <span>Fat</span>
          </div>
          <div class="macro">
            <strong id="fiberTotal">0g</strong>
            <span>Fiber</span>
          </div>
        </div>
      </div>

      <div id="mealList"></div>
    </section>

    <!-- ADD -->
    <section id="page-add" class="hidden">
      <h1>Add Food</h1>
      <p class="subtitle">Find it. Pick your portion. Done.</p>

      <div class="grid2">
        <button class="action-card" id="browseFoodBtn">
          <span class="action-icon">⌕</span>
          <span class="action-title">Find Food</span>
          <span class="action-copy">Search the live food database.</span>
        </button>

        <button class="action-card" id="barcodeBtn">
          <span class="action-icon">▥</span>
          <span class="action-title">Scan Barcode</span>
          <span class="action-copy">Packaged foods by UPC.</span>
        </button>

        <button class="action-card" id="savedFoodsBtn">
          <span class="action-icon">★</span>
          <span class="action-title">Recent Foods</span>
          <span class="action-copy">Foods you've used before.</span>
        </button>

        <button class="action-card" id="manualBtn">
          <span class="action-icon">＋</span>
          <span class="action-title">Custom Food</span>
          <span class="action-copy">Manual entry when you need it.</span>
        </button>
      </div>

      <h2 style="margin-top:28px;">Recent Foods</h2>
      <div id="recentFoods" class="card"></div>
    </section>

    <!-- HISTORY -->
    <section id="page-history" class="hidden">
      <h1>History</h1>
      <p class="subtitle">Your days, without the guilt trip.</p>
      <div id="historyList"></div>
    </section>

    <!-- MORE -->
    <section id="page-more" class="hidden">
      <h1>More</h1>
      <p class="subtitle">Goals, profiles and backup.</p>

      <div class="card">
        <div class="settings-row">
          <div>
            <strong>Daily Goals</strong>
            <div class="food-meta">Calories and macros</div>
          </div>
          <button class="tiny-btn" id="goalsBtn">Edit</button>
        </div>

        <div class="settings-row">
          <div>
            <strong>Profiles</strong>
            <div class="food-meta">Keep each person's data separate</div>
          </div>
          <button class="tiny-btn" id="addProfileBtn">Add</button>
        </div>

        <div class="settings-row">
          <div>
            <strong>Backup</strong>
            <div class="food-meta">Export your NEXT // BITE data</div>
          </div>
          <button class="tiny-btn" id="exportBtn">Export</button>
        </div>
      </div>
    </section>

  </main>

  <!-- BOTTOM NAV -->
  <nav class="bottom-nav">
    <button class="nav-btn active" data-page="today">
      <span>⌂</span>Today
    </button>
    <button class="nav-btn" data-page="add">
      <span>＋</span>Add
    </button>
    <button class="nav-btn" data-page="history">
      <span>◷</span>History
    </button>
    <button class="nav-btn" data-page="more">
      <span>•••</span>More
    </button>
  </nav>

  <!-- FOOD SEARCH -->
  <div id="foodLibraryModal" class="modal hidden">
    <div class="sheet">
      <div class="sheet-head">
        <h2>Find Food</h2>
        <button class="icon-button" data-close="foodLibraryModal">×</button>
      </div>

      <div class="food-picker-search">
        <div class="search-wrap">
          <span class="search-icon">⌕</span>
          <input
            id="foodSearch"
            type="search"
            placeholder="Search Premier Protein, yogurt..."
            autocomplete="off"
          />
        </div>

        <button
          id="liveFoodSearchBtn"
          class="primary"
          style="margin-top:10px;"
        >
          Search Food Database
        </button>

        <div id="liveSearchStatus" class="search-status"></div>

        <div class="tabs">
          <button class="tab active" data-food-tab="all">All</button>
          <button class="tab" data-food-tab="recent">Recent</button>
          <button class="tab" data-food-tab="protein">Protein</button>
          <button class="tab" data-food-tab="carbs">Carbs</button>
          <button class="tab" data-food-tab="produce">Produce</button>
        </div>
      </div>

      <div id="foodResults"></div>
    </div>
  </div>

  <!-- PORTION / NUTRITION -->
  <div id="portionModal" class="modal hidden">
    <div class="sheet">
      <div class="sheet-head">
        <h2>Add Food</h2>
        <button class="icon-button" data-close="portionModal">×</button>
      </div>

      <div class="selected-food">
        <h3 id="selectedFoodName"></h3>
        <div class="selected-source" id="selectedFoodDetail"></div>
        <span class="source-badge" id="selectedFoodSource"></span>
      </div>

      <div class="grid2">
        <div class="field">
          <label for="portionAmount">Amount</label>
          <input
            id="portionAmount"
            type="number"
            inputmode="decimal"
            min="0.01"
            step="0.1"
            value="1"
          />
        </div>

        <div class="field">
          <label for="portionUnit">Unit</label>
          <select id="portionUnit"></select>
        </div>
      </div>

      <div class="field">
        <label for="portionMeal">Meal</label>
        <select id="portionMeal">
          <option value="breakfast">Breakfast</option>
          <option value="lunch">Lunch</option>
          <option value="dinner">Dinner</option>
          <option value="snacks">Snacks</option>
        </select>
      </div>

      <div class="nutrition-card">
        <div class="nutrition-heading">NUTRITION</div>

        <div class="nutrition-calories">
          <span id="previewCalories">0</span>
          <small> calories</small>
        </div>

        <div class="nutrition-grid">
          <div class="nutrition-stat">
            <strong id="previewProtein">0g</strong>
            <span>Protein</span>
          </div>

          <div class="nutrition-stat">
            <strong id="previewCarbs">0g</strong>
            <span>Carbs</span>
          </div>

          <div class="nutrition-stat">
            <strong id="previewFat">0g</strong>
            <span>Fat</span>
          </div>

          <div class="nutrition-stat">
            <strong id="previewFiber">0g</strong>
            <span>Fiber</span>
          </div>
        </div>

        <div class="more-nutrition" id="moreNutrition"></div>
      </div>

      <button class="primary" id="addSelectedFoodBtn">
        Add to Day
      </button>
    </div>
  </div>

  <!-- CUSTOM FOOD -->
  <div id="manualModal" class="modal hidden">
    <div class="sheet">
      <div class="sheet-head">
        <h2>Custom Food</h2>
        <button class="icon-button" data-close="manualModal">×</button>
      </div>

      <div class="field">
        <label>Food</label>
        <input id="manualName" placeholder="Food name" />
      </div>

      <div class="grid2">
        <div class="field">
          <label>Amount</label>
          <input
            id="manualAmount"
            type="number"
            value="1"
            min="0.01"
            step="0.1"
          />
        </div>

        <div class="field">
          <label>Unit</label>
          <select id="manualUnit">
            <option>serving</option>
            <option>g</option>
            <option>oz</option>
            <option>cup</option>
            <option>tbsp</option>
            <option>tsp</option>
            <option>piece</option>
            <option>container</option>
          </select>
        </div>
      </div>

      <div class="field">
        <label>Meal</label>
        <select id="manualMeal">
          <option value="breakfast">Breakfast</option>
          <option value="lunch">Lunch</option>
          <option value="dinner">Dinner</option>
          <option value="snacks">Snacks</option>
        </select>
      </div>

      <div class="grid2">
        <div class="field">
          <label>Calories</label>
          <input id="manualCalories" type="number" value="0" />
        </div>

        <div class="field">
          <label>Protein (g)</label>
          <input id="manualProtein" type="number" value="0" step="0.1" />
        </div>

        <div class="field">
          <label>Carbs (g)</label>
          <input id="manualCarbs" type="number" value="0" step="0.1" />
        </div>

        <div class="field">
          <label>Fat (g)</label>
          <input id="manualFat" type="number" value="0" step="0.1" />
        </div>
      </div>

      <div class="field">
        <label>Fiber (g)</label>
        <input id="manualFiber" type="number" value="0" step="0.1" />
      </div>

      <button class="primary" id="addManualBtn">
        Add to Day
      </button>
    </div>
  </div>

  <!-- GOALS -->
  <div id="goalsModal" class="modal hidden">
    <div class="sheet">
      <div class="sheet-head">
        <h2>Daily Goals</h2>
        <button class="icon-button" data-close="goalsModal">×</button>
      </div>

      <div class="field">
        <label>Calories</label>
        <input id="goalCaloriesInput" type="number" />
      </div>

      <div class="grid2">
        <div class="field">
          <label>Protein</label>
          <input id="goalProteinInput" type="number" />
        </div>

        <div class="field">
          <label>Carbs</label>
          <input id="goalCarbsInput" type="number" />
        </div>

        <div class="field">
          <label>Fat</label>
          <input id="goalFatInput" type="number" />
        </div>

        <div class="field">
          <label>Fiber</label>
          <input id="goalFiberInput" type="number" />
        </div>
      </div>

      <button class="primary" id="saveGoalsBtn">
        Save Goals
      </button>
    </div>
  </div>

  <div id="toast" class="toast hidden"></div>

  <script>
    (() => {
      const STORAGE_KEY = "nextBiteDataV1";

      /*
        Small convenience library only.

        Live database results are the primary source for packaged/branded
        foods. These local entries are mainly for testing and quick access.
      */
      const FOOD_LIBRARY = [
        {
          id: "chicken-breast-cooked",
          name: "Chicken Breast, Skinless, Cooked",
          category: "protein",
          detail: "Generic reference • cooked",
          baseAmount: 100,
          baseUnit: "g",
          calories: 165,
          protein: 31,
          carbs: 0,
          fat: 3.6,
          fiber: 0,
          sodium: 74,
          sugar: 0,
          units: ["g", "oz"],
          source: "NEXT // BITE QUICK FOOD"
        },
        {
          id: "egg-large",
          name: "Egg, Large",
          category: "protein",
          detail: "Generic reference • 1 large egg",
          baseAmount: 1,
          baseUnit: "piece",
          calories: 72,
          protein: 6.3,
          carbs: 0.4,
          fat: 4.8,
          fiber: 0,
          sodium: 71,
          sugar: 0.2,
          units: ["piece"],
          source: "NEXT // BITE QUICK FOOD"
        },
        {
          id: "white-rice-cooked",
          name: "White Rice, Cooked",
          category: "carbs",
          detail: "Generic reference • cooked",
          baseAmount: 100,
          baseUnit: "g",
          calories: 130,
          protein: 2.7,
          carbs: 28.2,
          fat: 0.3,
          fiber: 0.4,
          sodium: 1,
          sugar: 0.1,
          units: ["g", "oz"],
          source: "NEXT // BITE QUICK FOOD"
        },
        {
          id: "oats-dry",
          name: "Old Fashioned Oats, Dry",
          category: "carbs",
          detail: "Generic reference",
          baseAmount: 40,
          baseUnit: "g",
          calories: 150,
          protein: 5,
          carbs: 27,
          fat: 3,
          fiber: 4,
          sodium: 0,
          sugar: 1,
          units: ["g", "oz", "serving"],
          source: "NEXT // BITE QUICK FOOD"
        },
        {
          id: "sweet-potato-cooked",
          name: "Sweet Potato, Cooked",
          category: "carbs",
          detail: "Generic reference",
          baseAmount: 100,
          baseUnit: "g",
          calories: 90,
          protein: 2,
          carbs: 20.7,
          fat: 0.2,
          fiber: 3.3,
          sodium: 36,
          sugar: 6.5,
          units: ["g", "oz"],
          source: "NEXT // BITE QUICK FOOD"
        },
        {
          id: "banana",
          name: "Banana",
          category: "produce",
          detail: "Generic reference • 1 medium",
          baseAmount: 1,
          baseUnit: "piece",
          calories: 105,
          protein: 1.3,
          carbs: 27,
          fat: 0.4,
          fiber: 3.1,
          sodium: 1,
          sugar: 14.4,
          units: ["piece"],
          source: "NEXT // BITE QUICK FOOD"
        },
        {
          id: "apple",
          name: "Apple",
          category: "produce",
          detail: "Generic reference • 1 medium",
          baseAmount: 1,
          baseUnit: "piece",
          calories: 95,
          protein: 0.5,
          carbs: 25,
          fat: 0.3,
          fiber: 4.4,
          sodium: 2,
          sugar: 19,
          units: ["piece"],
          source: "NEXT // BITE QUICK FOOD"
        },
        {
          id: "raspberries",
          name: "Raspberries",
          category: "produce",
          detail: "Generic reference • fresh",
          baseAmount: 100,
          baseUnit: "g",
          calories: 52,
          protein: 1.2,
          carbs: 11.9,
          fat: 0.7,
          fiber: 6.5,
          sodium: 1,
          sugar: 4.4,
          units: ["g", "oz"],
          source: "NEXT // BITE QUICK FOOD"
        }
      ];

      const defaultData = {
        activeProfileId: "profile-1",

        profiles: [
          {
            id: "profile-1",
            name: "My Profile",

            goals: {
              calories: 2200,
              protein: 170,
              carbs: 220,
              fat: 70,
              fiber: 30
            },

            logs: {},
            recentFoods: []
          }
        ]
      };

      let data = loadData();

      let selectedDate = dateKey(new Date());
      let currentFoodTab = "all";
      let selectedFood = null;
      let liveFoodResults = [];

      function loadData() {
        try {
          const stored =
            localStorage.getItem(STORAGE_KEY);

          if (!stored) {
            return JSON.parse(
              JSON.stringify(defaultData)
            );
          }

          const parsed = JSON.parse(stored);

          if (
            !parsed.profiles ||
            !parsed.profiles.length
          ) {
            return JSON.parse(
              JSON.stringify(defaultData)
            );
          }

          parsed.profiles.forEach(profile => {
            profile.logs =
              profile.logs || {};

            profile.recentFoods =
              profile.recentFoods || [];

            profile.goals = {
              calories: 2200,
              protein: 170,
              carbs: 220,
              fat: 70,
              fiber: 30,
              ...(profile.goals || {})
            };
          });

          return parsed;

        } catch {
          return JSON.parse(
            JSON.stringify(defaultData)
          );
        }
      }

      function saveData() {
        localStorage.setItem(
          STORAGE_KEY,
          JSON.stringify(data)
        );
      }

      function activeProfile() {
        return (
          data.profiles.find(
            profile =>
              profile.id ===
              data.activeProfileId
          ) ||
          data.profiles[0]
        );
      }

      function dateKey(date) {
        const y =
          date.getFullYear();

        const m =
          String(
            date.getMonth() + 1
          ).padStart(2, "0");

        const d =
          String(
            date.getDate()
          ).padStart(2, "0");

        return `${y}-${m}-${d}`;
      }

      function dateFromKey(key) {
        const [y, m, d] =
          key.split("-").map(Number);

        return new Date(
          y,
          m - 1,
          d
        );
      }

      function dayLog(create = false) {
        const profile =
          activeProfile();

        if (
          !profile.logs[selectedDate] &&
          create
        ) {
          profile.logs[selectedDate] = {
            breakfast: [],
            lunch: [],
            dinner: [],
            snacks: []
          };
        }

        return (
          profile.logs[selectedDate] || {
            breakfast: [],
            lunch: [],
            dinner: [],
            snacks: []
          }
        );
      }

      function uid() {
        return (
          `${Date.now()}-` +
          Math.random()
            .toString(36)
            .slice(2)
        );
      }

      function num(value) {
        const n =
          Number(value);

        return Number.isFinite(n)
          ? n
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

      function escapeHTML(value) {
        return String(value ?? "")
          .replaceAll("&", "&amp;")
          .replaceAll("<", "&lt;")
          .replaceAll(">", "&gt;")
          .replaceAll('"', "&quot;")
          .replaceAll("'", "&#039;");
      }

      function showToast(message) {
        const toast =
          document.getElementById("toast");

        toast.textContent =
          message;

        toast.classList.remove(
          "hidden"
        );

        clearTimeout(
          showToast.timer
        );

        showToast.timer =
          setTimeout(() => {
            toast.classList.add(
              "hidden"
            );
          }, 2600);
      }

      function openModal(id) {
        document
          .getElementById(id)
          .classList.remove("hidden");
      }

      function closeModal(id) {
        document
          .getElementById(id)
          .classList.add("hidden");
      }

      function showPage(page) {
        [
          "today",
          "add",
          "history",
          "more"
        ].forEach(name => {
          document
            .getElementById(
              `page-${name}`
            )
            .classList.toggle(
              "hidden",
              name !== page
            );
        });

        document
          .querySelectorAll(
            ".nav-btn"
          )
          .forEach(btn => {
            btn.classList.toggle(
              "active",
              btn.dataset.page === page
            );
          });

        if (page === "today") {
          renderToday();
        }

        if (page === "add") {
          renderRecentFoods();
        }

        if (page === "history") {
          renderHistory();
        }

        window.scrollTo({
          top: 0,
          behavior: "smooth"
        });
      }

      function renderProfiles() {
        const select =
          document.getElementById(
            "profileSelect"
          );

        select.innerHTML =
          data.profiles
            .map(profile => `
              <option
                value="${escapeHTML(
                  profile.id
                )}"
              >
                ${escapeHTML(
                  profile.name
                )}
              </option>
            `)
            .join("");

        select.value =
          activeProfile().id;
      }

      function totalsForLog(log) {
        const total = {
          calories: 0,
          protein: 0,
          carbs: 0,
          fat: 0,
          fiber: 0
        };

        Object
          .values(log)
          .flat()
          .forEach(food => {
            total.calories +=
              num(food.calories);

            total.protein +=
              num(food.protein);

            total.carbs +=
              num(food.carbs);

            total.fat +=
              num(food.fat);

            total.fiber +=
              num(food.fiber);
          });

        return total;
      }

      function renderToday() {
        const profile =
          activeProfile();

        const goals =
          profile.goals;

        const log =
          dayLog();

        const totals =
          totalsForLog(log);

        const date =
          dateFromKey(
            selectedDate
          );

        document.getElementById(
          "todayDate"
        ).textContent =
          date.toLocaleDateString(
            undefined,
            {
              weekday: "long",
              month: "short",
              day: "numeric"
            }
          );

        document.getElementById(
          "usedCalories"
        ).textContent =
          Math.round(
            totals.calories
          );

        document.getElementById(
          "goalCalories"
        ).textContent =
          goals.calories;

        const remaining =
          goals.calories -
          totals.calories;

        document.getElementById(
          "remainingCalories"
        ).textContent =
          remaining >= 0
            ? `${Math.round(
                remaining
              )} remaining`
            : `${Math.abs(
                Math.round(
                  remaining
                )
              )} over target`;

        const pct =
          goals.calories
            ? Math.min(
                (
                  totals.calories /
                  goals.calories
                ) * 100,
                100
              )
            : 0;

        document.getElementById(
          "calorieProgress"
        ).style.width =
          `${pct}%`;

        document.getElementById(
          "proteinTotal"
        ).textContent =
          `${round(
            totals.protein
          )}g`;

        document.getElementById(
          "carbTotal"
        ).textContent =
          `${round(
            totals.carbs
          )}g`;

        document.getElementById(
          "fatTotal"
        ).textContent =
          `${round(
            totals.fat
          )}g`;

        document.getElementById(
          "fiberTotal"
        ).textContent =
          `${round(
            totals.fiber
          )}g`;

        renderMeals(log);
      }

      function renderMeals(log) {
        const names = {
          breakfast: "Breakfast",
          lunch: "Lunch",
          dinner: "Dinner",
          snacks: "Snacks"
        };

        document.getElementById(
          "mealList"
        ).innerHTML =
          Object
            .keys(names)
            .map(meal => {
              const foods =
                log[meal] || [];

              const mealCalories =
                foods.reduce(
                  (
                    sum,
                    food
                  ) =>
                    sum +
                    num(
                      food.calories
                    ),
                  0
                );

              return `
                <div class="meal-card">

                  <div class="meal-head">
                    <div>
                      <div class="meal-title">
                        ${names[meal]}
                      </div>

                      <div class="meal-total">
                        ${Math.round(
                          mealCalories
                        )} calories
                      </div>
                    </div>

                    <button
                      class="tiny-btn meal-add-btn"
                      data-meal="${meal}"
                    >
                      + Add
                    </button>
                  </div>

                  ${
                    foods.length
                      ? foods
                          .map(food => `
                            <div class="food-row">

                              <div class="food-row-top">
                                <div>

                                  <div class="food-name">
                                    ${escapeHTML(
                                      food.name
                                    )}
                                  </div>

                                  <div class="food-meta">
                                    ${escapeHTML(
                                      food.amount
                                    )}
                                    ${escapeHTML(
                                      food.unit
                                    )}
                                    ·
                                    ${Math.round(
                                      num(
                                        food.calories
                                      )
                                    )} cal
                                    ·
                                    ${round(
                                      food.protein
                                    )}g protein
                                  </div>

                                </div>
                              </div>

                              <div class="food-actions">

                                <button
                                  class="tiny-btn duplicate-food"
                                  data-meal="${meal}"
                                  data-id="${food.id}"
                                >
                                  Duplicate
                                </button>

                                <button
                                  class="tiny-btn danger delete-food"
                                  data-meal="${meal}"
                                  data-id="${food.id}"
                                >
                                  Delete
                                </button>

                              </div>
                            </div>
                          `)
                          .join("")
                      : ""
                  }

                </div>
              `;
            })
            .join("");

        document
          .querySelectorAll(
            ".meal-add-btn"
          )
          .forEach(btn => {
            btn.addEventListener(
              "click",
              () => {
                document.getElementById(
                  "portionMeal"
                ).value =
                  btn.dataset.meal;

                openFoodLibrary();
              }
            );
          });

        document
          .querySelectorAll(
            ".delete-food"
          )
          .forEach(btn => {
            btn.addEventListener(
              "click",
              () => {
                const log =
                  dayLog(true);

                log[
                  btn.dataset.meal
                ] =
                  log[
                    btn.dataset.meal
                  ].filter(
                    food =>
                      food.id !==
                      btn.dataset.id
                  );

                saveData();
                renderAll();
              }
            );
          });

        document
          .querySelectorAll(
            ".duplicate-food"
          )
          .forEach(btn => {
            btn.addEventListener(
              "click",
              () => {
                const log =
                  dayLog(true);

                const original =
                  log[
                    btn.dataset.meal
                  ].find(
                    food =>
                      food.id ===
                      btn.dataset.id
                  );

                if (!original) {
                  return;
                }

                log[
                  btn.dataset.meal
                ].push({
                  ...original,
                  id: uid()
                });

                saveData();
                renderAll();

                showToast(
                  "Food duplicated."
                );
              }
            );
          });
      }

      function openFoodLibrary() {
        currentFoodTab =
          "all";

        liveFoodResults =
          [];

        document.getElementById(
          "foodSearch"
        ).value = "";

        document.getElementById(
          "liveSearchStatus"
        ).textContent = "";

        document
          .querySelectorAll(
            "[data-food-tab]"
          )
          .forEach(tab => {
            tab.classList.toggle(
              "active",
              tab.dataset.foodTab ===
                "all"
            );
          });

        renderFoodResults();

        openModal(
          "foodLibraryModal"
        );

        setTimeout(() => {
          document.getElementById(
            "foodSearch"
          ).focus();
        }, 100);
      }

      function getRecentFoods() {
        return (
          activeProfile()
            .recentFoods || []
        );
      }

      function getFilteredLocalFoods() {
        const query =
          document
            .getElementById(
              "foodSearch"
            )
            .value
            .trim()
            .toLowerCase();

        let foods =
          [...FOOD_LIBRARY];

        if (
          currentFoodTab ===
          "recent"
        ) {
          foods =
            getRecentFoods();
        }

        if (
          [
            "protein",
            "carbs",
            "produce"
          ].includes(
            currentFoodTab
          )
        ) {
          foods =
            foods.filter(
              food =>
                food.category ===
                currentFoodTab
            );
        }

        if (query) {
          foods =
            foods.filter(
              food =>
                `${food.name} ${food.detail}`
                  .toLowerCase()
                  .includes(query)
            );
        }

        return foods;
      }

      function normalizeOFFProduct(
        product
      ) {
        const n =
          product.nutriments || {};

        let calories =
          num(
            n[
              "energy-kcal_100g"
            ]
          );

        if (
          !calories &&
          num(n.energy_100g)
        ) {
          calories =
            num(
              n.energy_100g
            ) / 4.184;
        }

        const protein =
          num(
            n.proteins_100g
          );

        const carbs =
          num(
            n.carbohydrates_100g
          );

        const fat =
          num(
            n.fat_100g
          );

        const fiber =
          num(
            n.fiber_100g
          );

        const sugar =
          num(
            n.sugars_100g
          );

        const sodium =
          num(
            n.sodium_100g
          ) * 1000;

        if (
          !product.product_name
        ) {
          return null;
        }

        if (
          calories <= 0 &&
          protein <= 0 &&
          carbs <= 0 &&
          fat <= 0
        ) {
          return null;
        }

        return {
          id:
            `off-${
              product.code ||
              uid()
            }`,

          externalCode:
            product.code || "",

          name:
            product.product_name,

          category:
            "database",

          detail:
            [
              product.brands,
              product.quantity
            ]
              .filter(Boolean)
              .join(" • ") ||
            "Packaged food",

          baseAmount: 100,
          baseUnit: "g",

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

          sodium:
            round(sodium),

          sugar:
            round(sugar),

          units:
            ["g", "oz"],

          servingSize:
            product.serving_size ||
            "",

          source:
            "OPEN FOOD FACTS"
        };
      }

      async function searchLiveFoodDatabase() {
        const query =
          document
            .getElementById(
              "foodSearch"
            )
            .value
            .trim();

        const status =
          document.getElementById(
            "liveSearchStatus"
          );

        const button =
          document.getElementById(
            "liveFoodSearchBtn"
          );

        if (
          query.length < 2
        ) {
          showToast(
            "Type at least 2 letters first."
          );

          return;
        }

        status.textContent =
          "Searching food database...";

        button.disabled =
          true;

        button.textContent =
          "Searching...";

        liveFoodResults =
          [];

        try {
          const params =
            new URLSearchParams({
              search_terms:
                query,

              search_simple:
                "1",

              action:
                "process",

              json:
                "1",

              page_size:
                "20",

              fields: [
                "code",
                "product_name",
                "brands",
                "quantity",
                "serving_size",
                "nutriments"
              ].join(",")
            });

          const url =
            "https://world.openfoodfacts.org/cgi/search.pl?" +
            params.toString();

          const response =
            await fetch(url, {
              method: "GET",
              headers: {
                Accept:
                  "application/json"
              }
            });

          if (
            !response.ok
          ) {
            throw new Error(
              `Food search failed: ${response.status}`
            );
          }

          const result =
            await response.json();

          liveFoodResults =
            (
              result.products ||
              []
            )
              .map(
                normalizeOFFProduct
              )
              .filter(Boolean);

          if (
            !liveFoodResults.length
          ) {
            status.textContent =
              "No database matches found. Try a more specific search.";
          } else {
            status.textContent =
              `${liveFoodResults.length} database match${
                liveFoodResults.length ===
                1
                  ? ""
                  : "es"
              } found`;
          }

          renderFoodResults();

        } catch (error) {
          console.error(error);

          liveFoodResults =
            [];

          status.textContent =
            "Couldn't reach the food database. Try again in a moment.";

          renderFoodResults();

        } finally {
          button.disabled =
            false;

          button.textContent =
            "Search Food Database";
        }
      }

      function renderFoodResults() {
        const localFoods =
          getFilteredLocalFoods();

        const container =
          document.getElementById(
            "foodResults"
          );

        const query =
          document
            .getElementById(
              "foodSearch"
            )
            .value
            .trim()
            .toLowerCase();

        const liveFoods =
          query
            ? liveFoodResults.filter(
                food =>
                  `${food.name} ${food.detail}`
                    .toLowerCase()
                    .includes(query)
              )
            : liveFoodResults;

        if (
          !localFoods.length &&
          !liveFoods.length
        ) {
          container.innerHTML = `
            <div class="empty">
              No local matches yet.<br><br>
              Tap <strong>Search Food Database</strong>
              to search live products.
            </div>
          `;

          return;
        }

        let html = "";

        if (
          liveFoods.length
        ) {
          html += `
            <div class="library-section-title">
              FOOD DATABASE
            </div>

            ${liveFoods
              .map(
                (
                  food,
                  index
                ) => `
                  <button
                    class="food-option"
                    data-live-food-index="${index}"
                  >
                    <div>

                      <div class="food-option-name">
                        ${escapeHTML(
                          food.name
                        )}
                      </div>

                      <div class="food-option-detail">
                        ${escapeHTML(
                          food.detail
                        )}
                      </div>

                      ${
                        food.servingSize
                          ? `
                            <div class="food-option-detail">
                              Label serving:
                              ${escapeHTML(
                                food.servingSize
                              )}
                            </div>
                          `
                          : ""
                      }

                    </div>

                    <div class="food-option-cal">
                      ${Math.round(
                        food.calories
                      )}

                      <small>
                        per 100g
                      </small>
                    </div>
                  </button>
                `
              )
              .join("")}
          `;
        }

        if (
          localFoods.length
        ) {
          html += `
            <div class="library-section-title">
              ${
                currentFoodTab ===
                "recent"
                  ? "RECENT FOODS"
                  : "QUICK FOODS"
              }
            </div>

            ${localFoods
              .map(
                (
                  food,
                  index
                ) => `
                  <button
                    class="food-option"
                    data-local-food-index="${index}"
                  >
                    <div>

                      <div class="food-option-name">
                        ${escapeHTML(
                          food.name
                        )}
                      </div>

                      <div class="food-option-detail">
                        ${escapeHTML(
                          food.detail
                        )}
                      </div>

                    </div>

                    <div class="food-option-cal">
                      ${Math.round(
                        food.calories
                      )}

                      <small>
                        saved
                      </small>
                    </div>
                  </button>
                `
              )
              .join("")}
          `;
        }

        container.innerHTML =
          html;

        container
          .querySelectorAll(
            "[data-live-food-index]"
          )
          .forEach(btn => {
            btn.addEventListener(
              "click",
              () => {
                const food =
                  liveFoods[
                    Number(
                      btn.dataset
                        .liveFoodIndex
                    )
                  ];

                if (food) {
                  selectFood(
                    food
                  );
                }
              }
            );
          });

        container
          .querySelectorAll(
            "[data-local-food-index]"
          )
          .forEach(btn => {
            btn.addEventListener(
              "click",
              () => {
                const food =
                  localFoods[
                    Number(
                      btn.dataset
                        .localFoodIndex
                    )
                  ];

                if (food) {
                  selectFood(
                    food
                  );
                }
              }
            );
          });
      }

      function selectFood(food) {
        selectedFood =
          food;

        document.getElementById(
          "selectedFoodName"
        ).textContent =
          food.name;

        document.getElementById(
          "selectedFoodDetail"
        ).textContent =
          [
            food.detail,
            food.servingSize
              ? `Label serving: ${food.servingSize}`
              : ""
          ]
            .filter(Boolean)
            .join(" • ");

        document.getElementById(
          "selectedFoodSource"
        ).textContent =
          food.source ||
          "NEXT // BITE";

        const unitSelect =
          document.getElementById(
            "portionUnit"
          );

        unitSelect.innerHTML =
          (
            food.units || [
              "g",
              "oz"
            ]
          )
            .map(unit => `
              <option
                value="${escapeHTML(
                  unit
                )}"
              >
                ${escapeHTML(
                  unit
                )}
              </option>
            `)
            .join("");

        unitSelect.value =
          food.baseUnit ||
          "g";

        document.getElementById(
          "portionAmount"
        ).value =
          food.baseAmount ||
          100;

        updateNutritionPreview();

        closeModal(
          "foodLibraryModal"
        );

        openModal(
          "portionModal"
        );
      }

      function gramsFromAmount(
        amount,
        unit
      ) {
        if (unit === "g") {
          return amount;
        }

        if (unit === "oz") {
          return (
            amount *
            28.349523125
          );
        }

        return null;
      }

      function foodMultiplier(
        food,
        amount,
        unit
      ) {
        amount =
          num(amount);

        if (
          amount <= 0
        ) {
          return 0;
        }

        if (
          food.baseUnit ===
          "g"
        ) {
          const grams =
            gramsFromAmount(
              amount,
              unit
            );

          if (
            grams !== null
          ) {
            return (
              grams /
              food.baseAmount
            );
          }

          if (
            unit ===
            "serving"
          ) {
            return amount;
          }
        }

        if (
          food.baseUnit ===
            "piece" &&
          unit === "piece"
        ) {
          return (
            amount /
            food.baseAmount
          );
        }

        if (
          food.baseUnit ===
            "container" &&
          unit ===
            "container"
        ) {
          return (
            amount /
            food.baseAmount
          );
        }

        if (
          unit ===
          "serving"
        ) {
          return amount;
        }

        return (
          amount /
          food.baseAmount
        );
      }

      function nutritionForSelection() {
        if (
          !selectedFood
        ) {
          return null;
        }

        const amount =
          num(
            document.getElementById(
              "portionAmount"
            ).value
          );

        const unit =
          document.getElementById(
            "portionUnit"
          ).value;

        const multiplier =
          foodMultiplier(
            selectedFood,
            amount,
            unit
          );

        return {
          amount,
          unit,

          calories:
            round(
              selectedFood.calories *
              multiplier
            ),

          protein:
            round(
              selectedFood.protein *
              multiplier
            ),

          carbs:
            round(
              selectedFood.carbs *
              multiplier
            ),

          fat:
            round(
              selectedFood.fat *
              multiplier
            ),

          fiber:
            round(
              selectedFood.fiber *
              multiplier
            ),

          sodium:
            round(
              num(
                selectedFood.sodium
              ) *
              multiplier
            ),

          sugar:
            round(
              num(
                selectedFood.sugar
              ) *
              multiplier
            )
        };
      }

      function updateNutritionPreview() {
        const nutrition =
          nutritionForSelection();

        if (
          !nutrition
        ) {
          return;
        }

        document.getElementById(
          "previewCalories"
        ).textContent =
          Math.round(
            nutrition.calories
          );

        document.getElementById(
          "previewProtein"
        ).textContent =
          `${nutrition.protein}g`;

        document.getElementById(
          "previewCarbs"
        ).textContent =
          `${nutrition.carbs}g`;

        document.getElementById(
          "previewFat"
        ).textContent =
          `${nutrition.fat}g`;

        document.getElementById(
          "previewFiber"
        ).textContent =
          `${nutrition.fiber}g`;

        document.getElementById(
          "moreNutrition"
        ).innerHTML = `
          Sodium:
          ${Math.round(
            nutrition.sodium
          )}mg
          &nbsp; · &nbsp;
          Sugar:
          ${nutrition.sugar}g
        `;
      }

      function rememberRecentFood(
        food
      ) {
        const profile =
          activeProfile();

        profile.recentFoods =
          profile.recentFoods ||
          [];

        const savedFood = {
          ...food
        };

        profile.recentFoods =
          profile.recentFoods.filter(
            item =>
              item.id !==
              savedFood.id
          );

        profile.recentFoods.unshift(
          savedFood
        );

        profile.recentFoods =
          profile.recentFoods.slice(
            0,
            25
          );
      }

      function addSelectedFood() {
        if (
          !selectedFood
        ) {
          return;
        }

        const nutrition =
          nutritionForSelection();

        if (
          !nutrition ||
          nutrition.amount <= 0
        ) {
          showToast(
            "Enter an amount greater than zero."
          );

          return;
        }

        const meal =
          document.getElementById(
            "portionMeal"
          ).value;

        const log =
          dayLog(true);

        log[meal].push({
          id: uid(),

          libraryId:
            selectedFood.id,

          name:
            selectedFood.name,

          source:
            selectedFood.source,

          amount:
            nutrition.amount,

          unit:
            nutrition.unit,

          calories:
            nutrition.calories,

          protein:
            nutrition.protein,

          carbs:
            nutrition.carbs,

          fat:
            nutrition.fat,

          fiber:
            nutrition.fiber,

          sodium:
            nutrition.sodium,

          sugar:
            nutrition.sugar
        });

        rememberRecentFood(
          selectedFood
        );

        saveData();

        closeModal(
          "portionModal"
        );

        selectedFood =
          null;

        renderAll();

        showPage(
          "today"
        );

        showToast(
          "Added to your day."
        );
      }

      function renderRecentFoods() {
        const foods =
          getRecentFoods()
            .slice(0, 6);

        const container =
          document.getElementById(
            "recentFoods"
          );

        if (
          !foods.length
        ) {
          container.innerHTML = `
            <strong>
              No recent foods yet
            </strong>

            <div class="food-meta">
              Foods you log will show up here.
            </div>
          `;

          return;
        }

        container.innerHTML =
          foods
            .map(
              (
                food,
                index
              ) => `
                <button
                  class="food-option recent-food-option"
                  data-recent-index="${index}"
                >
                  <div>

                    <div class="food-option-name">
                      ${escapeHTML(
                        food.name
                      )}
                    </div>

                    <div class="food-option-detail">
                      ${escapeHTML(
                        food.detail ||
                        food.source ||
                        ""
                      )}
                    </div>

                  </div>

                  <div>›</div>
                </button>
              `
            )
            .join("");

        container
          .querySelectorAll(
            ".recent-food-option"
          )
          .forEach(btn => {
            btn.addEventListener(
              "click",
              () => {
                const food =
                  foods[
                    Number(
                      btn.dataset
                        .recentIndex
                    )
                  ];

                if (food) {
                  selectFood(
                    food
                  );
                }
              }
            );
          });
      }

      function addManualFood() {
        const name =
          document
            .getElementById(
              "manualName"
            )
            .value
            .trim();

        if (!name) {
          showToast(
            "Give the food a name first."
          );

          return;
        }

        const meal =
          document.getElementById(
            "manualMeal"
          ).value;

        const log =
          dayLog(true);

        log[meal].push({
          id: uid(),

          name,

          amount:
            num(
              document.getElementById(
                "manualAmount"
              ).value
            ),

          unit:
            document.getElementById(
              "manualUnit"
            ).value,

          calories:
            num(
              document.getElementById(
                "manualCalories"
              ).value
            ),

          protein:
            num(
              document.getElementById(
                "manualProtein"
              ).value
            ),

          carbs:
            num(
              document.getElementById(
                "manualCarbs"
              ).value
            ),

          fat:
            num(
              document.getElementById(
                "manualFat"
              ).value
            ),

          fiber:
            num(
              document.getElementById(
                "manualFiber"
              ).value
            )
        });

        saveData();

        closeModal(
          "manualModal"
        );

        document.getElementById(
          "manualName"
        ).value = "";

        renderAll();

        showPage(
          "today"
        );

        showToast(
          "Custom food added."
        );
      }

      function renderHistory() {
        const profile =
          activeProfile();

        const dates =
          Object
            .keys(
              profile.logs
            )
            .sort()
            .reverse();

        const container =
          document.getElementById(
            "historyList"
          );

        if (
          !dates.length
        ) {
          container.innerHTML = `
            <div class="card">

              <strong>
                No history yet
              </strong>

              <div class="food-meta">
                Start logging and your days will appear here.
              </div>

            </div>
          `;

          return;
        }

        container.innerHTML =
          dates
            .map(key => {
              const totals =
                totalsForLog(
                  profile.logs[
                    key
                  ]
                );

              const date =
                dateFromKey(
                  key
                );

              return `
                <div class="card history-day">

                  <div class="history-date">
                    ${date.toLocaleDateString(
                      undefined,
                      {
                        weekday:
                          "short",

                        month:
                          "short",

                        day:
                          "numeric"
                      }
                    )}
                  </div>

                  <div class="history-macros">
                    ${Math.round(
                      totals.calories
                    )} cal
                    ·
                    ${round(
                      totals.protein
                    )}g protein
                    ·
                    ${round(
                      totals.carbs
                    )}g carbs
                    ·
                    ${round(
                      totals.fat
                    )}g fat
                  </div>

                </div>
              `;
            })
            .join("");
      }

      function openGoals() {
        const goals =
          activeProfile()
            .goals;

        document.getElementById(
          "goalCaloriesInput"
        ).value =
          goals.calories;

        document.getElementById(
          "goalProteinInput"
        ).value =
          goals.protein;

        document.getElementById(
          "goalCarbsInput"
        ).value =
          goals.carbs;

        document.getElementById(
          "goalFatInput"
        ).value =
          goals.fat;

        document.getElementById(
          "goalFiberInput"
        ).value =
          goals.fiber;

        openModal(
          "goalsModal"
        );
      }

      function saveGoals() {
        const goals =
          activeProfile()
            .goals;

        goals.calories =
          num(
            document.getElementById(
              "goalCaloriesInput"
            ).value
          );

        goals.protein =
          num(
            document.getElementById(
              "goalProteinInput"
            ).value
          );

        goals.carbs =
          num(
            document.getElementById(
              "goalCarbsInput"
            ).value
          );

        goals.fat =
          num(
            document.getElementById(
              "goalFatInput"
            ).value
          );

        goals.fiber =
          num(
            document.getElementById(
              "goalFiberInput"
            ).value
          );

        saveData();

        closeModal(
          "goalsModal"
        );

        renderAll();

        showToast(
          "Goals updated."
        );
      }

      function addProfile() {
        const name =
          prompt(
            "Profile name:"
          );

        if (
          !name ||
          !name.trim()
        ) {
          return;
        }

        const id =
          `profile-${uid()}`;

        data.profiles.push({
          id,

          name:
            name.trim(),

          goals: {
            calories: 2200,
            protein: 170,
            carbs: 220,
            fat: 70,
            fiber: 30
          },

          logs: {},
          recentFoods: []
        });

        data.activeProfileId =
          id;

        saveData();
        renderAll();

        showToast(
          "Profile added."
        );
      }

      function exportData() {
        const blob =
          new Blob(
            [
              JSON.stringify(
                data,
                null,
                2
              )
            ],
            {
              type:
                "application/json"
            }
          );

        const url =
          URL.createObjectURL(
            blob
          );

        const a =
          document.createElement(
            "a"
          );

        a.href =
          url;

        a.download =
          `next-bite-backup-${dateKey(
            new Date()
          )}.json`;

        document.body.appendChild(
          a
        );

        a.click();
        a.remove();

        URL.revokeObjectURL(
          url
        );
      }

      function renderAll() {
        renderProfiles();
        renderToday();
        renderRecentFoods();
        renderHistory();
      }

      // NAVIGATION

      document
        .querySelectorAll(
          ".nav-btn"
        )
        .forEach(btn => {
          btn.addEventListener(
            "click",
            () => {
              showPage(
                btn.dataset.page
              );
            }
          );
        });

      // CLOSE MODALS

      document
        .querySelectorAll(
          "[data-close]"
        )
        .forEach(btn => {
          btn.addEventListener(
            "click",
            () => {
              closeModal(
                btn.dataset.close
              );
            }
          );
        });

      // PROFILE SWITCHING

      document
        .getElementById(
          "profileSelect"
        )
        .addEventListener(
          "change",
          event => {
            data.activeProfileId =
              event.target.value;

            saveData();
            renderAll();
          }
        );

      // DATE NAVIGATION

      document
        .getElementById(
          "prevDay"
        )
        .addEventListener(
          "click",
          () => {
            const date =
              dateFromKey(
                selectedDate
              );

            date.setDate(
              date.getDate() - 1
            );

            selectedDate =
              dateKey(date);

            renderToday();
          }
        );

      document
        .getElementById(
          "nextDay"
        )
        .addEventListener(
          "click",
          () => {
            const date =
              dateFromKey(
                selectedDate
              );

            date.setDate(
              date.getDate() + 1
            );

            selectedDate =
              dateKey(date);

            renderToday();
          }
        );

      // FOOD SEARCH

      document
        .getElementById(
          "browseFoodBtn"
        )
        .addEventListener(
          "click",
          openFoodLibrary
        );

      document
        .getElementById(
          "savedFoodsBtn"
        )
        .addEventListener(
          "click",
          () => {
            currentFoodTab =
              "recent";

            liveFoodResults =
              [];

            document.getElementById(
              "foodSearch"
            ).value = "";

            document.getElementById(
              "liveSearchStatus"
            ).textContent = "";

            document
              .querySelectorAll(
                "[data-food-tab]"
              )
              .forEach(tab => {
                tab.classList.toggle(
                  "active",
                  tab.dataset.foodTab ===
                    "recent"
                );
              });

            renderFoodResults();

            openModal(
              "foodLibraryModal"
            );
          }
        );

      document
        .getElementById(
          "foodSearch"
        )
        .addEventListener(
          "input",
          () => {
            liveFoodResults =
              [];

            document.getElementById(
              "liveSearchStatus"
            ).textContent = "";

            renderFoodResults();
          }
        );

      document
        .getElementById(
          "foodSearch"
        )
        .addEventListener(
          "keydown",
          event => {
            if (
              event.key ===
              "Enter"
            ) {
              event.preventDefault();

              searchLiveFoodDatabase();
            }
          }
        );

      document
        .getElementById(
          "liveFoodSearchBtn"
        )
        .addEventListener(
          "click",
          searchLiveFoodDatabase
        );

      document
        .querySelectorAll(
          "[data-food-tab]"
        )
        .forEach(tab => {
          tab.addEventListener(
            "click",
            () => {
              currentFoodTab =
                tab.dataset.foodTab;

              document
                .querySelectorAll(
                  "[data-food-tab]"
                )
                .forEach(item => {
                  item.classList.toggle(
                    "active",
                    item === tab
                  );
                });

              renderFoodResults();
            }
          );
        });

      // PORTION

      document
        .getElementById(
          "portionAmount"
        )
        .addEventListener(
          "input",
          updateNutritionPreview
        );

      document
        .getElementById(
          "portionUnit"
        )
        .addEventListener(
          "change",
          updateNutritionPreview
        );

      document
        .getElementById(
          "addSelectedFoodBtn"
        )
        .addEventListener(
          "click",
          addSelectedFood
        );

      // CUSTOM FOOD

      document
        .getElementById(
          "manualBtn"
        )
        .addEventListener(
          "click",
          () => {
            openModal(
              "manualModal"
            );
          }
        );

      document
        .getElementById(
          "addManualBtn"
        )
        .addEventListener(
          "click",
          addManualFood
        );

      // BARCODE

      document
        .getElementById(
          "barcodeBtn"
        )
        .addEventListener(
          "click",
          () => {
            showToast(
              "Barcode camera is next."
            );
          }
        );

      // GOALS

      document
        .getElementById(
          "goalsBtn"
        )
        .addEventListener(
          "click",
          openGoals
        );

      document
        .getElementById(
          "saveGoalsBtn"
        )
        .addEventListener(
          "click",
          saveGoals
        );

      // PROFILES

      document
        .getElementById(
          "addProfileBtn"
        )
        .addEventListener(
          "click",
          addProfile
        );

      // EXPORT

      document
        .getElementById(
          "exportBtn"
        )
        .addEventListener(
          "click",
          exportData
        );

      renderAll();

    })();

    // Register NEXT // BITE service worker

    if (
      "serviceWorker" in
      navigator
    ) {
      window.addEventListener(
        "load",
        () => {
          navigator
            .serviceWorker
            .register(
              "./sw.js"
            )
            .catch(error => {
              console.log(
                "Service worker registration failed:",
                error
              );
            });
        }
      );
    }
  </script>

</body>
</html>
Now it's the easy iPhone version: Select All → delete → paste → Commit changes.

Once GitHub gives you the green check, don't test the turkey first. 😂 Search Premier Protein Vanilla → Search Food Database. That's a much cleaner test because we know we're looking for a specific branded product.

Then show me what comes up. After we know the live database connection is working, I'll give you the complete replacement sw.js so we stop the service worker from caching live nutrition requests.


Ok that’s done what’s next

Now we test the live database connection before changing anything else. 👍

Open/refresh NEXT // BITE in Safari:

Open NEXT // BITE

Go to Add → Find Food, type:

Premier Protein Vanilla

Then tap Search Food Database.

We want to see a new FOOD DATABASE section with actual Premier Protein products underneath it. Don't add one yet.

Send me a screenshot of the results you get. If that works, we'll select the correct product and verify that the nutrition it pulls matches the bottle before we move on.



Yep — that screenshot tells us exactly what happened. The new interface loaded correctly, but the request to Open Food Facts failed. So the NEXT // BITE code itself didn't crash; it's specifically the database connection.

I checked the current Open Food Facts documentation, and there are two things worth correcting before we keep poking at it: their current API docs recommend v3 for new integrations, while plain-text product search still relies on their legacy search system; they also limit search requests to 10/minute per IP. 

More importantly, I don't want you doing surgery on this file from your iPhone again.

Next move
I'm going to give you another complete index.html replacement, but I'm going to change the search implementation rather than just changing an endpoint and hoping for the best.

I also want to improve the behavior at the same time:

Type food → tap Search → results → choose product → portion → nutrition → Add to Day.

And once we have a product's barcode, we can use Open Food Facts' supported product endpoint to retrieve the actual product record and nutrition details. Their current API explicitly supports fetching product details by barcode and limiting the returned fields. 

One other good thing from your screenshot: the redesign itself looks right. Search sheet, tabs, button, safe areas, etc. all survived the replacement.

So don't change anything else in GitHub yet. The next thing we change is the full index.html again with the corrected search connection.


Ok I’ll wait for the coding and yes design looks good

Perfect. I like the design too. The actual problem is the search method, and I found the cleaner route: Open Food Facts now has Search-a-licious, which provides a dedicated full-text search API. The older endpoint we used is their legacy full-text search, while their normal v2 search endpoint doesn't support searches like “Premier Protein Vanilla.” 

I'm rebuilding the full replacement around that rather than trying to patch the broken request.

One important change: the search service can return the matching products, and then NEXT // BITE can use the product's barcode to retrieve its actual product/nutrition record from Open Food Facts. 

So don't touch anything in GitHub yet. The next replacement will keep the design you just approved and change the plumbing underneath it.


Sounds good

👍


Send me the coding lol 

😂 Fair. I deserved that after twice telling you the code was coming.

I checked the current Search-a-licious docs before sending another giant file. The important correction is that its actual search endpoint is /search, supports GET or POST, and takes q, page_size, fields, and language parameters. 

But I caught a bigger issue before making you replace 1,500 lines again: I don't yet have evidence that search.openfoodfacts.org permits browser requests directly from a GitHub Pages site. That's exactly the kind of cross-origin restriction that likely caused the first failure.

So I don't want to hand you another giant index.html that looks right and then gives you the same “couldn't reach database” message.

The robust version is going to use a tiny serverless API bridge between NEXT // BITE and the food database:

NEXT // BITE → our /api/foods endpoint → Open Food Facts → NEXT // BITE

That also gives us a much better foundation for adding USDA generic foods, restaurant nutrition, and barcode lookup later without stuffing API credentials or fragile third-party calls into the public index.html.

Since the app is currently hosted entirely on GitHub Pages, though, GitHub Pages can't run that server-side endpoint. So before I dump more code on you, we need to add one small backend service (Cloudflare Worker or similar), while keeping the actual app on GitHub Pages.

I should have caught that architecture issue before the first replacement rather than making you be the API debugger at 7 AM. 😅


So I have to make something on cloud fare

Yes — but it's much smaller than it sounds. 😅

You do not need to move NEXT // BITE off GitHub or rebuild the app on Cloudflare. GitHub Pages stays exactly where it is.

We'd create one tiny Cloudflare Worker whose entire job is basically:

NEXT // BITE → Cloudflare Worker → food database → results back to NEXT // BITE

Then I give you the Worker code as a complete copy/paste, you deploy it, Cloudflare gives us an address for it, and I put that address into the next full index.html.

So you'd have:

GitHub: the actual NEXT // BITE app
Cloudflare: the little messenger that talks to food databases for us

And this actually helps us later because the same Worker can handle food search, barcode lookup, USDA foods, and eventually other nutrition sources without exposing private API keys inside your GitHub code.

If you're ready, I'll walk you through creating the Cloudflare Worker from your iPhone, one screen at a time so we're not bouncing all over the place.


Let’s do it 

Yep. We’ll do this one screen at a time, iPhone-friendly. No code yet.

Step 1: Create/sign into Cloudflare
Open Cloudflare and either sign in or create a free account.

Once you're in the dashboard, look for Workers & Pages. Cloudflare's current instructions say that's where we create a Worker, then choose Create application. 

For now, stop when you reach the Workers & Pages screen.

Send me a screenshot of what you see there, and I'll tell you exactly what to tap next. That way we're following what Cloudflare actually shows on your iPhone rather than me giving you six steps and Cloudflare deciding to rename a button halfway through. 😂



Perfect — you're exactly where we need to be.

Tap the blue Create application button.

On the next screen, don't choose anything yet. Send me a screenshot of what it gives you, and I'll tell you exactly which option to pick.



Yep, that's the right screen. 👍

Tap Start with Hello World! 🌎

That's the easiest way to create our little Worker without connecting GitHub or moving NEXT // BITE anywhere.

On the next screen, stop before deploying anything and send me a screenshot. I'll tell you what to name it and what to tap next.



Perfect. This is exactly it.

Tap the Worker name field and replace only blue-frog-2bba with:

next-bite-api

So the full address underneath should become something like:

next-bite-api.aaronrozsa.workers.dev

You do not need to touch the Hello World code yet.

Once you see the blue checkmark beside the new name, tap Deploy.

Then send me a screenshot of the next screen. That's where we'll replace Hello World with the actual NEXT // BITE food-database code.



Perfect. 🎉 Worker is deployed and we have its address.

Now we need to replace the useless “Hello World” code with our food API code.

On this screen, tap the ••• button in the upper-right, next to the tabs.

Look for an option such as Edit code. If you see Edit code, tap it.

Once the code editor opens, don't delete anything yet. Send me a screenshot of that screen and I'll give you the entire replacement Worker code so, just like GitHub, you can Select All → Delete → Paste instead of doing tiny edits on the iPhone.



Perfect. That is the editor. And yep, on an iPhone it looks hilariously cramped, but we're in the right place. 😂

Now replace the whole worker.js
Tap somewhere in the code on the left. Use Select All → Delete, then paste this entire replacement:

export default {
  async fetch(request) {
    const corsHeaders = {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
      "Content-Type": "application/json; charset=UTF-8"
    };

    // Allow browser requests from NEXT // BITE
    if (request.method === "OPTIONS") {
      return new Response(null, {
        status: 204,
        headers: corsHeaders
      });
    }

    if (request.method !== "GET") {
      return jsonResponse(
        {
          error: "Method not allowed"
        },
        405,
        corsHeaders
      );
    }

    try {
      const url = new URL(request.url);

      // -----------------------------------
      // HEALTH CHECK
      // -----------------------------------

      if (
        url.pathname === "/" ||
        url.pathname === "/health"
      ) {
        return jsonResponse(
          {
            ok: true,
            service: "NEXT // BITE API"
          },
          200,
          corsHeaders
        );
      }

      // -----------------------------------
      // FOOD SEARCH
      // /search?q=premier+protein+vanilla
      // -----------------------------------

      if (url.pathname === "/search") {
        const query =
          (url.searchParams.get("q") || "").trim();

        if (query.length < 2) {
          return jsonResponse(
            {
              error:
                "Search query must be at least 2 characters."
            },
            400,
            corsHeaders
          );
        }

        /*
          Open Food Facts search.

          The Worker makes this request instead of
          the iPhone/browser making it directly.
        */

        const searchURL =
          new URL(
            "https://world.openfoodfacts.org/cgi/search.pl"
          );

        searchURL.searchParams.set(
          "search_terms",
          query
        );

        searchURL.searchParams.set(
          "search_simple",
          "1"
        );

        searchURL.searchParams.set(
          "action",
          "process"
        );

        searchURL.searchParams.set(
          "json",
          "1"
        );

        searchURL.searchParams.set(
          "page_size",
          "20"
        );

        searchURL.searchParams.set(
          "fields",
          [
            "code",
            "product_name",
            "brands",
            "quantity",
            "serving_size",
            "nutriments"
          ].join(",")
        );

        const response =
          await fetch(
            searchURL.toString(),
            {
              headers: {
                "Accept":
                  "application/json",

                "User-Agent":
                  "NEXT-BITE/1.0"
              }
            }
          );

        if (!response.ok) {
          return jsonResponse(
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

        const products =
          (data.products || [])
            .map(normalizeProduct)
            .filter(Boolean);

        return jsonResponse(
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

      // -----------------------------------
      // BARCODE LOOKUP
      // /product?code=0123456789
      // -----------------------------------

      if (url.pathname === "/product") {
        const code =
          (url.searchParams.get("code") || "")
            .replace(/\D/g, "");

        if (!code) {
          return jsonResponse(
            {
              error:
                "Barcode is required."
            },
            400,
            corsHeaders
          );
        }

        const productURL =
          `https://world.openfoodfacts.org/api/v2/product/${encodeURIComponent(
            code
          )}.json`;

        const response =
          await fetch(
            productURL,
            {
              headers: {
                "Accept":
                  "application/json",

                "User-Agent":
                  "NEXT-BITE/1.0"
              }
            }
          );

        if (!response.ok) {
          return jsonResponse(
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
          return jsonResponse(
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
          return jsonResponse(
            {
              ok: false,
              found: false,
              error:
                "Product has incomplete nutrition data."
            },
            422,
            corsHeaders
          );
        }

        return jsonResponse(
          {
            ok: true,
            found: true,
            product
          },
          200,
          corsHeaders
        );
      }

      return jsonResponse(
        {
          error:
            "Route not found"
        },
        404,
        corsHeaders
      );

    } catch (error) {
      return jsonResponse(
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


/*
  Convert Open Food Facts data into one
  predictable format for NEXT // BITE.
*/

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
    number(
      n["energy-kcal_100g"]
    );

  /*
    If kcal isn't provided but energy in kJ is,
    convert kJ → kcal.
  */

  if (
    !calories &&
    number(n.energy_100g)
  ) {
    calories =
      number(
        n.energy_100g
      ) / 4.184;
  }

  const protein =
    number(
      n.proteins_100g
    );

  const carbs =
    number(
      n.carbohydrates_100g
    );

  const fat =
    number(
      n.fat_100g
    );

  const fiber =
    number(
      n.fiber_100g
    );

  const sugar =
    number(
      n.sugars_100g
    );

  /*
    Open Food Facts normally supplies sodium
    per 100g in grams.

    NEXT // BITE stores/display sodium in mg.
  */

  const sodium =
    number(
      n.sodium_100g
    ) * 1000;

  /*
    Don't send completely useless results
    back to the app.
  */

  if (
    calories <= 0 &&
    protein <= 0 &&
    carbs <= 0 &&
    fat <= 0
  ) {
    return null;
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

    units: [
      "g",
      "oz"
    ]
  };
}


function number(value) {
  const result =
    Number(value);

  return Number.isFinite(result)
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
        number(value) +
        Number.EPSILON
      ) *
      factor
    ) /
    factor
  );
}


function jsonResponse(
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
Then hit Deploy
That's the blue Deploy button you can already see at the top right of your screenshot.

Once deployment finishes, we're going to do a really easy test before touching GitHub again.

Open:

NEXT // BITE Worker

Instead of Hello World!, you should see something along the lines of:

{
  "ok": true,
  "service": "NEXT // BITE API"
}
If you get that, don't change index.html yet. Send me a screenshot. Then we'll test the actual food-search route directly through the Worker. Once that returns Premier Protein products, I'll wire NEXT // BITE into it.

We're making the database prove itself this time before I make you replace another monster HTML file. 😂



Ahhh, yep. I see what happened. 😂 Your code did not paste. worker.js is completely blank on line 1, and Cloudflare is telling us why:

“Unable to read from the browser's clipboard.”

So do NOT hit Deploy right now. If you do, we'd deploy an empty Worker.

This is Safari/iPhone blocking Cloudflare's editor from reading the clipboard, not a problem with the code.

Try this first
Tap the X on that clipboard error to close it.

Tap directly on line 1 so you get the normal iPhone text cursor/keyboard.

Do not use Cloudflare's paste command/button.

Long-press right beside the cursor using the normal iPhone text controls.

Tap Paste from Apple's little popup menu.

That usually bypasses Cloudflare trying to access the clipboard itself because Safari/iOS is doing the paste instead.

If iPhone still refuses to paste that giant block, stop there and tell me. I have a much less ridiculous Plan B than fighting a desktop code editor through a 6-inch phone. 😆


It won’t let me paste it either way

Yep, then we're done fighting Cloudflare's desktop editor on an iPhone. 😂

There’s a much easier route: since your code is already living in GitHub and editing files there works fine on your phone, we can have Cloudflare deploy the Worker from GitHub instead of pasting code into that editor.

You already saw Connect GitHub when we created the Worker. We can put the Worker code in a tiny GitHub repo/file, then connect Cloudflare to it. After that, future backend changes are actually easier too: update GitHub → Cloudflare redeploys.

First, get out of this editor
Tap ← next-bite-api in the upper-left. Do not deploy the blank file.

Then go back to your GitHub account.

We're going to create a new repository named:

next-bite-api

Keep this separate from the Next-Bite app repo so the front end and backend don't get tangled together.

Once you're on GitHub and have the New repository screen open, send me a screenshot. I'll walk you through the few settings, and then I'll give you the Worker file in a format GitHub will happily let you paste from your iPhone.

This should be way less obnoxious.


Ok connected to GitHub now what

Perfect, GitHub is connected. 👍

But don't select Next-Bite from that list. That's our actual app, and I want the backend kept separate so we don't make a mess of it.

Next step: create the backend repo
Open a new Safari tab and go to GitHub. Create a new repository with:

Repository name: next-bite-api

Make it Public. You can leave the other settings alone, but if GitHub gives you the option to Add a README, turn that on so the repository isn't empty.

Then tap Create repository.

Once you've created next-bite-api, come back to this Cloudflare screen and refresh if necessary. It should then appear alongside Next-Bite, NextRep, etc.

Don't select anything here yet. Once you see next-bite-api in this list, send me the screenshot and we'll do the next step.



Perfect — there it is. 🙌

Tap next-bite-api at the top of the list. It should highlight/select it and make the Next → button active.

Then tap Next →.

Stop on the next screen before changing anything and send me a screenshot. That screen should be the deployment configuration, and I want to make sure we choose the right settings for the Worker instead of accidentally deploying it like a normal website.



Yep, this is the right screen. Don't hit Deploy yet. We need the GitHub repo to actually contain the Worker code first, otherwise Cloudflare has nothing useful to deploy. 😆

Leave this Cloudflare tab exactly as it is. Open GitHub in another tab and open the new next-bite-api repository you just created.

Once you're looking at that repo, send me a screenshot. I'll have you create the needed files there, and GitHub will let you paste the code normally from your iPhone. Then we'll come right back to this screen and deploy it.



Perfect. That repo is ready. 👍 And since GitHub behaves much better on your phone, we'll create the Worker there.

Step 1: Create worker.js
Tap the ••• button immediately to the right of the green Code button.

You should get a menu with an option along the lines of Add file or Create new file.

Choose Create new file.

On the next screen:

File name: worker.js

Then stop there. Don't paste anything yet.

Send me a screenshot once you're on the blank worker.js editing screen, and I'll give you the full code again. After that we'll create one tiny configuration file, and Cloudflare should be ready to deploy the whole thing from GitHub.



Perfect. Now we can paste normally. 🙌

Tap inside “Enter file contents here” on line 1 and paste this entire worker.js:

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

      // Basic test
      if (url.pathname === "/" || url.pathname === "/health") {
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
      // Example: /search?q=premier%20protein%20vanilla
      if (url.pathname === "/search") {
        const query = (url.searchParams.get("q") || "").trim();

        if (query.length < 2) {
          return json(
            { error: "Enter at least 2 characters." },
            400,
            corsHeaders
          );
        }

        const searchUrl = new URL(
          "https://world.openfoodfacts.org/cgi/search.pl"
        );

        searchUrl.searchParams.set("search_terms", query);
        searchUrl.searchParams.set("search_simple", "1");
        searchUrl.searchParams.set("action", "process");
        searchUrl.searchParams.set("json", "1");
        searchUrl.searchParams.set("page_size", "20");
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

        const response = await fetch(searchUrl.toString(), {
          headers: {
            Accept: "application/json",
            "User-Agent": "NEXT-BITE/1.0"
          }
        });

        if (!response.ok) {
          return json(
            {
              error: "Food database search failed.",
              status: response.status
            },
            502,
            corsHeaders
          );
        }

        const data = await response.json();

        const products = (data.products || [])
          .map(normalizeProduct)
          .filter(Boolean);

        return json(
          {
            ok: true,
            query,
            count: products.length,
            products
          },
          200,
          corsHeaders
        );
      }

      // BARCODE / PRODUCT LOOKUP
      // Example: /product?code=0123456789
      if (url.pathname === "/product") {
        const code = (url.searchParams.get("code") || "")
          .replace(/\D/g, "");

        if (!code) {
          return json(
            { error: "Barcode is required." },
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

        const response = await fetch(productUrl, {
          headers: {
            Accept: "application/json",
            "User-Agent": "NEXT-BITE/1.0"
          }
        });

        if (!response.ok) {
          return json(
            { error: "Product lookup failed." },
            502,
            corsHeaders
          );
        }

        const data = await response.json();

        if (data.status !== 1 || !data.product) {
          return json(
            {
              ok: false,
              found: false
            },
            404,
            corsHeaders
          );
        }

        const product = normalizeProduct(data.product);

        if (!product) {
          return json(
            {
              ok: false,
              found: false,
              error: "Product does not have usable nutrition data."
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
        { error: "Route not found" },
        404,
        corsHeaders
      );
    } catch (error) {
      return json(
        {
          error: "NEXT // BITE API error",
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
  if (!product || !product.product_name) {
    return null;
  }

  const n = product.nutriments || {};

  let calories = num(n["energy-kcal_100g"]);

  // Some records only provide energy in kJ.
  if (!calories && num(n.energy_100g)) {
    calories = num(n.energy_100g) / 4.184;
  }

  const protein = num(n.proteins_100g);
  const carbs = num(n.carbohydrates_100g);
  const fat = num(n.fat_100g);
  const fiber = num(n.fiber_100g);
  const sugar = num(n.sugars_100g);

  // Open Food Facts generally reports sodium_100g in grams.
  // NEXT // BITE uses milligrams.
  const sodium = num(n.sodium_100g) * 1000;

  // Don't return products with no useful macro information.
  if (
    calories <= 0 &&
    protein <= 0 &&
    carbs <= 0 &&
    fat <= 0
  ) {
    return null;
  }

  const servingQuantity = num(product.serving_quantity);

  const units = ["g", "oz"];

  if (servingQuantity > 0) {
    units.push("serving");
  }

  return {
    id: `off-${product.code || crypto.randomUUID()}`,
    code: product.code || "",
    name: product.product_name,
    brand: product.brands || "",
    quantity: product.quantity || "",
    servingSize: product.serving_size || "",
    servingQuantity: servingQuantity || null,

    source: "OPEN FOOD FACTS",

    baseAmount: 100,
    baseUnit: "g",

    calories: round(calories),
    protein: round(protein),
    carbs: round(carbs),
    fat: round(fat),
    fiber: round(fiber),
    sugar: round(sugar),
    sodium: round(sodium),

    units
  };
}

function num(value) {
  const result = Number(value);
  return Number.isFinite(result) ? result : 0;
}

function round(value, digits = 1) {
  const factor = 10 ** digits;

  return (
    Math.round((num(value) + Number.EPSILON) * factor) /
    factor
  );
}

function json(data, status, headers) {
  return new Response(JSON.stringify(data, null, 2), {
    status,
    headers
  });
}
Open Food Facts currently documents the /cgi/search.pl route as its legacy full-text search, while its newer v2 search is for structured filters rather than plain-text searches. We're deliberately putting that legacy search behind our Worker so NEXT // BITE isn't tied directly to it; product-by-barcode retrieval uses their documented product API. 

After you paste it
Tap the green Commit changes... button at the top, then Commit changes again in the little confirmation window.

That's all I want you to do right now. Don't go back to Cloudflare yet.

Once you get the green check/see worker.js sitting in the repo, tell me done. Then we'll add the tiny wrangler.jsonc file. Cloudflare requires the Worker name, entry file, and compatibility date, so that file will tell it exactly what to deploy instead of letting it try to figure out our project. 


Done with that but do you want my to launch it on the branch or no 

Nope — don't launch/deploy anything from the branch yet. 👍

We still need to add the little wrangler.jsonc configuration file first. Once both files are on the main branch:

✅ worker.js — done

⏳ wrangler.jsonc — next

🚀 Then we go back to Cloudflare and deploy

So leave worker.js exactly where it is. No branch launch yet.


OK, I’m ready for the wrangler

Yep. This one is tiny compared with worker.js. 😂

In the next-bite-api GitHub repo, create another new file exactly like you did before.

Name the file:

wrangler.jsonc

Paste this entire thing into it:

{
  "name": "next-bite-api",
  "main": "worker.js",
  "compatibility_date": "2026-09-22"
}
Then tap Commit changes... → Commit changes.

Make sure you're committing it to the main branch, same as worker.js.

Once you're back at the repo, you should see all three files together: README.md, worker.js, and wrangler.jsonc.

Don't deploy anything yet. Tell me when you see all three, and then we're heading back to that Cloudflare screen.



Perfect. 🎉 All three are there on main exactly where they should be.

Now go back to the Cloudflare tab we left open. You should still be on the Set up your application screen.

Leave these settings as they were:

Project name: next-bite-api

Build command: leave blank

Deploy command: npx wrangler deploy

Preview command: leave whatever Cloudflare already populated

Enable Preview builds: leave it on

Then tap the blue Deploy button. 🚀

Cloudflare is going to pull worker.js and wrangler.jsonc directly from GitHub and build the Worker.

Once it finishes, don't change anything else. Send me a screenshot of whatever Cloudflare shows you, whether it's a beautiful green success screen or a giant angry error. 😂



Aha — found it. 😂 This is happening because we already created a Cloudflare Worker called next-bite-api earlier when we did the Hello World test. Now Cloudflare is trying to create a second project with the same name.

We don't want to mess with the existing one right now. Easiest clean fix:

Change Project name on this screen from:

next-bite-api

to:

next-bite-api-git

Leave everything else exactly as shown. Then tap Deploy.

Our wrangler.jsonc still names the actual Worker next-bite-api, so Cloudflare's Git-connected project can have the distinct name next-bite-api-git while Wrangler deploys the Worker configuration from the repo.

If Cloudflare gives us another complaint about the Worker name during deployment, that's useful — we'll deal with the existing Hello World Worker then. But don't delete anything yet.

Change that one field → Deploy → send me what it gives you.



YES. 🎉 That is a successful deployment. All four stages have green checks, including Deploying, so our GitHub → Cloudflare pipeline is working.

Now we test the actual Worker before touching NEXT // BITE.

Test #1
Open a new Safari tab and go to the Worker address we had earlier:

https://next-bite-api.aaronrozsa.workers.dev/

You should see something resembling:

{
  "ok": true,
  "service": "NEXT // BITE API"
}
If you get that, don't do anything else yet. Send me a screenshot of what Safari shows.

Then we'll test an actual food search. That's the fun one. 😎



Yep — that confirms the problem. The old Hello World Worker is still what that address is serving. The GitHub build succeeded, but it didn't replace that original Worker at this URL.

Nothing is broken; we basically have two Cloudflare projects fighting over the same name/address. 😂

Do this next
Go back to Cloudflare and tap the next-bite-api-git project we just deployed.

Go to its Overview tab — not Deployments.

I want to see what Worker URL Cloudflare assigned to the Git-connected deployment before we change or delete anything.

Send me a screenshot of that Overview screen. Then we'll point NEXT // BITE at the correct Worker and get rid of the Hello World confusion.



Yep, that screenshot tells us exactly what's happening: No URLs enabled. So the GitHub deployment itself succeeded, but Cloudflare hasn't attached a public URL to this Git-connected project yet.

Also, don't delete the old Hello World Worker. We don't need to gamble with anything.

Next step
On this screen, tap the ••• button in the upper-right, next to the Overview/Deployments tabs.

Send me a screenshot of the menu that opens.

We're looking for the option that gets us into the project's settings/configuration, where we can enable a workers.dev URL. Once that's enabled, we'll test the new API directly before touching NEXT // BITE.



Okay, that menu is not where Cloudflare hid the URL settings. 😅 Don't tap Edit code — we don't want to end up back in the editor that started this whole adventure.

Close that menu.

Then tap the No URLs enabled box itself — the white card directly underneath the tabs with the little globe icon.

If it opens something, stop there and send me a screenshot. That should get us closer to enabling the public workers.dev route without touching the code.


No, it doesn’t open anything

Okay, I checked Cloudflare's current docs so we don't keep hunting through mobile menus. We can fix this from GitHub, which is much easier on your phone.

Cloudflare says the workers_dev setting in wrangler.jsonc controls whether the Worker gets a public *.workers.dev address. 

Go back to GitHub → next-bite-api → tap wrangler.jsonc → edit it.

Replace the whole file with:

{
  "name": "next-bite-api-git",
  "main": "worker.js",
  "compatibility_date": "2026-09-22",
  "workers_dev": true,
  "preview_urls": true
}
Notice I changed the Worker name to next-bite-api-git too. That keeps it completely separate from the old next-bite-api Hello World Worker instead of having the two collide.

Then Commit changes → Commit changes to main.

Because GitHub is now connected to Cloudflare, pushing to the production branch should automatically trigger another build/deployment. 

After you commit it, don't manually deploy anything. Go back to Cloudflare and give it roughly 30–60 seconds. We should see a new deployment kick off automatically.

Tell me when you've committed that change.


Committed

Perfect. 👍 Now GitHub should automatically trigger the new Cloudflare deployment.

Go back to Cloudflare → next-bite-api-git → Deployments.

You should see a new build from the commit you just made. Wait until it finishes.

🟢 Green check: send me a screenshot.

🔴 Red/error: send me a screenshot of that instead.

Once it's green, we'll test the new next-bite-api-git address. If that returns our NEXT // BITE API JSON instead of the immortal “Hello World!” 😂, we're finally through the backend setup.



YES — that new deployment happened automatically. 🎉 The top version is from the wrangler update you just committed, so GitHub → Cloudflare is officially doing its job.

Now let's see whether we finally killed Hello World. 😂

Open a new Safari tab and go to:

https://next-bite-api-git.aaronrozsa.workers.dev/

You should now get:

{
  "ok": true,
  "service": "NEXT // BITE API"
}
If you see that, send me the screenshot. Don't test food search yet — root first, then we'll hit it with an actual Premier Protein search.



YESSS. 😂🎉 That is our Worker. The backend is officially live and serving the correct code.

Now we test whether it can actually retrieve food data.

In Safari, replace the address with:

https://next-bite-api-git.aaronrozsa.workers.dev/search?q=Premier%20Protein%20Vanilla

Open it.

We're looking for JSON containing something like:

{
  "ok": true,
  "query": "Premier Protein Vanilla",
  "count":  ...
  "products": [...]
}
The important part is that products contains actual Premier Protein results with nutrition data.

Send me a screenshot of what you get. If this works, the ugly backend plumbing is basically finished and we can finally wire this into the pretty NEXT // BITE app. 😎



YES. 🎉 It works.

That screenshot confirms the whole chain:

NEXT // BITE → our Cloudflare API → Open Food Facts → real nutrition data

And it's returning exactly the structure we need. For that first Premier Protein Vanilla result, for example, we're getting the product name, brand, serving size, barcode, calories, protein, carbs, fat, fiber, sugar, sodium, and usable units.

The 49.2 calories and 9.2 g protein you're seeing are per 100 g, not per shake. Since it also returned a serving quantity of 325 g, NEXT // BITE can calculate the full shake automatically at roughly 160 calories and 30 g protein. That's exactly what we wanted.

Next move
Now we can finally go back to the actual Next-Bite repo and wire the app's Search Food Database button to:

https://next-bite-api-git.aaronrozsa.workers.dev

Then when you type something like Premier Protein Vanilla, instead of the error we were getting earlier, you'll get actual selectable food results inside NEXT // BITE.

And because you're doing this on the iPhone, I'm not going to make you hunt through 1,000 lines of code changing little pieces. 😂

We'll replace the entire index.html with the updated version so the live database search, portion picker, serving calculation, and logging all work together.

Backend plumbing: DONE. 😎


Perfect send me the index. Let’s change that and get rolling.

Absolutely. Before I give you a full replacement index.html, I need the exact current file so I don't accidentally wipe out any of the UI/features we already got working.

We made several iterations of that file, and I don't have the complete current index.html contents in the active conversation—only the details of what it contains.

Go to GitHub → Next-Bite → index.html and either:

Download/upload the current index.html here, which is easiest, or

Copy the entire current file and paste it here.

Then I'll return one complete replacement index.html with the live API wired to next-bite-api-git, while preserving your profiles, goals, Today/Add/History/More screens, recents, portion calculations, existing saved data, and the current design.

I don't want to rebuild it from memory and accidentally murder something we already spent time getting right. 😂



Pasted text.txt
Document

Perfect. I used your actual current index.html 

 and changed only what we need for the live database connection.

The new version now sends searches through:

NEXT // BITE → our Cloudflare Worker → Open Food Facts

instead of the direct browser request that was failing. Everything else stays intact, including your profiles, goals, existing logs, recents, portion calculations, History, and current design.

Replace the whole index.html
Download the new full index.html

On your iPhone:

Go to GitHub → Next-Bite → index.html

Edit it.

Select All → delete

Paste the entire contents of the new file.

Commit changes to main.

Wait for the green check. ✅

Then open NEXT // BITE and we'll test Premier Protein Vanilla from inside the actual app.

Don't change sw.js yet. Once we confirm the app search works, that's our next cleanup. 



index.html
HTML


green check  on that one

Perfect. ✅ That means GitHub accepted the new index.html.

Now for the fun part: open NEXT // BITE from your Home Screen, then:

Add → Find Food → type Premier Protein Vanilla → Search Food Database

Send me a screenshot of what comes up. If we get actual food results, our app is officially talking to the Worker. 😎


OK, can you send me the link one more time so I can open it? I’m gonna save it to my home screen.

Yep! Here’s the live NEXT // BITE app:

Open NEXT // BITE

Once it opens in Safari, tap Share → Add to Home Screen → Add. Your NEXT // BITE icon should show up like a regular app. 😎



HELL YES. 😂 The live database search is working inside NEXT // BITE. We went from “couldn’t reach the food database” to 20 database matches found.

I also spotted something we should fix before moving on: the second result says 160 per 100g, which is almost certainly a source-data/normalization issue for that particular Open Food Facts record. The first result looks internally consistent at 49 kcal per 100g, with a 325g serving, which works out to about 160 calories for the whole shake.

So the plumbing works. ✅ Now I’d tighten the result handling so NEXT // BITE:

displays 160 cal per serving for a 325g Premier shake rather than making you mentally translate 49/100g;

detects/skips suspicious records where the source appears to have serving calories stored as per-100g calories;

prioritizes the most complete result;

shows brand + serving size + calories/protein per serving right in the search result, so picking the right food is much easier.

And then when you tap it, we can make Serving the default unit when a valid serving size exists. That gets us much closer to the “search → tap → log” experience you wanted.

I would fix that next before barcode scanning or anything else.


OK, what are the steps here to fix that?

Pretty easy from here. No Cloudflare changes are needed. The API connection itself is working; now we're improving how NEXT // BITE interprets and displays the results.

I'd do it in this order:

Update index.html so database results use the returned servingQuantity correctly. If a food has a valid serving, the search result will show something like 160 cal • 30g protein — per shake instead of emphasizing 49 cal per 100g.

Improve result quality. We'll rank the more complete records higher and filter obviously unusable/inconsistent entries where possible. I don't want NEXT // BITE silently “correcting” nutrition data based on guesses, though. If two database records genuinely disagree, we'll give you enough information to pick the right one rather than inventing which is correct.

Change the portion screen. When you select something with a known serving such as 1 shake (325 g), it will open as:
Amount: 1
Unit: serving

and immediately calculate the full serving's calories/macros. You can still switch to grams or ounces.

Make the search results more useful. Instead of what you have now:
Premier Protein Vanilla Shake — 49 per 100g

we'd aim for something closer to:
Premier Protein Vanilla Shake
Premier Protein • 1 shake (325 g)
160 cal · 30g protein

Once that's tested and working, then we update sw.js so it doesn't cache API calls. After that, food search is in a pretty solid place and we can move on to barcode scanning, favorites, etc.

What you need to do
Basically the same thing we just did. I'll make another full replacement index.html from the current file you gave me. You replace the whole GitHub file, commit it, get the green check, and test it.

So there shouldn't be another Cloudflare adventure. Thank God. 😂

If you're ready, I can make that updated index.html now.


Yep, let’s go send me that index
Send me the index

Yep — ready. I updated the full index.html with the serving-size fixes we just discussed.

Download the updated index.html

This version:

Shows calories + protein per serving when the database provides a serving size.

Defaults foods like Premier Protein to 1 serving instead of 100 g.

Correctly converts that serving back to the database's per-100g nutrition.

Still lets you switch to grams or ounces.

Prioritizes more complete database records.

Keeps everything else in the app intact.

Replace the entire index.html in GitHub again → Commit changes → wait for the green check. ✅

Then we'll reopen NEXT // BITE and search Premier Protein Vanilla again. 



index.html
HTML


OK, have a great check now

Perfect. ✅ Green check means the updated version is live.

Now reopen NEXT // BITE from your Home Screen. If it was already open, fully close it first and reopen it so we're not looking at the cached old version.

Then:

Add → Find Food → search Premier Protein Vanilla → Search Food Database

This time I want to see whether the first result shows roughly 160 calories / 30g protein per serving instead of 49 per 100g.

Send me a screenshot of the results. 👀


Green

Perfect. ✅

Now reopen NEXT // BITE and search Premier Protein Vanilla again.

We’re checking for two things:

Search result shows about 160 cal · 30g protein per serving

When you tap it, the portion screen defaults to 1 serving and shows the full shake nutrition automatically

Send me a screenshot of the search results first.



Yep — the fix worked. 🎉

The first result is exactly what we wanted:

Premier Protein Vanilla Shake

1 shake (325 g)

160 calories

29.9 g protein

Clearly labeled per serving

That is much better than the old 49 per 100g display.

The second result is bad source data: 520 calories and 97.5g protein for a Premier Protein shake obviously isn't the product you're looking for. That's actually useful for us to see because it confirms the app is doing the serving math correctly, but Open Food Facts has duplicate/inaccurate entries.

One more test before I change anything
Tap the first 160-calorie result.

I want to see the portion screen next. It should automatically open at 1 serving and calculate 160 calories / ~30g protein.

Send me that screen. If that's right, this whole part of the food-search flow is working and then we'll tackle filtering/ranking questionable duplicates.



YES. 🎉 That part is officially working.

The portion screen is doing exactly what we designed it to do:

Amount: 1

Unit: serving

Calories: 160

Protein: 29.9g

Carbs: 2.9g

Fat: 2.9g

Sodium: 250mg

Sugar: 1g

And you can choose the meal before hitting Add to Day

That means the entire chain now works: live database search → select food → interpret serving size → calculate nutrition → ready to log. 🔥

The next thing I'd tackle is database quality, specifically that bogus 520-calorie duplicate we saw. After that, we should make the small sw.js update we already planned so the app never caches live API responses.

I'd do bad-result handling first, because I don't want you accidentally tapping a garbage database entry and logging 520 calories for a 160-calorie shake. 😂


Perfect nice catch all right. What do I change? Send me the code and tell me which one to change.

Yep. We’ll do this one file at a time so we don’t accidentally break the part we just got working.

First change: worker.js
This is the file in your next-bite-api GitHub repository, not the Next-Bite app repository.

We’re going to improve the data coming from the database before it ever reaches the app. That’s the best place to deal with questionable duplicate records.

Do this:

Open GitHub.

Go to the next-bite-api repository.

Open worker.js.

Tap the pencil/edit button.

Select everything and delete it.

Replace it with the full updated code I give you.

Commit the change.

Wait for the green check.

Because you're on your iPhone, I don't want you hunting around a giant file trying to replace one little function.

I'll give you the complete replacement worker.js next, with the filtering/ranking changes built in.


Today 10:49 AM
Ok I’m here

Perfect. Stay in worker.js. I’m going to give you the whole replacement so you don’t have to edit individual lines on your phone.

Select everything currently in worker.js, delete it, and paste this:

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
Then hit Commit changes.

One important distinction: this won't pretend we can magically know that every 520-calorie record is wrong just because it looks weird. Instead, we're removing duplicates, rejecting objectively impossible nutrition values, and ranking complete records higher. That keeps us from “fixing” legitimate calorie-dense foods by accident.

Once you get the green check, tell me and we'll test the exact same Premier Protein search again.


Ok we’re good green check on cloudfare now what check the app

Yep! ✅ Now check the app.

Fully close NEXT // BITE first, then reopen it and do the same test:

Add → Find Food → Premier Protein Vanilla → Search Food Database

We're checking whether:

the correct 160 cal / ~30g protein result stays at the top;

duplicate/junk results are reduced or pushed down;

selecting the good result still opens at 1 serving = 160 calories.

Send me a screenshot of the search results. Then we'll know whether this Worker cleanup did what we wanted before touching anything else.



Okay, this test tells us exactly what's happening. The cleanup did improve the ordering, but it did not remove the bad 520-calorie record.

You can see the good news:

160 / 29.9g is first. ✅

Another legitimate-looking result at 159 / 29.9g is showing up. ✅

The 520 / 97.5g garbage record is still there. ❌

The reason is our filter only rejects values that are objectively impossible per 100g. That bad record says 160 cal and 30g protein per 100g, which technically passes the sanity check. Then because it claims a 325g serving, NEXT // BITE correctly multiplies it to 520/97.5.

I don't want to add a rule like “protein shakes can't have 520 calories” because that would eventually hide legitimate products. The safer solution is to flag suspicious database entries when the serving math produces a major conflict with other near-identical products, rather than silently changing their nutrition.

But there's another thing I really like about this screenshot: 159 and 160 calories with ~30g protein are both appearing, which is exactly the kind of small database variation we shouldn't try to “correct.”

So I'd leave the correct first result alone and make questionable records visually identifiable/less prominent rather than trying to make the app guess nutrition facts.

Next change should be sw.js, because the live food flow itself is working now, and we need to stop the service worker from caching API requests before we build barcode scanning. That one is a very small full-file replacement.




Ok what the step for that

Yep. This one is easier. We’re changing one file in the main Next-Bite repo — not Cloudflare this time.

Step 1
Go to GitHub → open your Next-Bite repository → open sw.js → tap the pencil/edit button.

Then select everything in sw.js and delete it.

Replace the entire file with this:

const CACHE_NAME = "next-bite-v2";

const APP_FILES = [
  "./",
  "./index.html",
  "./manifest.json",
  "./apple-touch-icon-bite.png"
];

// Cache only the core NEXT // BITE app files.
self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(APP_FILES);
    })
  );

  self.skipWaiting();
});

// Delete older NEXT // BITE caches.
self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames
          .filter(name => name !== CACHE_NAME)
          .map(name => caches.delete(name))
      );
    })
  );

  self.clients.claim();
});

self.addEventListener("fetch", event => {
  const request = event.request;

  // Never interfere with POST/etc.
  if (request.method !== "GET") {
    return;
  }

  const url = new URL(request.url);

  // IMPORTANT:
  // Do not cache Cloudflare/API/database requests.
  // Let the browser handle all outside requests normally.
  if (url.origin !== self.location.origin) {
    return;
  }

  // NEXT // BITE files use network-first.
  event.respondWith(
    fetch(request)
      .then(response => {
        // Only cache successful same-origin responses.
        if (response.ok) {
          const copy = response.clone();

          caches.open(CACHE_NAME).then(cache => {
            cache.put(request, copy);
          });
        }

        return response;
      })
      .catch(async () => {
        const cached =
          await caches.match(request);

        if (cached) {
          return cached;
        }

        // If navigation fails while offline,
        // open the cached app shell.
        if (request.mode === "navigate") {
          return caches.match("./index.html");
        }

        return Response.error();
      })
  );
});
Step 2
Tap Commit changes.

Once you get the green check, tell me. Then we'll reopen NEXT // BITE and make sure food search still works normally.

This change won't alter how the app looks at all. It just makes sure the live food-database responses stay live instead of the app potentially hanging onto old API results.


OK, that’s done

Perfect. ✅ Service worker cleanup is done.

Now fully close NEXT // BITE and reopen it. Do one quick test:

Add → Find Food → search Premier Protein Vanilla → Search Food Database

We just want to confirm the live results still load normally after the sw.js change. You don't need to tap or log anything.

If the results appear, we're good and I think barcode scanning is the next logical feature since the backend /product lookup is already built and waiting for us. 👀


IMG_8840.png

Perfect. ✅ That confirms the sw.js change didn't break anything. The app is still pulling the live database correctly, the good 160-cal / 29.9g protein result is at the top, and the serving display is working.

So at this point we have:

Search → live database → choose product → correct serving calculation → log food working end to end. 🔥

And the service worker is no longer caching those database/API requests.

Next: Barcode scanner
This is where it starts feeling like a real food tracker. 😂

We already built the /product?code= endpoint into the Cloudflare Worker, so the backend is ready. The next job is in index.html: make the existing Scan Barcode button actually open the iPhone camera, detect UPC/EAN barcodes, send that number to our Worker, and then open the same Add Food screen you just tested with the product and serving information filled in.

I'll keep a manual barcode-entry fallback too, because there will inevitably be a package whose barcode decides it hates cameras.

This will be another full index.html replacement so you don't have to surgically edit code on your phone.


Perfect send me the index and tell me where to put it

Got it — here is the full replacement index.html with barcode scanning wired in:

Download the new index.html

Where to put it
This goes in the main Next-Bite GitHub repository — NOT next-bite-api.

Open:

GitHub → Next-Bite → index.html → Edit

Then:

Select everything currently in index.html.

Delete it.

Paste the entire contents of the new file.

Commit changes.

Wait for your green check. ✅

This version connects Scan Barcode to the /product endpoint we already built. It includes the camera scanner plus a manual UPC/EAN entry fallback. One reason I included the fallback is that native browser barcode detection isn't reliably available in iPhone Safari, so this version uses a browser scanner library rather than depending on Safari's native BarcodeDetector. 

Once you get the green check, don't scan anything yet. Tell me you're green and we'll open it together because the first time should trigger the iPhone camera-permission prompt. 



index.html
HTML


ok thats a green 

Perfect. 🟢 Barcode version is live.

Now fully close NEXT // BITE and reopen it from your Home Screen.

Then tap:

Add → Scan Barcode

The first time, your iPhone should ask for camera permission. Choose Allow.

After that, you should see the camera/scanning area. Don't worry about what product you scan yet — grab literally anything nearby with a UPC barcode and point the camera at it.

If the camera opens, we're already halfway there. Send me a screenshot of what you see after tapping Scan Barcode.


ok so is there a fix to get the weird 520 calorie shake thing removed or is that just a glitch

Yes, we can fix it. It isn't a glitch in NEXT // BITE's math. It's a bad/inconsistent Open Food Facts record.

That particular entry is effectively telling us:

160 calories + 30g protein per 100g, serving size 325g

So NEXT // BITE correctly calculates 325g as 520 calories and 97.5g protein. The database record is the problem.

What I don't want to do is hard-code “delete the 520-calorie Premier shake,” because we'll keep encountering bad community-entered records with other foods.

A better permanent fix is to make NEXT // BITE detect conflicting near-duplicate products. In this example, we have multiple Premier Vanilla shakes around the same 325g size, two agreeing around 159–160 calories / 30g protein, while one is way off at 520 / 97.5. We can use that agreement to flag the outlier and either push it way down or hide it from the normal results.

I'd choose hide obvious outliers when multiple comparable records agree, while leaving ambiguous results alone. That cleans up junk without the app pretending it knows nutrition facts when it doesn't.

So yes — I would fix this rather than leave it there. And since we just added barcode scanning, we can make the change in the Cloudflare worker.js only; we don't need to replace your new index.html again.


ok lets do thga 

Yep. And I want to make one improvement to the plan before we touch it: rather than trying to hide the 520-calorie result based on what NEXT // BITE thinks looks suspicious, we should first use the nutrition data Open Food Facts provides for the actual serving when it's available.

That attacks the exact problem we're seeing: a database record can have wonky per 100g values while still having the correct per serving values. If the label says 1 shake and gives serving nutrition, the label-serving data should win.

Go back to next-bite-api
Open:

GitHub → next-bite-api → worker.js → Edit

This is the Cloudflare/API repo, not the main Next-Bite repo.

Select everything in worker.js, delete it, and replace it with this full version:

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
Then Commit changes and let Cloudflare deploy it.

Once you have the green check, we'll run Premier Protein Vanilla one more time. I'm particularly curious whether that 520 entry turns into its proper serving nutrition or disappears because its data is unusable. Either outcome is better than confidently telling you your protein shake is apparently a small Thanksgiving dinner. 😂


ok got the green cxheck 

Perfect. 🟢

Now fully close NEXT // BITE and reopen it, then run our torture-test shake one more time:

Add → Find Food → Premier Protein Vanilla → Search Food Database

We're looking specifically at that second result that was showing 520 cal / 97.5g protein.

Send me a screenshot of the results. If it now shows normal serving nutrition or is gone, we nailed it. If it's still 520, we'll know that particular Open Food Facts record doesn't contain usable serving-level nutrition either, and I'll handle it differently rather than keep poking at it blindly.


nope for some reason its still there 

Yep — that confirms it. That specific Open Food Facts record itself is bad enough that it doesn't give us a trustworthy alternate serving value to correct it with. So NEXT // BITE keeps doing the math it's being given: 160 × 3.25 = 520.

I don't want to keep stacking random rules onto the nutrition math. There's a cleaner fix.

For search results, we can collapse near-duplicate products when they have the same normalized name/brand/package/serving size. When several essentially identical records exist, we keep the record with the strongest/most internally consistent nutrition data and drop the conflicting duplicates.

For this search, that should mean the three versions of essentially:

Premier Protein Vanilla Shake • 11 oz • 1 shake (325g)

don't all get treated as equally useful choices. The good ~160-calorie record stays; the conflicting 520-calorie duplicate gets removed.

And importantly, we're not creating a rule that says “520 calories is bad.” A legitimate 520-calorie food can absolutely stay in the database. We're only resolving conflicts among records claiming to be the same product.

We've already changed worker.js twice trying to solve this from the nutrition fields alone, so I don't want you pasting another giant file based on a hunch. I'll change the duplicate-resolution logic specifically. That's the piece we now know is actually needed.


lets do those

Yep. We’ll change worker.js in the next-bite-api repo again.

This time I want to change only the duplicate-resolution logic so we keep the best version of what appears to be the same packaged product instead of showing all the conflicting copies.

Since you’re doing this on your phone, I’ll stick with our full-file replacement approach rather than making you hunt through the code.

Send me/open the current worker.js contents you have after that last change, and I’ll return the complete replacement version with the duplicate conflict handling built into it.



Pasted text(1).txt
Document

Perfect — I used the exact current worker.js you sent me as the base. Your current search already normalizes the results and then passes them through removeDuplicates() before sorting them. 

 The problem was that the existing duplicate key included calories/protein/etc., so the 160-calorie and 520-calorie records were automatically considered different products. 


I've replaced that logic with the new same-product conflict detection we discussed.

Download the updated worker.js

Where this one goes
Go to:

GitHub → next-bite-api → worker.js

Then:

Edit worker.js.

Delete everything in it.

Paste the entire contents of the file above.

Commit changes.

Wait for Cloudflare's green check. 🟢

You do not touch index.html or sw.js for this one.

Once Cloudflare is green, we'll search Premier Protein Vanilla again. This is the test that should tell us whether the 520-calorie impostor finally gets escorted out of the building. 😂 


worker.js
Code


worker.js

Preview unavailable.
Download
