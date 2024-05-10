var health = 10;
var container = document.body;
var maxWidth = container.clientWidth;
var maxHeight = container.clientHeight;
var score = 0;
var level = 1;
var bossHealth = 10;
var canSpawn = 0;
var ressistance = false;
function createCircle(className, onClick) {
  var circle = document.createElement("div");
  circle.className = className;
  circle.style.top = getRandomPosition(maxHeight) + "px";
  circle.style.left = maxWidth + "px";
  container.appendChild(circle);

  var interval = setInterval(function () {
    var circleRect = circle.getBoundingClientRect();
    var lineRect = document.querySelector(".redLine").getBoundingClientRect();

    if (circleRect.left <= lineRect.right) {
      clearInterval(interval);
      container.removeChild(circle);
      if (!circle.classList.contains('impostorCircle') && !circle.classList.contains('yellowImpostorCircle')) {
        health--;
        new Audio('miss.mp3').play();
        document.getElementById("health").textContent = health;
      }
    }
  }, 5);

  circle.addEventListener("click", function () {
    container.removeChild(circle);
    onClick();
  });
}

function getRandomPosition() {
  var windowHeight = window.innerHeight;
  var minPosition = windowHeight * 0.1; // Minimum position (10% from top)
  var maxPosition = windowHeight * 0.9; // Maximum position (90% from top)
  var randomPosition = Math.floor(Math.random() * (maxPosition - minPosition)) + minPosition;
  return randomPosition;
}

document.addEventListener('keydown', function(event) {
  if (event.key === 'v' && score >= 500) {
    spawnVioletCircle();
    score -= 500;
    document.getElementById("score").textContent = score;
  } else if (event.key === 's' && score >= 250) {
      spawnSuperLine();
      score -= 250;
      document.getElementById("score").textContent = score;
  }
});

function VioletCirclePress() {
  if (score >= 400) {
    spawnVioletCircle();
    score -= 400;
    document.getElementById("score").textContent = score;
  } else {
    new Audio('miss.mp3').play();
  }
}

function superLinePress() {
  if (score >= 500) {
    spawnSuperLine();
    score -= 500;
    document.getElementById("score").textContent = score;
  } else {
    new Audio('miss.mp3').play();
  }
}

function checkGameOver() {
  if (health <= 0) {
    window.location.href = 'gameover.html';
  }
}

document.getElementById("startButton").addEventListener("click", function () {
  this.style.display = "none";
  document.getElementById("health").style.display = "block";
  document.getElementById("score").style.display = "block";
  document.getElementById("level").style.display = "block";
  document.getElementById("violetButton").style.display = "block";
  document.getElementById("superLineButton").style.display = "block";

  setInterval(checkGameOver, 10);
  spawnSapphireCircle();
  spawnYellowCircle();
  spawnBlueCircle();
  spawnGrayCircle();
  spawnOrangeCircle();
  spawnRedCircle();
  spawnImpostorCircle();
  spawnYellowImpostorCircle();
  spawnPinkCircle();
  spawnCyanCircle();
  setTimeout(function() {
  spawnGreenCircle();
  }, Math.random() * 400000);

  setTimeout(function() {
    spawnPurpleCircle();
  }, 40000);
});

  setInterval(function() {
    if (canSpawn === 0 && level === 10) {
      canSpawn = 1;
      document.getElementById("canSpawn").textContent = canSpawn;
    }
    if (canSpawn === 1) {
      summonBoss();
      canSpawn = 2;
    }

    if (canSpawn === 0 && level === 20) {
      canSpawn = 1;
      document.getElementById("canSpawn").textContent = canSpawn;
    }
    if (canSpawn === 1) {
      summonFinalBoss()
      canSpawn = 2;
    }
  }, 10)