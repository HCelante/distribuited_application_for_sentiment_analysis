#!/bin/bash

sudo apt install sqlite3
pip3 install pyro4 pandas TwitterSearch sklearn tweepy matplotlib
clear
python3 -m Pyro4.naming &
python3 server.py &
python3 client.py
