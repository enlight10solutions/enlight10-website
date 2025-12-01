// script.js

document.addEventListener("DOMContentLoaded", () => {
  /* ---------------- Mobile menu toggle ---------------- */
  const menuBtn = document.getElementById("menuToggle");
  const panel = document.getElementById("mobileMenu");
  const backdrop = document.getElementById("menuBackdrop");

  const openMenu = () => {
    document.body.classList.add("menu-open");
    if (panel) panel.hidden = false;
    if (backdrop) backdrop.hidden = false;
    menuBtn?.setAttribute("aria-expanded", "true");
  };

  const closeMenu = () => {
    document.body.classList.remove("menu-open");
    menuBtn?.setAttribute("aria-expanded", "false");
    // small delay so any CSS transitions can finish
    setTimeout(() => {
      if (panel) panel.hidden = true;
      if (backdrop) backdrop.hidden = true;
    }, 200);
  };

  if (menuBtn) {
    menuBtn.addEventListener("click", () => {
      const expanded = menuBtn.getAttribute("aria-expanded") === "true";
      expanded ? closeMenu() : openMenu();
    });
  }

  if (backdrop) {
    backdrop.addEventListener("click", closeMenu);
  }

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && document.body.classList.contains("menu-open")) {
      closeMenu();
    }
  });

  /* ---------------- Demo video speed controls ---------------- */
  const video = document.getElementById("demoVideo");

  // Only run this on pages that actually have the demo video (index)
  if (video && video instanceof HTMLVideoElement) {
    // Default to 2× when metadata is ready
    video.addEventListener("loadedmetadata", () => {
      video.playbackRate = 2.0;
    });

    // Wire up the speed buttons
    const speedButtons = document.querySelectorAll(
      ".video-speed-btn[data-speed]"
    );

    speedButtons.forEach((btn) => {
      btn.addEventListener("click", () => {
        const speedStr = btn.getAttribute("data-speed") || "1";
        const speed = parseFloat(speedStr);
        if (!Number.isNaN(speed)) {
          video.playbackRate = speed;
        }
      });
    });
  }
});
