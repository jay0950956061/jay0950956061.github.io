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

// Change like button state (jQuerry)
//  $(function(){
//    $('div.like').click(function(){
//      $(this).toggleClass('liked');     
//    })
// })

// let likeButtons = document.getElementsByClassName('like');

// Change like button state (JavaScript)
// let likeButtons = document.querySelectorAll('.like');
// for (let i=0; i < likeButtons.length; i++) {
// 	likeButtons[i].addEventListener('click', function() {
// 		if (likeButtons[i].classList.contains('liked')) {
// 			likeButtons[i].classList.remove('liked')
// 		} else {
// 			likeButtons[i].classList.add('liked')
// 		}
// 	})
// }

// Change like button state (JavaScript) with toggle
let likeButtons = document.querySelectorAll('.like');
for (let i=0; i < likeButtons.length; i++) {
	likeButtons[i].addEventListener('click', function() {
		likeButtons[i].classList.toggle('liked')
	})
}


/*Let quantuty input and buttons +/-*/
let quantityInput = document.querySelectorAll('.product_quantity input')[0];
let decrementBtn = document.querySelectorAll('.decrement-btn')[0];
let incrementBtn = document.querySelectorAll('.increment-btn')[0];
console.log(quantityInput);
console.log(decrementBtn);
console.log(incrementBtn);

function disableDecrementBtn (minCount) {
	if (minCount.value <= 1) {
		decrementBtn.disabled = true
	} else if (minCount.value > 1){
		decrementBtn.disabled = false
}
}

disableDecrementBtn(quantityInput);

incrementBtn.addEventListener('click', function() {
quantityInput.value = +quantityInput.value + 1;
	disableDecrementBtn(quantityInput);
})

decrementBtn.addEventListener('click', function() {
quantityInput.value = +quantityInput.value - 1;
	disableDecrementBtn(quantityInput);
})

