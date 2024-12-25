// Slide Function
let currentSlide = 0;
function showSlide(index) {
  const slides = document.querySelectorAll(".worksSlider .workcard ");
  slides[currentSlide].classList.remove("active");
  currentSlide = (index + slides.length) % slides.length;
  slides[currentSlide].classList.add("active");
}

function nextSlide() {
  showSlide(currentSlide + 1);
}

function prevSlide() {
  showSlide(currentSlide - 1);
}



// Download CV functionality
function downloadCV() {
  const link = document.createElement("a");
  link.href = "Rizwan Ahmed Resume.pdf";
  link.download = "Rizwan Ahmed CV.pdf";
  link.click();
}

document.getElementById("downloadCV").addEventListener("click", downloadCV);