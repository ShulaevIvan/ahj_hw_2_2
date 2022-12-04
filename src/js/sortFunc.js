export function sortNumber(arr, atr, reverse = false) {
  if (reverse) {
    // eslint-disable-next-line
    return arr.sort((a, b) => a.getAttribute(`${atr}`) - b.getAttribute(`${atr}`)).reverse();
  }
  // eslint-disable-next-line
  return arr.sort((a, b) => a.getAttribute(`${atr}`) - b.getAttribute(`${atr}`));
}
export function sortString(arr, atr, reverse = false) {
  if (reverse) {
    // eslint-disable-next-line
    return arr.sort((a, b) => a.getAttribute(`${atr}`).toLowerCase() > b.getAttribute(`${atr}`).toLowerCase() ? 1 : -1).reverse();
  }
  // eslint-disable-next-line
  return arr.sort((a, b) => a.getAttribute(`${atr}`).toLowerCase() > b.getAttribute(`${atr}`).toLowerCase() ? 1 : -1);
}

export const counterObj = [
  {
    tag: 'data-id',
    number: true,
    reverse: false,
  },
  {
    tag: 'data-id',
    number: true,
    reverse: true,
  },
  {
    tag: 'data-title',
    number: false,
    reverse: false,
  },
  {
    tag: 'data-title',
    number: false,
    reverse: true,
  },
  {
    tag: 'data-year',
    number: true,
    reverse: false,
  },
  {
    tag: 'data-year',
    number: true,
    reverse: true,
  },
  {
    tag: 'data-imdb',
    number: true,
    reverse: false,
  },
  {
    tag: 'data-imdb',
    number: true,
    reverse: true,
  },
];
