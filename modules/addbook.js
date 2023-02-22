import awesomeBooks from './books.js';

const configureAddBooksForm = () => {
  document
    .querySelector('#add_new_book_btn')
    .addEventListener('click', (event) => {
      event.preventDefault();
      const AddFormData = document.forms.form_data;
      const BTitle = AddFormData.elements.title.value;
      const BAuthor = AddFormData.elements.author.value;
      if (BTitle.trim() !== '' && BAuthor.trim() !== '') {
        awesomeBooks.addBook(BTitle, BAuthor);
        AddFormData.reset();
      }
    });
};

export default configureAddBooksForm;
