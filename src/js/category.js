import { topBooks, bookByCategory } from './books-api.js';

const refs = {
  categoriesContainer: document.querySelector('.js-books-container'),
  booksMenu: document.querySelector('.booksMenu'),
};

getTopBooks();
// getBooksByCategory();

async function getTopBooks() {
  try {
    const data = await topBooks();
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
    const booksArr = await bookByCategory(categoryName);
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
            .map(({ book_image, author, title }) => {
              return `<li class="book-item">
            <a href="" class="book-link link">
              <img class="book-img" src="${book_image}" alt="${title}" loading="lazy"/>
              <div class="book-wrapper">
                <h3 class="book-name">${title}</h3>
                <p class="book-autor">${author}</p>
              </div>
            </a>
          </li>`;
            })
            .join('') +
          `</ul>
          <button type="button" class="see-more-btn btn" data-category="${list_name}">See more</button>
        </div>`
        );
      })
      .join('');

  //   console.log(markup);
  return markup;
}

function createBooksByCategoryMarkup(fullCategoryName, arrCategories) {
  const { name, nameAccent } = nameDivide(fullCategoryName);
  const markup =
    `<h2 class="book-category-name">${name}<span class="book-category-name-accent">${nameAccent}</span></h2>
    <div class="category-item">
    <ul class="book-list">` +
    arrCategories
      .map(({ book_image, author, title }) => {
        return `<li class="book-item">
              <a href="" class="book-link link">
                <img class="book-img" src="${book_image}" alt="${title}" loading="lazy"/>
                <div class="book-wrapper">
                  <h3 class="book-name">${title}</h3>
                  <p class="book-autor">${author}</p>
                </div>
              </a>
            </li>`;
      })
      .join('') +
    `</ul>
    <button type="button" class="see-more-btn btn" data-category="${list_name}">See more</button>
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
