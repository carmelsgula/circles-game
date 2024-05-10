function spawnSuperLine() {
    var superLine = document.createElement("div");
    superLine.classList.add("purpleLine");
    container.appendChild(superLine);
    setTimeout(function () {
      superLine.style.display = "none"
    }, 2000);
  
    var interval = setInterval(function () {
      var superLineRect = superLine.getBoundingClientRect();
      var circles = document.querySelectorAll(".sapphireCircle, .yellowCircle, .orangeCircle, .redCircle, .blueCircle, .impostorCircle");
  
      circles.forEach(function (circle) {
          var circleRect = circle.getBoundingClientRect();
          if (
            superLineRect.left < circleRect.right &&
            superLineRect.right > circleRect.left &&
            superLineRect.top < circleRect.bottom &&
            superLineRect.bottom > circleRect.top
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
              document.getElementById("score").textContent = score;
              container.removeChild(circle);
              new Audio('pop.mp3').play();
            }
          }
        });
      }, 5);
  }