#!/bin/bash

sudo apt install sqlite3
pip3 install pyro4 pandas TwitterSearch sklearn tweepy matplotlib tornado mpld3 flask flask_corss
$(cd front/ ; source prepare.sh)

