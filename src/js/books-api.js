import axios from 'axios';

const BASE_URL = 'https://books-backend.p.goit.global/books/';

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

async function fetchCategory() {
  return await axios.get(`${BASE_URL}category-list`);
}

export { fetchCategory, topBooks, bookByCategory, currentBook };
