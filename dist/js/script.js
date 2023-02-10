const toggleMenu = document.querySelector(".toggle_menu");
const mobileNav = document.querySelector(".header_nav");
toggleMenu.addEventListener("click", () => {
    toggleMenu.classList.toggle("open");
    mobileNav.classList.toggle("open");
});

const links = document.querySelectorAll(".footer_content_items h4");

links.forEach((link) => {
    link.addEventListener("click", () => {
      link.nextElementSibling.classList.toggle("open");
      link.querySelector("i").classList.toggle("open");
    });
  });