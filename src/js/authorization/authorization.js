import { createUser, loginUser, logOutUser } from './firebase-api';
import { loadBDList } from './firebase-bd';
import Notiflix from 'notiflix';

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
      signIn();
    })
    .catch(error => {
      /// use notflix eror 'email-already-in-use'

      console.log(error.code);
    });
}
Notiflix.Notify.failure(`sad`, {
  position: 'center-center',
  timeout: 2000,
  width: '400px',
  failure: {
    background: '#fff',
    textColor: '#ff5549',
    notiflixIconColor: '#ff5549',
  },
});

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
  refs.aForm.reset();
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
