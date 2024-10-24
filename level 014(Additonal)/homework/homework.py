
name =input("enter your name: ")
result = " "

for i in name:
    result += i+" "
    
print(result)   


start=int(input("enter range start number: "))
end=int(input("enter range end number: "))

for num in range(start,end):
    if num%2==0 and num%3==0:
        print(num,"2 and 3 multiple")
else:
    print("cxvari gowia")


result=0


for i in range(5):
    number = int(input("enter number: ")) 
    result += number

average=result/5
print("sum",result)
print("aritmetikul",average)


for numb in range(-100,100):
    if numb>0:
        print(numb,"plus number")


numbe=int(input("enter negative number: "))
while numbe >0:
    numbe=int(input("try again: "))
print("log in sussfuly")         

