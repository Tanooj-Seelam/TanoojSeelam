// JavaScript to replace the div with a full-page background image
const divElement = document.getElementById("particles-js");

// Set the image as the background for the entire page
document.body.style.margin = "0";
document.body.style.padding = "0";
document.body.style.height = "100vh";
document.body.style.backgroundImage = "url('./assets/images/background.jpg')"; // Replace with your image URL
document.body.style.backgroundRepeat = "repeat";
document.body.style.backgroundSize = "cover"; // Or 'contain' if you prefer the whole image to fit
document.body.style.backgroundPosition = "center";

// Optionally, remove the div if it's no longer needed
divElement.remove();
