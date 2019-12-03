var container = document.querySelector(".abonem-container");

var date = document.querySelector(".date");

var element1 = date.querySelector("span:first-child");
var element2 = date.querySelector("span:nth-child(2)");
var element3 = date.querySelector("span:last-child");

var wrap1 = container.querySelector(".abonem-wrap1");
var wrap2 = container.querySelector(".abonem-wrap2");
var wrap3 = container.querySelector(".abonem-wrap3");

element1.addEventListener("click", function() {
	wrap1.classList.add("wrap-click");
	wrap2.classList.remove("wrap-click");
	wrap3.classList.remove("wrap-click");
});

element2.addEventListener("click", function() {
	wrap2.classList.add("wrap-click");
	wrap1.classList.remove("wrap-click");
	wrap3.classList.remove("wrap-click");
});

element3.addEventListener("click", function() {
	wrap3.classList.add("wrap-click");
	wrap1.classList.remove("wrap-click");
	wrap2.classList.remove("wrap-click");
});

var footerForm = document.querySelector(".footer-form");
var firstInput = footerForm.querySelector(".input_1");
var secondInput = footerForm.querySelector(".input_2");
var firstLabel = footerForm.querySelector(".label_1"); 
var secondLabel = footerForm.querySelector(".label_2");

firstInput.addEventListener("click", function() {
	firstLabel.classList.add("label-invisible");
})
secondInput.addEventListener("click", function() {
	secondLabel.classList.add("label-invisible");
})