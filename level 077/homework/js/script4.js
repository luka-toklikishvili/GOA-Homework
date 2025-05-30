let strings = ['one', 'two', 'three', 'four', 'five', 'six', 'seven'];

let removed = strings.splice(2, 3);
console.log(removed);

let sliced = removed.slice(0, 2);
console.log( sliced);

sliced.push('hello');
console.log(sliced);