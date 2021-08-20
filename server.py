## O servidor fornecera metodos remotos que permitem interagir com o banco

from datetime import datetime
import sqlite3
from sqlite3 import Error
import Pyro4
from db import DB


@Pyro4.expose
class Interface(object):

    def list_rows(self):
        banco = DB()
        retorno = banco.get_tweet_last_hour(limit='100')
   
        now = datetime.now()
        print(f'{text} - received at {now:%H:%M:%S} \n')
        return retorno



def start_server():
    daemon = Pyro4.Daemon()
    ns = Pyro4.locateNS()
    uri = daemon.register(Interface)
    ns.register('mess.server', str(uri))
    print(f'Ready to listen')
    daemon.requestLoop()


if __name__ == '__main__':
    banco = DB()

    try:
        start_server()
    except (KeyboardInterrupt, EOFError):
        print('Goodbye! (:')
exit
