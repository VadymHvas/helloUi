const burgerMenu = document.querySelector("#burg");
const menu = document.querySelector(".menu");

burgerMenu.addEventListener("click", () => {
  menu.classList.toggle("open");
  burgerMenu.classList.toggle("active");
});
