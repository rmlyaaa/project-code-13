const supportBtn = document.querySelector('.support-ukraine-btn');
const supportUkraineList = document.querySelector('.support-ukraine-list');
const supportBtnIcon = document.querySelector('.support-btn-icon');

supportBtn.addEventListener('click', onClick);
function onClick(evt) {
  supportUkraineList.classList.toggle('active');
  supportBtnIcon.classList.toggle('active');
}
