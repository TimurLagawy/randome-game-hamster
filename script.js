let ham1 = document.querySelector("#ham1");
let ham2 = document.querySelector("#ham2");
let ham3 = document.querySelector("#ham3");
let ham4 = document.querySelector("#ham4");
let ham5 = document.querySelector("#ham5");
let ham6 = document.querySelector("#ham6");
let ham7 = document.querySelector("#ham7");
let ham8 = document.querySelector("#ham8");
let ham9 = document.querySelector("#ham9");
let ham10 = document.querySelector("#ham10");
let ham11 = document.querySelector("#ham11");
let ham12 = document.querySelector("#ham12");
let pole1 = document.querySelector("#pole1");
let pole2 = document.querySelector("#pole2");
let pole3 = document.querySelector("#pole3");
let pole4 = document.querySelector("#pole4");
let pole5 = document.querySelector("#pole5");
let pole6 = document.querySelector("#pole6");
let pole7 = document.querySelector("#pole7");
let pole8 = document.querySelector("#pole8");
let pole9 = document.querySelector("#pole9");
let pole10 = document.querySelector("#pole10");
let pole11 = document.querySelector("#pole11");
let pole12 = document.querySelector("#pole12");
let hamsterBig = document.querySelector("#hamster-big");
let countRes = 0;
let resScore = document.querySelector("#results-score");
let audio1 = document.querySelector("#audio");
let audio2 = document.querySelector("#audio2");
let audio3 = document.querySelector("#audio3");
let resultsHamster = document.querySelector("#results-hamster");
let countHam = 0;

let options = document.querySelector("#options");
let black = document.querySelector("#black");
let black1 = document.querySelector("#black1");
let optionsWindow = document.querySelector("#options-window");
let start = document.querySelector("#start");
let easyLabel = document.querySelector("#easy-label");
let mediumLabel = document.querySelector("#medium-label");
let hardLabel = document.getElementById("hard-label");
let level = localStorage.getItem("level");
let musicOn = document.querySelector("#music-on");
let musicOff = document.querySelector("#music-off");
let btnRestart = document.querySelector("#winner-congrats__button");

function clickLevel() {
  if (level == 6) {
    document.querySelector("#level-easy").click();
  } else if (level == 9) {
    document.querySelector("#level-medium").click();
  } else if (level == 12) {
    document.querySelector("#level-hard").click();
  }
}

clickLevel();

function visiblePole() {
  if (level == 6) {
    document.querySelector("#medium").classList.remove("open1");
    document.querySelector("#hard").classList.remove("open1");
  } else if (level == 9) {
    document.querySelector("#medium").classList.add("open1");
    document.querySelector("#hard").classList.remove("open1");
  } else if (level == 12) {
    document.querySelector("#medium").classList.add("open1");
    document.querySelector("#hard").classList.add("open1");
  }
}
visiblePole();
function randomePole() {
  ham1.classList.remove("active");
  ham2.classList.remove("active");
  ham3.classList.remove("active");
  ham4.classList.remove("active");
  ham5.classList.remove("active");
  ham6.classList.remove("active");
  ham7.classList.remove("active");
  ham8.classList.remove("active");
  ham9.classList.remove("active");
  ham10.classList.remove("active");
  ham11.classList.remove("active");
  ham12.classList.remove("active");
  hamsterBig.classList.remove("hamsterO");
  let randomNum = Math.floor(Math.random() * level) + 1;
  let numPole = document.getElementById("ham" + randomNum);
  numPole.classList.add("active");
  countHam++;
  resultsHamster.innerHTML = countHam;
  melodyGame();
  gameOver();
}

function melodyGame() {
  if (localStorage.getItem("audio3") == 1) {
    audio3.play();
    audio3.volume = 0.2;
  } else {
  }
}

pole1.addEventListener("click", () => {
  if (ham1.classList.contains("active")) {
    audio1.play();
    ham1.classList.remove("active");
    hamsterBig.classList.add("hamsterO");
    countRes++;
    resScore.innerHTML = countRes;
  }
});
pole2.addEventListener("click", () => {
  if (ham2.classList.contains("active")) {
    audio1.play();
    ham2.classList.remove("active");
    hamsterBig.classList.add("hamsterO");
    countRes++;
    resScore.innerHTML = countRes;
  }
});
pole3.addEventListener("click", () => {
  if (ham3.classList.contains("active")) {
    audio1.play();
    ham3.classList.remove("active");
    hamsterBig.classList.add("hamsterO");
    countRes++;
    resScore.innerHTML = countRes;
  }
});
pole4.addEventListener("click", () => {
  if (ham4.classList.contains("active")) {
    audio1.play();
    ham4.classList.remove("active");
    hamsterBig.classList.add("hamsterO");
    countRes++;
    resScore.innerHTML = countRes;
  }
});
pole5.addEventListener("click", () => {
  if (ham5.classList.contains("active")) {
    audio1.play();
    ham5.classList.remove("active");
    hamsterBig.classList.add("hamsterO");
    countRes++;
    resScore.innerHTML = countRes;
  }
});
pole6.addEventListener("click", () => {
  if (ham6.classList.contains("active")) {
    audio1.play();
    ham6.classList.remove("active");
    hamsterBig.classList.add("hamsterO");
    countRes++;
    resScore.innerHTML = countRes;
  }
});

