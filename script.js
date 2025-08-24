// script.js
document.addEventListener('DOMContentLoaded', () => {
  const contactBtn = document.querySelector('.button[href^="mailto:"]');
  if (contactBtn) {
    contactBtn.addEventListener('click', () => console.log('Contact clicked'));
  }

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

