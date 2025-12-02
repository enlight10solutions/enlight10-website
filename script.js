// script.js
document.addEventListener("DOMContentLoaded", function () {
  /* ---------------- Mobile menu ---------------- */
  var menuBtn = document.getElementById("menuToggle");
  var panel = document.getElementById("mobileMenu");
  var backdrop = document.getElementById("menuBackdrop");

  function openMenu() {
    document.body.classList.add("menu-open");
    if (panel) panel.hidden = false;
    if (backdrop) backdrop.hidden = false;
    if (menuBtn) menuBtn.setAttribute("aria-expanded", "true");
  }

  function closeMenu() {
    document.body.classList.remove("menu-open");
    if (menuBtn) menuBtn.setAttribute("aria-expanded", "false");
    setTimeout(function () {
      if (panel) panel.hidden = true;
      if (backdrop) backdrop.hidden = true;
    }, 200);
  }

  if (menuBtn) {
    menuBtn.addEventListener("click", function () {
      var expanded = menuBtn.getAttribute("aria-expanded") === "true";
      if (expanded) {
        closeMenu();
      } else {
        openMenu();
      }
    });
  }

  if (backdrop) {
    backdrop.addEventListener("click", closeMenu);
  }

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && document.body.classList.contains("menu-open")) {
      closeMenu();
    }
  });

  /* ---------------- Demo video speed ---------------- */
  var video = document.getElementById("demoVideo");
  if (video && video.tagName === "VIDEO") {
    var speedButtons = document.querySelectorAll(".video-speed-btn");

    function setActiveSpeed(speed) {
      speedButtons.forEach(function (btn) {
        var attr = btn.getAttribute("data-speed") || "1";
        var s = parseFloat(attr);
        if (s === speed) {
          btn.classList.add("active");
        } else {
          btn.classList.remove("active");
        }
      });
    }

    video.addEventListener("loadedmetadata", function () {
      video.playbackRate = 1.5; // default 1.5x
      setActiveSpeed(1.5);
    });

    speedButtons.forEach(function (btn) {
      btn.addEventListener("click", function () {
        var attr = btn.getAttribute("data-speed") || "1";
        var speed = parseFloat(attr);
        if (!isNaN(speed)) {
          video.playbackRate = speed;
          setActiveSpeed(speed);
        }
      });
    });
  }

  /* ---------------- Product dropdown ---------------- */
  var dropdowns = document.querySelectorAll(".dropdown");

  dropdowns.forEach(function (dd) {
    var toggle = dd.querySelector(".dropdown-toggle");
    var panelEl = dd.querySelector(".dropdown-panel");
    if (!toggle || !panelEl) return;

    var hideTimer = null;

    function open() {
      if (hideTimer) {
        clearTimeout(hideTimer);
        hideTimer = null;
      }
      dd.classList.add("open");
    }

    function scheduleClose() {
      hideTimer = setTimeout(function () {
        dd.classList.remove("open");
      }, 200); // small delay so you can move into the panel
    }

    // Hover (desktop)
    toggle.addEventListener("mouseenter", open);
    panelEl.addEventListener("mouseenter", open);
    toggle.addEventListener("mouseleave", scheduleClose);
    panelEl.addEventListener("mouseleave", scheduleClose);

    // Click toggle (helps on touchpads / accessibility)
    toggle.addEventListener("click", function (e) {
      e.preventDefault();
      if (dd.classList.contains("open")) {
        dd.classList.remove("open");
      } else {
        open();
      }
    });
  });
});
