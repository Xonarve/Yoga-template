function Sim() {
	this.slider = document.querySelector(".sim-slider");
	this.sldrList = this.slider.querySelector(".sim-slider-list");
	this.sliderElements = this.sldrList.querySelectorAll(".sim-slider-element");
	this.sliderElementFirst = this.sldrList.querySelector(".sim-slider-element");
	this.sliderElementSecond = this.sldrList.querySelector(".sim-slider-element:nth-child(3)");
	this.leftArrow = this.sldrList.querySelector(".sim-slider-arrow-left");
	console.log(leftArrow);
};

Sim();