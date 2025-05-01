class BankAccount:
    def __init__(self, balance):
        self.balance = balance

    def deposit(self, amount):
        self.balance += amount
        print(f"Deposited {amount}. New balance: {self.balance}")

    def withdraw(self, amount):
        if amount <= self.balance:
            self.balance -= amount
            print(f"Witdraw {amount}. New balance: {self.balance}")
        else:
            print("not enough!")

account = BankAccount()
account.deposit(100)
account.withdraw(30)
account.withdraw(100)  