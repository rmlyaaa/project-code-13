import svgBasket from '../img/shoping-list/sprite.svg';
import amazonImg1x from '../img/shoping-list/amazon-icon1x.png';
import amazonImg2x from '../img/shoping-list/amazon-icon1x.png';
import appleImg1x from '../img/shoping-list/applebook-icon1x.png';
import appleImg2x from '../img/shoping-list/applebook-icon2x.png';
import emptyMob1x from '../img/shoping-list/empty-mobile@1x.png';
import emptyMob2x from '../img/shoping-list/empty-mobile@2x.png';
import emptyTab1x from '../img/shoping-list/empty-tablet@1x.png';
import emptyTab2x from '../img/shoping-list/empty-tablet@2x.png';

import Pagination from 'tui-pagination';
import { saveBDBookList } from './authorization/firebase-bd';

// функцію видалити------------------------------------------
// const BASE_URL = 'https://books-backend.p.goit.global/books/';
// async function fetchBookTop() {
//   const resp = await fetch(`${BASE_URL}top-books`);
//   const booksArr = await resp.json();
//   return booksArr;
// }
// fetchBookTop().then(data => {
//   // console.log(data);
//   localStorage.setItem(
//     STORAGE_KEY_SHOPPING_LIST,
//     JSON.stringify(data.flatMap(el => el.books))
//   );
// });
// -----------------------------------------------------------

const STORAGE_KEY_SHOPPING_LIST = 'ListOfBooks'; //ключ взяти з модалки

const paginationContainer = document.getElementById('pagination');
const divEl = document.querySelector('.shopping-list-js');

let page;
let currentPage = 1;
let itemsPerPage;
let visiblePages;
let resizeTimeout;

window.addEventListener('resize', changePagOptionsByScreenWidth);
document.addEventListener('DOMContentLoaded', firstPageLoaded);
divEl.addEventListener('click', deleteCard);

createShoppingListPage();

//

function createShoppingListPage() {
  const shopListLocStor =
    JSON.parse(localStorage.getItem(STORAGE_KEY_SHOPPING_LIST)) || [];
  if (shopListLocStor.length === 0) {
    renderMarkupEmptyShopList();
  } else {
    const totalItems = shopListLocStor.length;
    initPagination(totalItems);
    renderMarkupOnShoppingList(shopListLocStor, currentPage);
  }
}

// --------функція створення карток в Shopping List-------------------

function renderMarkupOnShoppingList(arr, page) {
  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const itemsOnPage = arr.slice(startIndex, endIndex);
  const markup = itemsOnPage
    .map(
      ({
        _id,
        title,
        author,
        description,
        list_name,
        book_image,
        amazon_product_url,
        buy_links: [, apple],
      }) =>
        `
      <li class="shopping-list-card js-shopping-list-card" data-book-id="${_id}">
        <div class="">
          <img loading="lazy" class="shopping-card-img" src="${book_image}" alt="${title}" />
        </div>        
        <button type="button" aria-label="delete" class="shopping-book-delete js-shopping-book-delete">
          <svg class="shopping-icon-delete">
            <use href="${svgBasket}#icon-basket"></use>
          </svg>
        </button>
          <div class="shopping-message">
            <h2 class="shopping-card-title">${title.trim()}</h2>
            <p class="shopping-card-category">${list_name.trim()}</p>   
            <p class="shopping-card-description">${description.trim()}</p>
            <div class="shopping-card-footer">
              <p class="shopping-card-author">${author.trim()}</p> 
              <ul class="shopping-card-shoplist">
                  <li class="shopping-card-link-hover">
                    <a target="_blank" href="${amazon_product_url}" rel="noopener noreferrer nofollow">
                  <img class="shopping-link-amazon" srcset="
                    ${amazonImg1x},
                    ${amazonImg2x}" 
                    src="${amazonImg1x}" alt="Amazon"/>
                  </a>
                </li>
                <li class="shopping-card-link-hover">
                  <a target="_blank" href="${
                    apple.url
                  }" rel="noopener noreferrer nofollow">
                    <img loading="lazy" class="shopping-link-apple" srcset=" 
                    ${appleImg1x},
                    ${appleImg2x}" 
                    src="${appleImg1x}" alt="Apple" />
                  </a>
                </li>
              </ul>             
            </div>
          </div>
      </li>
    `
    )
    .join('');

  divEl.innerHTML = markup;
}

//---------------- функція створення порожнього кошика в Shopping List------------------

function renderMarkupEmptyShopList() {
  const markup = `
  <div class="shopping-list-empty">
  <p class="shopping-text-empty">This page is empty, add some books and proceed to order.</p>
  <picture><sourse srcset="
  srcset="
      ${emptyTab1x} 1x,
      ${emptyTab2x} 2x
        "
  media="(min-width: 768px)"
        />
   <img class="hopping-img-empty" loading="lazy"
    srcset="
      ${emptyMob1x} 1x,
      ${emptyMob2x} 2x
        "
    src="${emptyMob1x}" alt="Empty Shopping list"
  "></sourse>
  </picture>
  </div>`;

  divEl.innerHTML = markup;
}

//---------------- paginations----------------------------------

function initPagination(totalItems) {
  const pagination = new Pagination(paginationContainer, {
    totalItems: totalItems,
    itemsPerPage: itemsPerPage,
    visiblePages: visiblePages,
    centerAlign: true,
    page: currentPage,
  });

  pagination.on('afterMove', eventData => {
    currentPage = eventData.page;
    const shopListLocStor = JSON.parse(
      localStorage.getItem(STORAGE_KEY_SHOPPING_LIST)
    );

    renderMarkupOnShoppingList(shopListLocStor, currentPage);
    return currentPage;
  });
}

// --------------------Bидалення картки ------------------------

function deleteCard(evt) {
  if (evt.target.classList.contains('js-shopping-book-delete')) {
    const card = evt.target.closest('.js-shopping-list-card');
    const bookId = card.dataset.bookId;
    const shopListLocStor = JSON.parse(
      localStorage.getItem(STORAGE_KEY_SHOPPING_LIST)
    );
    const newShopListLocStor = shopListLocStor.filter(
      object => object._id !== bookId
    );
    localStorage.setItem(
      STORAGE_KEY_SHOPPING_LIST,
      JSON.stringify(newShopListLocStor)
    );
    createShoppingListPage();
  }
  saveBDBookList();
}

//-------- Функція зміни кількості відображення карток в залежності від ширини екрану-----------

function changePagOptionsByScreenWidth() {
  const screenWidth = window.innerWidth;

  if (screenWidth < 768) {
    visiblePages = 1;
    itemsPerPage = 4;
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(function () {
      createShoppingListPage();
    }, 200);
  } else if (screenWidth >= 768) {
    itemsPerPage = 3;
    visiblePages = 3;
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(function () {
      createShoppingListPage();
    }, 200);
  }
}

// Функція зміни кількості відображення карток на сторінці в залежності від ширини екрану при першої загрузці сторінки

function firstPageLoaded() {
  const screenWidth = window.innerWidth;

  if (screenWidth < 768) {
    visiblePages = 1;
    itemsPerPage = 4;
    createShoppingListPage();
  } else if (screenWidth >= 768) {
    itemsPerPage = 3;
    visiblePages = 3;
    createShoppingListPage();
  }
}
