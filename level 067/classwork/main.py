class Person:
    def __init__(self, name, surname, fathers_name):
        self.name = name
        self.surname = surname
        self.fathers_name = fathers_name

    def info(self):
        return f"{self.name} {self.fathers_name} {self.surname}"

p1 = Person("luka", "toklikishvili", "valeri")
print(p1.info())