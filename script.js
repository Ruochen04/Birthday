// Wait for the page to load before running JavaScript
document.addEventListener("DOMContentLoaded", function() {

    // ✅ Function to flash the entire screen red before fading back to normal
    const answerButtons = document.querySelectorAll(".answer");

    answerButtons.forEach(button => {
        button.addEventListener("click", function() {
            document.body.classList.add("flash-red"); // Apply full-screen red flash

            // Remove flash effect after 0.5s
            setTimeout(() => {
                document.body.classList.remove("flash-red");
                button.style.display = "none"; // Hide clicked button
            }, 500); // Adjust timing if needed
        });
    });

    // ✅ Function to replace "None of the Above" with "Narcissist"
    const noneButton = document.querySelector(".none");

    noneButton.addEventListener("click", function() {
        noneButton.textContent = "Narcissist"; // Replace text instead of moving it
        noneButton.classList.add("shake"); // Apply shake effect
    });

});