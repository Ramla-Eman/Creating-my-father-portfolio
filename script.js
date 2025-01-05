
// Download CV functionality
function downloadCV() {
  const link = document.createElement("a");
  link.href = "Rizwan Ahmed Resume.pdf";
  link.download = "Rizwan Ahmed CV.pdf";
  link.click();
}

document.getElementById("downloadCV").addEventListener("click", downloadCV);