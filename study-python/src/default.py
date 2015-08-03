# The defaut values are evaluated:
#    at the point of function definition in the defining scope
#    and only once

i = 5

def f(arg = i):
    print arg
    
i = 6
f()

# The default is shared between subsequent calls

def f1(a, L=[]):
    L.append(a)
    return L
    
print f1(1)
print f1(2)
print f1(3)

# If you don't want the default to be shared between subsequent calls,
# you can write the function like this instead

def f2(a, L=None):
    if L is None:
        L = []
    L.append(a)
    return L

print f2(1)
print f2(2)
print f2(3)
