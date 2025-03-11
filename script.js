document.addEventListener("DOMContentLoaded", function() {
    // Get all answer buttons (excluding the "None of the Above" button)
    const answerButtons = document.querySelectorAll(".answer");
    // Keep track of how many answer buttons remain visible
    let remainingAnswers = answerButtons.length;
    
    // Get the "None of the Above" button (if it exists)
    const noneButton = document.querySelector(".none");
    
    answerButtons.forEach(button => {
        button.addEventListener("click", function() {
            // Add red flash effect to the clicked button
            button.classList.add("flash-red");
            // Hide the "None of the Above" button if it's visible
            if (noneButton) {
                noneButton.style.display = "none";
            }
            // After 0.5 seconds, hide the clicked button and update the counter
            setTimeout(() => {
                button.style.display = "none";
                remainingAnswers--;
                // If all answer buttons are hidden, redirect to connections.html
                if (remainingAnswers === 0) {
                    window.location.href = "connections.html";
                }
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
