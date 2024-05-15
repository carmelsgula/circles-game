document.getElementById("statsButton").addEventListener("click", function () {
    this.style.display = "none";
    document.getElementById("startButton").style.display = "none";
    document.getElementById("backButton").style.display = "block";
    document.getElementById("stats").style.display = "block";
    document.getElementById("resetStats").style.display = "block";
    document.getElementById("optionsButton").style.display = "none";
});

document.getElementById("backButton").addEventListener("click", function () {
    this.style.display = "none";
    document.getElementById("startButton").style.display = "block";
    document.getElementById("statsButton").style.display = "block";
    document.getElementById("stats").style.display = "none";
    document.getElementById("resetStats").style.display = "none";
    document.getElementById("options").style.display = "none";
    document.getElementById("optionsButton").style.display = "block";
});

document.getElementById("optionsButton").addEventListener("click", function () {
    this.style.display = "none";
    document.getElementById("startButton").style.display = "none";
    document.getElementById("backButton").style.display = "block";
    document.getElementById("statsButton").style.display = "none";
    document.getElementById("options").style.display = "block";
});

const disableImpostorsCheck = document.getElementById("disableImpostorsCheck");
disableImpostorsCheck.addEventListener("change", function() {
    disableImpostors = this.checked;
});

const shorterLevelsCheck = document.getElementById("shorterLevels");
shorterLevelsCheck.addEventListener("change", function() {
    shorterLevels = this.checked;
});