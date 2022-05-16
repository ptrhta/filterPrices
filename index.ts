declare type filterObjects = {
  name: string;
  prices: number[];
}[];

let courses = [
  { name: "Courses in England", prices: [0, 100] },
  { name: "Courses in Germany", prices: [500, null] },
  { name: "Courses in Italy", prices: [100, 200] },
  { name: "Courses in Russia", prices: [null, 400] },
  { name: "Courses in China", prices: [50, 250] },
  { name: "Courses in USA", prices: [200, null] },
  { name: "Courses in Kazakhstan", prices: [56, 324] },
  { name: "Courses in France", prices: [null, null] },
];

// Варианты цен (фильтры), которые ищет пользователь
let requiredRange1 = [null, 200];
let requiredRange2 = [100, 350];
let requiredRange3 = [200, null];

const filterPrices = (filterObjects: filterObjects, range: number[]) =>
  filterObjects.filter((filterObject) => {
    if (range[1] === null) {
      if (filterObject.prices[0] >= range[0]) {
        return true;
      }
      return false;
    } else if (range[0] === null) {
      if (
        filterObject.prices[1] <= range[1] &&
        filterObject.prices[0] <= range[1]
      ) {
        return true;
      }
      return false;
    } else if (filterObject.prices[1] === null) {
      if (
        filterObject.prices[0] <= range[1] &&
        filterObject.prices[0] >= range[0]
      ) {
        return true;
      }

      return false;
    } else if (filterObject.prices[0] === null) {
      if (
        filterObject.prices[1] >= range[0] &&
        filterObject.prices[1] <= range[0]
      ) {
        return true;
      }
      return false;
    } else if (
      filterObject.prices[1] <= range[1] &&
      filterObject.prices[0] >= range[0]
    ) {
      return true;
    }

    return false;
  });

console.log(filterPrices(courses, requiredRange1), requiredRange1);
console.log(filterPrices(courses, requiredRange2), requiredRange2);
console.log(filterPrices(courses, requiredRange3), requiredRange3);
