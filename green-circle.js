function spawnGreenCircle() {
    createCircle("greenCircle", function () {
      score += 64;
      increaseCirclesHit();
      document.getElementById("score").textContent = score;
      new Audio('green-pop.mp3').play();
    });
    var randomTime = Math.floor(Math.random() * 400000) + 1000;
    setTimeout(spawnGreenCircle, randomTime);
  }