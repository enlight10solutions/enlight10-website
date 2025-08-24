// script.js
document.addEventListener('DOMContentLoaded', () => {
  const contactBtn = document.querySelector('.button[href^="mailto:"]');
  if (contactBtn) {
    contactBtn.addEventListener('click', () => {
      console.log('Contact clicked');
    });
  }
});
