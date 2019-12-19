const inputGroup = document.getElementById("input-group")
const inputButton = document.getElementById("input-button")
const inputText = document.getElementById("input-text")
const inputLabel = document.getElementById("input-label")

inputButton.addEventListener("click", (e) => {
    e.preventDefault();
    console.log("Added a listener");
    inputLabel.style.opacity = 0;
    inputText.style.opacity = 0;
    inputGroup.style.width = 0;
})
