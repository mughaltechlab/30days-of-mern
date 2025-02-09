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

console.log(products);

const productsGrid = document.querySelector('.products-grid');
const cartQuantity = document.querySelector('.cart-quantity');
let cartQuantityValue = 0;




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
    $${(product.priceCents / 100).toFixed(2)}
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

    <button id=${product.id} class="add-to-cart-button button-primary js-add-to-cart"
     data-product-name = "${product.name}">
        Add to Cart
    </button>
</div>`;

});


// console.log(productsHTML)
productsGrid.innerHTML = productsHTML;
cartQuantity.innerHTML = cartQuantityValue;

// :: ADD TO CART BUTTON ::
document.querySelectorAll('.js-add-to-cart')
    .forEach(button => {
        button.addEventListener('click', (e) => {
            cartQuantityValue++ ;
            cartQuantity.innerHTML = cartQuantityValue;

            const productName = button.dataset.productName;
            cart.push({
                productName,
                quantity: 1,
            })

            console.log(cart)
        })
    });
