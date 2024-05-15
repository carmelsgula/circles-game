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

  var interval = setInterval(function () {
    var pinkRect = pinkCircle.getBoundingClientRect();
    var circles = document.querySelectorAll(".violetCircle, purpleLine");

    circles.forEach(function (circle) {
      var circleRect = circle.getBoundingClientRect();
      if (
        pinkRect.left < circleRect.right &&
        pinkRect.right > circleRect.left &&
        pinkRect.top < circleRect.bottom &&
        pinkRect.bottom > circleRect.top
      ) {
        container.removeChild(pinkCircle);
        score += 2;
        health++;
        document.getElementById('score').textContent = score;
        document.getElementById('health').textContent = health;
        increaseCirclesHit();
      }
    });
  })

  if (level < 10) {
    var randomTime = Math.floor(Math.random() * 17000) + 1000;
    setTimeout(spawnPinkCircle, randomTime);
  } else if (level === 11 || level === 12) {
    var randomTime = Math.floor(Math.random() * 16000) + 1000;
    setTimeout(spawnPinkCircle, randomTime);
  } else if (level === 13) {
    var randomTime = Math.floor(Math.random() * 15000) + 1000;
    setTimeout(spawnPinkCircle, randomTime);
  } else if (level === 14) {
    var randomTime = Math.floor(Math.random() * 14000) + 1000;
    setTimeout(spawnPinkCircle, randomTime);
  } else if (level === 15 || level === 16) {
    var randomTime = Math.floor(Math.random() * 13000) + 1000;
    setTimeout(spawnPinkCircle, randomTime);
  } else if (level > 16) {
    var randomTime = Math.floor(Math.random() * 12000) + 1000;
    setTimeout(spawnPinkCircle, randomTime);
  }
}