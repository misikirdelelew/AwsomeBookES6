import { setActiveLink } from './navigation.js';

class Library {
  constructor() {
    this.books = JSON.parse(localStorage.getItem('books')) || [];
  }

    showBooks = () => {
      let booksHTML = '';
      if (this.books.length === 0) {
        document.querySelector('#bk-container > p').style.display = 'block';
      } else {
        document.querySelector('#bk-container > p').style.display = '';
      }
      this.books.forEach((book) => {
        booksHTML += `
        <div class='book'>
          <p>
            <span>"${book.title}"</span>
            by
            <span>${book.author}</span>
          </p>
          <button class="remove-book-button" id="${book.id}">Remove</button>
        </div>
      `;
      });
      const booksContainer = document.querySelector('#book_list');
      booksContainer.innerHTML = booksHTML;

      const allRemoveButton = document.querySelectorAll('.remove-book-button');
      allRemoveButton.forEach((button) => {
        button.addEventListener('click', () => {
          this.removeBook(Number(button.id));
        });
      });
      window.location.href = '#bk-container';
      setActiveLink(0);
    };

    addBook = (title, author) => {
      const id = Math.round(Math.random() * 10000);
      this.books = [...this.books, { id, title, author }];
      localStorage.setItem('books', JSON.stringify(this.books));
      this.showBooks();
    };

    removeBook = (bookId) => {
      this.books = this.books.filter((book) => book.id !== bookId);
      localStorage.setItem('books', JSON.stringify(this.books));
      this.showBooks();
    };
}

const awesomeBooks = new Library();
export default awesomeBooks;
