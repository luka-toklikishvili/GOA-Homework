function manual_range(...args) {
  let start, end, step;

  if (args.length === 1) {
    start = 0;
    end = args[0];
    step = 1;
  } else if (args.length === 2) {
    start = args[0];
    end = args[1];
    step = 1;
  } else if (args.length === 3) {
    start = args[0];
    end = args[1];
    step = args[2];
  } else {
    throw new Error(`manual_range expected 1 to 3 arguments, got ${args.length}`);
  }

  if (step === 0) throw new Error("step cannot be 0");

  const numbers = [];
  if (step > 0) {
    for (let i = start; i < end; i += step) {
      numbers.push(i);
    }
  } else {
    for (let i = start; i > end; i += step) {
      numbers.push(i);
    }
  }
  return numbers;
}
console.log(manual_range(5));        
console.log(manual_range(2, 6));     
console.log(manual_range(2, 10, 2)); 
console.log(manual_range(10, 2, -2));

