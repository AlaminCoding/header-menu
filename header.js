const menuBtn = document.getElementById("menu-btn");
const closeBtn = document.getElementById("close-btn");
const menuList = document.querySelector(".menu-list");
const menuLink = document.querySelectorAll(".menu-link");
const mmCloseBtn = document.querySelectorAll(".mm-close-btn");

const submenuTitle = document.querySelectorAll(".submenu-title");
console.log(submenuTitle);

menuLink.forEach((element) => {
  element.addEventListener("click", function () {
    let megaMenu = element.nextElementSibling;
    megaMenu.classList.add("mega-menu-open");
  });
});

mmCloseBtn.forEach((element) => {
  let mMenu = element.parentElement;
  element.addEventListener("click", function () {
    mMenu.classList.remove("mega-menu-open");
  });
});

menuBtn.addEventListener("click", function () {
  menuList.classList.toggle("menu-list-open");
});

closeBtn.addEventListener("click", function () {
  menuList.classList.remove("menu-list-open");
});

submenuTitle.forEach((element) => {
  element.addEventListener("click", function () {
    let submenuList = element.nextElementSibling;
    submenuList.classList.toggle("submenu-list-open");
    element.classList.toggle("submenu-title-open");
  });
});
