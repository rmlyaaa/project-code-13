import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from 'firebase/auth';
import { initializeApp } from 'firebase/app';
import { getDatabase, set, ref, child, get } from 'firebase/database';

const firebaseConfig = {
  apiKey: 'AIzaSyDdCkKQwnpa-W52piXF8FY0Oym_R8KfE4E',
  authDomain: 'bookshelf-goit.firebaseapp.com',
  databaseURL: 'https://bookshelf-goit-default-rtdb.firebaseio.com',
  projectId: 'bookshelf-goit',
  storageBucket: 'bookshelf-goit.appspot.com',
  messagingSenderId: '972544465408',
  appId: '1:972544465408:web:e2991582f30c7e135e56e5',
  measurementId: 'G-PTD9KEVK9C',
};

const USER_KEY = 'AUTHENTCATION_USER';
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const database = getDatabase(app);

export const createUser = async dateUser => {
  await createUserWithEmailAndPassword(
    auth,
    dateUser.email,
    dateUser.password
  ).then(async () => {
    await updateProfile(auth.currentUser, {
      displayName: dateUser.name,
    });
  });
};

export const loginUser = async dateUser => {
  await signInWithEmailAndPassword(
    auth,
    dateUser.email,
    dateUser.password
  ).then(async () => {
    localStorage.setItem(USER_KEY, JSON.stringify(auth.currentUser.toJSON()));
  });
};

export const logOutUser = async () => {
  await signOut(auth).then(() => {
    localStorage.removeItem(USER_KEY);
  });
};

export async function loadDBList() {
  const userId = JSON.parse(localStorage.getItem(USER_KEY)).uid;
  return await get(child(ref(database), `users/${userId}`));
}

export async function saveDBList() {
  const userId = JSON.parse(localStorage.getItem(USER_KEY)).uid;
  return await set(ref(database, 'users/' + userId), {
    books: books,
  });
}

// save_books.addEventListener('click', () => {
//   const userId = JSON.parse(localStorage.getItem(USER_KEY)).uid;
//   set(ref(database, 'users/' + userId), {
//     books: books,
//   });
// });

////////////////////////////////////////////////////////////////

// const form = document.querySelector('.create');
// const forml = document.querySelector('.login');
// const username = document.querySelector('.name');
// const exit = document.querySelector('.exit');
// const check = document.querySelector('.check');
// const save_books = document.querySelector('.save-books');
// const load_books = document.querySelector('.load-books');

// updateName();

// form.addEventListener('submit', async event => {
//   event.preventDefault();
//   await createUserWithEmailAndPassword(
//     auth,
//     form.elements.email.value,
//     form.elements.password.value
//   )
//     .then(async userCredential => {
//       // Signed up
//       const user = userCredential.user;
//       await updateProfile(auth.currentUser, {
//         displayName: form.elements.name.value,
//       });
//       localStorage.setItem(USER_KEY, JSON.stringify(auth.currentUser.toJSON()));
//       updateName();
//     })
//     .catch(error => {
//       const errorCode = error.code;
//       const errorMessage = error.message;
//       console.log(errorMessage);
//     });
// });

// forml.addEventListener('submit', event => {
//   event.preventDefault();
//   signInWithEmailAndPassword(
//     auth,
//     forml.elements.email.value,
//     forml.elements.password.value
//   )
//     .then(userCredential => {
//       // Signed up
//       const user = userCredential.user;
//       localStorage.setItem(USER_KEY, JSON.stringify(auth.currentUser.toJSON()));
//       updateName();
//       // ...
//     })
//     .catch(error => {
//       const errorCode = error.code;
//       const errorMessage = error.message;
//       console.log(errorMessage);
//     });
// });

// function updateName() {
//   if (localStorage.getItem(USER_KEY)) {
//     username.innerHTML = JSON.parse(localStorage.getItem(USER_KEY)).displayName;
//   } else {
//     username.innerHTML = '';
//   }
// }

// exit.addEventListener('click', () => {
//   signOut(auth)
//     .then(() => {
//       // Sign-out successful.
//     })
//     .catch(error => {
//       // An error happened.
//     });
//   localStorage.clear();
// });

// check.addEventListener('click', () => {
//   console.log(database);
//   updateName();
// });

