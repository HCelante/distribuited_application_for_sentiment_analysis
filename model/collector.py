# encoding=utf8
from TwitterSearch import *
import time

class Colector:
    def __init__(self):
        try:
            self.ts_obj = TwitterSearch(
                consumer_key='IMJh4kjQLGDzUaT9t1v0RXm5Y',
                consumer_secret='cjt9d684CpvElXof1BxUMgSakNnFBVLDweQTSpGZolzzrnU8JE',
                access_token='968521944944529408-oI5NcJVaZellwrsPjhsQkQPDeAZJzKf',
                access_token_secret='hc7bTI65fG97smD3ZEB6iCjLrBzHBxn2Sp6TIaX8fZSJZ'
            )
        except TwitterSearchException as e:
            print(e)

        self.search_order = self.init_search()

    def init_search(self):
        tso = TwitterSearchOrder()  # Cria variavel utilizando a api.
        # Define a palavra chave para realizar a busca de tweets.
        tso.set_keywords(['Brasil'])
        tso.set_language('pt')  # Define idioma dos tweets.
        return tso

    def start(self, rmi_obj, cicle):
        packet = []
        # Itera a lista de tweets
        i = 0
        for tweet in self.ts_obj.search_tweets_iterable(self.search_order):
            if(i == cicle):
                msg = tweet['text']
                #msg = msg.strip()
                packet.append(msg)
                print('sending')
                rmi_obj(packet)
                packet = []
                i = 0
                time.sleep(5)

            else:
                msg = tweet['text']  # Armazena o tweet em uma variavem
                #msg = msg.strip()
                packet.append(msg)
                i+= 1
