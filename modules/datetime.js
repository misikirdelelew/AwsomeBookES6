// eslint-disable-next-line
import { DateTime } from './luxon.js';
const showdate = document.querySelector('#showdate');
setInterval(() => {
  const now = DateTime.now();
  showdate.innerHTML = now.toFormat('ccc LLL dd yyyy, hh:mm:ss a');
}, 1000);
