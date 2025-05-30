let array = [10, 20, 30, 40, 50];

let spliced = array.splice(1, 3);
console.log("Spliced:", spliced);
console.log("array after splice:", array);

let sliced = spliced.slice(2, 3); 
console.log("Sliced:", sliced); 

sliced.splice(1, 0, 100, 200);
console.log("Modified sliced with new elements:", sliced); 