function spawnPinkCircle() {
  createCircle("pinkCircle", function () {
    score += 2;
    health += 1;
    document.getElementById("score").textContent = score;
    document.getElementById("health").textContent = health;
    new Audio('pink-pop.mp3').play();
  });
  if (level < 9) {
    var pinkCircle = document.querySelector(".pinkCircle");
    if (pinkCircle) {
      container.removeChild(pinkCircle);
    }
  }
  if (level < 10) {
    var randomTime = Math.floor(Math.random() * 20000) + 1000;
    setTimeout(spawnPinkCircle, randomTime);
  } else if (level === 11 || level === 12) {
    var randomTime = Math.floor(Math.random() * 18000) + 1000;
    setTimeout(spawnPinkCircle, randomTime);
  } else if (level === 13 || level === 14) {
    var randomTime = Math.floor(Math.random() * 16000) + 1000;
    setTimeout(spawnPinkCircle, randomTime);
  } else if (level === 15 || level === 16) {
    var randomTime = Math.floor(Math.random() * 14000) + 1000;
    setTimeout(spawnPinkCircle, randomTime);
  } else if (level === 17 || level === 18 || level === 19) {
    var randomTime = Math.floor(Math.random() * 12000) + 1000;
    setTimeout(spawnPinkCircle, randomTime);
  } else if (level > 19) {
    var randomTime = Math.floor(Math.random() * 10000) + 1000;
    setTimeout(spawnPinkCircle, randomTime);
  }
}