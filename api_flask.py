#!/usr/bin/python
# coding: utf-8
from flask import Flask
import Pyro4

app = Flask(__name__)
server = Pyro4.Proxy(f"PYRONAME:mess.server")

@app.route('/')
def index():
    last = server.list_rows()
    return '<div>'+ str(last) + '</div>'

@app.route('/hello')
def hello():
    return 'Hello, World'

if __name__ == '__main__':
    app.run(debug=True)


