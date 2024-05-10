function spawnCyanCircle(onClick) {
    var cyanCircle = document.createElement("div");
    cyanCircle.classList.add("cyanCircle");
    cyanCircle.style.top = getRandomPosition(maxHeight) + "px";
    cyanCircle.style.left = "0%";
    var animationDuration = Math.floor(Math.random() * 4000) + 1000;
    cyanCircle.style.animation = `moveCircle ${animationDuration}ms linear`;
    container.appendChild(cyanCircle);

    if (level < 6 ) {
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
            if (!cyanCircle.classList.contains('impostorCircle')) {
                health--;
                new Audio('miss.mp3').play();
                document.getElementById("health").textContent = health;
            }
        };

    cyanCircle.addEventListener("click", function () {
      container.removeChild(cyanCircle);
      score += Math.floor(Math.random() * 16) + 1;
      document.getElementById('score').textContent = score;
      new Audio('pop.mp3').play();
      onClick();
    });
  }, 5);

  if (level < 8) {
    var randomTime = Math.floor(Math.random() * 12000) + 1000;
    setTimeout(spawnCyanCircle, randomTime);
  } else if (level === 9 || level === 10) {
    var randomTime = Math.floor(Math.random() * 10000) + 1000;
    setTimeout(spawnCyanCircle, randomTime);
  } else if (level === 11 || level === 12) {
    var randomTime = Math.floor(Math.random() * 8000) + 1000;
    setTimeout(spawnCyanCircle, randomTime);
  } else if (level === 13 || level === 14) {
    var randomTime = Math.floor(Math.random() * 6000) + 1000;
    setTimeout(spawnCyanCircle, randomTime);
  } else if (level > 14) {
    var randomTime = Math.floor(Math.random() * 5000) + 1000;
    setTimeout(spawnCyanCircle, randomTime);
  }
}