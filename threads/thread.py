import time
import urllib2
def get_responses():
    urls = ['http://www.google.com', 'http://www.amazon.com', 'http://www.ebay.com', 'http://www.alibaba.com', 'http://www.reddit.com']
    start = time.time()
    for url in urls:
        print url
        resp = urllib2.urlopen(url)
        print resp.getcode()
    print "Elapsed time: %s" % (time.time()-start)

get_responses()