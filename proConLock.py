#!/usr/bin/env python
###### https://www.agiliq.com/blog/2013/10/producer-consumer-problem-in-python/
from threading import Thread, Lock
import time
import random
from Queue import Queue
from threading import Condition


#########################
### Locking

# queue = []
# lock = Lock()

# class ProducerThread(Thread):
#     def run(self):
#         nums = range(5) #Will create the list [0, 1, 2, 3, 4]
#         global queue
#         while True:
#             num = random.choice(nums) #Selects a random number from list [0, 1, 2, 3, 4]
#             lock.acquire()
#             queue.append(num)
#             print "Produced", num
#             lock.release()
#             time.sleep(random.random())


# class ConsumerThread(Thread):
#     def run(self):
#         global queue
#         while True:
#             lock.acquire()
#             if not queue:
#                 print "Nothing in queue, but consumer will try to consume"
#             num = queue.pop(0)
#             print "Consumed", num
#             lock.release()
#             time.sleep(random.random())


# ProducerThread().start()
# ConsumerThread().start()


#########################
### Conditions

queue = []
condition = Condition()

class ConsumerThread(Thread):
    def run(self):
        global queue
        while True:
            condition.acquire()
            if not queue:
                print "Nothing in queue, consumer is waiting"
                condition.wait()
                print "Producer added something to queue and notified the consumer"
            num = queue.pop(0)
            print "Consumed", num
            condition.release()
            time.sleep(random.random())

class ProducerThread(Thread):
    def run(self):
        nums = range(5)
        global queue
        while True:
            condition.acquire()
            num = random.choice(nums)
            queue.append(num)
            print "Produced", num
            condition.notify()
            condition.release()
            time.sleep(random.random())

ProducerThread().start()
ConsumerThread().start()
