import './js/category';
// import './js/book-list-render';

/* active-link script */
import './js/authorization/open-authorization';

document.querySelectorAll('.nav-link').forEach(link => {
  if (link.href === window.location.href) {
    link.setAttribute('aria-current', 'page');
  }
});
