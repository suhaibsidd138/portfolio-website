// Example of responsive design in Javascript

// Get the HTML elements that need to be responsive
const myElement = document.querySelector("#myElement"); 

// Create a function to adjust the element's style based on screen size
function resizeElement() {
  if (window.innerWidth < 768) { 
    // Apply styles for mobile screen
    myElement.style.fontSize = "12px"; 
  } else {
    // Apply styles for larger screens
    myElement.style.fontSize = "16px"; 
  }
}

// Call the resizeElement function initially
resizeElement();

// Add an event listener to call resizeElement whenever the window is resized
window.addEventListener("resize", resizeElement);
