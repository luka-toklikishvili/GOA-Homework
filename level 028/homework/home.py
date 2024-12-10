# Convert boolean values to strings 'Yes' or 'No'.
def bool_to_word(boolean):
    if boolean == True:
        return "Yes"
    else:
        return "No"
    
    
 # Remove First and Last Character
def remove_char(s):
    return s[1:len(s)-1]
    
    
# Convert a String to a Number
def string_to_number(s):
    return int(s)


# Remove String Spaces
def no_space(x):
    res=""
    for i in x:
        if i !=" ":
            res += i
    return res       


# Sum Arrays
def sum_array(a):
    result=0
    for i in a:
        result += i
    return result
