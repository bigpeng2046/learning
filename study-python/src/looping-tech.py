# Looping Techniques
#    enumerate(): get the position index and corresponding value when looping 
#        through a sequece
#    zip(): the entries can be paired when looping over two or more sequences
#        at the same time
#    reversed(): loop over a sequence in reverse
#    sorted(): loop over a sequence in sorted order
#    *.iteritems(): the key and corresponding value can be retrieved at the same
#        time

for i, v in enumerate(['tic', 'tac', 'toe']):
    print i, v
    
questions = ['name', 'quest', 'favorite color']
answers = ['lancelot', 'the holy grail', 'blue']
for q, a in zip(questions, answers):
    print 'What is your {0}? It is {1}.'.format(q, a)
    
for i in reversed(xrange(1, 10, 2)):
    print i
    
basket = ['apple', 'orange', 'apple', 'pear', 'orange', 'banana']
for f in sorted(set(basket)):
    print f
    
knights = {'gallahad': 'the pure', 'robin': 'the brave'}
for k, v in knights.iteritems():
    print k, v
    
# loop over a slice copy of the entire list
words = ['cat', 'window', 'defenestrate']
for w in words[:]:
    if len(w) > 6:
        words.insert(0, w)
print words
