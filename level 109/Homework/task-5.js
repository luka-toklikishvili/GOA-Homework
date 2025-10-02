let num = 10;

if (num > 10) {
  console.log("Big number");
} else if (num < 10) {
  console.log("Small number");
} else {
  console.log("Equal to 10");
}

// switch მაგალითი
let color = "yellow";
switch (color) {
  case "red":
    console.log("Stop!");
    break;
  case "yellow":
    console.log("Wait!");
    break;
  case "green":
    console.log("Go!");
    break;
  default:
    console.log("Unknown color");
}
