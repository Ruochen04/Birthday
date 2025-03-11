document.addEventListener("DOMContentLoaded", function() {
    // Get the "None of the Above" button
    const noneButton = document.querySelector(".none");

    // Add event listeners to each answer button (first four)
    const answerButtons = document.querySelectorAll(".answer");
    answerButtons.forEach(button => {
        button.addEventListener("click", function() {
            // Add the flash-red effect only to the clicked button
            button.classList.add("flash-red");
            // Hide the "None of the Above" button if it's visible
            if (noneButton) {
                noneButton.style.display = "none";
            }
            // After 0.5 seconds, hide the clicked button completely
            setTimeout(() => {
                button.style.display = "none";
            }, 500);
        });
    });

    // Handle the "None of the Above" button separately
    if (noneButton) {
        noneButton.addEventListener("click", function() {
            noneButton.textContent = "Narcissist";
            noneButton.classList.add("shake");
        });
    }
});