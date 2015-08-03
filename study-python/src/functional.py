# filter(function, sequence)
#    returns a sequence consisting of those items from the sequence for which
#    function(item) is true

# map(function, sequence)
#    calls function(item) for each of the sequence's items and returns a list of
#    the return values

def f(x): return x % 3 == 0 or x % 5 == 0
print filter(f, range(2, 25))


def cube(x): return x*x*x
print map(cube, range(1, 11))

# more than one sequence may be passed; the function must then have as many
# arguments as there are sequences and is called with the corresponding item from
# each sequence

seq = range(8)
def add(x, y): return x+y
print map(add, seq, seq)

# reduce(function, sequence)
#    returns a single value constructed by calling the binary function f on the 
#    first two items of the sequence, then on the result and the next item, and
#    so on.
#
#    a third argument can be passed to indicate the starting value. In this case
#    the starting value is returned for an empty sequence, and the function is 
#    first applied to the starting value and the first sequence item, then to 
#    the result and the next item, and so on.

def add1(x, y): return x + y
print reduce(add, range(1, 11))

def sum(seq):
    def add(x, y): return x + y
    return reduce(add, seq, 0)
    
print sum(range(1, 11))
