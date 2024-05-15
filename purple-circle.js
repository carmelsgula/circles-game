function spawnPurpleCircle() {
    createCircle("purpleCircle", function () {
        score += 2;
        increaseCirclesHit();
        document.getElementById("score").textContent = score;
        level++;
        health = 10 + level - 1;
        document.getElementById("level").textContent = level;
        document.getElementById("health").textContent = health;
        new Audio('pink-pop.mp3').play();
    });
    if (level > 10) {
        var purpleCircle = document.querySelector(".purpleCircle");
        if (purpleCircle) {
            container.removeChild(purpleCircle);
        }
    }
    if (!shorterLevels) {
        var timeDelay = 40000 + (level * 2000);
    } else {
        var timeDelay = 20000 + (level * 2000);
    }
    if (level > 10) {
        setTimeout(spawnPurpleCircle, timeDelay);
    }
}

function spawnPurpleCircleSecond() {
    createCircle("purpleCircle", function () {
        score += 2;
        increaseCirclesHit();
        document.getElementById("score").textContent = score;
        level++;
        health = 10 + level - 1;
        document.getElementById("level").textContent = level;
        document.getElementById("health").textContent = health;
        new Audio('pink-pop.mp3').play();
        if (level < 11) {
            var purpleCircle = document.querySelector(".purpleCircle");
            if (purpleCircle) {
                container.removeChild(purpleCircle);
            }
        }
    });
    if (!shorterLevels) {
        var timeDelay = 40000 + (level * 2000);
    } else {
        var timeDelay = 20000 + (level * 2000);
    }
    if (level > 10) {
        setTimeout(spawnPurpleCircleSecond, timeDelay);
    }
}