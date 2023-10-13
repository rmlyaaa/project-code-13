

// const STORAGE_KEY_SHOPPING_LIST = 'storage-of-books';

const divEl = document.querySelector('.shopping-list');

// функція створення карток в Shopping List

const BASE_URL = 'https://books-backend.p.goit.global/books/';
async function fetchBookTop() {
    const resp = await fetch(`${BASE_URL}top-books`);
    const booksArr = await resp.json();
    return booksArr;
}



fetchBookTop().then(booksArr => {
    function renderMarkupOnShoppingList () {
        console.log(booksArr);
         return booksArr.map(
              ({
                _id,
                title,
                author,
                description,
                list_name,
                book_image,
                amazon_product_url,
              }) => {
                return `
                <li class="shopping-list-card">
                  <div class="">
                    <img class="shopping-card-img" src="${book_image}" alt="" />
                  </div>
                  <div class="shopping-message">
                    <h2 class="shopping-card-title">${title}</h2>
                    <p class="shopping-card-category">Hardcover fiction</p>   
                    <p class="shopping-card-description">David Burroughs was once a devoted father to his three-year-old son Matthew, living a dream life just a short drive away from the working-class suburb where he and his wife, Cheryl, first fell in love--until one fateful night when David woke suddenly to discover Matthew had been murdered while David was asleep just down the hall.</p>
                    <div class="shopping-card-footer">
                    <p class="shopping-card-author">Barbara O'Connor</p> 
                    <ul class="shopping-card-shoplist">
                      <li class="">
                        <a href="">
                          <img class="shopping-link" src="" alt="Amazon"/>
                        </a>
                      </li>
                      <li class="store">
                        <a href="">
                          <img class="shopping-link" src="" alt="Apple" />
                        </a>
                      </li>
                    </ul>
                    </div>
                    <button type="button" class="shopping-book-delete">
                        <svg class="shopping-icon-delete">
                        <use href=""></use>
                        </svg>
                    </button>
                  </div>
                </li>
        
                `;
              }
            ).join('');
        }
        
        divEl.insertAdjacentHTML('beforeend', renderMarkupOnShoppingList());
});






