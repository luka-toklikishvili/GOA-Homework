let numbers = [10, 20, 30, 40, 50, 60];

numbers.splice(1, 2, 25, 27);
console.log(numbers);

let sliced = numbers.slice(3);
console.log("Sliced array:", sliced);