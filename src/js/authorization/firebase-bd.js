import { loadDBList, saveDBList } from './firebase-api';

const BOOK_LIST_KEY = 'ListOfBooks';

export function loadBDBookList() {
  loadDBList().then(snapshot => {
    if (snapshot.exists()) {
      localStorage.setItem(BOOK_LIST_KEY, JSON.parse(snapshot.val().books));
    }
  });
}

export function saveBDBookList() {
  if (
    localStorage.getItem(BOOK_LIST_KEY) &&
    localStorage.getItem(BOOK_LIST_KEY).length > 0
  ) {
    saveDBList(localStorage.getItem(BOOK_LIST_KEY));
  }
}

[
  {
    _id: '643282b1e85766588626a0ba',
    list_name: 'Advice How-To and Miscellaneous',
    date: '2023-04-09T09:28:38.643Z',
    age_group: '',
    amazon_product_url: 'https://www.amazon.com/dp/0063226057?tag=NYTBSREV-20',
    article_chapter_link: '',
    author: 'Shannon Bream',
    book_image:
      'https://storage.googleapis.com/du-prd/books/images/9780063226050.jpg',
    book_image_width: 329,
    book_image_height: 500,
    book_review_link: '',
    book_uri: 'nyt://book/dc28bfbb-6ba7-54c6-a60b-272a327604ab',
    contributor: 'by Shannon Bream',
    contributor_note: '',
    created_date: '2023-04-05 22:05:27',
    description: '',
    first_chapter_link: '',
    price: '0.00',
    primary_isbn10: '0063226057',
    primary_isbn13: '9780063226050',
    publisher: 'Broadside',
    rank: 2,
    rank_last_week: 0,
    sunday_review_link: '',
    title: 'THE LOVE STORIES OF THE BIBLE SPEAK',
    updated_date: '2023-04-05 22:10:17',
    weeks_on_list: 1,
    buy_links: [
      {
        name: 'Amazon',
        url: 'https://www.amazon.com/dp/0063226057?tag=NYTBSREV-20',
      },
      {
        name: 'Apple Books',
        url: 'https://goto.applebooks.apple/9780063226050?at=10lIEQ',
      },
      {
        name: 'Barnes and Noble',
        url: 'https://www.anrdoezrs.net/click-7990613-11819508?url=https%3A%2F%2Fwww.barnesandnoble.com%2Fw%2F%3Fean%3D9780063226050',
      },
      {
        name: 'Books-A-Million',
        url: 'https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fp%252FTHE%252BLOVE%252BSTORIES%252BOF%252BTHE%252BBIBLE%252BSPEAK%252FShannon%252BBream%252F9780063226050&url2=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fsearch%253Fquery%253DTHE%252BLOVE%252BSTORIES%252BOF%252BTHE%252BBIBLE%252BSPEAK%252BShannon%252BBream',
      },
      {
        name: 'Bookshop',
        url: 'https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fbookshop.org%2Fa%2F3546%2F9780063226050&url2=https%3A%2F%2Fbookshop.org%2Fbooks%3Faffiliate%3D3546%26keywords%3DTHE%2BLOVE%2BSTORIES%2BOF%2BTHE%2BBIBLE%2BSPEAK',
      },
      {
        name: 'IndieBound',
        url: 'https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.indiebound.org%2Fbook%2F9780063226050%3Faff%3DNYT&url2=https%3A%2F%2Fwww.indiebound.org%2Fsearch%2Fbook%3Fkeys%3DTHE%2BLOVE%2BSTORIES%2BOF%2BTHE%2BBIBLE%2BSPEAK%2BShannon%2BBream%26aff%3DNYT',
      },
    ],
    __v: 0,
  },
];

