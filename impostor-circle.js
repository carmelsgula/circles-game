function spawnImpostorCircle() {
    createCircle("impostorCircle", function () {
        if (!circleRessistance) {
            health -= 1;
            score -= 2;
            increaseCirclesMissed();
            document.getElementById("score").textContent = score;
            document.getElementById("health").textContent = health;
            new Audio('impostor-pop.mp3').play();
        } else {
            new Audio('impostor-pop.mp3').play();
        }
    });
  
    if (level < 7 || disableImpostors) {
      var impostorCircle = document.querySelector(".impostorCircle");
      if (impostorCircle) {
        container.removeChild(impostorCircle);
      }
    }
  
    if (level < 9) {
      var randomTime = Math.floor(Math.random() * 7000) + 1000;
      setTimeout(spawnImpostorCircle, randomTime);
    } else if (level === 9 || level === 10) {
      var randomTime = Math.floor(Math.random() * 6000) + 1000;
      setTimeout(spawnImpostorCircle, randomTime);
    } else if (level >= 11 || level <= 13) {
      var randomTime = Math.floor(Math.random() * 5000) + 1000;
      setTimeout(spawnImpostorCircle, randomTime);
    } else if (level >= 14) {
      var randomTime = Math.floor(Math.random() * 4000) + 1000;
      setTimeout(spawnImpostorCircle(), randomTime);
    }
  }