import './change-authorization';
import './authorization';

const refs = {
  openModalBtn: document.querySelector('[authorization-data-modal-open]'),
  closeModalBtn: document.querySelector('[authorization-data-modal-close]'),
  modal: document.querySelector('[authorization-data-modal]'),
  aForm: document.querySelector('.authorization-form'),
  openModalBtnMenu: document.querySelector('.mob-profile-btn'),
};

refs.openModalBtn.addEventListener('click', toggleModal);
refs.openModalBtnMenu.addEventListener('click', toggleModal);
refs.closeModalBtn.addEventListener('click', toggleModal);
refs.modal.addEventListener('click', onBackdropClose);

function checkModal() {
  if (refs.modal.classList.contains('is-hidden-authorization')) {
    document.removeEventListener('keydown', onEscClose);
    return;
  }
  document.addEventListener('keydown', onEscClose);
}

function onBackdropClose(e) {
  if (e.currentTarget !== e.target) {
    return;
  }
  toggleModal();
}

function onEscClose(e) {
  if (refs.modal.classList.contains('is-hidden-authorization')) {
    return;
  }
  if (e.key !== 'Escape') {
    return;
  }
  toggleModal();
}

function toggleModal() {
  refs.aForm.reset();
  document.documentElement.className = 'no-scroll';
  refs.modal.classList.toggle('is-hidden-authorization');
  checkModal();
  if (refs.modal.classList.contains('is-hidden-authorization')) {
    document.documentElement.className = '';
  }
}
