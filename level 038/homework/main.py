# 2)შექმენი ფაილი სადაც გამოიყენებ ყველა set ფუნქციას(.clear, .set) და ასე შემდეგ
my_set = {1, 2, 3, 4, 5}

my_set.add(6)
print("After add:", my_set)

my_set.remove(3)
print("After remove:", my_set)

my_set.clear()
print("After clear:", my_set)


my_set = {1, 2, 3, 4, 5}


removed_element = my_set.pop()
print("After pop:", my_set)
print("Removed element:", removed_element)

another_set = {4, 5, 6, 7}
union_set = my_set.union(another_set)
print("Union of sets:", union_set)

difference_set = my_set.difference(another_set)
print("Difference of sets:", difference_set)


# 3)შექმენი dictionary შენს შესახებ, შემდეგ გამოიტანე მხოლოდ key

my_info={
    "name":"Luka",
    "age": 15,
    "surname":"Toklikishvili",
    "hobby":"coding",
    "Type":"Chad"
}

keys_only=my_info.keys()

print(keys_only)


# 4)შექმენი dictionary შენს შესახებ, შემდეგ გამოიტანე მხოლოდ value

my_info2={
    "name":"Luka",
    "age": 15,
    "surname":"Toklikishvili",
    "hobby":"coding",
    "Type":"Chad",
    "car":"mercedes"   
}
value_only=my_info2.values()
print(value_only)

def AddToDatabase(name, surname,age):
    database = {}
    
    database["name"] = name
    database["surname"]=surname
    database["age"] = age
    
    return database


person_data = AddToDatabase("luka","toklikishvili",15)
print(person_data)
