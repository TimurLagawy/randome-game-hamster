let ham1 = document.querySelector("#ham1");
let ham2 = document.querySelector("#ham2");
let ham3 = document.querySelector("#ham3");
let ham4 = document.querySelector("#ham4");
let ham5 = document.querySelector("#ham5");
let ham6 = document.querySelector("#ham6");
let pole1 = document.querySelector("#pole1");
let pole2 = document.querySelector("#pole2");
let pole3 = document.querySelector("#pole3");
let pole4 = document.querySelector("#pole4");
let pole5 = document.querySelector("#pole5");
let pole6 = document.querySelector("#pole6");
let hamsterBig = document.querySelector("#hamster-big");
let countRes = 0;
let resScore = document.querySelector("#results-score");
let audio1 = document.querySelector("#audio");
let audio2 = document.querySelector("#audio2");
let resultsHamster = document.querySelector("#results-hamster");
let countHam = 0;

function randomePole() {
  ham1.classList.remove("active");
  ham2.classList.remove("active");
  ham3.classList.remove("active");
  ham4.classList.remove("active");
  ham5.classList.remove("active");
  ham6.classList.remove("active");
  hamsterBig.classList.remove("hamsterO");
  let randomNum = Math.floor(Math.random() * 6) + 1;
  let numPole = document.getElementById("ham" + randomNum);
  numPole.classList.add("active");
  countHam++;
  resultsHamster.innerHTML = countHam;
  gameOver();
}
setInterval(randomePole, 1500);

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
function gameOver() {
  if (countRes < countHam - 20) {
    hamsterBig.classList.add("hamster-laught");
    audio2.play();
    alert("GAME OVER");
  }
}
