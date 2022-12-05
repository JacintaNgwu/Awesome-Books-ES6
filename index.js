import displayDate from './modules/displayDate.js';
import { showBookList, storeInClass, newBookList } from './modules/showBookList.js';

document.getElementById('add_book_btn').addEventListener('click', () => {
  if (document.getElementById('title').value !== '') {
    newBookList.add(document.getElementById('title').value, document.getElementById('author').value);

    localStorage.setItem('bookList', JSON.stringify(newBookList));
    showBookList();
  }
});

window.addEventListener('load', () => {
  showBookList();
  storeInClass();
  displayDate();
});

const upsellBtn = document.getElementById('book-list');

upsellBtn.addEventListener('click', (event) => {
  const bookCurrent = event.target.closest('.book');
  if (bookCurrent !== null && bookCurrent !== undefined) {
    const nodelist = bookCurrent.childNodes;
    const [title, author] = nodelist;
    newBookList.remove(title.innerText, author.innerText);
    localStorage.removeItem('bookList');
    localStorage.setItem('bookList', JSON.stringify(newBookList));
    storeInClass();
    showBookList();
  }
});

const listItemLink = document.querySelector('#list-item');
const addItemLink = document.querySelector('#add-item');
const contactItemLink = document.querySelector('#contact-item');

addItemLink.addEventListener('click', () => {
  document.getElementById('add-new-book').classList.remove('hide');
  document.getElementById('book-container').classList.add('hide');
  document.getElementById('contact').classList.add('hide');
});

listItemLink.addEventListener('click', () => {
  document.getElementById('book-container').classList.remove('hide');
  document.getElementById('add-new-book').classList.add('hide');
  document.getElementById('contact').classList.add('hide');
});

contactItemLink.addEventListener('click', () => {
  document.getElementById('contact').classList.remove('hide');
  document.getElementById('book-container').classList.add('hide');
  document.getElementById('add-new-book').classList.add('hide');
});