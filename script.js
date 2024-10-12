const button = document.getElementById("btn");

function haloweenActivations() {
  document.querySelector(".pumpkin").classList.toggle("active");
  let elements = document.querySelectorAll(
    ".pumpkin-cls-4, .pumpkin-cls-5, .pumpkin-cls-7, .pumpkin-cls-8"
  );
  elements.forEach((element) => {
    element.classList.toggle("glow");
  });

  document.querySelectorAll(".house-cls-13").forEach((item) => {
    item.classList.toggle("glow-effect");
    item.classList.toggle("active");
  });

  document.querySelectorAll(".house-cls-12").forEach((item) => {
    item.classList.toggle("active");
  });

  document.querySelectorAll(".house-cls-9").forEach((item) => [item.classList.toggle("active")]);
  document.querySelector(".house-cls-11").classList.toggle("active");

  const stops = document.querySelectorAll("#linear-gradient stop");
  if (document.querySelector(".bg-cls-4").classList.toggle("active")) {
    stops[0].setAttribute("stop-color", "#03091b");
    stops[1].setAttribute("stop-color", "#64539d");
  } else {
    stops[0].setAttribute("stop-color", "#7e9f8c");
    stops[1].setAttribute("stop-color", "#e9efeb");
  }

  const stop1 = document.querySelectorAll("#linear-gradient-2 stop");
  if (document.querySelector(".bg-cls-6").classList.toggle("active")) {
    stop1[0].setAttribute("stop-color", "#061235");
    stop1[1].setAttribute("stop-color", "#586f7a");
    stop1[2].setAttribute("stop-color", "#586f7a");
  } else {
    stop1[0].setAttribute("stop-color", "#599581");
    stop1[1].setAttribute("stop-color", "#c8dad3");
    stop1[2].setAttribute("stop-color", "#e9efeb");
  }

  document.querySelectorAll(".bg-cls-8").forEach((item) => {
    item.classList.toggle("active");
  });

  document.querySelectorAll(".bg-cls-9").forEach((item) => {
    item.classList.toggle("active");
  });

  document.querySelector(".bg-cls-10").classList.toggle("active");
  if (document.querySelector(".bg-cls-10").classList.contains("active")) {
    button.innerText = "Change to Normal Theme";
    button.style.fontFamily = "sans sarif";
    button.style.color = "#fff";
  } else {
    button.innerText = "Change to Halloween Theme";
    button.style.fontFamily = "A Charming Font Expanded";
    button.style.color = "#df2222";
  }

  document.querySelector(".moon").classList.toggle("active");

  const audio = document.getElementById("thunder-sound");
  audio.volume = 0.5;
  if (audio.paused) {
    audio.play();
  } else {
    audio.pause();
  }

  document.querySelector(".halloween-text").classList.toggle("active");
}

button.addEventListener("click", haloweenActivations);
