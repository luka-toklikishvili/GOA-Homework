#1) split() ფუნქიცია დაწერეთ split() ფუნქციის გარეშე
text = "Hello world!,its me luka"
result = []
word = ""

for char in text:
    if char == " ": 
        if word:  
            result.append(word)
            word = ""  
    else:
        word += char  

if word:  
    result.append(word)

print(result)  

#2) join() ფუნქიცია დაწერეთ join() ფუნქციის გარეშე

words = ["Hello", "world", "this", "is", "Python!"]
separator = " "
result = ""

for i in range(len(words)):
    result += words[i]  
    if i < len(words) - 1:  
        result += separator  

print(result)  

#3) replace() ფუნქიცია დაწერეთ replace() ფუნქციის გარეშე
def custom_replace(text, old, new):
    parts = text.split(old)  
    return new.join(parts)  

# მაგალითი
text = "I love apples. Apples are tasty."
old = "Apples"
new = "Oranges"
replaced_text = custom_replace(text, old, new)

print(replaced_text)  


#4) mini function of calculator 
def multipy (a, b):
    return a*b

def sum(a, b):
    return a+b

def divide(a, b):
    return a/b

def subtract(a, b):
    return a-b

#5) input ები გამოყენებით, დავამტოთ იმდენი სიტყვა რმადენიც მომხარებეს სურს და ეს სიტყვეი მოვაქციოთ array ში 
#დავაჯოინოთ და გამოვიტანოთ ტერმინალში 


input_string = input("enter words: ")

words = input_string.split()  

result = " ".join(words)

print("combined words: ", result)

