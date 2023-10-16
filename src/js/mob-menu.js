const toggleMobMenu = document.querySelector('.mobile-menu-button');
const mobMenu = document.querySelector('.modal-mob');

toggleMobMenu.addEventListener('click', openMobMenu);

function openMobMenu() {
  document.documentElement.className = 'no-scroll';
  mobMenu.classList.toggle('is-hidden-mob');
}
