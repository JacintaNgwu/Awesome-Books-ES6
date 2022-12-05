/* eslint max-classes-per-file: ["error", 2] */

class Book {
  constructor(title, author, next = null) {
    this.title = title;
    this.author = author;
    this.next = next;
  }
}

export default class BookList {
  constructor() {
    this.head = null;
  }

  prepend(title, author) {
    const newhead = new Book(title, author);
    newhead.next = this.head;
    this.head = newhead;
  }

  add(title, author) {
    const book = new Book(title, author);
    if (this.head === null) {
      this.head = book;
      return;
    }

    let current = this.head;

    while (current.next !== null) {
      current = current.next;
    }
    current.next = book;
  }

  remove(title, author) {
    if (this.head === null) { return; }
    let current = this.head;
    let previous = null;

    while (current !== null) {
      if (current.title === title && current.author === author) {
        if (previous === null) {
          this.head = current.next;
        } else {
          previous.next = current.next;
        }
      }
      previous = current;
      current = current.next;
    }
  }

  getList() {
    let current = this.head;
    let str = '';
    while (current) {
      str += `${current.title} `;
      current = current.next;
    }
    return str;
  }

  indexOf(title, author) {
    let count = 0;
    let current = this.head;

    while (current !== null) {
      if (current.title === title && current.author === author) {
        return count;
      }
      count += 1;
      current = current.next;
    }
    return -1;
  }

  removeFrom(index) {
    if (this.head === null) { return; }
    let current = this.head;
    if (index === 0) {
      this.head = current.next;
      return;
    }
    let previous;
    let i = 0;

    while (i < index) {
      i += 1;
      previous = current;
      current = current.next;
    }
    previous.next = current.next;
  }
}