// const books = [
//   {
//     _id: '642fd89ac8cf5ee957f12361',
//     list_name: 'Middle Grade Paperback Monthly',
//     date: '2023-04-07T08:46:57.000Z',
//     age_group: '',
//     amazon_product_url:
//       'https://www.amazon.com/Wish-Barbara-OConnor/dp/1250144051?tag=NYTBSREV-20',
//     article_chapter_link: '',
//     author: "Barbara O'Connor",
//     book_image:
//       'https://storage.googleapis.com/du-prd/books/images/9781250144058.jpg',
//     book_image_width: 330,
//     book_image_height: 485,
//     book_review_link: '',
//     book_uri: 'nyt://book/46604242-8624-57d1-bdd4-424c21cde273',
//     contributor: "by Barbara O'Connor",
//     contributor_note: '',
//     created_date: '2023-04-05 23:10:17',
//     description: '',
//     first_chapter_link: '',
//     price: '0.00',
//     primary_isbn10: '1250144051',
//     primary_isbn13: '9781250144058',
//     publisher: 'Square Fish',
//     rank: 1,
//     rank_last_week: 0,
//     sunday_review_link: '',
//     title: 'WISH',
//     updated_date: '2023-04-05 23:10:17',
//     weeks_on_list: 0,
//     buy_links: [
//       {
//         name: 'Amazon',
//         url: 'https://www.amazon.com/Wish-Barbara-OConnor/dp/1250144051?tag=NYTBSREV-20',
//       },
//       {
//         name: 'Apple Books',
//         url: 'https://goto.applebooks.apple/9781250144058?at=10lIEQ',
//       },
//       {
//         name: 'Barnes and Noble',
//         url: 'https://www.anrdoezrs.net/click-7990613-11819508?url=https%3A%2F%2Fwww.barnesandnoble.com%2Fw%2F%3Fean%3D9781250144058',
//       },
//       {
//         name: 'Books-A-Million',
//         url: 'https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fp%252FWISH%252FBarbara%252BO%252527Connor%252F9781250144058&url2=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fsearch%253Fquery%253DWISH%252BBarbara%252BO%252527Connor',
//       },
//       {
//         name: 'Bookshop',
//         url: 'https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fbookshop.org%2Fa%2F3546%2F9781250144058&url2=https%3A%2F%2Fbookshop.org%2Fbooks%3Faffiliate%3D3546%26keywords%3DWISH',
//       },
//       {
//         name: 'IndieBound',
//         url: 'https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.indiebound.org%2Fbook%2F9781250144058%3Faff%3DNYT&url2=https%3A%2F%2Fwww.indiebound.org%2Fsearch%2Fbook%3Fkeys%3DWISH%2BBarbara%2BO%2527Connor%26aff%3DNYT',
//       },
//     ],
//     __v: 0,
//   },
//   {
//     _id: '642fd89ac8cf5ee957f12362',
//     list_name: 'Middle Grade Paperback Monthly',
//     date: '2023-04-07T08:46:57.000Z',
//     age_group: '',
//     amazon_product_url:
//       'http://www.amazon.com/The-Only-Ivan-Katherine-Applegate/dp/0061992275?tag=NYTBSREV-20',
//     article_chapter_link: '',
//     author: 'Katherine Applegate.',
//     book_image:
//       'https://storage.googleapis.com/du-prd/books/images/9780061992278.jpg',
//     book_image_width: 330,
//     book_image_height: 466,
//     book_review_link: '',
//     book_uri: 'nyt://book/f6738b4d-ccb6-5abe-9fa1-1db4ff0313c0',
//     contributor: 'by Katherine Applegate. Illustrated by Patricia Castelao',
//     contributor_note: 'Illustrated by Patricia Castelao',
//     created_date: '2023-04-05 23:10:17',
//     description: '',
//     first_chapter_link: '',
//     price: '0.00',
//     primary_isbn10: '0061992275',
//     primary_isbn13: '9780061992278',
//     publisher: 'HarperCollins',
//     rank: 2,
//     rank_last_week: 0,
//     sunday_review_link: '',
//     title: 'THE ONE AND ONLY IVAN',
//     updated_date: '2023-04-05 23:10:17',
//     weeks_on_list: 0,
//     buy_links: [
//       {
//         name: 'Amazon',
//         url: 'http://www.amazon.com/The-Only-Ivan-Katherine-Applegate/dp/0061992275?tag=NYTBSREV-20',
//       },
//       {
//         name: 'Apple Books',
//         url: 'https://goto.applebooks.apple/9780061992278?at=10lIEQ',
//       },
//       {
//         name: 'Barnes and Noble',
//         url: 'https://www.anrdoezrs.net/click-7990613-11819508?url=https%3A%2F%2Fwww.barnesandnoble.com%2Fw%2F%3Fean%3D9780061992278',
//       },
//       {
//         name: 'Books-A-Million',
//         url: 'https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fp%252FTHE%252BONE%252BAND%252BONLY%252BIVAN%252FKatherine%252BApplegate.%252F9780061992278&url2=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fsearch%253Fquery%253DTHE%252BONE%252BAND%252BONLY%252BIVAN%252BKatherine%252BApplegate.',
//       },
//       {
//         name: 'Bookshop',
//         url: 'https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fbookshop.org%2Fa%2F3546%2F9780061992278&url2=https%3A%2F%2Fbookshop.org%2Fbooks%3Faffiliate%3D3546%26keywords%3DTHE%2BONE%2BAND%2BONLY%2BIVAN',
//       },
//       {
//         name: 'IndieBound',
//         url: 'https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.indiebound.org%2Fbook%2F9780061992278%3Faff%3DNYT&url2=https%3A%2F%2Fwww.indiebound.org%2Fsearch%2Fbook%3Fkeys%3DTHE%2BONE%2BAND%2BONLY%2BIVAN%2BKatherine%2BApplegate.%26aff%3DNYT',
//       },
//     ],
//     __v: 0,
//   },
// ];

// load_books.addEventListener('click', () => {
//   const userId = JSON.parse(localStorage.getItem(USER_KEY)).uid;
//   get(child(ref(database), `users/${userId}`))
//     .then(snapshot => {
//       if (snapshot.exists()) {
//         console.log(snapshot.val());
//       } else {
//         console.log('No data available');
//       }
//     })
//     .catch(error => {
//       console.error(error);
//     });
// });
