import './js/category';
import './js/book-list-render';
import './js/modal';
import './js/authorization/open-authorization';
import './js/support-ukraine';
import './js/go-top';

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

/* */
