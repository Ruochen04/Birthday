// Function for flashing red effect when clicking an answer
function flashRed() {
    document.body.classList.add("flash-red");
    setTimeout(() => {
        document.body.classList.remove("flash-red");
    }, 500);
}

// Function for showing "Narcissist" with shake effect
function showNarcissist() {
    document.querySelector(".choices").style.display = "none"; // Hide buttons
    let text = document.getElementById("narcissist-text");
    text.style.display = "block";
    text.classList.add("shake");
}