function spawnYellowImpostorCircle() {
    createCircle("yellowImpostorCircle", function () {
      health -= 2;
      document.getElementById("health").textContent = health;
      new Audio('impostor-pop.mp3').play();
    });
  
    if (level < 14) {
      var impostorCircle = document.querySelector(".yellowImpostorCircle");
      if (impostorCircle) {
        container.removeChild(impostorCircle);
      }
    }
  
    if (level < 14) {
      var randomTime = Math.floor(Math.random() * 12000) + 1000;
      setTimeout(spawnYellowImpostorCircle, randomTime);
    } else if (level === 14 || level === 15) {
      var randomTime = Math.floor(Math.random() * 10000) + 1000;
      setTimeout(spawnYellowImpostorCircle, randomTime);
    } else if (level >= 16 || level <= 17) {
      var randomTime = Math.floor(Math.random() * 8000) + 1000;
      setTimeout(spawnYellowImpostorCircle, randomTime);
    } else if (level >= 18) {
      var randomTime = Math.floor(Math.random() * 6000) + 1000;
      setTimeout(spawnYellowImpostorCircle(), randomTime);
    }
  }