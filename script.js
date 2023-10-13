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

function randomePole() {
  ham1.classList.remove("active");
  ham2.classList.remove("active");
  ham3.classList.remove("active");
  ham4.classList.remove("active");
  ham5.classList.remove("active");
  ham6.classList.remove("active");
  let randomNum = Math.floor(Math.random() * 6) + 1;
  let numPole = document.getElementById("ham" + randomNum);
  numPole.classList.add("active");
}
setInterval(randomePole, 1500);

pole1.addEventListener("click", () => {
  if (ham1.classList.contains("active")) {
    audio.play();
  }
});
