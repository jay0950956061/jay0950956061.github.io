/*Slider Slick*/
$(document).ready(function(){
      $('.your-class').slick({
        "setting-name": "setting-value"
      });
    });

let productsCountEl = document.getElementById("products-count");
console.log(productsCountEl);

/*Counter*/
let addToCartButton = document.querySelectorAll(".add-to-cart");
console.log(addToCartButton);

addToCartButton.onclick = function() {
	alert("Hello!")
}

for (let i=0; i < addToCartButton.length; i++) {
	addToCartButton[i].addEventListener("click", function() {
		let prevProductsCount = +productsCountEl.textContent;
		productsCountEl.textContent = prevProductsCount + 1;
	})
}