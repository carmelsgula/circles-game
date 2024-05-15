// Function to set a cookie with the given name, value, and expiration time
function setCookie(name, value, days) {
  const date = new Date();
  date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
  const expires = "expires=" + date.toUTCString();
  document.cookie = name + "=" + value + ";" + expires + ";path=/";
}

// Function to get the value of a cookie by name
function getCookie(name) {
  const decodedCookie = decodeURIComponent(document.cookie);
  const cookieArray = decodedCookie.split(';');
  for (let i = 0; i < cookieArray.length; i++) {
      let cookie = cookieArray[i];
      while (cookie.charAt(0) === ' ') {
          cookie = cookie.substring(1);
      }
      if (cookie.indexOf(name + "=") === 0) {
          return cookie.substring(name.length + 1, cookie.length);
      }
  }
  return "";
}

// Increase the "circles hit" count and update the display
function increaseCirclesHit() {
  let currentCirclesHit = parseInt(getCookie("circlesHit")) || 0;
  currentCirclesHit++;
  setCookie("circlesHit", currentCirclesHit, 30);
  document.getElementById("displayCirclesHit").innerText = "Circles Hit: " + currentCirclesHit;
  updateAccuracy();
}

// Increase the "circles missed" count and update the display
function increaseCirclesMissed() {
  let currentCirclesMissed = parseInt(getCookie("circlesMissed")) || 0;
  currentCirclesMissed++;
  setCookie("circlesMissed", currentCirclesMissed, 30);
  document.getElementById("displayCirclesMissed").innerText = "Circles Missed: " + currentCirclesMissed;
  updateAccuracy();
}

// Update the accuracy and display it
function updateAccuracy() {
  let currentCirclesHit = parseInt(getCookie("circlesHit")) || 0;
  let currentCirclesMissed = parseInt(getCookie("circlesMissed")) || 0;
  let currentCirclesAccuracy = 0;
  if (currentCirclesHit + currentCirclesMissed > 0) {
      currentCirclesAccuracy = (currentCirclesHit / (currentCirclesHit + currentCirclesMissed)) * 100;
  }
  setCookie("circlesAccuracy", currentCirclesAccuracy, 30);
  document.getElementById("displayAccuracy").innerText = "Accuracy: " + currentCirclesAccuracy.toFixed(2) + "%";
}

// Reset all stats to default values
function resetStats() {
  setCookie("circlesHit", 0, 30);
  setCookie("circlesMissed", 0, 30);
  setCookie("circlesAccuracy", 0, 30);
  document.getElementById("displayCirclesHit").innerText = "Circles Hit: 0";
  document.getElementById("displayCirclesMissed").innerText = "Circles Missed: 0";
  document.getElementById("displayAccuracy").innerText = "Accuracy: 0%";
}

// Initialize the stats display
window.onload = function () {
  const storedCirclesHit = getCookie("circlesHit");
  const storedCirclesMissed = getCookie("circlesMissed");
  const storedCirclesAccuracy = getCookie("circlesAccuracy");

  document.getElementById("displayCirclesHit").innerText = "Circles Hit: " + (storedCirclesHit || 0);
  document.getElementById("displayCirclesMissed").innerText = "Circles Missed: " + (storedCirclesMissed || 0);
  document.getElementById("displayAccuracy").innerText = "Accuracy: " + (storedCirclesAccuracy || 0) + "%";
};
