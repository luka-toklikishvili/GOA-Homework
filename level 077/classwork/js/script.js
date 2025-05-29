let Arr = [100, 200, 300, 400, 500];

let spliced = Arr.splice(1, 3); 
console.log("Spliced:", spliced);
console.log("Remaining:", Arr);

let originalArray = [100, 200, 300, 400, 500];
let sliced = originalArray.slice(2, 4); 
console.log("Sliced even more:", sliced); 

sliced.splice(1, 0, 99, 100);
console.log("Sliced after add:", sliced);