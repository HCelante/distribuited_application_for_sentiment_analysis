#!/bin/bash
#python3 -m Pyro4.naming &
nohup [./server_db/run.sh] &
nohup [./server_collector/run.sh] &
nohup [./api/run.sh] &
nohup [./front/run.sh] &