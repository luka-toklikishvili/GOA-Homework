const a = [2, 4, 6];
const b = [1, 3, 5];

const combined = a.concat(b);
combined.sort((x, y) => x - y);
console.log(combined);