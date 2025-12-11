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

  /* ---------------- Demo video controls (speed + seek) ---------------- */
  var video = document.getElementById("demoVideo");
  if (video && video.tagName === "VIDEO") {
    // Only grab true speed buttons (must have data-speed)
    var speedButtons = document.querySelectorAll(".video-speed-btn[data-speed]");
    var speedControls = document.querySelector(".video-speed-controls");

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
      video.playbackRate = 1; // default 1x
      setActiveSpeed(1);
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

    // ---- NEW: add skip backward / forward buttons ----
    if (speedControls) {
      var backBtn = document.createElement("button");
      backBtn.type = "button";
      backBtn.className = "video-speed-btn video-seek-btn";
      backBtn.textContent = "⏪ -10s";

      var forwardBtn = document.createElement("button");
      forwardBtn.type = "button";
      forwardBtn.className = "video-speed-btn video-seek-btn";
      forwardBtn.textContent = "10s ⏩";

      backBtn.addEventListener("click", function () {
        if (!isNaN(video.currentTime)) {
          video.currentTime = Math.max(0, video.currentTime - 10);
        }
      });

      forwardBtn.addEventListener("click", function () {
        if (!isNaN(video.currentTime)) {
          var limit = isNaN(video.duration) ? video.currentTime + 10 : video.duration;
          video.currentTime = Math.min(limit, video.currentTime + 10);
        }
      });

      speedControls.appendChild(backBtn);
      speedControls.appendChild(forwardBtn);
    }

    // ---- NEW: keyboard shortcuts for seek ----
    document.addEventListener("keydown", function (e) {
      if (!video) return;

      // Don't hijack keys while typing in inputs/textareas/contenteditable
      var target = e.target;
      if (
        target &&
        (target.tagName === "INPUT" ||
          target.tagName === "TEXTAREA" ||
          target.isContentEditable)
      ) {
        return;
      }

      if (e.key === "ArrowLeft") {
        // Jump back 5s
        if (!isNaN(video.currentTime)) {
          video.currentTime = Math.max(0, video.currentTime - 5);
        }
      } else if (e.key === "ArrowRight") {
        // Jump forward 5s
        if (!isNaN(video.currentTime)) {
          var limit = isNaN(video.duration) ? video.currentTime + 5 : video.duration;
          video.currentTime = Math.min(limit, video.currentTime + 5);
        }
      }
    });
  }

  /* ---------------- Dropdowns (Services / Product) ---------------- */
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

  // Note: CRP diagram scroll animation removed.
  // The new SVG handles its own animation via internal CSS.
});
