class Car:
    def __init__(self, brand, model, year):
        self.brand = brand
        self.model = model
        self.year = year

    def car_info(self):
        print(f"Car: {self.brand} {self.model}, come out Year: {self.year}")
        
my_car = Car("hunday", "Elantra", 2019)
my_car.car_info()       