[
  {
    _id: '643282b1e85766588626a0b4',
    list_name: 'Audio Nonfiction',
    date: '2023-04-09T09:28:39.563Z',
    age_group: '',
    amazon_product_url: 'https://www.amazon.com/dp/1982185821?tag=NYTBSREV-20',
    article_chapter_link: '',
    author: 'Jennette McCurdy',
    book_image:
      'https://storage.googleapis.com/du-prd/books/images/9781982185824.jpg',
    book_image_width: 329,
    book_image_height: 500,
    book_review_link: '',
    book_uri: 'nyt://book/dade20d6-b303-510c-9687-48eab9308755',
    contributor: 'by Jennette McCurdy',
    contributor_note: '',
    created_date: '2023-04-05 23:10:08',
    description:
      'The actress and filmmaker describes her eating disorders and difficult relationship with her mother. Read by the author. 6 hours, 25 minutes unabridged.',
    first_chapter_link: '',
    price: '0.00',
    primary_isbn10: '',
    primary_isbn13: '9781797147949',
    publisher: 'Simon & Schuster Audio',
    rank: 2,
    rank_last_week: 0,
    sunday_review_link: '',
    title: "I'M GLAD MY MOM DIED",
    updated_date: '2023-04-05 23:10:08',
    weeks_on_list: 0,
    buy_links: [
      {
        name: 'Amazon',
        url: 'https://www.amazon.com/dp/1982185821?tag=NYTBSREV-20',
      },
      {
        name: 'Apple Books',
        url: 'https://goto.applebooks.apple/9781797147949?at=10lIEQ',
      },
      {
        name: 'Barnes and Noble',
        url: 'https://www.anrdoezrs.net/click-7990613-11819508?url=https%3A%2F%2Fwww.barnesandnoble.com%2Fw%2F%3Fean%3D9781797147949',
      },
      {
        name: 'Books-A-Million',
        url: 'https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fp%252FI%252527M%252BGLAD%252BMY%252BMOM%252BDIED%252FJennette%252BMcCurdy%252F9781797147949&url2=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fsearch%253Fquery%253DI%252527M%252BGLAD%252BMY%252BMOM%252BDIED%252BJennette%252BMcCurdy',
      },
      {
        name: 'Bookshop',
        url: 'https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fbookshop.org%2Fa%2F3546%2F9781797147949&url2=https%3A%2F%2Fbookshop.org%2Fbooks%3Faffiliate%3D3546%26keywords%3DI%2527M%2BGLAD%2BMY%2BMOM%2BDIED',
      },
      {
        name: 'IndieBound',
        url: 'https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.indiebound.org%2Fbook%2F9781797147949%3Faff%3DNYT&url2=https%3A%2F%2Fwww.indiebound.org%2Fsearch%2Fbook%3Fkeys%3DI%2527M%2BGLAD%2BMY%2BMOM%2BDIED%2BJennette%2BMcCurdy%26aff%3DNYT',
      },
    ],
    __v: 0,
  },
  {
    _id: '643282b1e85766588626a085',
    list_name: 'Audio Fiction',
    date: '2023-04-01T00:00:00.000Z',
    age_group: '',
    amazon_product_url: 'https://www.amazon.com/dp/038554734X?tag=NYTBSREV-20',
    article_chapter_link: '',
    author: 'Bonnie Garmus',
    book_image:
      'https://storage.googleapis.com/du-prd/books/images/9780385547345.jpg',
    book_image_width: 328,
    book_image_height: 500,
    book_review_link: '',
    book_uri: 'nyt://book/a7229ef2-7522-5cb7-86c4-024aca7420e7',
    contributor: 'by Bonnie Garmus',
    contributor_note: '',
    created_date: '2023-04-05 23:10:05',
    description:
      'A scientist and single mother living in California in the 1960s becomes a star on a TV cooking show. Read by Miranda Raison, Pandora Sykes and the author. 11 hours, 55 minutes unabridged.',
    first_chapter_link: '',
    price: '0.00',
    primary_isbn10: '0593507533',
    primary_isbn13: '9780593507537',
    publisher: 'Random House Audio',
    rank: 1,
    rank_last_week: 0,
    sunday_review_link: '',
    title: 'LESSONS IN CHEMISTRY',
    updated_date: '2023-04-05 23:10:05',
    weeks_on_list: 0,
    buy_links: [
      {
        name: 'Amazon',
        url: 'https://www.amazon.com/dp/038554734X?tag=NYTBSREV-20',
      },
      {
        name: 'Apple Books',
        url: 'https://goto.applebooks.apple/9780593507537?at=10lIEQ',
      },
      {
        name: 'Barnes and Noble',
        url: 'https://www.anrdoezrs.net/click-7990613-11819508?url=https%3A%2F%2Fwww.barnesandnoble.com%2Fw%2F%3Fean%3D9780593507537',
      },
      {
        name: 'Books-A-Million',
        url: 'https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fp%252FLESSONS%252BIN%252BCHEMISTRY%252FBonnie%252BGarmus%252F9780593507537&url2=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fsearch%253Fquery%253DLESSONS%252BIN%252BCHEMISTRY%252BBonnie%252BGarmus',
      },
      {
        name: 'Bookshop',
        url: 'https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fbookshop.org%2Fa%2F3546%2F9780593507537&url2=https%3A%2F%2Fbookshop.org%2Fbooks%3Faffiliate%3D3546%26keywords%3DLESSONS%2BIN%2BCHEMISTRY',
      },
      {
        name: 'IndieBound',
        url: 'https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.indiebound.org%2Fbook%2F9780593507537%3Faff%3DNYT&url2=https%3A%2F%2Fwww.indiebound.org%2Fsearch%2Fbook%3Fkeys%3DLESSONS%2BIN%2BCHEMISTRY%2BBonnie%2BGarmus%26aff%3DNYT',
      },
    ],
    __v: 0,
  },
  {
    _id: '643282b1e85766588626a0d6',
    list_name: 'Business Books',
    date: '2023-04-01T00:00:00.000Z',
    age_group: '',
    amazon_product_url: 'https://www.amazon.com/dp/0593239911?tag=NYTBSREV-20',
    article_chapter_link: '',
    author: 'Matthew Desmond',
    book_image:
      'https://storage.googleapis.com/du-prd/books/images/9780593239919.jpg',
    book_image_width: 329,
    book_image_height: 500,
    book_review_link: '',
    book_uri: 'nyt://book/f21834a2-0566-54a6-bf85-b2aabf4a71e0',
    contributor: 'by Matthew Desmond',
    contributor_note: '',
    created_date: '2023-04-05 23:10:12',
    description: '',
    first_chapter_link: '',
    price: '0.00',
    primary_isbn10: '0593239911',
    primary_isbn13: '9780593239919',
    publisher: 'Crown',
    rank: 3,
    rank_last_week: 0,
    sunday_review_link: '',
    title: 'POVERTY, BY AMERICA',
    updated_date: '2023-04-05 23:10:12',
    weeks_on_list: 0,
    buy_links: [
      {
        name: 'Amazon',
        url: 'https://www.amazon.com/dp/0593239911?tag=NYTBSREV-20',
      },
      {
        name: 'Apple Books',
        url: 'https://goto.applebooks.apple/9780593239919?at=10lIEQ',
      },
      {
        name: 'Barnes and Noble',
        url: 'https://www.anrdoezrs.net/click-7990613-11819508?url=https%3A%2F%2Fwww.barnesandnoble.com%2Fw%2F%3Fean%3D9780593239919',
      },
      {
        name: 'Books-A-Million',
        url: 'https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fp%252FPOVERTY%25252C%252BBY%252BAMERICA%252FMatthew%252BDesmond%252F9780593239919&url2=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fsearch%253Fquery%253DPOVERTY%25252C%252BBY%252BAMERICA%252BMatthew%252BDesmond',
      },
      {
        name: 'Bookshop',
        url: 'https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fbookshop.org%2Fa%2F3546%2F9780593239919&url2=https%3A%2F%2Fbookshop.org%2Fbooks%3Faffiliate%3D3546%26keywords%3DPOVERTY%252C%2BBY%2BAMERICA',
      },
      {
        name: 'IndieBound',
        url: 'https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.indiebound.org%2Fbook%2F9780593239919%3Faff%3DNYT&url2=https%3A%2F%2Fwww.indiebound.org%2Fsearch%2Fbook%3Fkeys%3DPOVERTY%252C%2BBY%2BAMERICA%2BMatthew%2BDesmond%26aff%3DNYT',
      },
    ],
    __v: 0,
  },
];
