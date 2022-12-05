import BookList from './books.js';

// eslint-disable-next-line import/no-mutable-exports
export let newBookList = new BookList();

export function showBookList() {
  document.getElementById('book-list').innerHTML = '';

  if (localStorage.getItem('bookList') !== null) {
    const bookList = JSON.parse(localStorage.getItem('bookList'));
    if (bookList === null) { return; }
    let book = bookList.head;
    while (book !== null) {
      const bookDiv = document.createElement('div');
      bookDiv.classList.add('book');
      const titleDiv = document.createElement('div');
      titleDiv.classList.add('title');
      titleDiv.innerText = book.title;
      bookDiv.appendChild(titleDiv);

      const authorDiv = document.createElement('div');
      authorDiv.classList.add('author');
      authorDiv.innerText = book.author;
      bookDiv.appendChild(authorDiv);

      const removeBtn = document.createElement('button');
      removeBtn.classList.add('remove-book-btn');
      removeBtn.innerText = 'Remove';
      const btnDiv = document.createElement('div');
      btnDiv.classList.add('btn-wrap');
      btnDiv.appendChild(removeBtn);
      bookDiv.appendChild(btnDiv);

      document.getElementById('book-list').appendChild(bookDiv);

      book = book.next;
    }
  }
}

export function storeInClass() {
  const bookList = JSON.parse(localStorage.getItem('bookList'));

  if (bookList !== null) {
    let book = bookList.head;

    if (book === undefined) { return; }
    newBookList = new BookList();
    // newBookList();
    while (book !== null) {
      newBookList.add(book.title, book.author);
      book = book.next;
    }
  }
}
