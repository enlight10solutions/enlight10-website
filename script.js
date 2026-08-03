document.addEventListener("DOMContentLoaded", function () {
  var headerMount = document.querySelector("[data-site-header]");

  function currentAttr(keys, current) {
    return keys.indexOf(current) !== -1 ? ' aria-current="page"' : "";
  }

  if (headerMount) {
    var current = headerMount.getAttribute("data-current") || "";
    headerMount.outerHTML = [
      '<nav class="topbar" role="navigation" aria-label="Primary">',
      '  <a class="brand" href="./" aria-label="enLight10 Solutions — Home">',
      '    <img class="brand-logo brand-logo--slim" src="./enLight10%20Logo.png" alt="enLight10 Solutions">',
      '  </a>',
      '  <div class="nav-right">',
      '    <div class="nav-links">',
      '      <a href="./"' + currentAttr(["index"], current) + '>Home</a>',
      '      <a href="./watchtower.html"' + currentAttr(["watchtower"], current) + '>Watchtower</a>',
      '      <div class="dropdown">',
      '        <button class="dropdown-toggle" type="button" aria-haspopup="true" aria-expanded="false">Services ▾</button>',
      '        <div class="dropdown-panel">',
      '          <a href="./services-secureops.html"' + currentAttr(["services-secureops"], current) + '>Watchtower SecureOps™<span class="sub">Commercial security operations</span></a>',
      '          <a href="./services-cyber-defense-united.html"' + currentAttr(["services-cyber-defense-united"], current) + '>Cyber Defense United™<span class="sub">DoD and DIB mission services</span></a>',
      '          <a href="./cyber-readiness.html"' + currentAttr(["cyber-readiness"], current) + '>Cyber Readiness Review<span class="sub">Assessment and improvement roadmap</span></a>',
      '        </div>',
      '      </div>',
      '      <a href="./partners.html"' + currentAttr(["partners"], current) + '>Partners</a>',
      '      <div class="dropdown">',
      '        <button class="dropdown-toggle" type="button" aria-haspopup="true" aria-expanded="false">Company ▾</button>',
      '        <div class="dropdown-panel">',
      '          <a href="./who.html"' + currentAttr(["who"], current) + '>About enLight10<span class="sub">Veteran-owned and operator-led</span></a>',
      '          <a href="./capabilities.html"' + currentAttr(["capabilities"], current) + '>Capabilities &amp; Contracting<span class="sub">Services, identifiers, and company fit</span></a>',
      '        </div>',
      '      </div>',
      '      <a class="nav-pilot" href="mailto:info@enlight10solutions.com?subject=Watchtower%20Pilot%20Request&amp;body=Organization%3A%0AEnvironment%3A%0ACurrent%20security%20tools%3A%0APilot%20goal%3A%0ATimeline%3A">Start a Pilot</a>',
      '    </div>',
      '    <button id="menuToggle" class="hamburger" aria-label="Open navigation menu" aria-expanded="false" aria-controls="mobileMenu" type="button"><span></span><span></span><span></span></button>',
      '  </div>',
      '</nav>',
      '<div id="menuBackdrop" class="menu-backdrop" hidden></div>',
      '<aside id="mobileMenu" class="menu-panel" hidden aria-label="Mobile navigation">',
      '  <nav class="menu-nav">',
      '    <a href="./"' + currentAttr(["index"], current) + '>Home</a>',
      '    <strong>Product</strong>',
      '    <a href="./watchtower.html"' + currentAttr(["watchtower"], current) + '>Watchtower</a>',
      '    <strong>Services</strong>',
      '    <a href="./services-secureops.html"' + currentAttr(["services-secureops"], current) + '>Watchtower SecureOps™</a>',
      '    <a href="./services-cyber-defense-united.html"' + currentAttr(["services-cyber-defense-united"], current) + '>Cyber Defense United™</a>',
      '    <a href="./cyber-readiness.html"' + currentAttr(["cyber-readiness"], current) + '>Cyber Readiness Review</a>',
      '    <strong>Work with us</strong>',
      '    <a href="./partners.html"' + currentAttr(["partners"], current) + '>Prime Partners</a>',
      '    <strong>Company</strong>',
      '    <a href="./who.html"' + currentAttr(["who"], current) + '>About enLight10</a>',
      '    <a href="./capabilities.html"' + currentAttr(["capabilities"], current) + '>Capabilities &amp; Contracting</a>',
      '    <a class="button small" href="mailto:info@enlight10solutions.com?subject=Watchtower%20Pilot%20Request">Start a Pilot</a>',
      '  </nav>',
      '</aside>'
    ].join("\n");
  }

  var footerMount = document.querySelector("[data-site-footer]");
  if (footerMount) {
    footerMount.outerHTML = [
      '<footer>',
      '  <div class="footer-inner">',
      '    <nav class="footer-sitemap" aria-label="Footer navigation">',
      '      <div class="footer-column">',
      '        <h2>Platform</h2>',
      '        <a href="./watchtower.html">Watchtower</a>',
      '        <a href="./watchtower.html#full-demo">Product Demo</a>',
      '        <a href="mailto:info@enlight10solutions.com?subject=Watchtower%20Pilot%20Request">Start a Pilot</a>',
      '      </div>',
      '      <div class="footer-column">',
      '        <h2>Services</h2>',
      '        <a href="./services-secureops.html">Watchtower SecureOps™</a>',
      '        <a href="./services-cyber-defense-united.html">Cyber Defense United™</a>',
      '        <a href="./cyber-readiness.html">Cyber Readiness</a>',
      '      </div>',
      '      <div class="footer-column">',
      '        <h2>Work With Us</h2>',
      '        <a href="./partners.html">Prime Partners</a>',
      '        <a href="./capabilities.html">Capabilities &amp; Contracting</a>',
      '        <a href="./enLight10%20Capability%20Statement.pdf">Download Capability Statement (PDF)</a>',
      '        <a href="mailto:info@enlight10solutions.com">Contact</a>',
      '      </div>',
      '      <div class="footer-column footer-contracting">',
      '        <h2>Company</h2>',
      '        <a href="./who.html">About enLight10</a>',
      '        <p><strong>UEI:</strong> W1ZNWPAX2FG7</p>',
      '        <p><strong>CAGE:</strong> 17BE8</p>',
      '        <p>Veteran-Owned Small Business</p>',
      '        <p>SAM Active (All Awards)</p>',
      '      </div>',
      '    </nav>',
      '    <div class="footer-bottom">',
      '      <p class="footer-copy">© 2026 enLight10 Solutions, LLC.</p>',
      '      <p class="footer-vet">Guided by the Light.<br>Built to reveal the truth.</p>',
      '      <p class="footer-info"><a href="mailto:info@enlight10solutions.com">info@enlight10solutions.com</a></p>',
      '      <a class="footer-e10" href="./" aria-label="enLight10 Solutions home">',
      '        <img src="./e10%20Logo.png" alt="">',
      '        <span>enLight10 Solutions</span>',
      '      </a>',
      '      <nav class="footer-social" aria-label="enLight10 social media">',
      '        <a href="https://linkedin.com/company/enlight10solutions" target="_blank" rel="noopener">LinkedIn</a><span aria-hidden="true">·</span>',
      '        <a href="https://x.com/E10Solutions" target="_blank" rel="noopener">X</a><span aria-hidden="true">·</span>',
      '        <a href="https://github.com/enlight10solutions" target="_blank" rel="noopener">GitHub</a><span aria-hidden="true">·</span>',
      '        <a href="https://www.youtube.com/@enlight10solutions" target="_blank" rel="noopener">YouTube</a>',
      '      </nav>',
      '    </div>',
      '  </div>',
      '</footer>'
    ].join("\n");
  }

  var menuButton = document.getElementById("menuToggle");
  var menuPanel = document.getElementById("mobileMenu");
  var menuBackdrop = document.getElementById("menuBackdrop");

  function openMenu() {
    document.body.classList.add("menu-open");
    if (menuPanel) menuPanel.hidden = false;
    if (menuBackdrop) menuBackdrop.hidden = false;
    if (menuButton) {
      menuButton.setAttribute("aria-expanded", "true");
      menuButton.setAttribute("aria-label", "Close navigation menu");
    }
  }

  function closeMenu() {
    document.body.classList.remove("menu-open");
    if (menuButton) {
      menuButton.setAttribute("aria-expanded", "false");
      menuButton.setAttribute("aria-label", "Open navigation menu");
    }
    window.setTimeout(function () {
      if (menuPanel) menuPanel.hidden = true;
      if (menuBackdrop) menuBackdrop.hidden = true;
    }, 200);
  }

  if (menuButton) {
    menuButton.addEventListener("click", function () {
      if (menuButton.getAttribute("aria-expanded") === "true") closeMenu();
      else openMenu();
    });
  }
  if (menuBackdrop) menuBackdrop.addEventListener("click", closeMenu);

  document.querySelectorAll(".demo-frame").forEach(function (frame) {
    var video = frame.querySelector("video");
    var playButton = frame.querySelector(".demo-play-overlay");
    if (!video || !playButton) return;

    playButton.addEventListener("click", function () {
      var playRequest = video.play();
      if (playRequest && typeof playRequest.catch === "function") {
        playRequest.catch(function () {
          frame.classList.remove("is-playing");
        });
      }
    });

    video.addEventListener("play", function () {
      frame.classList.add("is-playing");
    });
    video.addEventListener("ended", function () {
      frame.classList.remove("is-playing");
    });
  });

  var dropdowns = document.querySelectorAll(".dropdown");
  dropdowns.forEach(function (dropdown) {
    var toggle = dropdown.querySelector(".dropdown-toggle");
    var timer;
    if (!toggle) return;

    function open() {
      window.clearTimeout(timer);
      dropdown.classList.add("open");
      toggle.setAttribute("aria-expanded", "true");
    }
    function close() {
      dropdown.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
    }
    dropdown.addEventListener("mouseenter", open);
    dropdown.addEventListener("mouseleave", function () { timer = window.setTimeout(close, 160); });
    dropdown.addEventListener("focusin", open);
    dropdown.addEventListener("focusout", function () { timer = window.setTimeout(close, 0); });
    toggle.addEventListener("click", function (event) {
      event.preventDefault();
      if (dropdown.classList.contains("open")) close();
      else open();
    });
  });

  document.addEventListener("click", function (event) {
    dropdowns.forEach(function (dropdown) {
      if (!dropdown.contains(event.target)) {
        dropdown.classList.remove("open");
        var toggle = dropdown.querySelector(".dropdown-toggle");
        if (toggle) toggle.setAttribute("aria-expanded", "false");
      }
    });
  });

  document.addEventListener("keydown", function (event) {
    if (event.key !== "Escape") return;
    closeMenu();
    dropdowns.forEach(function (dropdown) {
      dropdown.classList.remove("open");
      var toggle = dropdown.querySelector(".dropdown-toggle");
      if (toggle) toggle.setAttribute("aria-expanded", "false");
    });
  });
});
