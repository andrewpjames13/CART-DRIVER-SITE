/*jshint esversion: 6 */
export function menuItems() {
  return  {
    "sections": [
      {
        "title": "Pizza",
        "sectionDescription": "substitute chick pea crust cooked in cast iron $3",
        "menuItems": [
          {
            "name": "Daisy",
            "items": [ "tomato sauce, mozzarella, basil" ],
            "price": "12"
          },
          {
            "name": "Mariner",
            "items": [ "Crushed tomato, garlic, oregano (sardines +6)" ],
            "price": "9"
          },
          {
            "name": "White",
            "items": [ "Mozzarella, smoked Ricotta, basil, garlic" ],
            "price": "13"
          },
          {
            "name": "CART-DRIVER",
            "items": [ "sausage, kale, mozzarella, chili flake" ],
            "price": "15"
          },
          {
            "name": "Mushrooms",
            "items": [ "Chanterelles, Red onion, Chives, Creme Fraiche, Frisee" ],
            "price": "17"
          },
          {
            "name": "Clam",
            "items": [ "Littleneck Clam, Pancetta, Toasted Garlic, Panna" ],
            "price": "18"
          },
          {
            "name": "Peppers",
            "items": [ "Tomato, Biellese Pepperoni, Garlic, Mozzarella, Chili" ],
            "price": "13"
          },
          {
            "name": "Winter Pizza",
            "items": [ "winter squash, amaretti, mustard greens, speck, apple, pumpkin seeds, burrata" ],
            "price": "17"
          }
        ]
      },
      {
        "title": "Drinks",
        "sectionDescription": "",
        "menuItems": [
          {
            "name": "Draft Beer",
            "items": [
              "Prost Pilsner"
            ],
            "price": "3/6/11"
          },
          {
            "name": "Canned Beer",
            "items": [
              "pbr tall boy",
              "cisco brewing grey lady wit",
              "telluride face down brown",
              "ballast point grapefruit ipa",
              "alice belgian blonde",
              "anderson valley briney melon gose",
              "melvin hubert IPA", "sanitas saison",
              "la cumbre slice of hefen (+1)",
              "stem CIDER remedy (+1)",
              "stiegl radler (+1)"
            ],
            "price": "5"
          },
          {
            "name": "Wine by the glass",
            "items": [
              "SPARKLING - prosecco on tap; LAMBRUSCO",
              "casina di cornia, sangiovese",
              "WHITE - la liana, pinot grigio",
              "FINO SHERRY - “la guita” manzanilla; palamino"
           ],
            "price": "9"
          },
          {
            "name": "Wine by the Bottle",
            "items": [
              "feudo zirtari NERO D’ AVOLA - $29",
              "ettore germano BARBERA D’ALBA - $42",
              "cleto chiarli, sparkling LAMBRUSCO - $36"
           ],
            "price": ""
          },
          {
            "name": "Bached cocktail",
            "items": [
              "WHISKEY DAISY - rye, strega, lemon",
              "PERFECT MANHATTAN - rye, carpano, contratto",
              "NEGRONI - gin, campari, carpano",
              "SPRITZ - contratto apertif and prosecco",
              "BOULEVARDIER - rye, campari, carpano"
           ],
            "price": "10"
          },
          {
            "name": "Non-alcholic",
            "items": [
              "san pellegrino aranciata",
              "mexi coke",
              "boylans diet cola",
              "iced tea"
           ],
            "price": "3"
          }
        ]
      },
      {
        "title": "Antipasti",
        "sectionDescription": "Items marked MP are items whos price changes based on the Market Price",
        "menuItems": [
          {
            "name": "OYSTER*",
            "items": [ "daily selection - market price" ],
            "price": "MP"
          },
          {
            "name": "PIADA",
            "items": [ "seafood conserva - market price" ],
            "price": "MP"
          },
          {
            "name": "FOCCACIA",
            "items": [ "chicken liver mousse, mushroom" ],
            "price": "7"
          },
          {
            "name": "Shrimp",
            "items": [ "New Caledonia Shrimp, nduja, shishitos" ],
            "price": "13"
          },
          {
            "name": "Speck",
            "items": [ "a Quercia Speck, giardiniera" ],
            "price": "9"
          },
          {
            "name": "Salad",
            "items": [ "chopped salad, favas, olive, cherries, yogurt" ],
            "price": "8"
          },
          {
            "name": "Pudding",
            "items": [ "chocolate pudding, whipped cream" ],
            "price": "5"
          }
        ]
      },
      {
        "title": "After",
        "sectionDescription": "",
        "menuItems": [
          {
            "name": "3PM-6PM",
            "items": [
              "Glass of Prosecco",
              "Messed Up Negroni - gin, campari, vermouth, persecco",
              "Two Market Oysters - horseradish, lemon, mignonette"
           ],
            "price": "5"
          },
          {
            "name": "10PM-12AM",
            "items": [
              "Fernet + Pils - shot of Fernet + Prost Pilsner",
              "Perfect Manhattan - rye, carpano, contratto",
              "Daisy Pizza - tomato sauce, mozzarella, basil",
              "Sardines & Toast - piada, house butter, sea salt"
           ],
            "price": "5"
          }
        ]
      }
    ]
  };
}

