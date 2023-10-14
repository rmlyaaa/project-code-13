import svgBasket from '../img/shoping-list/sprite.svg'
import amazonImg1x from '../img/shoping-list/amazon-icon1x.png';
import amazonImg2x from '../img/shoping-list/amazon-icon1x.png';
import appleImg1x from '../img/shoping-list/applebook-icon1x.png';
import appleImg2x from '../img/shoping-list/applebook-icon2x.png';

const STORAGE_KEY_SHOPPING_LIST = 'shoppingList-localSorage';

const divEl = document.querySelector('.shopping-list');


const BASE_URL = 'https://books-backend.p.goit.global/books/';
async function fetchBookTop() {
    const resp = await fetch(`${BASE_URL}top-books`);
    const booksArr = await resp.json();
    return booksArr;
}

fetchBookTop().then(data => {
 localStorage.setItem(STORAGE_KEY_SHOPPING_LIST, JSON.stringify(data));
});

const shopListLocStor = JSON.parse(localStorage.getItem(STORAGE_KEY_SHOPPING_LIST)) || [];

let itemsOnPage = shopListLocStor.map(el => el.books).slice(14, 19);
console.log(itemsOnPage);

// function checkLocalStorage() {
//   if (JSON.parse(STORAGE_KEY_SHOPPING_LIST, ))
// }

// функція створення карток в Shopping List

function renderMarkupOnShoppingList(itemsOnPage) {
      return itemsOnPage[0].map(
        ({
           _id,
          title,
          author,
          description,
          list_name,
          book_image,
          amazon_product_url,
          buy_links: [,apple],
        }) => {
          return `
          <li class="shopping-list-card">
            <div class="">
              <img class="shopping-card-img" src="${book_image}" alt="${title}" />
            </div>
            </div class="">
            <button type="button" data-book-id="${_id}" class="shopping-book-delete">
              <svg class="shopping-icon-delete">
               <use href="${svgBasket}#icon-basket"></use>
              </svg>
            </button>
              <div class="shopping-message">
              
                <h2 class="shopping-card-title">${title}</h2>
                <p class="shopping-card-category">${list_name}</p>   
                <p class="shopping-card-description">${description}</p>
              <div class="shopping-card-footer">
                <p class="shopping-card-author">${author}</p> 
                <ul class="shopping-card-shoplist">
                  <li class="">
                    <a href="${amazon_product_url}" rel="noopener noreferrer nofollow">
                      <img class="shopping-link-amazon" srcset="
                      ${amazonImg1x},
                      ${amazonImg2x}
                      " alt="Amazon"/>
                    </a>
                  </li>
                  <li class="">
                    <a href="${apple.url}" rel="noopener noreferrer nofollow">
                      <img class="shopping-link-apple" srcset="
                      ${appleImg1x},
                      ${appleImg2x}
                      " alt="Apple" />
                    </a>
                  </li>
                </ul>
               
                </div>
          </li>
              `;
            }
          ).join('');
      }
      
      divEl.insertAdjacentHTML('beforeend', renderMarkupOnShoppingList(itemsOnPage));


