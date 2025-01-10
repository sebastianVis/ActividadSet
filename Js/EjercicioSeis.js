const sonIguales =([1, 2, 3], [3, 2, 1]); // true
const NosonIguales =([1, 2, 3], [4, 5, 6]); // false

const setUno = new Set(sonIguales);
const setDos = new Set(NosonIguales);