function spawnYellowCircle() {
    createCircle("yellowCircle", function () {
      score += 4;
      increaseCirclesHit();
      document.getElementById("score").textContent = score;
      new Audio('pop.mp3').play();
    });
  if (level === 1) {
    var randomTime = Math.floor(Math.random() * 14000) + 1000;
    setTimeout(spawnYellowCircle, randomTime);
  } else if (level === 2 || level === 3) {
    var randomTime = Math.floor(Math.random() * 12000) + 1000;
    setTimeout(spawnYellowCircle, randomTime);
  } else if (level === 4 || level === 5) {
    var randomTime = Math.floor(Math.random() * 9000) + 1000;
    setTimeout(spawnYellowCircle, randomTime);
  } else if (level === 6 || level === 7) {
    var randomTime = Math.floor(Math.random() * 7000) + 1000;
    setTimeout(spawnYellowCircle, randomTime);
  } else if (level === 7 || level === 8) {
    var randomTime = Math.floor(Math.random() * 5000) + 1000;
    setTimeout(spawnYellowCircle, randomTime);
  } else if (level === 9 || level == 10) {
    var randomTime = Math.floor(Math.random() * 3000) + 1000;
    setTimeout(spawnYellowCircle, randomTime);
  } else if (level > 10) {
    var randomTime = Math.floor(Math.random() * 2000) + 1000;
    setTimeout(spawnYellowCircle, randomTime);
  }
}