let array = ['a', 'b', 'c', 'd', 'e'];
let extracted = array.splice(1, 2);
console.log(extracted);

let C = extracted.slice(1);
console.log(C);
C.push('x', 'y');
console.log(C);