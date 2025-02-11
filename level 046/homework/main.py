def binary_to_decimal(binary_string):
    num = 0
    len_of_the_binary = len(binary_string)
    
    for i in range(len_of_the_binary):
        bit = int(binary_string[i])
        num += bit * (2 ** (len_of_the_binary - 1 - i))
    return num

binary_number = '101'
decimal_number = binary_to_decimal(binary_number)
print(decimal_number)  