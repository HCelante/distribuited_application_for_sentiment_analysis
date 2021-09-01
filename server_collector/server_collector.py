
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

def start_server():
    daemon = Pyro4.Daemon()
    ns = Pyro4.locateNS()
    uri = daemon.register(Interface)
    ns.register('mess.collector', str(uri))
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
