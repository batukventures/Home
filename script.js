// Mobile menu toggle (shared by all pages)
const btn = document.getElementById('menuBtn');
const links = document.getElementById('navLinks');
const overlay = document.getElementById('overlay');

function setMenu(open) {
  links.classList.toggle('open', open);
  overlay.classList.toggle('show', open);
  btn.setAttribute('aria-expanded', open);
  btn.innerHTML = open ? '&times;' : '&#9776;';
}
btn.addEventListener('click', () => setMenu(!links.classList.contains('open')));
overlay.addEventListener('click', () => setMenu(false));
links.addEventListener('click', e => { if (e.target.tagName === 'A') setMenu(false); });
document.addEventListener('keydown', e => { if (e.key === 'Escape') setMenu(false); });
