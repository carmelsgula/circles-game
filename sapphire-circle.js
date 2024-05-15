function spawnSapphireCircle() {
    createCircle("sapphireCircle", function () {
      score += 2;
      increaseCirclesHit();
      document.getElementById("score").textContent = score;
      new Audio('pop.mp3').play();
    });
    if (level === 1) {
      var randomTime = Math.floor(Math.random() * 6000) + 1000;
      setTimeout(spawnSapphireCircle, randomTime);
    } else if (level === 2 || level === 3) {
      var randomTime = Math.floor(Math.random() * 5000) + 1000;
      setTimeout(spawnSapphireCircle, randomTime);
    } else if (level === 4 || level === 5) {
      var randomTime = Math.floor(Math.random() * 4000) + 1000;
      setTimeout(spawnSapphireCircle, randomTime);
    } else if (level === 6 || level === 7) {
      var randomTime = Math.floor(Math.random() * 3000) + 1000;
      setTimeout(spawnSapphireCircle, randomTime);
    } else if (level === 8 || level === 9) {
      var randomTime = Math.floor(Math.random() * 2500) + 1000;
      setTimeout(spawnSapphireCircle, randomTime);
    } else if (level > 9) {
      var randomTime = Math.floor(Math.random() * 2000) + 1000;
      setTimeout(spawnSapphireCircle, randomTime);
    }
  }