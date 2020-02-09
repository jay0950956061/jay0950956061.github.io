/*Slider Slick*/
$(document).ready(function(){
      $('.your-class').slick({
      	dots: true,
      	prevArrow: '<img src="images/mark_left.png" class="prev" alt="nextArrow">',
      	nextArrow: '<img src="images/mark-right.png" class="next" alt="nextArrow">',
      	fade: true,
      	speed: 1000,

      });
    });

let productsCountEl = document.getElementById("products-count");

/*Counter & Add to cart*/
let addToCartButton = document.querySelectorAll(".add-to-cart");

addToCartButton.onclick = function() {
	alert("Hello!")
}

for (let i=0; i < addToCartButton.length; i++) {
	addToCartButton[i].addEventListener("click", function() {
		let prevProductsCount = +productsCountEl.textContent;
		productsCountEl.textContent = prevProductsCount + 1;
	})
}

/*Likes checked*/
 $(function(){
   $('div.like').click(function(){
     $(this).toggleClass('like_checked');     
   })
})
  


