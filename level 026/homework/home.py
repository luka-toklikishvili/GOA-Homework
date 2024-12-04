# 1) სამკუთხდები დამიხაზეთ 120 ცალი ოღონდ მხოლოდ კენტი <3 რიცხვებით ფუქნციების გამოყევებეა არ დაგვავიწყდეს
# თუ ჩვენი სამკუთხედი დამეთხვევა კენტ index მაში ნ სამკუთხედი იყოს მწვანე თუ არა და იყოსლურჯი
import turtle

def draw_triangle(x, y, color):
    turtle.penup()  
    turtle.goto(x, y)  
    turtle.pendown()  
    turtle.begin_fill()  
    turtle.fillcolor(color)  

    
    for i in range(3):
        turtle.forward(50)  
        turtle.left(120)  

    turtle.end_fill()  

def draw_triangles():
    turtle.speed(0)  
    turtle.bgcolor("white")  

    
    for i in range(120):
        color = 'green' if i % 2 != 0 else 'blue'  
        x = (i % 12) * 60 - 360   
        y = (i // 12) * 60 - 180  
        draw_triangle(x, y, color)

    turtle.hideturtle()  
    turtle.done()  


draw_triangles()

# 2) hello_world-როცა დავწერთ გამოვიტანოს print() 
user_input = input("enter the word : ")     
if user_input == "hello_world":
 print("print()")
 
 
# 3) def-ის გამოყენბით შემქენით ფუქნცია even_or_odd() შევამოწმოთ ჩვენი გამდოცემული არგუმენტი/ მაგალითილითად even_or_odd(23) არის თუ არა კენტი თუ არის დვაწეროთ "კი არის კენტი" თუ არა "არ არის კენტი"

def even_or_odd(number):
    if number % 2 == 0:
        print("არ არის კენტი")
    else:
        print("კი არის კენტი")


even_or_odd(25)

# 4) შექმენით ფუქცნია რომელიც 120 ჯერ გამოიტანს შემდეგი სახის ფუქგურები
# ******
# ******
# ******

#      *
#     ***
#   *******
# ***********
#      *
#      *

# *******
#  *******
#   ********
#     # ********

def print_figures():
    
    figure1 = '''******
                ******
                ******'''
    
    
    figure2 = '''     *
    ***
  *******
***********
     *
     *'''
    
 
    figure3 = '''*******
                    ****** 
                    ********
                     ********'''
    

    for i in range(120):
            print(figure1)
            print(figure2)
            print(figure3)


print_figures()
    