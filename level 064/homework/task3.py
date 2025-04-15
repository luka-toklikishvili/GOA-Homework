class Dog:
    def __init__(self, name, age):
        self.name = name
        self.age = age

    def bark(self):
        print("Woof!")
        
my_dog = Dog("toma", 1)
print(f"dog name : {my_dog.name} dog age : {my_dog.age}")
my_dog.bark()
