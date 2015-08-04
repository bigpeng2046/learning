# Class
#    class definition
#        must be executed before they have any effect
#        can be placed in a branch of an if statement, or inside a function
#        a new namespace created and used as the local scope when the definition enters
#        a class object created when the definition is left normally
#
#    class objects
#        support two kinds of operation:
#            attribute references: classname.name, obj.name
#            instantiation: function call notation
#
#    class instantiation
#        create a empty object by function call notation
#        call __init__ to customize the instance object(class instance)
#
#    instance object
#        the only operations understood by it are attribute references
#        data attributes: instance variables in Smalltalk, data members in C++
#        methods: a function belongs to the object
#        Data attributes override method attributes with the same name
#
#    inheritance
#        class DerivedClassName(BaseClassName):

class MyClass:
    """A simple example class"""
    i = 12345                   # i is a class attribute

    def __init__(self):         # customized to a specific initial state
        self.data = []          # invoked by class instantiation
                                # data is instance variable

    def f(self):
        return 'hello world'

print MyClass.i
print MyClass.__doc__

x = MyClass()
print x.f()

# data attributes
x.counter = 1
while x.counter < 10:
    x.counter = x.counter * 2
print x.counter
del x.counter

# method objects
xf = x.f
print xf()                      # MyClass.f(x)

print x.__class__
