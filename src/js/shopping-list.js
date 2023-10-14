import svgBasket from '../img/shoping-list/sprite.svg'
import amazonImg1x from '../img/shoping-list/amazon-icon1x.png';
import amazonImg2x from '../img/shoping-list/amazon-icon1x.png';
import appleImg1x from '../img/shoping-list/applebook-icon1x.png';
import appleImg2x from '../img/shoping-list/applebook-icon2x.png';
import emptyMob1x from '../img/shoping-list/empty-mobile@1x.png';
import emptyMob2x from '../img/shoping-list/empty-mobile@2x.png';
import emptyTab1x from '../img/shoping-list/empty-tablet@1x.png';
import emptyTab2x from '../img/shoping-list/empty-tablet@2x.png';
import Pagination from 'tui-pagination'; 



const STORAGE_KEY_SHOPPING_LIST = 'shoppingList-localSorage';
const container = document.getElementById('tui-pagination-container');
const divEl = document.querySelector('.shopping-list-js');




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
const itemsOnPage = shopListLocStor.map(el => el.books).slice(9, 11);
console.log(itemsOnPage);

function createShoppingListPage() {
  if(shopListLocStor.length === 0) {
    renderMarkupEmptyShopList();
  } else {
    const cardsTotal = shopListLocStor.length;
    initPagination(cardsTotal);
    renderMarkupOnShoppingList(shopListLocStor, currentNumberOfPages)
  }
}


// функція створення карток в Shopping List

function renderMarkupOnShoppingList(arrBooks, numberOfPage) {
  const markup = itemsOnPage[0]
      itemsOnPage[0].map(
        ({
          _id,
          title,
          author,
          description,
          list_name,
          book_image,
          amazon_product_url,
          buy_links: [,apple],
        }) => 
           `
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
              `
            
          ).join('');

          divEl.insertAdjacentHTML('beforeend', markup);
      }
      


// функція створення пустого кошика в Shopping List

// function renderMarkupEmptyShopList() {
//   const markup = `
//   <div class="shopping-list-empty">
//   <p class="shopping-text-empty">This page is empty, add some books and proceed to order.</p>
//   <picture><sourse srcset="
//   srcset="
//       ${emptyTab1x} 1x,
//       ${emptyTab2x} 2x
//         "
//   media="(min-width: 768px)"
//         />
//    <img class="hopping-img-empty"
//     srcset="
//       ${emptyMob1x} 1x,
//       ${emptyMob2x} 2x
//             "
//     src="${emptyMob1x}" alt="Empty Shopping list"
//   "></sourse>
//   </picture>
//   </div>`

//   divEl.innerHTML = markup;
// }
// renderMarkupEmptyShopList()