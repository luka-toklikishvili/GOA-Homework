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

    greeting() {
        console.log(`Hello, my name is ${this.name} ${this.surname}`);
    }
}


class Employee extends Human {
    constructor(name, surname, age, salary, email, phone, address) {
        super(name, surname, age, email, phone, address); 
        this.salary = salary;
    }

    showSalary() {
        console.log(`${this.name} ${this.surname} earns 💰 ${this.salary} GEL per month.`);
    }
}


class Student extends Human {
    constructor(name, surname, age, grade, email, phone, address) {
        super(name, surname, age, email, phone, address);
        this.grade = grade;
    }

    showGrade() {
        console.log(`${this.name} ${this.surname} has a grade of 📘 ${this.grade}.`);
    }
}


const emp1 = new Employee("davit", "grdzelo", 35, 2500, "davit@mail.com");
const stu1 = new Student("luka", "toklikishvili", 20, "A+", "luka@mail.com");

emp1.greeting();   
emp1.showSalary(); 

stu1.greeting();  
stu1.showGrade();  
