let Arr = [100, 200, 300, 400, 500];
let spliced = Arr.splice(1, 3);
console.log(spliced);

console.log(Arr);

let originalArray = [100, 200, 300, 400, 500];
let sliced = originalArray.slice(2, 4);
console.log(sliced);

sliced.splice(1, 0, 99, 100);
console.log(sliced);