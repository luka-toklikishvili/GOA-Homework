class Human {
    constructor(name, surname, age, email = "UNKNOWN", phone = "UNKNOWN", address = "UNKNOWN") {
        this.name = name;
        this.surname = surname;
        this.age = age;
        this.email = email;
        this.phone = phone;
        this.address = address;
    }

    checkAge() {
        return this.age > 50 ? "Old 👴" : "Young 🧑";
    }
}


class Humans {
    constructor() {
        this.list = [];
    }

    addHuman(human) {
        this.list.push(human);
    }

    showOlderThan50() {
        const result = this.list.filter(h => h.age > 50);
        console.log("People older than 50:");
        result.forEach(h => {
            console.log(`${h.name} ${h.surname}, Age: ${h.age}`);
        });
    }
}


const human1 = new Human("davit", "grdzelo", 50);
const human2 = new Human("gio", "abuashvili", 1500);
const human3 = new Human("nino", "beridze", 25);
const human4 = new Human("mariam", "javakhishvili", 70);

const group = new Humans();
group.addHuman(human1);
group.addHuman(human2);
group.addHuman(human3);
group.addHuman(human4);

group.showOlderThan50();
