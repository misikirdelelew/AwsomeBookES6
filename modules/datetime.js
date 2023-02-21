// eslint-disable-next-line
import { DateTime } from 'https://moment.github.io/luxon/es6/luxon.min.js';

const showdate = document.querySelector('#showdate');

setInterval(() => {
  const now = DateTime.now();
  showdate.innerHTML = now.toFormat('ccc LLL dd yyyy, hh:mm:ss a');
}, 1000);
