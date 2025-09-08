class Human {
    constructor(name, surname, age, email = "UNKNOWN", phone = "UNKNOWN", address = "UNKNOWN") {
        this.name = name;
        this.surname = surname;
        this.age = age;
        this.email = email;
        this.phone = phone;
        this.address = address;
    }

    // methods / functions 
    greeting(gamesCount) {
        console.log(`Hello ${this.name} ${this.surname} Games count:${gamesCount}`)
    }

    get speak() {
        console.log(`G A M A R J O B A`)
    }

    set someWord(word) {
        console.log(word)
    }

    checkAge() {
        if (this.age < 60) {
            console.log(`${this.name} ${this.surname} is Young 🧑`);
        } else {
            console.log(`${this.name} ${this.surname} is Old 👴`);
        }
    }
}

// ობიექტები
const newHuman = new Human("davit", "grdzelo", 50);
const newHuman1 = new Human("gio", "abuashvili", 1500, "gio@mail.com", "555-123-456", "Tbilisi");

// გამოყენება
newHuman.checkAge();
newHuman1.checkAge();
