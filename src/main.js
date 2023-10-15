import './js/theme-switch';
 
import './js/category';
// import './js/book-list-render';

/* active-link script */
import './js/authorization/open-authorization';
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
