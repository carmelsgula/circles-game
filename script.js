var health = 10;
var container = document.body;
var maxWidth = container.clientWidth;
var maxHeight = container.clientHeight;
var score = 0;
var level = 1;
var bossHealth = 10;
var canSpawn = 0;
var ressistance = false;
var circleRessistance = false;
var disableImpostors = false;
var shorterLevels = false;
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
      if (!circle.classList.contains('impostorCircle') && !circle.classList.contains('yellowImpostorCircle') && !circle.classList.contains('pinkCircle')) {
        health--;
        increaseCirclesMissed();
        new Audio('miss.mp3').play();
        document.getElementById("health").textContent = health;
      } else if (circle.classList.contains('purpleCircle')) {
        level = 0;
        document.getElementById("level").textContent = level;
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
  if (event.key === 'v') {
      violetCirclePress();
  } else if (event.key === 's') {
      superLinePress();
  } else if (event.key === 'p') {
      pinkCirclePress();
  } else if (event.key === 'r') {
      ressistancePress();
  }
});

function violetCirclePress() {
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

function pinkCirclePress() {
  if (score >= 100) {
    new Audio('pink-spawns.mp3').play();
    createCircle("pinkCircle", function () {
      score += 2;
      health += 1;
      document.getElementById("score").textContent = score;
      document.getElementById("health").textContent = health;
      new Audio('pink-pop.mp3').play();
    });
    score -= 100;
    document.getElementById("score").textContent = score;
  } else {
    new Audio('miss.mp3').play();
  }
}

function ressistancePress() {
  if (score >= 250 && !circleRessistance && !disableImpostors) {
    new Audio('pink-spawns.mp3').play();
    circleRessistance = true;
    score -= 250;
    setTimeout(() => {
      circleRessistance = false;
    }, 15000);
  } else {
    new Audio('miss.mp3').play();
  }
}

function checkGameOver() {
  if (health <= 0) {
    window.location.href = 'game-over.html';
  }
}

function checkGameWon() {
  if (bossHealth <= 0 && level === 20) {
    window.location.href = 'you-won.html';
  }
}

document.getElementById("startButton").addEventListener("click", function () {
  this.style.display = "none";
  document.getElementById("statsButton").style.display = "none";
  document.getElementById("health").style.display = "block";
  document.getElementById("score").style.display = "block";
  document.getElementById("level").style.display = "block";
  document.getElementById("violetButton").style.display = "block";
  document.getElementById("superLineButton").style.display = "block";
  document.getElementById("pinkButton").style.display = "block";
  document.getElementById("ressistanceButton").style.display = "block";
  document.getElementById("disableImpostors").style.display = "none";
  document.getElementById("disableImpostorsCheck").style.display = "none";
  document.getElementById("optionsButton").style.display = "none";

  setInterval(checkGameOver, 10);
  setInterval(checkGameWon, 10);
  spawnSapphireCircle();
  spawnYellowCircle();
  spawnBlueCircle();
  spawnGrayCircle();
  spawnOrangeCircle();
  spawnRedCircle();
  spawnYellowImpostorCircle(); 
  spawnImpostorCircle();
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
    if (canSpawn === 1 && level === 10) {
      summonBoss();
      canSpawn = 2;
    }

    if (canSpawn === 0 && level === 20) {
      canSpawn = 1;
      document.getElementById("canSpawn").textContent = canSpawn;
    }
    if (canSpawn === 1) {
      summonFinalBoss();
      canSpawn = 2;
    }
  }, 10)