function summonFinalBoss(onClick) {
    var finalBoss = document.createElement("div");
    finalBoss.classList.add("finalBoss");
    container.appendChild(finalBoss);
    bossHealth = 20;
  
    var interval = setInterval(function () {
          finalBoss.style.right = Math.random() * 10 + "px"
          if (!ressistance) {
            bossHealth--;
            document.getElementById("bossHealth").textContent = bossHealth;
            new Audio('boss-damage.mp3').play();
            ressistance = true;
            setTimeout(() => {
              ressistance = false;
            }, 500);
        };
  
      grayCircle.addEventListener("click", function () {
        grayCircle.style.animation = "laser 0.5s linear";
        setTimeout(() => {
        container.removeChild(grayCircle);        
        }, 500);
        onClick();
      });
    }, 5);
  }