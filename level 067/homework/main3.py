class Student:
    def __init__(self, name, grade, subject):
        self.name = name
        self.grade = grade
        self.subject = subject

    def introduce_my_self(self):
        print(f"My name is {self.name}, I study {self.subject} and my grade is {self.grade}.")


student1 = Student("luka", 15, "history")
student1.introduce_my_self()