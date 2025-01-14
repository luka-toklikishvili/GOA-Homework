def manual_difference(s1, s2):
    res = set()  
    for el in s1:  
        if el not in s2:  
            res.add(el)  
    return res

set1 = {1, 2, 3, "apple", 13.4, "pear"}
set2 = {1, 2, 3, "pear"}
print(manual_difference(set1, set2))




student1 = {
    "name": "luka",
    "surname": "tolklikishvili",
    "age": 17,
    "average_grade": 8.5
}


student2 = {
    "name": "merab",
    "surname": "gigolshvili",
    "age": 16,
    "average_grade": 9.2
}


print("first student")
student1.items()
print(student1)

print("\nsecond student")
student2.items()
print(student2)