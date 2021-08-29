## O cliente chamara os RMI do servidor para interagir com o banco
## O cliente eh responsavel por interagir com a API e as devidas requisicoes  
## O cliente faz as requisicoes, trata os dados e insere no banco
## O cliente fornecera rotas para o front colher informacoes

from datetime import datetime
from model.collector import Colector

import Pyro4

server = Pyro4.Proxy(f"PYRONAME:mess.server")

def command_line():
  opt = input('Gostaria de Coletar(1),Listar(2) ou Modo Servidor(3)? (0 para sair)\n')
  while(opt !='0'):
    if(opt == '1'):
      ciclo = input('\nInsira o tamanho do ciclo $> ')
      numt = input('\nInsira o numero de tweets $> ')
      colector = Colector()
      colector.start_tweepy(server.send_tweet,int(ciclo),int(numt))
    elif(opt == '3'):
      try:
        start_server()
      except (KeyboardInterrupt, EOFError):
        print('Goodbye! (:')
    else:      
      print(server.list_rows())    
  #colector.start(server.send_tweet,25)

def start_server():
    daemon = Pyro4.Daemon()
    ns = Pyro4.locateNS()
    uri = daemon.register(Interface)
    ns.register('mess.client', str(uri))
    print(f'Ready to listen')
    daemon.requestLoop()


@Pyro4.expose
class Interface(object):
  def collect(self, ciclo, numt):
    colector = Colector()
    colector.start_tweepy(server.send_tweet,int(ciclo),int(numt))
    print('collector: \n>ciclo: ',ciclo,'\n>quantidade de tweets: ', numt)  
      
if __name__ == '__main__':
  
  try:
    command_line()
  except (KeyboardInterrupt, EOFError):
    print('\nGoodbye!')
exit
