// script.js (FULL FILE REPLACEMENT — CLEAN: shared header + mobile menu + dropdowns)
// - Removed ALL demo video speed/seek/keyboard logic
// - No custom video controls at all (native <video controls> will work normally)

document.addEventListener("DOMContentLoaded", function () {
  /* ---------------- Shared header / nav ---------------- */
  var headerMount = document.querySelector("[data-site-header]");

  if (headerMount) {
    var current = headerMount.getAttribute("data-current") || "";

    function currentAttr(key) {
      return current === key ? ' aria-current="page"' : "";
    }

    headerMount.outerHTML = [
      '<nav class="topbar" role="navigation" aria-label="Primary">',
      '  <a class="brand" href="./" aria-label="enLight10 Solutions — Home">',
      '    <img class="brand-logo brand-logo--slim" src="./enLight10_Logo.png" alt="enLight10 Solutions" />',
      '  </a>',
      '',
      '  <div class="nav-right">',
      '    <div class="nav-links">',
      '      <div class="dropdown">',
      '        <button class="dropdown-toggle" type="button" aria-haspopup="true" aria-expanded="false">',
      '          Services ▾',
      '        </button>',
      '        <div class="dropdown-panel">',
      '          <a href="./services-secureops.html"' + currentAttr("services-secureops") + '>',
      '            Watchtower SecureOps™',
      '            <span class="sub">Services delivered by people &amp; platform</span>',
      '          </a>',
      '          <a href="./services-cyber-defense-united.html"' + currentAttr("services-cyber-defense-united") + '>',
      '            Cyber Defense United™',
      '            <span class="sub">DoD/DIB cyber defense on Watchtower</span>',
      '          </a>',
      '        </div>',
      '      </div>',
      '',
      '      <a href="./watchtower.html"' + currentAttr("watchtower") + '>Watchtower CRP™</a>',
      '      <a href="./cyber-readiness.html"' + currentAttr("cyber-readiness") + '>Cyber Readiness</a>',
      '      <a href="./capabilities.html"' + currentAttr("capabilities") + '>Capabilities</a>',
      '      <a href="./partners.html"' + currentAttr("partners") + '>Prime Partners</a>',
      '      <a href="./who.html"' + currentAttr("who") + '>Who We Are</a>',
      '      <a class="button small" href="mailto:info@enlight10solutions.com">Contact</a>',
      '    </div>',
      '',
      '    <button id="menuToggle" class="hamburger" aria-label="Toggle mobile menu" aria-expanded="false" aria-controls="mobileMenu" type="button">',
      '      <span></span><span></span><span></span>',
      '    </button>',
      '  </div>',
      '</nav>',
      '',
      '<div id="menuBackdrop" class="menu-backdrop" hidden></div>',
      '<aside id="mobileMenu" class="menu-panel" hidden aria-label="Mobile Menu">',
      '  <nav class="menu-nav">',
      '    <strong style="font-size:0.8rem; text-transform:uppercase; letter-spacing:0.12em; opacity:0.8;">Services</strong>',
      '    <a href="./services-secureops.html"' + currentAttr("services-secureops") + '>Watchtower SecureOps™</a>',
      '    <a href="./services-cyber-defense-united.html"' + currentAttr("services-cyber-defense-united") + '>Cyber Defense United™</a>',
      '    <hr />',
      '    <a href="./watchtower.html"' + currentAttr("watchtower") + '>Watchtower CRP™</a>',
      '    <a href="./cyber-readiness.html"' + currentAttr("cyber-readiness") + '>Cyber Readiness</a>',
      '    <a href="./capabilities.html"' + currentAttr("capabilities") + '>Capabilities</a>',
      '    <a href="./partners.html"' + currentAttr("partners") + '>Prime Partners</a>',
      '    <a href="./who.html"' + currentAttr("who") + '>Who We Are</a>',
      '    <a class="button small" href="mailto:info@enlight10solutions.com">Contact</a>',
      '  </nav>',
      '</aside>'
    ].join("\n");
  }

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
      if (expanded) closeMenu();
      else openMenu();
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
      }, 200);
    }

    // Hover (desktop)
    toggle.addEventListener("mouseenter", open);
    panelEl.addEventListener("mouseenter", open);
    toggle.addEventListener("mouseleave", scheduleClose);
    panelEl.addEventListener("mouseleave", scheduleClose);

    // Click toggle (touchpads / accessibility)
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
