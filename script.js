document.addEventListener("DOMContentLoaded", function () {

  /* ---- Mobile menu ---- */
  var menuBtn = document.getElementById("menuToggle");
  var backdrop = document.getElementById("menuBackdrop");

  function openMenu() {
    document.body.classList.add("menu-open");
    if (menuBtn) menuBtn.setAttribute("aria-expanded", "true");
  }

  function closeMenu() {
    document.body.classList.remove("menu-open");
    if (menuBtn) menuBtn.setAttribute("aria-expanded", "false");
  }

  if (menuBtn) {
    menuBtn.addEventListener("click", function () {
      menuBtn.getAttribute("aria-expanded") === "true" ? closeMenu() : openMenu();
    });
  }

  if (backdrop) {
    backdrop.addEventListener("click", closeMenu);
  }

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && document.body.classList.contains("menu-open")) closeMenu();
  });

  /* ---- Nav dropdowns ---- */
  document.querySelectorAll("[data-dd]").forEach(function (dd) {
    var btn = dd.querySelector(".nav__dd-btn");
    var panel = dd.querySelector(".nav__dd-panel");
    if (!btn || !panel) return;

    var timer = null;

    function open() {
      if (timer) { clearTimeout(timer); timer = null; }
      dd.classList.add("open");
      btn.setAttribute("aria-expanded", "true");
    }

    function schedClose() {
      timer = setTimeout(function () {
        dd.classList.remove("open");
        btn.setAttribute("aria-expanded", "false");
      }, 180);
    }

    btn.addEventListener("mouseenter", open);
    panel.addEventListener("mouseenter", open);
    btn.addEventListener("mouseleave", schedClose);
    panel.addEventListener("mouseleave", schedClose);

    btn.addEventListener("click", function (e) {
      e.preventDefault();
      if (dd.classList.contains("open")) {
        dd.classList.remove("open");
        btn.setAttribute("aria-expanded", "false");
      } else {
        open();
      }
    });
  });

});
