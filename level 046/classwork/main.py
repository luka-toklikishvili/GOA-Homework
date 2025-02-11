def binary_to_number(binary_to_str):
    try:
        decimal_number = int(binary_to_str, 2)
        return decimal_number
    except ValueError:
        return "Invalid number"

if __name__ == "__main__":
    binary_input = input("Enter a binary number: ")
    print("Decimal equivalent:", binary_to_number(binary_input))