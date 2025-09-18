document.addEventListener("DOMContentLoaded", function () {
  const navBar = document.querySelector(".nav-bar");
  const navMobile = document.querySelector(".nav_mobile");
  const navClose = document.querySelector(".nav_close");
  const overlay = document.querySelector(".nav__overlay");

  navBar.addEventListener("click", () => {
    navMobile.classList.add("active");
    overlay.classList.add("active");
  });

  navClose.addEventListener("click", () => {
    navMobile.classList.remove("active");
    overlay.classList.remove("active");
  });

  overlay.addEventListener("click", () => {
    navMobile.classList.remove("active");
    overlay.classList.remove("active");
  });
});
