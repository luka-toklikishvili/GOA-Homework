let arr = [1, 2, 3, 4, 5, 6];
arr.splice(2, 2, 'a', 'b', 'c');
console.log(arr);
let lastTwo = arr.slice(-2);
console.log(lastTwo);