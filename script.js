let ham1 = document.querySelector("#ham1");
let ham2 = document.querySelector("#ham2");
let ham3 = document.querySelector("#ham3");
let ham4 = document.querySelector("#ham4");
let ham5 = document.querySelector("#ham5");
let ham6 = document.querySelector("#ham6");

function randomePole() {
  ham1.classList.remove("active");
  ham2.classList.remove("active");
  ham3.classList.remove("active");
  ham4.classList.remove("active");
  ham5.classList.remove("active");
  ham6.classList.remove("active");
  let numPole = "ham" + (Math.floor(Math.random() * 6) + 1);
  console.log(numPole);
  numPole.classList.add("active");
}
