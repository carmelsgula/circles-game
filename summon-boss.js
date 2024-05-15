function summonBoss(onClick) {
    var boss = document.createElement("div");
    boss.classList.add("boss");
    container.appendChild(boss);

    function spawnBossRedCircle() {
        createCircle("redCircle", function () {
            score += 16;
            document.getElementById("score").textContent = score;
            new Audio('pop.mp3').play();
    });
        if (level === 10 && bossHealth > 0) {
            var randomTime = Math.floor(Math.random() * 8000) + 1000;
            setTimeout(spawnBossRedCircle, randomTime);
            boss.style.border = "8px solid rgb(177, 0, 0)";
            setTimeout(() => {
                boss.style.border = "4px solid rgb(134, 12, 134)";
            }, 500);
        }
    }

    function spawnBossOrangeCircle() {
        createCircle("orangeCircle", function () {
            score += 16;
            document.getElementById("score").textContent = score;
            new Audio('pop.mp3').play();
    });
        if (level === 10 && bossHealth > 0) {
            var randomTime = Math.floor(Math.random() * 4000) + 1000;
            setTimeout(spawnBossOrangeCircle, randomTime);
            boss.style.border = "8px solid #c86a00";
            setTimeout(() => {
                boss.style.border = "4px solid rgb(134, 12, 134)";
            }, 1000);
        }
    }
    spawnBossRedCircle();
    spawnBossOrangeCircle();

    var interval = setInterval(function () {
        boss.addEventListener("click", function () {
            if (!ressistance) {
                let count = 0;
                setInterval(() => {
                    if (count < 100) {
                        boss.style.left = window.innerWidth * 0.8 + (Math.random() * 10 - 5) + "px";
                        count++;
                    }
                }, 5);
            bossHealth--;
            new Audio('boss-damage.mp3').play();
            document.getElementById("bossHealth").textContent = bossHealth;
            ressistance = true;
            setTimeout(() => {
                ressistance = false;
            }, 1000);
                if (bossHealth <= 0 && level === 10) {
                    boss.style.animation = "bossLevelEnd 2s linear";
                    setTimeout(() => {
                        container.removeChild(boss);
                        createCircle("purpleCircle", function () {
                            score += 2;
                            document.getElementById("score").textContent = score;
                            level++;
                            health = 10 + level - 1;
                            document.getElementById("level").textContent = level;
                            document.getElementById("health").textContent = health;
                            new Audio('pink-pop.mp3').play();
                        });
                        spawnPurpleCircleSecond();
                    }, 2000);
                }
            };
            onClick();
        });
    }, 5);
}