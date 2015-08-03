# Tuples and Sequences
#    consists of a number of values separated by commas
#    may be nested
#    are immutable
#    can contain mutable objects
#    always enclosed in parentheses
#    usually contain an heterogeneous sequence of elements that are accessed via
#        unpacking or indexing
#    empty tuples are constructed by an empty pair of parentheses
#    a tuple with one item is constructed by following a value with a comma
#    tuple packing and sequence unpacking

t = 12345, 54321, 'hello!'
u = t, (1, 2, 3, 4, 5)

empty = ()
singleton = 'hello',
print len(empty)
print len(singleton)

x, y, z = t
