const points = [10, 30, 5, 2, 99];

points.push(77);
console.log(points);

const popped = points.pop();
console.log( popped);
console.log("After:", points);

const shifted = points.shift();
console.log("Shifted:", shifted); 
console.log("After:", points);
points.unshift(15);
console.log("After", points);

const joined = points.join(", ");
console.log("Joined with ', ':", joined);

const str = points.toString();
console.log("toString():", str);

const morePoints = [100, 200];
const combined = points.concat(morePoints);
console.log("Concatenated arrays:", combined);
