function yesClicked() {
    window.location.href = "yes_page.html";
}

function hideNoButton() {
    var noButton = document.getElementById("no-btn");
    noButton.style.opacity = "0"; // Make the No button transparent
    var yesButton = document.getElementById("yes-btn");
    yesButton.style.fontSize = "40px"; // Increase font size of the Yes button
    yesButton.style.padding = "30px 60px"; // Increase padding of the Yes button
}

function showNoButton() {
    var noButton = document.getElementById("no-btn");
    noButton.style.opacity = "1"; // Make the No button visible again
    var yesButton = document.getElementById("yes-btn");
    yesButton.style.fontSize = "24px"; // Reset font size of the Yes button
    yesButton.style.padding = "20px 40px"; // Reset padding of the Yes button
}
