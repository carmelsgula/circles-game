function spawnGrayCircle(onClick) {
    var grayCircle = document.createElement("div");
    grayCircle.classList.add("grayCircle");
    grayCircle.style.top = getRandomPosition(maxHeight) + "px";
    grayCircle.style.left = "0%";
    container.appendChild(grayCircle);
  
    if (level < 20) {
      var grayCircle = document.querySelector(".grayCircle");
      if (grayCircle) {
        container.removeChild(grayCircle);
      }
    }
  
    var interval = setInterval(function () {
      var grayRect = grayCircle.getBoundingClientRect();
      var circles = document.querySelectorAll(".sapphireCircle, .yellowCircle, orangeCircle, redCircle, blueCircle");
  
      circles.forEach(function (circle) {
        var circleRect = circle.getBoundingClientRect();
        if (
          grayRect.left < circleRect.right &&
          grayRect.right > circleRect.left &&
          grayRect.top < circleRect.bottom &&
          grayRect.bottom > circleRect.top
        ) {
          container.removeChild(circle);
        }
      });
  
      grayCircle.addEventListener("click", function () {
        grayCircle.style.animation = "laser 0.5s linear";
        setTimeout(() => {
        container.removeChild(grayCircle);        
        }, 500);
        onClick();
      });
    }, 5);
  
    if (level < 20) {
      var randomTime = Math.floor(Math.random() * 8000) + 1000;
      setTimeout(spawnGrayCircle, randomTime);
    } else if (level === 20) {
      var randomTime = Math.floor(Math.random() * 8000) + 1000;
      setTimeout(spawnGrayCircle, randomTime);
    }
  }