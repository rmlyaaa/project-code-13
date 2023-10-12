import { createUser, loginUser, logOutUser } from './firebase-api';
import { loadBDList } from './firebase-bd';

const USER_KEY = 'AUTHENTCATION_USER';

const refs = {
  aForm: document.querySelector('.authorization-form'),
  aBtn: document.querySelector('.authorization-form-btn'),
  modal: document.querySelector('[authorization-data-modal]'),
};

refs.aForm.addEventListener('submit', register);

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
      signIn();
    })
    .catch(error => {
      /// use notflix eror 'email-already-in-use'
      console.log(error.code);
    });
}

function signIn() {
  const dateUser = {
    email: refs.aForm.elements.email.value,
    password: refs.aForm.elements.password.value,
  };
  loginUser(dateUser)
    .then(() => {
      refs.modal.classList.toggle('is-hidden-authorization');
      loadBDList();
      markupUser();
    })
    .catch(error => {
      /// use notflix eror 'invalid-login-credentials'
      console.log(error.code);
    });
}

function logOut() {
  if (localStorage.getItem(USER_KEY)) {
    logOutUser().then(() => {
      markupNotUser();
    });
  }
}

function markupUser() {}

function markupNotUser() {}
