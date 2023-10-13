import './js/category';
import './js/book-list-render';

/* active-link script */
document.querySelectorAll('.nav-link').forEach(link => {
  if (link.href === window.location.href) {
    link.setAttribute('aria-current', 'page');
  }
});
