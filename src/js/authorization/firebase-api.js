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
  if (localStorage.getItem(USER_KEY)) {
    const userId = JSON.parse(localStorage.getItem(USER_KEY)).uid;
    return await get(child(ref(database), `users/${userId}`));
  }
}

export async function saveDBList() {
  if (localStorage.getItem(USER_KEY)) {
    const userId = JSON.parse().uid;
    return await set(ref(database, 'users/' + userId), {
      books: books,
    });
  }
}
