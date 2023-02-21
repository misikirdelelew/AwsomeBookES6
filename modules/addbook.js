import awesomeBooks from './books.js';

const configureAddBooksForm = () => {
  document
    .querySelector('#add_new_book_btn')
    .addEventListener('click', (event) => {
      event.preventDefault();
      const addBookForm = document.forms.add_book_form;
      const bookTitle = addBookForm.elements.title.value;
      const bookAuthor = addBookForm.elements.author.value;
      if (bookTitle.trim() !== '' && bookAuthor.trim() !== '') {
        awesomeBooks.addBook(bookTitle, bookAuthor);
        addBookForm.reset();
      }
    });
};

export default configureAddBooksForm;
