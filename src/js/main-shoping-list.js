import './theme-switch';

import './authorization/open-authorization';
import './support-ukraine';
import './shopping-list';

import './mob-menu';

document.querySelectorAll('.nav-link').forEach(link => {
  if (
    window.location.pathname.endsWith(link.attributes.href.value) ||
    (window.location.pathname.endsWith('/') &&
      link.classList.contains('homepage'))
  ) {
    link.setAttribute('aria-current', 'page');
  }
});
