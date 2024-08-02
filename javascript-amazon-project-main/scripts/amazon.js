{/* 
<div class="product-container">
    <div class="product-image-container">
        <img class="product-image"
            src="images/products/athletic-cotton-socks-6-pairs.jpg">
    </div>

    <div class="product-name limit-text-to-2-lines">
    Black and Gray Athletic Cotton Socks - 6 Pairs
    </div>

    <div class="product-rating-container">
    <img class="product-rating-stars"
        src="images/ratings/rating-45.png">
    <div class="product-rating-count link-primary">
        87
    </div>
    </div>

    <div class="product-price">
    $10.90
    </div>

    <div class="product-quantity-container">
    <select>
        <option selected value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="9">9</option>
        <option value="10">10</option>
    </select>
    </div>

    <div class="product-spacer"></div>

    <div class="added-to-cart">
    <img src="images/icons/checkmark.png">
    Added
    </div>

    <button class="add-to-cart-button button-primary">
    Add to Cart
    </button>
</div>
 */}


const productsGrid = document.querySelector('.products-grid');

const products = [
    {
      id: 1,
      image: "images/products/athletic-cotton-socks-6-pairs.jpg",
      name: "Black and Gray Athletic Cotton Socks - 6 Pairs",
      rating: {
        stars: 4.5,
        count: 87
      },
      priceCents: 1090,
      keywords: [
        "socks",
        "sports",
        "apparel"
      ]
    },
    {
      id: 2,
      image: "images/products/intermediate-composite-basketball.jpg",
      name: "Intermediate Size Basketball",
      rating: {
        stars: 4,
        count: 127
      },
      priceCents: 2095,
      keywords: [
        "sports",
        "basketballs"
      ]
    },
    {
      id: 3,
      image: "images/products/adults-plain-cotton-tshirt-2-pack-teal.jpg",
      name: "Adults Plain Cotton T-Shirt - 2 Pack",
      rating: {
        stars: 4.5,
        count: 56
      },
      priceCents: 799,
      keywords: [
        "tshirts",
        "apparel",
        "mens"
      ],
      type: "clothing",
      sizeChartLink: "images/clothing-size-chart.png"
    },
    {
      id: 4,
      image: "images/products/black-2-slot-toaster.jpg",
      name: "2 Slot Toaster - Black",
      rating: {
        stars: 5,
        count: 2197
      },
      priceCents: 1899,
      keywords: [
        "toaster",
        "kitchen",
        "appliances"
      ]
    },
    {
      id: 5,
      image: "images/products/6-piece-white-dinner-plate-set.jpg",
      name: "6 Piece White Dinner Plate Set",
      rating: {
        stars: 4,
        count: 37
      },
      priceCents: 2067,
      keywords: [
        "plates",
        "kitchen",
        "dining"
      ]
    },
    {
      id: 6,
      image: "images/products/6-piece-non-stick-baking-set.webp",
      name: "6-Piece Nonstick, Carbon Steel Oven Bakeware Baking Set",
      rating: {
        stars: 4.5,
        count: 175
      },
      priceCents: 3499,
      keywords: [
        "kitchen",
        "cookware"
      ]
    },
    {
      id: 7,
      image: "images/products/plain-hooded-fleece-sweatshirt-yellow.jpg",
      name: "Plain Hooded Fleece Sweatshirt",
      rating: {
        stars: 4.5,
        count: 317
      },
      priceCents: 2400,
      keywords: [
        "hoodies",
        "sweaters",
        "apparel"
      ]
    },
    {
      id: 8,
      image: "images/products/luxury-tower-set-6-piece.jpg",
      name: "Luxury Towel Set - Graphite Gray",
      rating: {
        stars: 4.5,
        count: 144
      },
      priceCents: 3599,
      keywords: [
        "bathroom",
        "washroom",
        "restroom",
        "towels",
        "bath towels"
      ]
    },
    {
      id: 9,
      image: "images/products/liquid-laundry-detergent-plain.jpg",
      name: "Liquid Laundry Detergent, 110 Loads, 82.5 Fl Oz",
      rating: {
        stars: 4.5,
        count: 305
      },
      priceCents: 2899,
      keywords: [
        "bathroom",
        "cleaning"
      ]
    },
    {
      id: 10,
      image: "images/products/knit-athletic-sneakers-gray.jpg",
      name: "Waterproof Knit Athletic Sneakers - Gray",
      rating: {
        stars: 4,
        count: 89
      },
      priceCents: 3390,
      keywords: [
        "shoes",
        "running shoes",
        "footwear"
      ]
    },
    {
      id: 11,
      image: "images/products/women-chiffon-beachwear-coverup-black.jpg",
      name: "Women's Chiffon Beachwear Cover Up - Black",
      rating: {
        stars: 4.5,
        count: 235
      },
      priceCents: 2070,
      keywords: [
        "robe",
        "swimsuit",
        "swimming",
        "bathing",
        "apparel"
      ],
      type: "clothing",
      sizeChartLink: "images/clothing-size-chart.png"
    },
    {
      id: 12,
      image: "images/products/round-sunglasses-black.jpg",
      name: "Round Sunglasses",
      rating: {
        stars: 4.5,
        count: 30
      },
      priceCents: 1560,
      keywords: [
        "accessories",
        "shades"
      ]
    },
    {
      id: 13,
      image: "images/products/women-beach-sandals.jpg",
      name: "Women's Two Strap Buckle Sandals - Tan",
      rating: {
        stars: 4.5,
        count: 562
      },
      priceCents: 2499,
      keywords: [
        "footwear",
        "sandals",
        "womens",
        "beach",
        "summer"
      ]
    },
    {
      id: 14,
      image: "images/products/blackout-curtain-set-beige.webp",
      name: "Blackout Curtains Set 4-Pack - Beige",
      rating: {
        stars: 4.5,
        count: 232
      },
      priceCents: 4599,
      keywords: [
        "bedroom",
        "curtains",
        "home"
      ]
    },
    {
      id: 15,
      image: "images/products/men-slim-fit-summer-shorts-gray.jpg",
      name: "Men's Slim-Fit Summer Shorts",
      rating: {
        stars: 4,
        count: 160
      },
      priceCents: 1699,
      keywords: [
        "shorts",
        "apparel",
        "mens"
      ]
    },
    {
      id: 16,
      image: "images/products/electric-glass-and-steel-hot-water-kettle.webp",
      name: "Electric Glass and Steel Hot Tea Water Kettle - 1.7-Liter",
      rating: {
        stars: 5,
        count: 846
      },
      priceCents: 3074,
      keywords: [
        "water boiler",
        "appliances",
        "kitchen"
      ]
    },
    {
      id: 17,
      image: "images/products/facial-tissue-2-ply-18-boxes.jpg",
      name: "Ultra Soft Tissue 2-Ply - 18 Box",
      rating: {
        stars: 4,
        count: 99
      },
      priceCents: 2374,
      keywords: [
        "kleenex",
        "tissues",
        "kitchen",
        "tissues box",
        "napkins"
      ]
    },
    {
      id: 18,
      image: "images/products/straw-sunhat.webp",
      name: "Straw Lifeguard Sun Hat",
      rating: {
        stars: 4,
        count: 215
      },
      priceCents: 2200,
      keywords: [
        "hats",
        "straw hats",
        "summer",
        "apparel"
      ]
    },
    {
      id: 19,
      image: "images/products/sky-flower-stud-earrings.webp",
      name: "Sterling Silver Sky Flower Stud Earrings",
      rating: {
        stars: 4.5,
        count: 52
      },
      priceCents: 1799,
      keywords: [
        "jewelry",
        "accessories",
        "womens"
      ]
    },
    {
      id: 20,
      image: "images/products/women-stretch-popover-hoodie-black.jpg",
      name: "Women's Stretch Popover Hoodie",
      rating: {
        stars: 4.5,
        count: 2465
      },
      priceCents: 1374,
      keywords: [
        "hooded",
        "hoodies",
        "sweaters",
        "womens",
        "apparel"
      ],
      type: "clothing",
      sizeChartLink: "images/clothing-size-chart.png"
    },
    {
      id: 21,
      image: "images/products/bathroom-rug.jpg",
      name: "Bathroom Bath Rug Mat 20 x 31 Inch - Grey",
      rating: {
        stars: 4.5,
        count: 119
      },
      priceCents: 1250,
      keywords: [
        "bathmat",
        "bathroom",
        "home"
      ]
    },
    {
      id: 22,
      image: "images/products/women-knit-ballet-flat-black.jpg",
      name: "Women's Knit Ballet Flat",
      rating: {
        stars: 4,
        count: 326
      },
      priceCents: 2640,
      keywords: [
        "shoes",
        "flats",
        "womens",
        "footwear"
      ]
    },
    {
      id: 23,
      image: "images/products/men-golf-polo-t-shirt-blue.jpg",
      name: "Men's Regular-Fit Quick-Dry Golf Polo Shirt",
      rating: {
        stars: 4.5,
        count: 2556
      },
      priceCents: 1599,
      keywords: [
        "tshirts",
        "shirts",
        "apparel",
        "mens"
      ],
      type: "clothing",
      sizeChartLink: "images/clothing-size-chart.png"
    },
    {
      id: 24,
      image: "images/products/trash-can-with-foot-pedal-50-liter.jpg",
      name: "Trash Can with Foot Pedal - Brushed Stainless Steel",
      rating: {
        stars: 4.5,
        count: 2286
      },
      priceCents: 8300,
      keywords: [
        "garbage",
        "bins",
        "cans",
        "kitchen"
      ]
    },
    {
      id: 25,
      image: "images/products/duvet-cover-set-blue-twin.jpg",
      name: "Duvet Cover Set with Zipper Closure",
      rating: {
        stars: 4,
        count: 456
      },
      priceCents: 2399,
      keywords: [
        "bedroom",
        "bed sheets",
        "sheets",
        "covers",
        "home"
      ]
    },
    {
      id: 26,
      image: "images/products/women-chunky-beanie-gray.webp",
      name: "Women's Chunky Cable Beanie - Gray",
      rating: {
        stars: 5,
        count: 83
      },
      priceCents: 1250,
      keywords: [
        "hats",
        "winter hats",
        "beanies",
        "tuques",
        "apparel",
        "womens"
      ]
    },
    {
      id: 27,
      image: "images/products/men-chino-pants-beige.jpg",
      name: "Men's Classic-fit Pleated Chino Pants",
      rating: {
        stars: 4.5,
        count: 9017
      },
      priceCents: 2290,
      keywords: [
        "pants",
        "apparel",
        "mens"
      ]
    },
    {
      id: 28,
      image: "images/products/men-athletic-shoes-green.jpg",
      name: "Men's Athletic Sneaker",
      rating: {
        stars: 4,
        count: 229
      },
      priceCents: 3890,
      keywords: [
        "shoes",
        "running shoes",
        "footwear",
        "mens"
      ]
    },
    {
      id: 29,
      image: "images/products/men-navigator-sunglasses-brown.jpg",
      name: "Men's Navigator Sunglasses Pilot",
      rating: {
        stars: 3.5,
        count: 42
      },
      priceCents: 1690,
      keywords: [
        "sunglasses",
        "glasses",
        "accessories",
        "shades"
      ]
    },
    {
      id: 30,
      image: "images/products/non-stick-cooking-set-15-pieces.webp",
      name: "Non-Stick Cookware Set, Pots, Pans and Utensils - 15 Pieces",
      rating: {
        stars: 4.5,
        count: 511
      },
      priceCents: 6797,
      keywords: [
        "cooking set",
        "kitchen"
      ]
    },
    {
      id: 31,
      image: "images/products/vanity-mirror-silver.jpg",
      name: "Vanity Mirror with Heavy Base - Chrome",
      rating: {
        stars: 4.5,
        count: 130
      },
      priceCents: 1649,
      keywords: [
        "bathroom",
        "washroom",
        "mirrors",
        "home"
      ]
    },
    {
      id: 32,
      image: "images/products/women-french-terry-fleece-jogger-camo.jpg",
      name: "Women's Fleece Jogger Sweatpant",
      rating: {
        stars: 4.5,
        count: 248
      },
      priceCents: 2400,
      keywords: [
        "pants",
        "sweatpants",
        "jogging",
        "apparel",
        "womens"
      ]
    },
    {
      id: 33,
      image: "images/products/double-elongated-twist-french-wire-earrings.webp",
      name: "Double Oval Twist French Wire Earrings - Gold",
      rating: {
        stars: 4.5,
        count: 117
      },
      priceCents: 2400,
      keywords: [
        "accessories",
        "womens"
      ]
    },
    {
      id: 34,
      image: "images/products/round-airtight-food-storage-containers.jpg",
      name: "Round Airtight Food Storage Containers - 5 Piece",
      rating: {
        stars: 4,
        count: 126
      },
      priceCents: 2899,
      keywords: [
        "boxes",
        "food containers",
        "kitchen"
      ]
    },
    {
      id: 35,
      image: "images/products/coffeemaker-with-glass-carafe-black.jpg",
      name: "Coffeemaker with Glass Carafe and Reusable Filter - 25 Oz, Black",
      rating: {
        stars: 4.5,
        count: 1211
      },
      priceCents: 2250,
      keywords: [
        "coffeemakers",
        "kitchen",
        "appliances"
      ]
    },
    {
      id: 36,
      image: "images/products/blackout-curtains-black.jpg",
      name: "Blackout Curtains Set 42 x 84-Inch - Black, 2 Panels",
      rating: {
        stars: 4.5,
        count: 363
      },
      priceCents: 3099,
      keywords: [
        "bedroom",
        "home"
      ]
    },
    {
      id: 37,
      image: "images/products/cotton-bath-towels-teal.webp",
      name: "100% Cotton Bath Towels - 2 Pack, Light Teal",
      rating: {
        stars: 4.5,
        count: 93
      },
      priceCents: 2110,
      keywords: [
        "bathroom",
        "home",
        "towels"
      ]
    },
    {
      id: 38,
      image: "images/products/knit-athletic-sneakers-pink.webp",
      name: "Waterproof Knit Athletic Sneakers - Pink",
      rating: {
        stars: 4,
        count: 89
      },
      priceCents: 3390,
      keywords: [
        "shoes",
        "running shoes",
        "footwear",
        "womens"
      ]
    },
    {
      id: 39,
      image: "images/products/countertop-blender-64-oz.jpg",
      name: "Countertop Blender - 64oz, 1400 Watts",
      rating: {
        stars: 4,
        count: 3
      },
      priceCents: 10747,
      keywords: [
        "food blenders",
        "kitchen",
        "appliances"
      ]
    },
    {
      id: 40,
      image: "images/products/floral-mixing-bowl-set.jpg",
      name: "10-Piece Mixing Bowl Set with Lids - Floral",
      rating: {
        stars: 5,
        count: 679
      },
      priceCents: 3899,
      keywords: [
        "mixing bowls",
        "baking",
        "cookware",
        "kitchen"
      ]
    },
    {
      id: 41,
      image: "images/products/kitchen-paper-towels-30-pack.jpg",
      name: "2-Ply Kitchen Paper Towels - 30 Pack",
      rating: {
        stars: 4.5,
        count: 1045
      },
      priceCents: 5799,
      keywords: [
        "kitchen",
        "kitchen towels",
        "tissues"
      ]
    },
    {
      id: 42,
      image: "images/products/men-cozy-fleece-zip-up-hoodie-red.jpg",
      name: "Men's Full-Zip Hooded Fleece Sweatshirt",
      rating: {
        stars: 4.5,
        count: 3157
      },
      priceCents: 2400,
      keywords: [
        "sweaters",
        "hoodies",
        "apparel",
        "mens"
      ]
    }
  ];


