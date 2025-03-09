names = ["Ana", "Luka", "Nino", "Giorgi", "Mariam"]
for name in names:
    print(name)

text = "hello"
print(len(text))

arr = ["davit", "gio", "davit", "gio", "davit"]
target = "davit"
count = arr.count(target)
print(count)


def reverse_string(s):
    return s[::-1]

print(reverse_string("hello"))


numbers = [5, 10, 15, 20]
average = sum(numbers) / len(numbers)
print(average)
