class Book:
    def __init__(self, title, author, year):
        self.title = title
        self.author = author
        self.year = year

    def info(self):
        print(f"Title: {self.title} Author: {self.author} Year: {self.year}")
        
book1 = Book("To Kill a Mockingbird", "Harper Lee", 1960)
book1.info()