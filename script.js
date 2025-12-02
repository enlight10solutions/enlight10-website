// script.js
document.addEventListener("DOMContentLoaded", () => {
  /* ---------------- Mobile menu ---------------- */
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
    setTimeout(() => {
      if (panel) panel.hidden = true;
      if (backdrop) backdrop.hidden = true;
    }, 200);
  };

  menuBtn?.addEventListener("click", () => {
    const expanded = menuBtn.getAttribute("aria-expanded") === "true";
    expanded ? closeMenu() : openMenu();
  });

  backdrop?.addEventListener("click", closeMenu);

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && document.body.classList.contains("menu-open")) {
      closeMenu();
    }
  });

  /* ---------------- Demo video speed ---------------- */
  const video = document.getElementById("demoVideo");
  if (video instanceof HTMLVideoElement) {
    const speedButtons = document.querySelectorAll<HTMLButtonElement>(".video-speed-btn");

    const setActiveSpeed = (speed) => {
      speedButtons.forEach((btn) => {
        const s = parseFloat(btn.getAttribute("data-speed") || "1");
        if (s === speed) {
          btn.classList.add("active");
        } else {
          btn.classList.remove("active");
        }
      });
    };

    video.addEventListener("loadedmetadata", () => {
      video.playbackRate = 1.5;   // default to 1.5x
      setActiveSpeed(1.5);
    });

    speedButtons.forEach((btn) => {
      btn.addEventListener("click", () => {
        const speed = parseFloat(btn.getAttribute("data-speed") || "1");
        video.playbackRate = speed;
        setActiveSpeed(speed);
      });
    });
  }

  /* ---------------- Product dropdown ---------------- */
  const dropdowns = document.querySelectorAll<HTMLElement>(".dropdown");

  dropdowns.forEach((dd) => {
    const toggle = dd.querySelector<HTMLElement>(".dropdown-toggle");
    const panelEl = dd.querySelector<HTMLElement>(".dropdown-panel");
    if (!toggle || !panelEl) return;

    let hideTimer: number | undefined;

    const open = () => {
      if (hideTimer) {
        window.clearTimeout(hideTimer);
        hideTimer = undefined;
      }
      dd.classList.add("open");
    };

    const scheduleClose = () => {
      hideTimer = window.setTimeout(() => {
        dd.classList.remove("open");
      }, 200); // small delay so users can move into the panel
    };

    // Hover support (desktop)
    toggle.addEventListener("mouseenter", open);
    panelEl.addEventListener("mouseenter", open);
    toggle.addEventListener("mouseleave", scheduleClose);
    panelEl.addEventListener("mouseleave", scheduleClose);

    // Click toggle (helps on touchpads / for accessibility)
    toggle.addEventListener("click", (e) => {
      e.preventDefault();
      if (dd.classList.contains("open")) {
        dd.classList.remove("open");
      } else {
        open();
      }
    });
  });
});