let productsHTML = '';
  
products.forEach((product,ind) => {
    const rating = product.rating.stars * 10;

    // // product container
    // const productContainer = document.createElement('div');
    // productContainer.classList.add('product-container');

    // // product Image Container
    // const productImageContainer = document.createElement('div');
    // productImageContainer.classList.add('product-image-container');
    // const productImage = document.createElement('img');
    // productImage.src = product.image;
    // productImageContainer.appendChild(productImage);




    // productContainer.append(productImageContainer);

    // console.log(productContainer)


// ACCUMULATOR PATTERN
    
    productsHTML += `<div class="product-container">
    <div class="product-image-container">
        <img class="product-image"
            src=${product.image}>
    </div>

    <div class="product-name limit-text-to-2-lines">
    ${product.name};
    </div>

    <div class="product-rating-container">
    <img class="product-rating-stars"
        src="images/ratings/rating-${rating}.png">
    <div class="product-rating-count link-primary">
        ${product.rating.count}
    </div>
    </div>

    <div class="product-price">
    $${product.priceCents / 100}
    </div>

    <div class="product-quantity-container">
    <select>
        <option selected value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="9">9</option>
        <option value="10">10</option>
    </select>
    </div>

    <div class="product-spacer"></div>

    <div class="added-to-cart">
    <img src="images/icons/checkmark.png">
    Added
    </div>

    <button class="add-to-cart-button button-primary">
    Add to Cart
    </button>
</div>`;

productsGrid.innerHTML = productsHTML;

console.log(productsHTML)
});