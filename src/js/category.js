import { topBooks, bookByCategory } from './books-api.js';
import { showError } from './messages.js';
import { toggleLoader } from './loader.js';

const refs = {
  categoriesContainer: document.querySelector('.js-books-container'),
  booksMenu: document.querySelector('.booksMenu'),
};
getTopBooks();

refs.categoriesContainer.addEventListener('click', onBooksCategoryClick);

function onBooksCategoryClick(evt) {
  if (evt.target.nodeName !== 'BUTTON') {
    return;
  }

  const currentCategory = evt.target.dataset.category;
  if (!currentCategory) {
    showError('There is no category to show');
    return;
  }

  const listArr = document.querySelectorAll('.list-item');

  for (let element of listArr) {
    if (element.textContent === currentCategory) {
      element.classList.add('active-category');
    } else {
      element.classList.remove('active-category');
    }
  }

  getBooksByCategory(currentCategory);
}

async function getTopBooks() {
  try {
    const data = await topBooks()
      .then(response => {
        toggleLoader();
        return response;
      })
      .catch(() => toggleLoader())
      .finally(toggleLoader());
    if (!data.length) {
      showError('Sorry, there are no books', 'center-center');
      return;
    }

    refs.categoriesContainer.innerHTML = await createTopBooksMarkup(
      'Best Sellers Books',
      data
    );
  } catch (error) {
    showError(error, 'center-center');
  }
}

async function getBooksByCategory(categoryName) {
  try {
    const data = await bookByCategory(categoryName)
      .then(response => {
        toggleLoader();
        return response;
      })
      .catch(() => toggleLoader())
      .finally(toggleLoader());
    if (!data.length) {
      showError('Sorry, there are no books', 'center-center');
      return;
    }
    refs.categoriesContainer.innerHTML = await createBooksByCategoryMarkup(
      categoryName,
      data
    );
  } catch (error) {
    showError(error, 'center-center');
  }
}

function createTopBooksMarkup(fullCategoryName, arrCategories) {
  const { name, nameAccent } = nameDivide(fullCategoryName);
  const markup =
    `<h2 class="book-category-name">${name}<span class="book-category-name-accent">${nameAccent}</span></h2>` +
    arrCategories
      .map(({ list_name, books }) => {
        return (
          `<div class="category-item">
          <h3 class="book-category-subname">${list_name}</h3>
        <ul class="book-list">` +
          books
            .map(({ book_image, author, title, _id }) => {
              return `<li class="book-item" id="${_id}">
                <div class="book-thumb-img">
                  <img class="book-img" src="${book_image}" alt="${title}" loading="lazy"/>
                  <div class="overlay">
                    <p>Quick view</p>
                  </div>
                </div>
                <div class="book-wrapper">
                  <h3 class="book-name">${title}</h3>
                  <p class="book-autor">${author}</p>
                </div>
            </li>`;
            })
            .join('') +
          `</ul>
          <button type="button" class="see-more-btn btn" data-category="${list_name}" aria-label="more books in category">See more</button>
        </div>`
        );
      })
      .join('');

  return markup;
}

function createBooksByCategoryMarkup(fullCategoryName, arrCategories) {
  const { name, nameAccent } = nameDivide(fullCategoryName);
  const markup =
    `<h2 class="book-category-name">${name}<span class="book-category-name-accent">${nameAccent}</span></h2>
    <div class="category-item">
    <ul class="book-list book-list-in-categoty">` +
    arrCategories
      .map(({ book_image, author, title, _id }) => {
        return `<li class="book-item-in-categoty" id="${_id}">
                <div class="book-thumb-img">
                  <img class="book-img" src="${book_image}" alt="${title}" loading="lazy"/>
                  <div class="overlay">
                    <p>Quick view</p>
                  </div>
                </div>
                <div class="book-wrapper">
                  <h3 class="book-name">${title}</h3>
                  <p class="book-autor">${author}</p>
                </div>
            </li>`;
      })
      .join('') +
    `</ul>
    </div>`;

  return markup;
}

function nameDivide(fullName) {
  const lastSpace = fullName.lastIndexOf(' ');
  return {
    name: fullName.substring(0, lastSpace),
    nameAccent: fullName.substring(lastSpace),
  };
}

export { getBooksByCategory, getTopBooks };
