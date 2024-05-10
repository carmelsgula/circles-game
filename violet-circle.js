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
          } else if (circle.classList.contains('yellowCircle')) {
            score += 4;
            document.getElementById("score").textContent = score;
            container.removeChild(circle);
          } else if (circle.classList.contains('orangeCircle')) {
            score += 8;
            document.getElementById("score").textContent = score;
            container.removeChild(circle);
          } else if (circle.classList.contains('redCircle')) {
            score += 16;
            document.getElementById("score").textContent = score;
            container.removeChild(circle);
          } else if (circle.classList.contains('blueCircle')) {
            score += 1;
            document.getElementById("score").textContent = score;
            container.removeChild(circle);
          } else if (circle.classList.contains('impostorCircle')) {
            score += 2;
            document.getElementById("score").textContent = score;
            container.removeChild(circle);
          }
        }
      });
    }, 5);
  }