pole7.addEventListener("click", () => {
  if (ham7.classList.contains("active")) {
    audio1.play();
    ham7.classList.remove("active");
    hamsterBig.classList.add("hamsterO");
    countRes++;
    resScore.innerHTML = countRes;
  }
});
pole8.addEventListener("click", () => {
  if (ham8.classList.contains("active")) {
    audio1.play();
    ham8.classList.remove("active");
    hamsterBig.classList.add("hamsterO");
    countRes++;
    resScore.innerHTML = countRes;
  }
});
pole9.addEventListener("click", () => {
  if (ham9.classList.contains("active")) {
    audio1.play();
    ham9.classList.remove("active");
    hamsterBig.classList.add("hamsterO");
    countRes++;
    resScore.innerHTML = countRes;
  }
});
pole10.addEventListener("click", () => {
  if (ham10.classList.contains("active")) {
    audio1.play();
    ham10.classList.remove("active");
    hamsterBig.classList.add("hamsterO");
    countRes++;
    resScore.innerHTML = countRes;
  }
});
pole11.addEventListener("click", () => {
  if (ham11.classList.contains("active")) {
    audio1.play();
    ham11.classList.remove("active");
    hamsterBig.classList.add("hamsterO");
    countRes++;
    resScore.innerHTML = countRes;
  }
});
pole12.addEventListener("click", () => {
  if (ham12.classList.contains("active")) {
    audio1.play();
    ham12.classList.remove("active");
    hamsterBig.classList.add("hamsterO");
    countRes++;
    resScore.innerHTML = countRes;
  }
});

options.addEventListener("click", () => {
  black.classList.add("open");
  optionsWindow.classList.add("open");
  start.innerHTML = "Start";
  start.classList.add("begin");
  start.classList.remove("pause");
});
setInterval(function () {
  if (start.classList.contains("pause")) {
    randomePole();
  } else if (start.classList.contains("begin")) {
  }
}, 1500);
start.addEventListener("click", () => {
  if (start.classList.contains("pause")) {
    start.innerHTML = "Start";
    start.classList.add("begin");
    start.classList.remove("pause");
    musOff();
  } else if (start.classList.contains("begin")) {
    start.innerHTML = "Pause";
    start.classList.remove("begin");
    start.classList.add("pause");
    musOff();
  }
});

document.querySelector("#level-easy").addEventListener("click", () => {
  easyLabel.classList.add("bold");
  mediumLabel.classList.remove("bold");
  hardLabel.classList.remove("bold");
  level = 6;
  visiblePole();
  localStorage.setItem("level", 6);
});
document.querySelector("#level-medium").addEventListener("click", () => {
  easyLabel.classList.remove("bold");
  mediumLabel.classList.add("bold");
  hardLabel.classList.remove("bold");
  level = 9;
  visiblePole();
  localStorage.setItem("level", 9);
});
document.querySelector("#level-hard").addEventListener("click", () => {
  easyLabel.classList.remove("bold");
  mediumLabel.classList.remove("bold");
  hardLabel.classList.add("bold");
  level = 12;
  visiblePole();
  localStorage.setItem("level", 12);
});

musicOn.addEventListener("click", () => {
  document.querySelector("#on-label").classList.add("bold");
  document.querySelector("#off-label").classList.remove("bold");
  melodyGame();
  localStorage.setItem("audio3", 1);
});
musicOff.addEventListener("click", () => {
  document.querySelector("#off-label").classList.add("bold");
  document.querySelector("#on-label").classList.remove("bold");
  audio3.pause();
  localStorage.setItem("audio3", 0);
});

function musOff() {
  if (localStorage.getItem("audio3") == 0) {
    musicOff.click();
  } else {
    musicOn.click();
  }
}
musOff();

black.addEventListener("click", () => {
  black.classList.remove("open");
  optionsWindow.classList.remove("open");
});
document.querySelector("#level-x").addEventListener("click", () => {
  black.click();
});

function gameOver() {
  if (countRes < countHam - 20) {
    hamsterBig.classList.add("hamster-laught");
    audio3.pause();
    audio2.play();
    document.querySelector("#winner-congrats").classList.add("open");
    black1.classList.add("open");
    btnRestart.classList.add("open");
    document.querySelector("#winner-record").innerHTML = countRes;
  }
}

btnRestart.addEventListener("click", () => {
  location.reload();
});
