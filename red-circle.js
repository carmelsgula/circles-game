function spawnRedCircle() {
    createCircle("redCircle", function () {
      score += 16;
      document.getElementById("score").textContent = score;
      new Audio('pop.mp3').play();
    });
    if (level < 5) {
      var redCircle = document.querySelector(".redCircle");
      if (redCircle) {
        container.removeChild(redCircle);
      }
    }
  if (level < 7) {
    var randomTime = Math.floor(Math.random() * 19000) + 1000;
    setTimeout(spawnRedCircle, randomTime);
  } else if (level === 7 || level === 8) {
    var randomTime = Math.floor(Math.random() * 17000) + 1000;
    setTimeout(spawnRedCircle, randomTime);
  } else if (level === 9 || level === 10) {
    var randomTime = Math.floor(Math.random() * 15000) + 1000;
    setTimeout(spawnRedCircle, randomTime);
  } else if (level === 10 || level === 11) {
    var randomTime = Math.floor(Math.random() * 13000) + 1000;
    setTimeout(spawnRedCircle, randomTime);
  } else if (level > 11) {
    var randomTime = Math.floor(Math.random() * 11000) + 1000;
    setTimeout(spawnRedCircle, randomTime);
  }
}