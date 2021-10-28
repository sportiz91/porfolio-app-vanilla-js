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

listItems.forEach((item) => {
  item.addEventListener("click", (e) => {
    const foundItem = Array.from(listItems).find((item) => {
      return item.firstElementChild.classList[1] == "active";
    });
    foundItem.firstElementChild.classList.remove("active");
    e.target.classList.add("active");
  });
});

/* LEARNINGS --------------------------------------------------------------------------------------------------------------- */
/* 1. NODELISTS AND ARRAYS: [...nodelist] will make an array of out of an object if the object is iterable.
Array.from(nodelist) will make an array out of an object if the object is iterable or if the object is array-like (has .length and numeric props)
our two examples will be identical if NodeList.prototype[Symbol.iterator] exists, because both cases cover iterables. If your environment has 
not been configured such that NodeList is iterable however, your first example will fail, and the second will succeed. Babel currently does not handle this case properly. 
So if your NodeList is iterable, it is really up to you which you use. I would likely choose on a case-by-case basis. One benefit of Array.from is 
that it takes a second argument of a mapping function, whereas the first [...iterable].map(item => item) would have to create a temporary
array, Array.from(iterable, item => item) would not. If you are not mapping the list however, it does not matter
*/
