//for darkmode effect
const icon = document.getElementById("icon");
icon.onclick = function () {
  document.body.classList.toggle("light-theme");
  if (document.body.classList.contains("light-theme")) {
    icon.src = "images/night-mode.png";
  } else {
    icon.src = "images/sun (1).png";
  }
};

//for harmburger
const hamburger = document.querySelector(".hamburger");

const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

document.querySelectorAll(".nav-link").forEach((n) =>
  n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  })
);

// form validation
let name = document.getElementById("fname");
let lname = document.getElementById("lname");
const password = document.getElementById("password");
const confirm = document.getElementById("confirm");
let form = document.getElementById("form");

password.addEventListener("input", (e) => {
  const input = e.target.value
  console.log(input)
})
 
const toggle = document.getElementById("toggle");
toggle.onclick = function () {
  toggle.classList.toggle("active");
};
