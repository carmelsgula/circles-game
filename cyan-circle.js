function spawnCyanCircle(onClick) {
    var cyanCircle = document.createElement("div");
    cyanCircle.classList.add("cyanCircle");
    cyanCircle.style.top = getRandomPosition(maxHeight) + "px";
    cyanCircle.style.left = "0%";
    var animationDuration = Math.floor(Math.random() * 4000) + 1000;
    cyanCircle.style.animation = `moveCircle ${animationDuration}ms linear`;
    container.appendChild(cyanCircle);

    if (level < 8 ) {
        var cyanCircle = document.querySelector(".cyanCircle");
        if (cyanCircle) {
            container.removeChild(cyanCircle);
        }
    }

    var interval = setInterval(function () {
        var cyanRect = cyanCircle.getBoundingClientRect();
        var lineRect = document.querySelector(".redLine").getBoundingClientRect();

        if (cyanRect.left <= lineRect.right) {
            clearInterval(interval);
            container.removeChild(cyanCircle);
                health--;
                new Audio('miss.mp3').play();
                document.getElementById("health").textContent = health;
        };

    cyanCircle.addEventListener("click", function () {
      container.removeChild(cyanCircle);
      score += Math.floor(Math.random() * 16) + 1;
      increaseCirclesHit();
      document.getElementById('score').textContent = score;
      new Audio('pop.mp3').play();
      onClick();
    });
  }, 5);

  var interval = setInterval(function () {
    var cyanRect = cyanCircle.getBoundingClientRect();
    var circles = document.querySelectorAll(".violetCircle, purpleLine");

    circles.forEach(function (circle) {
      var circleRect = circle.getBoundingClientRect();
      if (
        cyanRect.left < circleRect.right &&
        cyanRect.right > circleRect.left &&
        cyanRect.top < circleRect.bottom &&
        cyanRect.bottom > circleRect.top
      ) {
        container.removeChild(cyanCircle);
        score += Math.floor(Math.random() * 16) + 1;
        document.getElementById('score').textContent = score;
        increaseCirclesHit();
      }
    });
  })

  if (level < 9) {
    var randomTime = Math.floor(Math.random() * 12000) + 1000;
    setTimeout(spawnCyanCircle, randomTime);
  } else if (level === 9 || level === 10) {
    var randomTime = Math.floor(Math.random() * 10000) + 1000;
    setTimeout(spawnCyanCircle, randomTime);
  } else if (level === 11 || level === 12) {
    var randomTime = Math.floor(Math.random() * 8000) + 1000;
    setTimeout(spawnCyanCircle, randomTime);
  } else if (level === 13 || level === 14) {
    var randomTime = Math.floor(Math.random() * 7000) + 1000;
    setTimeout(spawnCyanCircle, randomTime);
  } else if (level > 14) {
    var randomTime = Math.floor(Math.random() * 6000) + 1000;
    setTimeout(spawnCyanCircle, randomTime);
  }
}