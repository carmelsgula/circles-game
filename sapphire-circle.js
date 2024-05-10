function spawnSapphireCircle() {
    createCircle("sapphireCircle", function () {
      score += 2;
      document.getElementById("score").textContent = score;
      new Audio('pop.mp3').play();
    });
    if (level === 1) {
      var randomTime = Math.floor(Math.random() * 6000) + 1000;
      setTimeout(spawnSapphireCircle, randomTime);
    } else if (level === 2 || level === 3) {
      var randomTime = Math.floor(Math.random() * 4000) + 1000;
      setTimeout(spawnSapphireCircle, randomTime);
    } else if (level >= 4 || level <= 9) {
      var randomTime = Math.floor(Math.random() * 3000) + 1000;
      setTimeout(spawnSapphireCircle, randomTime);
    } else if (level >= 10) {
      var randomTime = Math.floor(Math.random() * 2000) + 1000;
      setTimeout(spawnSapphireCircle, randomTime);
    }
  }