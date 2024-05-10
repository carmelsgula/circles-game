function spawnPurpleCircle() {
    createCircle("purpleCircle", function () {
        score += 2;
        document.getElementById("score").textContent = score;
        level++;
        health = 10 + level - 1;
        document.getElementById("level").textContent = level;
        document.getElementById("health").textContent = health;
        new Audio('pink-pop.mp3').play();
    });
    var timeDelay = 40000 + (level * 2500);
    if (level !== 10 || level !== 20) {
        setTimeout(spawnPurpleCircle, timeDelay);
    }
}