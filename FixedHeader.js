const header = document.querySelector("header");
const headerHeight = header.offsetHeight;
const navbarMenu = document.querySelector(".menu");

window.addEventListener("scroll", () => {
  windowHeight = pageYOffset;

  if (windowHeight >= headerHeight) {
    header.classList.add("fixed");
  } else if (windowHeight <= 1) {
    header.classList.remove("fixed");
  }
});
