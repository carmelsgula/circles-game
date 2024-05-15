function summonFinalBoss(onClick) {
    var finalBoss = document.createElement("div");
    finalBoss.classList.add("finalBoss");
    container.appendChild(finalBoss);
    bossHealth = 20;
  
    var interval = setInterval(function () {
    if (bossHealth <= 5 && level === 20) {
      document.body.style.animation = "warning 1s linear infinite"
    }
      var finalBossRect = finalBoss.getBoundingClientRect();
      var circles = document.querySelectorAll(".grayCircle");
  
      circles.forEach(function (grayCircle) {
          var circleRect = grayCircle.getBoundingClientRect();
          if (
            finalBossRect.left < circleRect.right &&
            finalBossRect.right > circleRect.left &&
            finalBossRect.top < circleRect.bottom &&
            finalBossRect.bottom > circleRect.top
          ) {
            setInterval(() => {
              finalBoss.style.right = Math.random() * 10 + "px"
            }, 5);
            if (!ressistance) {
              bossHealth--;
              document.getElementById("bossHealth").textContent = bossHealth;
              new Audio('boss-damage.mp3').play();
              ressistance = true;
              setTimeout(() => {
                ressistance = false;
              }, 1000);
            };
          }
      });
    }, 5);
  }