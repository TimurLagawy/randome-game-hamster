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
  localStorage.setItem("winner10", localStorage.getItem("winner9"));
  localStorage.setItem("winner9", localStorage.getItem("winner8"));
  localStorage.setItem("winner8", localStorage.getItem("winner7"));
  localStorage.setItem("winner7", localStorage.getItem("winner6"));
  localStorage.setItem("winner6", localStorage.getItem("winner5"));
  localStorage.setItem("winner5", localStorage.getItem("winner4"));
  localStorage.setItem("winner4", localStorage.getItem("winner3"));
  localStorage.setItem("winner3", localStorage.getItem("winner2"));
  localStorage.setItem("winner2", localStorage.getItem("winner1"));
  localStorage.setItem(
    "winner1",
    document.querySelector("#winner-input").value + ":  " + countRes
  );
  location.reload();
});

function addResults() {
  let res1;
  if (localStorage.getItem("winner1") !== "null") {
    res1 = localStorage.getItem("winner1");
  } else {
    res1 = 0;
  }
  document.querySelector("#res1").innerHTML = res1;
  let res2;
  if (localStorage.getItem("winner2") !== "null") {
    res2 = localStorage.getItem("winner2");
  } else {
    res2 = 0;
  }
  document.querySelector("#res2").innerHTML = res2;
  let res3;
  if (localStorage.getItem("winner3") !== "null") {
    res3 = localStorage.getItem("winner3");
  } else {
    res3 = 0;
  }
  document.querySelector("#res3").innerHTML = res3;
  let res4 = 0;
  if (localStorage.getItem("winner4") !== "null") {
    res4 = localStorage.getItem("winner4");
  } else {
    res4 = 0;
  }
  document.querySelector("#res4").innerHTML = res4;
  let res5 = 0;
  if (localStorage.getItem("winner5") !== "null") {
    res5 = localStorage.getItem("winner5");
  } else {
    res5 = 0;
  }
  document.querySelector("#res5").innerHTML = res5;
  let res6 = 0;
  if (localStorage.getItem("winner6") !== "null") {
    res6 = localStorage.getItem("winner6");
  } else {
    res6 = 0;
  }
  document.querySelector("#res6").innerHTML = res6;
  let res7;
  if (localStorage.getItem("winner7") !== "null") {
    res7 = localStorage.getItem("winner7");
  } else {
    res7 = 0;
  }
  document.querySelector("#res7").innerHTML = res7;
  let res8;
  if (localStorage.getItem("winner8") !== "null") {
    res8 = localStorage.getItem("winner8");
  } else {
    res8 = 0;
  }
  document.querySelector("#res8").innerHTML = res8;
  let res9;
  if (localStorage.getItem("winner9") !== "null") {
    res9 = localStorage.getItem("winner9");
  } else {
    res9 = 0;
  }
  document.querySelector("#res9").innerHTML = res9;
  let res10;
  if (localStorage.getItem("winner10") !== "null") {
    res10 = localStorage.getItem("winner10");
  } else {
    res10 = 0;
  }
  document.querySelector("#res10").innerHTML = res10;
}
addResults();
