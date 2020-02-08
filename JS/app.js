let productsCountEl = document.getElementById("products-count");
console.log(productsCountEl);

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