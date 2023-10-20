import './js/category';
import './js/book-list-render';
import './js/modal';
import './js/authorization/open-authorization';
import './js/support-ukraine';

/* active-link script */
document.querySelectorAll('.nav-link').forEach(link => {
  if (
    window.location.pathname.endsWith(link.attributes.href.value) ||
    (window.location.pathname.endsWith('/') &&
      link.classList.contains('homepage'))
  ) {
    link.setAttribute('aria-current', 'page');
  }
});

function toggleMenu() {
  const mainWrapper = document.querySelector('.wrapper');
  const mobileSignupContainer = document.querySelector('.mobile-signup-container');
  const openMenuIcon = document.querySelector('.js-open-menu');
  const closeMenuIcon = document.querySelector('.js-close-menu');

  // Toggle 'hidden' class for main content and mobile sign-up button
  mainWrapper.classList.toggle('hidden');
  mobileSignupContainer.classList.toggle('hidden');

  // Toggle menu icons (hamburger & cross)
  openMenuIcon.classList.toggle('hidden');
  closeMenuIcon.classList.toggle('hidden');
}


document.querySelector('.mobile-menu-button').addEventListener('click', toggleMenu);