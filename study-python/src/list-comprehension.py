# List comprehensions
#    provide a concise way to create lists
#
#    make new lists where each element is the result of some operations applied
#    to each member of antother sequence or iterable
#
#    create a subsequence of those elements that satisfy a certain condition
#
#    consists of brackets containing an expression followed by a for clause, then
#    zero or more for or if clauses. The result will be a new list resulting from
#    evaluating the expression in the context of the for and if clauses which
#    follow it

squares = [x**2 for x in range(10)]
print squares

print [(x, y) for x in [1, 2, 3] for y in [3, 1, 4] if x != y]

# flatten a list using a listcomp with two 'for'
vec = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
print [num for elem in vec for num in elem]

# Nested list comprehensions
#    the initial expression can be another list comprehension

matrix = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
]
print [[row[i] for row in matrix] for i in range(4)]
print zip(*matrix)
