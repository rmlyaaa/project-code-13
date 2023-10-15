import { loadDBList, saveDBList } from './firebase-api';

// const BOOK_LIST_KEY = 'ListOfBooks';

export function loadBDList() {
  loadDBList().then(snapshot => {
    if (snapshot.exists()) {
      localStorage.setItem(BOOK_LIST_KEY, snapshot.val());
    }
  });
}

export function saveBDList() {
  if (
    localStorage.getItem(BOOK_LIST_KEY) &&
    localStorage.getItem(BOOK_LIST_KEY).length > 0
  ) {
    saveDBList();
  }
}
