import { createTable, data } from './data';
import sortInterval from './sortInterval';

window.addEventListener('DOMContentLoaded', () => {
  const wrapper = document.querySelector('.wrapper');
  const table = createTable();
  /* eslint-disable-next-line */
  for (const obj of data) {
    const tr = document.createElement('tr');
    tr.setAttribute('data-id', obj.id);
    tr.setAttribute('data-title', obj.title);
    tr.setAttribute('data-year', obj.year);
    tr.setAttribute('data-imdb', obj.imdb);
    tr.classList.add('inner_tr');
    /* eslint-disable-next-line */
    for (const [k, v] of Object.entries(obj)) {
      const td = document.createElement('td');
      td.textContent = v;
      tr.appendChild(td);
      if (k === 'year') {
        tr.insertBefore(td, td.previousElementSibling);
      } else if (k === 'imdb') {
        td.textContent = `${k}:${v.toFixed(2)}`;
      }
    }
    table.appendChild(tr);
  }
  wrapper.appendChild(table);
  const allTr = Array.from(document.querySelectorAll('.inner_tr'));
  sortInterval(table, allTr);
});
