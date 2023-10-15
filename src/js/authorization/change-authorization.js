const refs = {
  button: document.querySelector('.authorization-form-btn'),
  labelName: document.querySelector('[label-name]'),
  signUp: document.querySelector('[sign-up]'),
  signIn: document.querySelector('[sign-in]'),
};

const input = refs.labelName.firstElementChild;
refs.signUp.addEventListener('click', formSignUp);
refs.signIn.addEventListener('click', formSignIn);

function formSignUp() {
  if (refs.signIn.classList.contains('action-auth')) {
    refs.signIn.classList.remove('action-auth');
    refs.signUp.classList.add('action-auth');
    refs.labelName.style.display = 'block';
    input.setAttribute('required', '');
    refs.button.innerHTML = 'Sign up';
  }
}

function formSignIn() {
  if (refs.signUp.classList.contains('action-auth')) {
    refs.signUp.classList.remove('action-auth');
    refs.signIn.classList.add('action-auth');
    refs.labelName.style.display = 'none';
    input.removeAttribute('required');
    refs.button.innerHTML = 'Sign in';
  }
}
