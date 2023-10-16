import { createUser, loginUser, logOutUser } from './firebase-api';
import { loadBDBookList } from './firebase-bd';
import { showError } from '../handler';
import { toggleLoader } from '../loader';

const USER_KEY = 'AUTHENTCATION_USER';

const refs = {
  aForm: document.querySelector('.authorization-form'),
  aBtn: document.querySelector('.authorization-form-btn'),
  modal: document.querySelector('[authorization-data-modal]'),
  profileUser: document.querySelector('.authorization-user'),
  profileButton: document.querySelector('.profile-btn'),
  profileExit: document.querySelector('.log-out'),
  profileName: document.querySelector('.user-name'),
};

refs.aForm.addEventListener('submit', register);
refs.profileUser.addEventListener('click', dropMenu);
refs.profileExit.addEventListener('click', logOut);

checkUser();

function checkUser() {
  if (localStorage.getItem(USER_KEY)) {
    markupUser();
  }
}

function dropMenu() {
  refs.profileExit.classList.toggle('hiden-user-auth');
}

function register(event) {
  event.preventDefault();
  if (refs.aBtn.textContent === 'Sign up') {
    signUp();
    return;
  }
  if (refs.aBtn.textContent === 'Sign in') {
    signIn();
  }
}

function signUp() {
  const dateUser = {
    name: refs.aForm.elements.name.value,
    email: refs.aForm.elements.email.value,
    password: refs.aForm.elements.password.value,
  };
  createUser(dateUser)
    .then(() => {
      toggleLoader();
      signIn();
    })
    .catch(error => {
      toggleLoader();
      showError('This email already in use', 'center-center');
    })
    .finally(toggleLoader());
}

function signIn() {
  const dateUser = {
    email: refs.aForm.elements.email.value,
    password: refs.aForm.elements.password.value,
  };
  loginUser(dateUser)
    .then(() => {
      toggleLoader();
      refs.modal.classList.toggle('is-hidden-authorization');
      loadBDBookList();
      markupUser();
      refs.aForm.reset();
    })
    .catch(error => {
      toggleLoader();
      showError('Invalid login or password', 'center-center');
    })
    .finally(toggleLoader());
}

function logOut() {
  if (localStorage.getItem(USER_KEY)) {
    refs.profileExit.classList.toggle('hiden-user-auth');
    logOutUser().then(() => {
      localStorage.removeItem(USER_KEY);
      markupUser();
    });
  }
}

function markupUser() {
  refs.profileUser.classList.toggle('hiden-user-auth');
  refs.profileButton.classList.toggle('hiden-user-auth');
  if (localStorage.getItem(USER_KEY)) {
    refs.profileName.innerHTML = JSON.parse(
      localStorage.getItem(USER_KEY)
    ).displayName;
    return;
  }
  refs.profileName.innerHTML = 'Name';
}
