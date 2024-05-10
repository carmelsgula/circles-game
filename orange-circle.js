function spawnOrangeCircle() {
    createCircle("orangeCircle", function () {
      score += 8;
      document.getElementById("score").textContent = score;
      new Audio('pop.mp3').play();
    });
    if (level < 3) {
      var orangeCircle = document.querySelector(".orangeCircle");
      if (orangeCircle) {
        container.removeChild(orangeCircle);
      }
    }
  if (level < 4) {
    var randomTime = Math.floor(Math.random() * 17000) + 1000;
    setTimeout(spawnOrangeCircle, randomTime);
  } else if (level === 4 || level === 5) {
    var randomTime = Math.floor(Math.random() * 14000) + 1000;
    setTimeout(spawnOrangeCircle, randomTime);
  } else if (level === 6 || level === 7) {
    var randomTime = Math.floor(Math.random() * 12000) + 1000;
    setTimeout(spawnOrangeCircle, randomTime);
  } else if (level === 8 || level === 9) {
    var randomTime = Math.floor(Math.random() * 10000) + 1000;
    setTimeout(spawnOrangeCircle, randomTime);
  } else if (level === 9 || level === 10 || level === 11) {
    var randomTime = Math.floor(Math.random() * 8000) + 1000;
    setTimeout(spawnOrangeCircle, randomTime);
  } else if (level > 10) {
    var randomTime = Math.floor(Math.random() * 6000) + 1000;
    setTimeout(spawnOrangeCircle, randomTime);
  }
}