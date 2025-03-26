const menu = document.querySelector(".side-bar");
const menubtn = document.querySelector(".menu-open");
const closebtn = document.querySelector(".menu-close");
const background = document.querySelector(".back");
const feature = document.querySelector(".ft-open");
const company = document.querySelector(".com-open");
const ftmenu = document.querySelector(".ft");
const cpmenu = document.querySelector(".cp");
const dropimg1 = document.querySelector("drop-arrow");
let image = document.getElementById("arrow");
let image2 = document.getElementById("arrow-cp");
let active = false;
let active2 = false;
menubtn.addEventListener("click", () => {
  menu.classList.add("open");
  background.classList.add("dark");
});
closebtn.addEventListener("click", () => {
  menu.classList.remove("open");
  background.classList.remove("dark");
});
feature.addEventListener("click", () => {
  if (!active) {
    ftmenu.classList.add("show");
    image.src = "/images/icon-arrow-up.svg";
    active = true;
  } else {
    ftmenu.classList.remove("show");
    active = false;
    image.src = "/images/icon-arrow-down.svg";
  }
});
company.addEventListener("click", () => {
  if (!active2) {
    cpmenu.classList.add("show");
    image2.src = "/images/icon-arrow-up.svg";
    active2 = true;
  } else {
    cpmenu.classList.remove("show");
    image2.src = "/images/icon-arrow-down.svg";
    active2 = false;
  }
});
