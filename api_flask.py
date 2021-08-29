#!/usr/bin/python
# coding: utf-8
from flask import Flask
import Pyro4

app = Flask(__name__)
server = Pyro4.Proxy(f"PYRONAME:mess.server")

@app.route('/')
def index():
    last = server.list_rows()
    return str(last)

@app.route('/hello')
def hello():
    return 'Hello, World'

if __name__ == '__main__':
    app.run(debug=True)
    import matplotlib
    matplotlib.use('WebAgg')
    import matplotlib.pyplot as plt,mpld3

    fig1 = plt.figure()
    plt.xlabel('RelativeTime (ms)')
    plt.ylabel('AbsoluteTime (ms)')
    plt.title('R-A Combinations')
    plt.plot(tr_data[:,0],tr_data[:,1],'bx')    
    plt.plot(tr_data[outliers,0],tr_data[outliers,1],'ro')    
    print ('<HTML><HEAD><TITLE>Python Matplotlib Graph</TITLE></HEAD>')
    print ('<BODY>')
    print ('<CENTER>')
    print ('<br><br>')
    print ('<H3>Graph</H3>')
    print (mpld3.fig_to_html(fig1, d3_url=None, mpld3_url=None, no_extras=False, template_type='general', figid=None, use_http=False))
    print ('<br>')

    print ('</CENTER>')
    print ('</BODY>')
    print ('</html>')

