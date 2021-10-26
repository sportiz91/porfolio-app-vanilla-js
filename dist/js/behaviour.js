//DOM Queries:
const menuBtn = document.querySelector(".menu-btn");
const menuBtnBrg = document.querySelector(".menu-btn-burger");
const nav = document.querySelector(".nav");
const listItems = document.querySelectorAll(".nav-item");
let state = false;

//Event listeners:
menuBtn.addEventListener("click", () => {
  if (!state) {
    menuBtnBrg.classList.add("open");
    nav.classList.add("open");
    listItems.forEach((item) => item.classList.add("open"));
    state = true;
  } else {
    menuBtnBrg.classList.remove("open");
    nav.classList.remove("open");
    listItems.forEach((item) => {
      item.classList.remove("open");
    });
    state = false;
  }
});
