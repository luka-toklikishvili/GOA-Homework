#დავალება 1:
#შექმენით სია სადაც ინაქბა სხვადასხვა ასეობი და მხოლოდ ხმოვნები დაითვალეთ

georgian_alphabet = ['ა', 'ბ', 'გ', 'დ', 'ე', 'ვ', 'ზ', 'თ', 'ი', 'კ', 'ლ', 'მ', 'ნ', 'ო', 'პ', 'ჟ', 'რ', 'ს', 'ტ', 'უ', 'ფ', 'ქ', 'ღ', 'ყ', 'შ', 'ჩ', 'ც', 'ძ', 'წ', 'ჭ', 'ხ', 'ჯ', 'ჰ']

georgian_vowels=['ა', 'ე', 'ი', 'ო', 'უ']

only_vowels=[]

for i in georgian_alphabet:
    if i in georgian_vowels:
        only_vowels.append(i)
        
print('ხმოვნები',only_vowels) 

#დავალება 2 :
#შექმნი სია სადაც იქნება სადაც იანქბა ციფრები რომელიც გამოიტყანს 5 სა და 3ის ჯერადევბს

num_arr=[]

number=1

while number <=100:
    if number %3==0 or number%5==0:
       num_arr.append(number)  
    number += 1
print("five and three multiply",num_arr)     

#დავალება 3 : 
#შექმნი სია სდაც იქნება სახვადასხვა ასოები და ციფრეები
#ხოლო წარმოდგინე ეს ელემენტები ერთ სტრინგში 
mixed_list = ['a', 'b', 3, 4, 'c', 'd', 7, 8, 'e']

res=""

for i in mixed_list:
    res += str(i)
   
print(res)

#დავალება 4 : 
#შექმნით რომბი
# ******
#  ******
 #  ******
 #   ******

n=4
for i in range(n):
    print(' ' * i + '*' * 6)

#დავბალება 5 :
#მომხარებლს შეეკთეთ თუ რამდენი წლის არის მომხარებელი შემდეგ შევანახიოთ თუ ეს მომხარებელი არის 12 წელზე ზემოთ მაშინ დაგვიპრინტოს "შენ არ #ხარ 12 წლის"

age=int(input("Enter your age: "))

if age> 12:
    print("you are 12 years old")


