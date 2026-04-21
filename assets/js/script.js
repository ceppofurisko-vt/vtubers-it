document.addEventListener("DOMContentLoaded", function () {
  const navbarCollapse = document.querySelector("#navbarNav");
  const navbarToggler = document.querySelector(".navbar-toggler");
  const navLinks = document.querySelectorAll(".navbar-nav .nav-link");

  if (!navbarCollapse || !navbarToggler) return;

  navbarToggler.addEventListener("click", function (e) {
    e.stopImmediatePropagation();
    const instance = bootstrap.Collapse.getInstance(navbarCollapse);
    if (navbarCollapse.classList.contains("show")) {
      instance.hide();
    } else {
      instance.show();
    }
  }, true);

  // Chiudi menu quando si clicca su un link
  navLinks.forEach((link) => {
    link.addEventListener("click", function () {
      if (navbarCollapse.classList.contains("show")) {
        bootstrap.Collapse.getInstance(navbarCollapse)?.hide();
      }
    });
  });

  // Chiudi menu con tasto Escape
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && navbarCollapse.classList.contains("show")) {
      bootstrap.Collapse.getInstance(navbarCollapse)?.hide();
      navbarToggler.focus();
    }
  });

});