import { getBooksByCategory, getTopBooks } from './category';
import { fetchCategory } from './books-api';

const bookCategories = document.querySelector('.book-categories-js');

fetchCategory()
  .then(response => renderCategoryList(response.data))
  .catch(error => console.log(error));

function renderCategoryList(arr) {
  const newArr = arr.map(({ list_name }) => list_name).sort();

  const markup = newArr
    .map(
      category =>
        `<li class="list-item" data-list="${category}">${category}</li>`
    )
    .join('');

  bookCategories.insertAdjacentHTML('beforeend', markup);
}

bookCategories.addEventListener('click', onCategoryClick);

function onCategoryClick(event) {
  const target = event.target;
  const targetCategory = event.target.dataset.list;

  const array = bookCategories.children;

  for (let element of array) {
    if (!target.classList.contains('list-item')) {
      return;
    }

    if (target.textContent === element.textContent) {
      target.classList.add('active-category');
    } else {
      element.classList.remove('active-category');
    }
  }

  if (targetCategory === 'All categories') {
    getTopBooks();
  } else {
    getBooksByCategory(targetCategory);
  }
}