export function pressItems() {
  return [
    {
      headLine: 'Bloomberg Pursuits',
      description: 'Your Guide to Denver’s Booming Food Scene',
      link: 'https://www.bloomberg.com/news/articles/2016-10-13/guide-to-denver-s-booming-food-scene-best-restaurants-bars-coffee?cmpid=flipboard'
    },
    {
      headLine: '5280',
      description: '25 Best Restaurants 2015',
      link: 'http://www.5280.com/best-restaurants-2015/'
    },
    {
      headLine: 'Eater',
      description: 'The 21 Best New Restaurants in America',
      link: 'http://www.eater.com/2015/7/22/8625211/best-new-restaurants-2015'
    },
    {
      headLine: '5280',
      description: '5280 Top of the Town: Best Pizza and Chef!',
      link: 'http://www.5280.com/tott/digital/2015/06/top-town-2015-dining'
    },
    {
      headLine: 'Zagat',
      description: 'Best Things We Ate and Drank at the Food & Wine Classic in Aspen',
      link: 'https://www.zagat.com/b/denver/best-things-we-ate-and-drank-at-the-food-wine-classic-in-aspen'
    },
    {
      headLine: '5280',
      description: 'Restaurant Review: Cart-Driver',
      link: 'http://www.5280.com/eatanddrink/magazine/2015/04/restaurant-review-cart-driver'
    },
    {
      headLine: 'Denver Business Journal',
      description: 'Denver neighborhood named one of the 18 best food spots in America',
      link: 'http://www.bizjournals.com/denver/blog/broadway_17th/2014/12/denver-neighborhood-named-one-of-the-18-best-food.html'
    },
    {
      headLine: 'Westword',
      description: 'Ten Best New Fast-Casual Eateries in Metro Denver in 2014',
      link: 'http://www.westword.com/restaurants/ten-best-new-fast-casual-eateries-in-metro-denver-in-2014-6046158#page-2'
    },
    {
      headLine: 'The Week',
      description: 'Critics Choice: Three noteworthy new pizzarias',
      link: 'http://www.cart-driver.com/pdfs/The%20Week.pdf'
    },
    {
      headLine: 'Westword',
      description: 'The Fifteen Best New Restaurants in Metro Denver in 2014',
      link: 'http://www.westword.com/restaurants/the-fifteen-best-new-restaurants-in-metro-denver-in-2014-6047207#page-2'
    },
    {
      headLine: 'Zagat',
      description: 'The Hottest Pizzerias Around the U.S.',
      link: 'http://www.zagat.com/b/the-hottest-pizzerias-around-the-u.s#7'
    },
    {
      headLine: 'Westword',
      description: 'Review: Cart-Driver Looks Like a Winner in the Fast-Casual Pizza Race',
      link: 'http://blogs.westword.com/cafesociety/2014/11/cart-driver_review_winner_in_fast-casual_pizza_race_review_cart-driver.php'
    },
    {
      headLine: '5280',
      description: 'Go Now: Cart-Driver',
      link: 'http://www.5280.com/eatanddrink/digital/2014/08/go-now-cart-driver'
    },
    {
      headLine: 'Westword',
      description: 'Cart-Driver Heats Up RiNo With Wood-Fired Pizza',
      link: 'http://www.westword.com/restaurants/cart-driver-heats-up-rino-with-wood-fired-pizza-5749194'
    }
  ];
}

export function photos() {
  return [
    { photoSrc: 'images/cart-driver-patio.jpg' },
    { photoSrc: 'images/cart-driver-oven-pizza.jpg' },
    { photoSrc: 'images/cart-driver-patio.jpg' },
    { photoSrc: 'images/cart-driver-oven-pizza.jpg' },
    { photoSrc: 'images/cart-driver-patio.jpg' }
  ];
}
