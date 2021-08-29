## O servidor fornecera metodos remotos que permitem interagir com o banco

from datetime import datetime
import Pyro4
from model.db import DB
import os

@Pyro4.expose
class Interface(object):
    def __init__(self):
        self.total = 0
        self.error = 0
        self.sucess = 0
        
        
    def list_rows(self):
        banco = DB()
        retorno = banco.consult(limit='20',table='Tweet')
        text = len(retorno)
        now = datetime.now()
        print(f''+str(text)+' - received at {now:%H:%M:%S} \n')
        return retorno

    def send_tweet(self, tweet_list):
        banco = DB()
        total = 0
        error = 0
        sucess = 0
        for tweet in tweet_list:
            total, error, sucess = banco.insert_tweet(tweet)
        self.total  += total
        self.error  += error
        self.sucess += sucess
        os.system('cls' if os.name == 'nt' else 'clear')
        print('[>] Total de registros recebidos pelo banco: '+str(self.total))
        print('\n[!] Total de registros inseridos com sucesso: '+ str(self.sucess))
        print('\n[x] Total de falhas ao inserir registro: '+ str(self.error) +'\n')


def start_server():
    daemon = Pyro4.Daemon()
    ns = Pyro4.locateNS()
    uri = daemon.register(Interface)
    ns.register('mess.server', str(uri))
    print(f'Ready to listen')
    daemon.requestLoop()


if __name__ == '__main__':
    banco = DB()
    banco.create_tweet()
    try:
        start_server()
    except (KeyboardInterrupt, EOFError):
        print('Goodbye! (:')
exit
