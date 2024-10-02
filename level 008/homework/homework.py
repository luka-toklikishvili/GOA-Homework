age=input("enter you age: ")
print(19>int(age)>13)

grade=int(input("enter your grade: "))
is_A=grade>=9
is_B=8<=grade<9
is_C=7<=grade<8
is_D = 6 <= grade < 7
is_F = grade < 6

print("is_A: ",is_A)
print("is_B: ",is_B)
print("is_C: ",is_C)
print("is_D: ",is_D) 
print("is_F: ",is_F)
print("  ")

a = True
b = False
print("a and b:", a and b)       
print("a or b:", a or b)          
print("not a:", not a)            
print("not b:", not b) 


num1 = int(input("enter first number: "))
num2 = int(input("enter second number: "))

# შედარებების შესრულება
print("num1 == num2:", num1 == num2)    
print("num1 < num2:", num1 < num2)      
print("num1 > num2:", num1 > num2)      
print("num1 <= num2:", num1 <= num2)    
print("num1 >= num2:", num1 >= num2)    
print("num1 != num2:", num1 != num2)    
print("   ")
a = 5  
b = 10
c = 3

is_a_greatest = a > b and a > c
is_b_middle = (b > a and b < c) or (b < a and b > c)
is_c_least = c < a and c < b

score = int(input("enter number between(0-100): "))
is_pass = score >= 50
is_high_pass = 75 < score < 90
is_perfect = score == 100
is_failing = score < 50
print("is_pass:", is_pass)
print("is_high_pass:", is_high_pass)
print("is_perfect:", is_perfect)
print("is_failing:", is_failing)
print("  ")

P = True  
Q = False
P_and_not_Q = P and not Q
not_P_and_Q = not P and Q
P_xor_Q = (P and not Q) or (not P and Q)
print("P_and_not_Q:", P_and_not_Q)
print("not_P_and_Q:", not_P_and_Q)
print("P_xor_Q:", P_xor_Q)