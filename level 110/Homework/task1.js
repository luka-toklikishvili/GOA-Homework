let numbers = [100, 200, 300]
numbers.push(40)
numbers.shift()
console.log("Length:", numbers.length)
for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i])
}
