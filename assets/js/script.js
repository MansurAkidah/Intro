// script.js — small interactive helpers
document.addEventListener('DOMContentLoaded', ()=> {
  // Copy email button
  const copyBtn = document.getElementById('copyEmail');
  if (copyBtn) {
    copyBtn.addEventListener('click', async (e) => {
      const email = copyBtn.getAttribute('data-email') || 'hello@example.com';
      try {
        await navigator.clipboard.writeText(email);
        copyBtn.textContent = 'Email copied';
        setTimeout(()=> copyBtn.textContent = 'Copy email', 1500);
      } catch (err) {
        // fallback: open mail client
        window.location.href = `mailto:${email}`;
      }
    });
  }

  // Make <details> keyboard friendly (browsers already handle, this just enhances focus)
  document.querySelectorAll('details').forEach(d => {
    d.addEventListener('toggle', () => {
      d.setAttribute('aria-expanded', d.open ? 'true' : 'false');
    });
  });
});
