import math

class Circle:
    def __init__(self, radius):
        self.radius = radius

    def area(self):
        return math.pi * self.radius ** 2
circle1 = Circle(10)
print("circle area is:", circle1.area())