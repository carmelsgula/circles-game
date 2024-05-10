function spawnVioletCircle() {
    var violetCircle = document.createElement("div");
    violetCircle.classList.add("violetCircle");
    violetCircle.style.top = getRandomPosition(maxHeight) + "px";
    violetCircle.style.left = "200px";
    container.appendChild(violetCircle);
  
    var interval = setInterval(function () {
      var violetRect = violetCircle.getBoundingClientRect();
      var circles = document.querySelectorAll(".sapphireCircle, .yellowCircle, .orangeCircle, .redCircle, .blueCircle, .impostorCircle");
  
      circles.forEach(function (circle) {
        var circleRect = circle.getBoundingClientRect();
        if (
          violetRect.left < circleRect.right &&
          violetRect.right > circleRect.left &&
          violetRect.top < circleRect.bottom &&
          violetRect.bottom > circleRect.top
        ) {
          if (circle.classList.contains('sapphireCircle')) {
            score += 2;
            document.getElementById("score").textContent = score;
            container.removeChild(circle);
            new Audio('pop.mp3').play();
          } else if (circle.classList.contains('yellowCircle')) {
            score += 4;
            document.getElementById("score").textContent = score;
            container.removeChild(circle);
            new Audio('pop.mp3').play();
          } else if (circle.classList.contains('orangeCircle')) {
            score += 8;
            document.getElementById("score").textContent = score;
            container.removeChild(circle);
            new Audio('pop.mp3').play();
          } else if (circle.classList.contains('redCircle')) {
            score += 16;
            document.getElementById("score").textContent = score;
            container.removeChild(circle);
            new Audio('pop.mp3').play();
          } else if (circle.classList.contains('blueCircle')) {
            score += 1;
            document.getElementById("score").textContent = score;
            container.removeChild(circle);
            new Audio('pop.mp3').play();
          } else if (circle.classList.contains('impostorCircle')) {
            health--;
            document.getElementById("health").textContent = health;
            container.removeChild(circle);
            new Audio('impostor-pop.mp3').play();
          } else if (circle.classList.contains('yellowImpostorCircle')) {
            health -= 2;
            document.getElementById("health").textContent = health;
            container.removeChild(circle);
            new Audio('impostor-pop.mp3').play();
          } else if (circle.classList.contains('pinkCircle')) {
            score += 2;
            health += 2;
            document.getElementById("score").textContent = score;
            document.getElementById("health").textContent = health;
            container.removeChild(circle);
            new Audio('pink-pop.mp3').play();
          } else if (circle.classList.contains('cyanCircle')) {
            score += Math.floor(Math.random() * 16) + 1;
            document.getElementById("score").textContent = score;
            container.removeChild(circle);
            new Audio('pop.mp3').play();
          } else if (circle.classList.contains('cyanCircle')) {
            level++;
            document.getElementById("level").textContent = level;
            container.removeChild(circle);
            new Audio('pink-pop.mp3').play();
          } else if (circle.classList.contains('greenCircle')) {
            score += 64;
            document.getElementById("level").textContent = level;
            container.removeChild(circle);
            new Audio('green-pop.mp3').play();
          }
        }
      });
    }, 5);
  }