document.addEventListener("DOMContentLoaded", function() {
    // Select the primary answer buttons (".answer") and the "None of the Above" button (".none")
    const answerButtons = document.querySelectorAll(".answer");
    const noneButton = document.querySelector(".none");

    // Function to check if all buttons are hidden
    function checkAllHidden() {
        let allHidden = true;
        answerButtons.forEach(button => {
            if (button.style.display !== "none") {
                allHidden = false;
            }
        });
        if (noneButton && noneButton.style.display !== "none") {
            allHidden = false;
        }
        if (allHidden) {
            // All buttons are hidden; redirect to connections.html after a short delay
            setTimeout(() => {
                window.location.href = "connections.html";
            }, 500);
        }
    }

    // Add click event listeners to each primary answer button
    answerButtons.forEach(button => {
        button.addEventListener("click", function() {
            // Add the red flash effect
            button.classList.add("flash-red");
            // Hide "None of the Above" button immediately if it's visible
            if (noneButton) {
                noneButton.style.display = "none";
            }
            // After 0.5 seconds, hide the clicked button and check if all buttons are hidden
            setTimeout(() => {
                button.style.display = "none";
                checkAllHidden();
            }, 500);
        });
    });

    // Add click event listener for the "None of the Above" button
    if (noneButton) {
        noneButton.addEventListener("click", function() {
            noneButton.textContent = "Narcissist";
            noneButton.classList.add("shake");
            // After 0.5 seconds, hide the "None" button and check if all buttons are hidden
            setTimeout(() => {
                noneButton.style.display = "none";
                checkAllHidden();
            }, 500);
        });
    }
});