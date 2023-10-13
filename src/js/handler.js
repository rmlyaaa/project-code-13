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

function showInfo(message, position) {
  Notify.info(message, {
    position: position,
    timeout: 5000,
    width: '400px',
    info: {
      background: '#fff',
      textColor: '#26c0d3',
      notiflixIconColor: '#26c0d3',
    },
  });
}

function showSuccess(message, position) {
  Notify.success(message, {
    position: position,
    timeout: 5000,
    width: '400px',
    success: {
      background: '#fff',
      textColor: '#32c682',
      notiflixIconColor: '#32c682',
    },
  });
}

export { showError, showInfo };
