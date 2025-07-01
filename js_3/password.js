let inputslider = document.getElementById("inputslider");
let slidervalue = document.getElementById("sliderValue");
let passBox = document.getElementById("passBox");
let lowercase = document.getElementById("lowercase");
let uppercase = document.getElementById("uppercase");
let numbers = document.getElementById("numbers");
let symbols = document.getElementById("symbols");
let genbtn = document.getElementById("genbtn");

slidervalue.textContent = inputslider.value;
inputslider.addEventListener("input", () => {
    slidervalue.textContent = inputslider.value;
});

genbtn.addEventListener("click", () => {
    
});