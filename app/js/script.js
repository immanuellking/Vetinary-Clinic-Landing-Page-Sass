const bar = document.querySelector(".main__bar");
const menu = document.querySelector(".main__mobile-menu");
const closeMenu = document.querySelector(".main__mobile-menu-close");

bar.addEventListener("click", () => {
  menu.classList.add("active");
});

closeMenu.addEventListener("click", () => {
  menu.classList.remove("active");
});
