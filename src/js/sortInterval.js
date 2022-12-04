import { counterObj, sortNumber, sortString } from './sortFunc';

export default function sortInterval(table, allTr) {
  let counter = 0;
  setInterval(() => {
    if (counterObj[counter].number) {
      sortNumber(allTr, counterObj[counter].tag, counterObj[counter].reverse).forEach((item) => {
        table.appendChild(item);
      });
    }
    if (!counterObj[counter].number) {
      sortString(allTr, counterObj[counter].tag, counterObj[counter].reverse).forEach((item) => {
        table.appendChild(item);
      });
    }
    if (counter >= 7) counter = 0;
    counter += 1;
  }, 3000);
}
