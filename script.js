document.addEventListener("DOMContentLoaded", function () {
  const getStartedButton = document.querySelector(".btn-light");

  // smooth scroll
  const links = document.querySelectorAll("a.nav-link");
  links.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href");
      const targetSection = document.querySelector(targetId);

      if (targetSection) {
        targetSection.scrollIntoView({
          behavior: "smooth",
        });
      }
    });
  });

  getStartedButton.addEventListener("click", function () {
    const targetSection = document.querySelector("#services");
    if (targetSection) {
      targetSection.scrollIntoView({
        behavior: "smooth",
      });
    }
  });
});
