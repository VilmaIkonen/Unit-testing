
const upperBounds = new Array(19).fill(2).map((value, ind) => [value + ind]);

console.log(upperBounds);


const upperBounds2 = new Array(19).fill(2).map((value, ind) => ({a:value + ind}));
// const upperBounds2 = new Array(19).fill(2).map((value, ind) => { return { a: value + ind } });
console.log(upperBounds2);