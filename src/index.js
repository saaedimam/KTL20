import { header } from './components/header.js';
import { footer } from './components/footer.js';
import { home } from './pages/home.js';
import { about } from './pages/about.js';
import { sustainability } from './pages/sustainability.js';
import { certifications } from './pages/certifications.js';
import { contact } from './pages/contact.js';
import { rfq } from './pages/rfq.js';

const pages = {
  home,
  about,
  sustainability,
  certifications,
  contact,
  rfq
};

function render(page) {
  const content = document.getElementById('content');
  const fn = pages[page] || pages.home;
  content.innerHTML = fn();
  updateActiveNav(page);
}

function updateActiveNav(page) {
  const links = document.querySelectorAll('header nav a[data-page]');
  links.forEach(link => {
    if (link.dataset.page === page) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
}

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('header').innerHTML = header();
  document.getElementById('footer').innerHTML = footer();

  render('home');

  document.addEventListener('click', (e) => {
    const link = e.target.closest('a[data-page]');
    if (link) {
      e.preventDefault();
      const page = link.dataset.page;
      render(page);
    }
  });
});
