#!/usr/bin/python
# coding: utf-8
import matplotlib
matplotlib.use('WebAgg')
import matplotlib.pyplot as plt,mpld3
from flask import *
import Pyro4
from flask import jsonify
from flask import json
from flask_cors import CORS

app = Flask(__name__)
CORS(app)
server = Pyro4.Proxy(f"PYRONAME:mess.server")
collector = Pyro4.Proxy(f"PYRONAME:mess.collector")

@app.route('/')
def index():
    last = server.list_rows()
    response = app.response_class(
        response=json.dumps( last),
        status=200,
        mimetype='application/json'
    )
    return response

@app.route('/collect/<num_tweets>', methods=['GET'])
def collect(num_tweets):
    if request.method == 'GET': # POST request
        print(num_tweets)  # parse as text
        collector.collect(25,num_tweets)
        return num_tweets, 200
    else:
        return 'nao rolou'

    
if __name__ == '__main__':
    app.run(debug=True)

