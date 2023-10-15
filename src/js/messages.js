import { Notify } from 'notiflix/build/notiflix-notify-aio';

function showError(message, position) {
  Notify.failure(message, {
    position: position,
    timeout: 2000,
    width: '400px',
    failure: {
      background: '#fff',
      textColor: '#ff5549',
      notiflixIconColor: '#ff5549',
    },
  });
}

export { showError };
