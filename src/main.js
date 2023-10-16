import './js/theme-switch';

import './js/category';
import './js/book-list-render';
import './js/modal';
import './js/authorization/open-authorization';
import './js/support-ukraine';
import './js/go-top';
import './js/mob-menu';

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

document.querySelectorAll('.mob-nav-link').forEach(link => {
  if (
    window.location.pathname.endsWith(link.attributes.href.value) ||
    (window.location.pathname.endsWith('/') &&
      link.classList.contains('homepage'))
  ) {
    link.setAttribute('aria-current', 'page');
  }
});
