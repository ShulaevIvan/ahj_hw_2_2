export const data = [
  {
    id: 26,
    title: 'Побег из Шоушенка',
    imdb: 9.30,
    year: 1994,
  },
  {
    id: 25,
    title: 'Крёстный отец',
    imdb: 9.20,
    year: 1972,
  },
  {
    id: 27,
    title: 'Крёстный отец 2',
    imdb: 9.00,
    year: 1974,
  },
  {
    id: 1047,
    title: 'Тёмный рыцарь',
    imdb: 9.00,
    year: 2008,
  },
  {
    id: 223,
    title: 'Криминальное чтиво',
    imdb: 8.90,
    year: 1994,
  },
];

export function createTable() {
  const table = document.createElement('table');
  const header = document.createElement('tr');
  const tdHeaderId = document.createElement('th');
  const tdHeaderTitle = document.createElement('th');
  const tdHeaderYear = document.createElement('th');
  const tdHeaderImdb = document.createElement('th');
  tdHeaderId.textContent = 'id';
  tdHeaderTitle.textContent = 'title';
  tdHeaderImdb.textContent = 'imdb';
  tdHeaderYear.textContent = 'year';
  header.classList.add('table_header');
  header.appendChild(tdHeaderId);
  header.appendChild(tdHeaderTitle);
  header.appendChild(tdHeaderImdb);
  header.insertBefore(tdHeaderYear, tdHeaderImdb);
  table.appendChild(header);
  table.classList.add('main_table');

  return table;
}
