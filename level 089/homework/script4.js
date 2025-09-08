class Human {
    constructor(name, surname, age, email = "UNKNOWN", phone = "UNKNOWN", address = "UNKNOWN") {
        this.name = name;
        this.surname = surname;
        this._age = age;  
        this.email = email;
        this.phone = phone;
        this.address = address;
    }


    get age() {
        return this._age;
    }


    set age(value) {
        if (value < 18) {
            console.warn(`⚠️ Warning: ${this.name} ${this.surname} is under 18!`);
        }
        this._age = value;
    }
}

const human1 = new Human("davit", "grdzelo", 50);
const human2 = new Human("luka", "toklikishvili", 16);

console.log(human1.age);
console.log(human2.age);


human2.age = 15;
console.log(human2.age);
