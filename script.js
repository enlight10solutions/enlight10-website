// script.js
document.addEventListener('DOMContentLoaded', () => {
  // Subtle topbar background change on scroll
  const topbar = document.querySelector('.topbar');
  const onScroll = () => {
    if (!topbar) return;
    topbar.style.background = window.scrollY > 10
      ? 'linear-gradient(to bottom, rgba(13,17,23,.96), rgba(13,17,23,.85))'
      : 'linear-gradient(to bottom, rgba(13,17,23,.92), rgba(13,17,23,.66))';
  };
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });
});

