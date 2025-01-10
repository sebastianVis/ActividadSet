const firstSet = new Set([1, 2, 3, 4, 5]);
const secondSet = new Set([4, 5, 6, 7, 8]);

const set3 = firstSet.difference(secondSet);
console.log(set3);