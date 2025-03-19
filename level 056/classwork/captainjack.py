def captain_jack():
    gold_coin = int(input("Enter Captain Jack Sparrow's gold coin amount: "))
    ships = [150, 200, 250, 300, 350]
    
    if gold_coin == 0:
        return "The crew has mutinied!"
    
    print("Available ships: ", ships)
    chosen_ship = int(input("Choose a ship's price: "))
    
    if chosen_ship not in ships:
        return "This ship does not exist!"
    
    if gold_coin < chosen_ship:
        return "The crew has mutinied!"
    
    return "The ship has been successfully purchased!"

print(captain_jack())
