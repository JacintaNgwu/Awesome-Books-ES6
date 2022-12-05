import { DateTime } from './luxon.js';

export default function displayDate() {
  const currentDate = document.querySelector('.current-date');
  const dt = DateTime.now();
  currentDate.innerHTML = dt.toLocaleString(DateTime.DATETIME_MED);
}
