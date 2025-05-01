odds = lambda a, b: [x for x in (a, b) if x % 2 != 0]

res = odds(4, 7)
print(res)