let slides = document.querySelectorAll(".slide");
let index = 0;

function runSlider() {

slides.forEach(s => s.classList.remove("active"));

index++;

if(index >= slides.length) index = 0;

slides[index].classList.add("active");

setTimeout(runSlider, 4000);

}

runSlider();