// script.js
document.addEventListener('DOMContentLoaded', () => {
  const menuBtn = document.getElementById('menuToggle');
  const panel = document.getElementById('mobileMenu');
  const backdrop = document.getElementById('menuBackdrop');

  const openMenu = () => {
    document.body.classList.add('menu-open');
    panel.hidden = false;
    backdrop.hidden = false;
    menuBtn?.setAttribute('aria-expanded', 'true');
  };

  const closeMenu = () => {
    document.body.classList.remove('menu-open');
    menuBtn?.setAttribute('aria-expanded', 'false');
    setTimeout(() => {
      panel.hidden = true;
      backdrop.hidden = true;
    }, 200);
  };

  menuBtn?.addEventListener('click', () => {
    const expanded = menuBtn.getAttribute('aria-expanded') === 'true';
    expanded ? closeMenu() : openMenu();
  });

  backdrop?.addEventListener('click', closeMenu);

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && document.body.classList.contains('menu-open')) {
      closeMenu();
    }
  });
});




