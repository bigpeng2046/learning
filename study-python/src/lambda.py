# lambda
#    small anonymous functions can be created with the lambda keyword
#    used wherever function objects are required
#    syntactically restricted to a single expression
#    semantically, they are just syntactic sugar for a normal function definition
#    can reference variables from the containing scope

def make_incrementor(n):
    return lambda x: x+n
    
f = make_incrementor(42)
print f(0)
print f(1)


# pass a small function as an argument

pairs = [(1, 'one'), (2, 'two'), (3, 'three'), (4, 'four')]
pairs.sort(key=lambda pair: pair[1])
print pairs

