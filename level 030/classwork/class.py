def high_and_low(numbers):
    num_strings = numbers.split()


    highest = max(num_strings)
    lowest = min(num_strings)

    return f"{highest} {lowest}"

print(high_and_low(23,45,67,898,64,35,678,98,76,35))