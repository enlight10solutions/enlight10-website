// script.js

document.addEventListener("DOMContentLoaded", () => {
  /* ============================
     Mobile menu toggle
     ============================ */
  const menuBtn = document.getElementById("menuToggle");
  const panel = document.getElementById("mobileMenu");
  const backdrop = document.getElementById("menuBackdrop");

  const openMenu = () => {
    if (!panel || !backdrop || !menuBtn) return;
    document.body.classList.add("menu-open");
    panel.hidden = false;
    backdrop.hidden = false;
    menuBtn.setAttribute("aria-expanded", "true");
  };

  const closeMenu = () => {
    if (!panel || !backdrop || !menuBtn) return;
    document.body.classList.remove("menu-open");
    menuBtn.setAttribute("aria-expanded", "false");
    // small delay to allow slide-out animation if you add one later
    setTimeout(() => {
      panel.hidden = true;
      backdrop.hidden = true;
    }, 200);
  };

  if (menuBtn && panel && backdrop) {
    menuBtn.addEventListener("click", () => {
      const expanded = menuBtn.getAttribute("aria-expanded") === "true";
      expanded ? closeMenu() : openMenu();
    });

    backdrop.addEventListener("click", closeMenu);

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && document.body.classList.contains("menu-open")) {
        closeMenu();
      }
    });
  }

  /* ============================
     Demo video + speed controls
     ============================ */
  const video = document.getElementById("demoVideo");
  const speedButtons = document.querySelectorAll(".video-speed-btn[data-speed]");

  const setSpeed = (speedValue) => {
    const speed = parseFloat(speedValue);
    if (video && !Number.isNaN(speed)) {
      video.playbackRate = speed;
    }

    // update active button styling
    speedButtons.forEach((btn) => {
      if (!(btn instanceof HTMLElement)) return;
      const btnSpeed = btn.getAttribute("data-speed");
      if (btnSpeed === speedValue) {
        btn.classList.add("active");
      } else {
        btn.classList.remove("active");
      }
    });
  };

  if (video) {
    // Default speed: 1.5x once metadata is ready
    video.addEventListener("loadedmetadata", () => {
      setSpeed("1.5");
    });

    // If metadata is already loaded (fast reload), set it immediately
    if (video.readyState >= 1) {
      setSpeed("1.5");
    }
  }

  // Wire up the buttons
  speedButtons.forEach((btn) => {
    if (!(btn instanceof HTMLElement)) return;
    btn.addEventListener("click", () => {
      const speed = btn.getAttribute("data-speed") || "1";
      setSpeed(speed);
    });
  });
});
