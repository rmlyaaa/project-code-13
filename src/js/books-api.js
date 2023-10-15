import axios from 'axios';

const BASE_URL = 'https://books-backend.p.goit.global/books/';

async function allBooksCategories() {
  const resp = await axios.get(`${BASE_URL}category-list`);
  return resp.data;
}

async function topBooks() {
  const resp = await axios.get(`${BASE_URL}top-books`);
  return resp.data;
}

async function bookByCategory(categoryName) {
  const params = {
    category: categoryName,
  };

  const resp = await axios.get(`${BASE_URL}category`, { params });
  return resp.data;
}

async function currentBook(bookId) {
  const resp = await axios.get(`${BASE_URL}{${bookId}}`);
  return resp.data;
}

export { allBooksCategories, topBooks, bookByCategory, currentBook };
