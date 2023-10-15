import axios from 'axios';

const scrollControl = {
  scrollPosition: 0,
  disabledScroll() {
    scrollControl.scrollPosition = window.scrollY;
    document.body.style.cssText = `
      overflow: hidden;
      position: fixed;
      top: -${scrollControl.scrollPosition}px;
      left: 0;
      height: 100vh;
      width: 100vw;
      padding-right: ${window.innerWidth - document.body.offsetWidth}px
    `;
  },
  enabledScroll() {
    document.body.style.cssText = '';
    window.scroll({ top: scrollControl.scrollPosition });
  },
};

let fetchedObj = null;
let bookId = 0;
let savedBooks = [];

if (localStorage.getItem('ListOfBooks') === null) {
  localStorage.setItem('ListOfBooks', JSON.stringify(savedBooks));
}

const refs = {
  openModal: document.querySelector('.categories-container'),
  closeModal: document.querySelector('.modalWindow-close'),
  modalWindow: document.querySelector('#modalWindow'),
  modalCard: document.querySelector('.modal-card'),
  modalBtnAddEl: document.querySelector('.modalWindow-btn-1'),
  modalBtnDelEl: document.querySelector('.modalWindow-btn-2'),
  modaltextBottom: document.querySelector('.modalWindow-text'),
  markupCard: document.querySelector('.modal-card'),
};

refs.openModal.addEventListener('click', openModalWindow);
refs.closeModal.addEventListener('click', closeModalWindow);

function openModalWindow(evt) {
  evt.preventDefault();
  const clickedElement = evt.target;
  const closestLi = clickedElement.closest('.book-item, .book-item-in-categoty');
  if (!closestLi) {
    return;
  }
  refs.modalWindow.classList.remove('is-hidden');
  scrollControl.disabledScroll();
  window.addEventListener('keydown', onEscPressed);
  refs.modalWindow.addEventListener('click', onBackdropclick);

  bookId = closestLi.id;
  const checkBook = JSON.parse(localStorage.getItem('ListOfBooks'));
  if (checkBook.find(option => option._id === bookId)) {
    refs.modalBtnAddEl.classList.add('is-hidden');
    refs.modalBtnDelEl.classList.remove('is-hidden');
    refs.modaltextBottom.classList.remove('is-hidden');
  } else {
    refs.modalBtnAddEl.classList.remove('is-hidden');
    refs.modalBtnDelEl.classList.add('is-hidden');
    refs.modaltextBottom.classList.add('is-hidden');
  }

  getBookOnId(bookId).then(data => {
    makeMarkupModal(data);
    fetchedObj = data;
  });
}

function closeModalWindow(evt) {
  refs.modalWindow.classList.add('is-hidden');
  scrollControl.enabledScroll();
  window.removeEventListener('keydown', onEscPressed);
  modalWindow.removeEventListener('click', onBackdropclick);
}

function onBackdropclick(evt) {
  if (evt.currentTarget === evt.target) {
    closeModalWindow();
  }
}

function onEscPressed(evt) {
  const ESC_KEY = 'Escape';
  if (evt.code === ESC_KEY) {
    closeModalWindow();
  }
}

async function getBookOnId(id) {
  const url = 'https://books-backend.p.goit.global/books/';
  try {
  
    const getData = await axios.get(`${url}${id}`);
    return getData.data;
  } catch (error) {
    console.log(error);
  }
}

refs.modalBtnAddEl.addEventListener('click', bookAddStorage);

function bookAddStorage(evt) {
  evt.preventDefault();
  savedBooks = JSON.parse(localStorage.getItem('ListOfBooks'));
  savedBooks.push(fetchedObj);
  localStorage.setItem('ListOfBooks', JSON.stringify(savedBooks));
  refs.modalBtnAddEl.classList.add('is-hidden');
  refs.modalBtnDelEl.classList.remove('is-hidden');
  refs.modaltextBottom.classList.remove('is-hidden');
}

refs.modalBtnDelEl.addEventListener('click', bookDelStorage);
function bookDelStorage(evt) {
  evt.preventDefault();

  const savedData = JSON.parse(localStorage.getItem('ListOfBooks'));
  const cardIndex = savedData.findIndex(option => option._id === bookId);
  savedData.splice(cardIndex, 1);
  localStorage.setItem('ListOfBooks', JSON.stringify(savedData));
  refs.modalBtnAddEl.classList.remove('is-hidden');
  refs.modalBtnDelEl.classList.add('is-hidden');
  refs.modaltextBottom.classList.add('is-hidden');
}

function makeMarkupModal(obj) {
  refs.markupCard.innerHTML = '';
  const { book_image, title, description, author, buy_links } = obj;
  const modalMarkup = `    <img
             srcset="${book_image}"
             src="${book_image}"
             alt="${title}"
             class="modal-book-img"
             loading="lazy"
             width="287px"
             height: 408px;
             />         
          <div class="modal-info-box">
           <h3 class="modal-book-title">${title}</h3>
           <p class="modal-book-author">${author}</p>
           <p class="modal-book-deskr" id="style-4">${description}</p>  
             <div class="modal-book-links">
               <a href="${buy_links[0].url}" target="_blank" rel="noreferrer noopener" aria-label="Link to Amazon">
                 <img srcset="https://raw.githubusercontent.com/JonniBig/BookVerse/main/src/images/shopingList/amazon.png"
                 src="https://raw.githubusercontent.com/JonniBig/BookVerse/main/src/images/shopingList/amazon.png" loading="lazy"
                 alt="Logo Amazon" width="32px" class="link-amazon"/>
               </a>
               <a href="${buy_links[1].url}" target="_blank" rel="noreferrer noopener" aria-label="Link to Apple book shop">
                 <img srcset="https://raw.githubusercontent.com/JonniBig/BookVerse/main/src/images/shopingList/apple.png" 
                 src="https://raw.githubusercontent.com/JonniBig/BookVerse/main/src/images/shopingList/apple.png" loading="lazy" alt="Logo Apple book store" width="16px" class="link-apple"/>
               </a>
             </div>
          </div>`;
  refs.markupCard.insertAdjacentHTML('beforeend', modalMarkup);
}