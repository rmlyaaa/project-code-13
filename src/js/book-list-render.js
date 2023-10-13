import {
  fetchCategory,
  fetchBooksOfCategory,
  fetchTopBooks,
} from './fetch-api';

const bookCategories = document.querySelector('.book-categories-js');
const listBooks = document.querySelector('.books-js');
const title = document.querySelector('.title-js');

fetchTopBooks()
  .then(response => {
    console.log(response.data);
    renderTopBooks(response.data);
  })
  .catch(error => console.log(error));

fetchCategory()
  .then(response => renderCategoryList(response.data))
  .catch(error => console.log(error));

function renderCategoryList(arr) {
  const newArr = arr.map(({ list_name }) => list_name).sort();

  const markup = newArr
    .map(category => `<li data-list="${category}">${category}</li>`)
    .join('');

  bookCategories.insertAdjacentHTML('beforeend', markup);
}

bookCategories.addEventListener('click', onCategoryClick);

function onCategoryClick(event) {
  listBooks.innerHTML = '';
  const targetCategory = event.target.dataset.list;
  if (targetCategory === 'All categories') {
    title.textContent = 'Best Sellers Books';

    fetchTopBooks()
      .then(response => renderTopBooks(response.data))
      .catch(error => console.log(error));
  } else {
    title.textContent = targetCategory;

    fetchBooksOfCategory(targetCategory)
      .then(response => renderBooksOfCategories(response.data))
      .catch(error => console.log(error));
  }
}

function renderBooksOfCategories(arr) {
  const markup = arr
    .map(
      ({ author, book_image, _id, title }) => `<li data-id="${_id}">
         <div class="thumb">
          <img src="${book_image}" alt="" width="335" height="485">
         </div>
          <h2>${title}</h2>
          <p>${author}</p>
          </li>`
    )
    .join('');

  listBooks.innerHTML = markup;
}

function renderTopBooks(arr) {
  arr.map(({ books, list_name }) => {
    const categoriesHeader = `<h2>${list_name}</h2>`;
    const button = `<button type="button">See More</button>`;

    let markup = books
      .map(
        ({
          author,
          book_image,
          title,
          _id,
        }) => `<li class="book-card" data-id="${_id}">
            <div class="thumb">
             <img src="${book_image}" alt="" width="335" height="485">
            </div>
             <h2>${title}</h2>
             <p>${author}</p>
             </li>`
      )
      .join('');

    listBooks.insertAdjacentHTML('beforeend', categoriesHeader);
    listBooks.insertAdjacentHTML('beforeend', markup);
    listBooks.insertAdjacentHTML('beforeend', button);
  });
}
