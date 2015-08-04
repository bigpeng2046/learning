# Two distinguishable kinds of errors
#    syntax errors: parsing errors
#    exceptions: errors detected during execution
#

# complete syntax
def divide(x, y):
    try:
        result = x / y
    except ZeroDivisionError:
        print "division by zero!"
    else:
        print "result is ", result
    finally:
        print "executing finally clause"

divide(2, 1)
divide(2, 0)

# user-defined exception
class MyError(Exception):
    def __init__(self, value):
        self.value = value
    def __str__(self):
        return repr(self.value)

try:
    raise MyError(2*2)
except MyError as e:
    print 'My exception occurs, value: ', e.value

# predefined clean-up action
with open("myfile.txt") as f:
    for line in f:
        print line,
