//declaring
let title = document.getElementById("title");
let usernameInput = document.getElementById("usernameInput");
let registerForm = document.getElementById("registerForm");
let logoutButton = document.getElementById("logoutButton");
let startSection = document.getElementById("start");
let rewardSection = document.getElementById("reward");
let goTopSection = document.getElementById("top");

let imgReward = document.getElementById("imgReward");

let box1 = document.getElementById("box1");
let box2 = document.getElementById("box2");
let box3 = document.getElementById("box3");

const default_option = ["😱", "🤣", "😍"];

function resetting() {
  startSection.style.display = "none";
  goTopSection.style.display = "none";
  rewardSection.style.display = "none";
}

function clearing() {
  usernameInput.value = "";
  registerForm.style.display = "none";
}

function displaying() {
  title.textContent = "welcome " + sessionStorage.getItem("token");
  document.title = sessionStorage.getItem("token");
  box1.textContent = default_option[0];
  box2.textContent = default_option[1];
  box3.textContent = default_option[2];
  startSection.style.display = "block";
  logoutButton.style.display = "block";
  rewardSection.style.display = "none";
  goTopSection.style.display = "flex";
}

function directing(url, time) {
  setTimeout(() => {
    location.href = url;
  }, time);
}
