## O cliente chamara os RMI do servidor para interagir com o banco
## O cliente eh responsavel por interagir com a API e as devidas requisicoes  
## O cliente faz as requisicoes, trata os dados e insere no banco
## O cliente fornecera rotas para o front colher informacoes

from datetime import datetime
from model.collector import Colector
from model.classificator import Classify
import Pyro4

server = Pyro4.Proxy(f"PYRONAME:mess.server")

def command_line():
  input('Tecle Enter para começar a buscar')
  colector.start(server.send_tweet,25)

if __name__ == '__main__':
  colector = Colector()
  classifier = Classify()
  
  
  try:
    command_line()
  except (KeyboardInterrupt, EOFError):
    print('\nGoodbye!')
exit
