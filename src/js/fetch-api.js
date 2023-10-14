import axios from 'axios';

const BASE_URL = 'https://books-backend.p.goit.global/books/';

async function fetchCategory() {
  return await axios.get(`${BASE_URL}category-list`);
}

async function fetchBooksOfCategory(request) {
  return await axios.get(`${BASE_URL}category?category=${request}`);
}

async function fetchTopBooks() {
  return await axios.get(`${BASE_URL}top-books`);
}

export { fetchCategory, fetchBooksOfCategory, fetchTopBooks };
