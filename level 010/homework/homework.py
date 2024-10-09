
age = int(input("how old are you: "))

for i in range(age):
    print(age, "წლისა")


temperature=float(input("enter celsies: "))
Fahrenheit=temperature*9/5+32
print("Fahrenheit: ",Fahrenheit)

age = 20
has_id = True
can_enter = age >= 18 and has_id
print("you can enter ",can_enter)


temperature = 30
is_sunny = True
outdoor_activity = temperature > 25 or is_sunny
print("you can go out ",outdoor_activity)


is_raining = False
good_weather = not is_raining
print("its not raining",good_weather)

13>12
14>12
1>3

12>=11
11>=16
14>=10

14!=14
200!=199
14!=12

height = 7 

for i in range(height):
    print('*' * (i + 1))


    age = 20 

is_user_20_years_old = (age == 20)  
print(is_user_20_years_old)  


