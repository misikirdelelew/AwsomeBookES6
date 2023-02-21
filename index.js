import './modules/datetime.js';
import { configureLinks } from './modules/navigation.js';
import awesomeBooks from './modules/books.js';
import configureAddBooksForm from './modules/addbook.js';

configureLinks();
configureAddBooksForm();
awesomeBooks.showBooks();
