age=int(input("enter your date of birth: "))
print("you are ",2024-age)

num1=int(input("enter lenght of square: "))
num2=int(input("enter width of square: "))
 
area=num1*num2
print(area)

perimeter=2*(num1+num2)
print(perimeter)

distance_km = float(input("enter distance between your house and school (kilometres): "))
distance_m = distance_km * 1000
distance_cm = distance_km * 100000
distance_mm = distance_km * 1000000

print(distance_km)
print(distance_m)
print(distance_cm)
print(distance_mm)


name = input("enter your name: ")
surname = input("enter your surname: ")
mother_name = input("enter you mothers name: ")
mother_surname = input("enter your mothers surname: ")
favorite_color = input("enter your favorite color: ")
favorite_car = input("enter your favorite car: ")
hobby1 = input("enter your hobby1: ")
hobby2 = input("enter your hobby2: ")
hobby3 = input("enter your hobby3: ")

print(name+" "+surname+" "+" my mothers name is "+mother_name+" "+mother_surname+" "+"my favorite color is "+favorite_color+" "+"my favorite car is "+favorite_car+"  "+hobby1+" "+hobby2+" "+hobby3)

number=int(input("enter double digit number: "))
ateuli=number//10
etreuli=number%10
print(ateuli+etreuli)