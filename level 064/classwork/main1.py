class Human:
    def __init__(self, name, surname, age):
        self.name = name
        self.surname = surname
        self.age = age

    def __str__(self):
        return f"Human: {self.name} {self.surname}, Age: {self.age}"

    def info_name(self):
        print(f"First Name: {self.name}")
        print(f"Last Name: {self.surname}")

    def info_age(self):
        print(f"Age: {self.age}")


person = Human("Luka", "Toklikishvili", 15)
print(person)  
person.info_name()
person.info_age()


