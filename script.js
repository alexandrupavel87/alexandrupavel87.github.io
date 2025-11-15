const navToggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.site-nav');
const yearEl = document.getElementById('year');

yearEl.textContent = new Date().getFullYear();

const toggleNav = () => {
  const isExpanded = navToggle.getAttribute('aria-expanded') === 'true';
  navToggle.setAttribute('aria-expanded', (!isExpanded).toString());
  nav.classList.toggle('open');
};

navToggle.addEventListener('click', toggleNav);

nav.querySelectorAll('a').forEach((link) =>
  link.addEventListener('click', () => {
    if (window.innerWidth <= 768) {
      navToggle.setAttribute('aria-expanded', 'false');
      nav.classList.remove('open');
    }
  })
);
