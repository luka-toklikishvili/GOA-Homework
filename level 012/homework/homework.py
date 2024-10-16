for i in range(1 ,50 ,2):
    print("GOA",i)

 
i=0
while i<50:
    print("CHAD",i)
    i +=2


n = 5  
for i in range(n):
    for j in range(n):
        print("*", end=" ")
    print()  

    n = 5 
i = 0
while i < n:
    j = 0
    while j < n:
        print("*", end=" ")
        j += 1
    print()
    i += 1


height=6
width=4

for i in range(height):
    for j in range(width):
        print("*",end=" ")
    print()    



    width = 5  
height = 3  

i = 0
while i < height:
    j = 0
    while j < width:
        print("*", end="")
        j += 1
    print()  
    i += 1

    for num1 in range(1, 4):
        for num in range(1, 4):
            print(num1,num)

facebook_password=input("enter you facebook password: ")
password="777"

while facebook_password != password:
    facebook_password=input("try again: ")

print("log in succsefully")    