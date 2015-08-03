# *arguments
#    receives a tuple containing the positional arguments beyond the formal
#    parameter list
# **keywords
#    receives a dictionary containning all keyword arguments except for those
#    corresponding to a formal parameter

def cheeseshop(kind, *arguments, **keywords):
    print "-- Do you have any", kind, "?"
    print "-- I'm sorry, we're all out of ", kind
    for arg in arguments:
        print arg
    print "-" * 40
    keys = sorted(keywords.keys())
    for kw in keys:
        print kw, ":", keywords[kw]
        
cheeseshop("Limburger", "It's very runny, sir.",
           "It's really very, VERY runny, sir.",
           shopkeeper='Michael Palin',
           client="John Cleese",
           sketch="Cheese Shop Sketch")

# *-operator
#    unpack the arguments out of a list or tuple
print range(3, 6)
args = [3, 6]
print range(*args)

# **-operator
#     unpack the arguments out of a dictionary
def parrot(voltage, state='a stiff', action='voom'):
    print "-- This parrot wouldn't", action,
    print "if you put", voltage, "volts through it.",
    print "E's", state, "!"

d = {"voltage": "four million", "state": "bleedin' demised", "action": "VOOM"}
parrot(**d)
