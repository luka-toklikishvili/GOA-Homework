function checkAge(age) {
  if (age < 18) {
    console.log("You are a teenager 👦");
  } else if (age >= 18 && age < 60) {
    console.log("You are an adult 🧑");
  } else {
    console.log("You are a senior 👴");
  }
}