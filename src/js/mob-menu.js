const toggleMobMenu = document.querySelector('.mobile-menu-button');
const mobMenu = document.querySelector('.modal-mob');

toggleMobMenu.addEventListener('click', openMobMenu);

function openMobMenu() {
  document.documentElement.className = 'no-scroll';
  mobMenu.classList.toggle('is-hidden-mob');
}
window.addEventListener('resize', () => {
  if (window.matchMedia('(min-width:768px').matches) {
    mobMenu.classList.add('is-hidden-mob');
  }
});
