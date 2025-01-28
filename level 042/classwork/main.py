def convert_to_binary(age):
    binary = ''
    if age == 0:  
        return '0'
    while age > 0:
        nashti = age % 2  
        binary = str(nashti) + binary  
        age = age // 2  
    return binary

age = 15
binary_age = convert_to_binary(age)
print(binary_age)