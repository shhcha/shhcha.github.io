// Apply saved theme immediately
const theme = localStorage.getItem('theme') || 'darkTheme';
document.documentElement.className = theme;

// Toggle function
function toggleTheme() {
  const root = document.documentElement;
  const next = root.classList.contains('lightTheme')
    ? 'darkTheme'
    : 'lightTheme';

  root.className = next;
  localStorage.setItem('theme', next);
}

// Button hookup (safe on pages without button)
document.addEventListener('DOMContentLoaded', () => {
  document
    .getElementById('toggle-theme')
    ?.addEventListener('click', toggleTheme);
});
