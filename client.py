## O cliente chamara os RMI do servidor para interagir com o banco
## O cliente eh responsavel por interagir com a API e as devidas requisicoes  
## O cliente faz as requisicoes, trata os dados e insere no banco
## O cliente fornecera rotas para o front colher informacoes

from datetime import datetime

import Pyro4

server = Pyro4.Proxy(f"PYRONAME:mess.server")




def command_line():
  print(server.list_rows(100))

if __name__ == '__main__':
    try:
        command_line()
    except (KeyboardInterrupt, EOFError):
        print('\nGoodbye!')
exit
