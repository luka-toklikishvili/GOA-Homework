from turtle import *

#we want to paint a house


#step 1: draw a square
speed(30)
width(5)
color("green")
forward(200)
left(90)

forward(200)
left(90)

forward(200)
left(90)

forward(200)
left(90)
#end of the square

#drawing a door
forward(70)
left(90)
color("yellow")
forward(120)       #height of the door
right(90)

forward(60)
right(90)
forward(120)

penup()
goto(200,200)

pendown()
color("red")
begin_fill()
right(150)
forward(200)

left(120)
forward(200)
end_fill()
penup()
goto(90,140)
pendown()
color("black")
right(60)
forward(70)
right(90)
forward(40)
right(90)
forward(70)
right(90)
forward(40)
penup()
goto(120,140)
pendown()
left(90)
forward(70)
left(90)
forward(40)
left(90)
forward(70)
left(90)
forward(40)

exitonclick() 