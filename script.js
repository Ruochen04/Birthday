// Wait for the page to load before running JavaScript
document.addEventListener("DOMContentLoaded", function() {
    // Get the red flash overlay element
    const flashOverlay = document.getElementById("flash-overlay");

    // Add click event listeners to each answer button
    const answerButtons = document.querySelectorAll(".answer");
    answerButtons.forEach(button => {
        button.addEventListener("click", function() {
            // Show the red flash overlay
            flashOverlay.classList.add("flash-active");
            // After 0.5 seconds, remove the flash and hide the clicked button
            setTimeout(() => {
                flashOverlay.classList.remove("flash-active");
                button.style.display = "none";
            }, 500);
        });
    });

    // Handle the "None of the Above" button separately
    const noneButton = document.querySelector(".none");
    if (noneButton) {
        noneButton.addEventListener("click", function() {
            noneButton.textContent = "Narcissist";
            noneButton.classList.add("shake");
        });
    }
});