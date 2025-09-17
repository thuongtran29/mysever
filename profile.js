document.addEventListener("DOMContentLoaded", function () {
  // Copy to clipboard
  const icons = document.querySelectorAll(".copy-icon");
  icons.forEach((icon) => {
    icon.addEventListener("click", function () {
      const text = this.getAttribute("data-copy");
      const copiedText = this.parentElement.querySelector(".copied-text");
      navigator.clipboard
        .writeText(text)
        .then(() => {
          copiedText.classList.add("show");
          setTimeout(() => {
            copiedText.classList.remove("show");
          }, 1500);
        })
        .catch((err) => {
          console.error("Copy failed", err);
        });
    });
  });

  // Mobile nav open/close
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
