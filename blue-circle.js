function spawnBlueCircle() {
    var blueCircleAmount = 0;
    var intervalId; // Variable to hold the interval ID
  
    intervalId = setInterval(function() {
        if (blueCircleAmount >= 15) {
            clearInterval(intervalId);
            return;
        }
        blueCircleAmount++;
        createCircle("blueCircle", function () {
            score += 1;
            increaseCirclesMissed();
            document.getElementById("score").textContent = score;
            new Audio('pop.mp3').play();
        });
  
      if (level < 6) {
        var blueCircle = document.querySelector(".blueCircle");
        if (blueCircle) {
          container.removeChild(blueCircle);
        }
      }
    }, 1000);
  
    if (level < 7) {
        var randomTime = Math.floor(Math.random() * 80000) + 1000;
        setTimeout(spawnBlueCircle, randomTime);
    } else if (level === 7 || level === 8) {
        var randomTime = Math.floor(Math.random() * 70000) + 1000;
        setTimeout(spawnBlueCircle, randomTime);
    } else if (level === 9 || level === 10) {
        var randomTime = Math.floor(Math.random() * 60000) + 1000;
        setTimeout(spawnBlueCircle, randomTime);
    } else if (level > 10) {
        var randomTime = Math.floor(Math.random() * 50000) + 1000;
        setTimeout(spawnBlueCircle, randomTime);
    }
}