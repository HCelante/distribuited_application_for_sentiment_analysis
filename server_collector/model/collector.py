# encoding=utf8
from TwitterSearch import *
import time
from model.classificator import Classify
import re
import tweepy
import os
#from googletrans import Translator

class Colector:
    def __init__(self):
        self.auth = self.create_auth_tweepy()                              #Cria as credenciais para a lib de coleta
        self.classify = Classify()                                         #Cria uma instância do classificador.
        self.api_tweepy= tweepy.API(self.auth)                             #Inicializa a api do coletor
        try:
            self.ts_obj = TwitterSearch(
                consumer_key='IMJh4kjQLGDzUaT9t1v0RXm5Y',
                consumer_secret='cjt9d684CpvElXof1BxUMgSakNnFBVLDweQTSpGZolzzrnU8JE',
                access_token='968521944944529408-oI5NcJVaZellwrsPjhsQkQPDeAZJzKf',
                access_token_secret='hc7bTI65fG97smD3ZEB6iCjLrBzHBxn2Sp6TIaX8fZSJZ'
            )
        except TwitterSearchException as e:
            print(e)

        self.search_order = self.init_search()                              #Inicializa a buscar
    #Saída: api do twitterSearch instanciada
    def init_search(self):
        tso = TwitterSearchOrder()                                          #Cria variavel utilizando a api.
                                                                            #Define a palavra chave para realizar a busca de tweets.
        tso.set_keywords(['luffy'], or_operator = True)
        tso.set_language('en')                                              #Define idioma dos tweets.
        return tso
    #Saída autenticações para o tweepy
    def create_auth_tweepy(self):
        auth = tweepy.OAuthHandler("lwuvuhctoEIqrrt7ZlNP5IbAM", "9Kpthxs6HoWp32Me8j3jL3HA1LEMcHh4FPxcY17tCUqAw3IXBp") #Cria a autenticação utilizando as credenciais
        auth.set_access_token("3105648036-QD8OaF37KAqCoGgDrIgOoXHNai7fh8tSe7wot6a", "X9ntr9biRoxS3mXCXLBbgMYptwo2Y7HMHg98PCNKSDq7m")#Cria o token de acesso utilizando as credenciais
        return auth
    #Params: contexto, objeto rmi de invocação, ciclo
    #Saída: Null
    def start_tweepy(self, rmi_obj, cicle, qtd):
        packet = []                                                         #Cria uma lista 
        #api.update_status(status='Test')
        search_words = "Luffy -filter:retweets"                             #Define a palavra chave a ser buscada e adiciona o filtro de remoção de retweets
        date_since = "2021-01-01"                                           #Define a data minima dos tweets.
        i = 0 
                                                                            #Inicia a coleta e salva a referência em uma variével.
        colecteds = tweepy.Cursor(self.api_tweepy.search, q=search_words, lang="en", since=date_since).items(qtd) 
        partbar = qtd/cicle 
        bar = '['+ ('|' * int(partbar)) + ']'
        barcount = 0                                                        #Desenha barra de progresso
        
        for tweet in colecteds:                                             #Itera a lista de tweets coletados
            
            #print(tweet)
            if(i == cicle):                                                 #Caso i for igual ciclo 
                barcount += 1                                               #Inicia a barra de progresso
                msg = re.sub(r"http\S+", "", tweet.text)                    #Utiliza expressão regular para remover links dos tweets
                msg = re.sub(r"@\S+", "", msg)                              #Utiliza expressão regular para remover menções no formato: @usuario 
                sentiment = self.classify.testing_average([msg])            #Classifica o sentimento do tweet utilizando o classificador sklearn
                
                packet.append([msg,sentiment,tweet.created_at])             #Adiciona o tweet, o sentimento e a data do tweet
                os.system('cls' if os.name == 'nt' else 'clear')            #Limpa o terminal
                print(bar[:barcount] + '/' + bar[barcount+1:])              #Imprime a barra de progresso
                print('\nPacket Size: ',cicle)
                print('\nTotal Packets: ',partbar) 
                rmi_obj(packet)                                             #Cria o objeto RMI
                packet = []                                                 #Limpa a lista Pacote
                i = 0
                #time.sleep(5)
            
                
            else:
                os.system('cls' if os.name == 'nt' else 'clear')
                print(bar[:barcount] + '-' + bar[barcount+1:]) 
                print('\nsending',cicle)
                msg = re.sub(r"http\S+", "", tweet.text)                    #Utiliza expressão regular para remover links dos tweets
                msg = re.sub(r"@\S+", "", msg)                              #Utiliza expressão regular para remover menções no formato: @usuario 
                sentiment = self.classify.testing_average([msg])            #Classifica o sentimento do tweet utilizando o classificador sklearn
                packet.append([msg,sentiment,tweet.created_at])             #Adiciona o tweet, o sentimento e a data do tweet
                i+= 1
        if(i > 0):
            barcount += 1
            os.system('cls' if os.name == 'nt' else 'clear')
            print(bar[:barcount] + '/' + bar[barcount+1:])              #Imprime a barra de progresso
            print('\nPacket Size: ',cicle)
            print('\nTotal Packets: ',partbar) 
            rmi_obj(packet)
            packet = []                                                
            i = 0
            
               
    #Params: contexto, objeto rmi de invocação, ciclo
    #Saída: Null
    def start(self, rmi_obj, cicle):
        packet = []                                                         #Cria a llista de envio
                                                                            # Itera a lista de tweets
        i = 0
        for tweet in self.ts_obj.search_tweets_iterable(self.search_order): #Itera a lista de tweets coletados utilizando twitterSearch
            if(i == cicle):
                msg = re.sub(r"http\S+", "", tweet.text)                    #Utiliza expressão regular para remover links dos tweets
                msg = re.sub(r"@\S+", "", msg)                              #Utiliza expressão regular para remover menções no formato: @usuario 
                sentiment = self.classify.testing_average([msg])            #Classifica o sentimento do tweet utilizando o classificador sklearn
                packet.append([msg,sentiment])                              #Adiciona o tweet e o sentimento 
                
                print('sending')
                rmi_obj(packet)                                             #Envia o pacote no objeto RMI.
                packet = []
                i = 0
                time.sleep(5)
            else:
                msg = re.sub(r"http\S+", "", tweet.text)                    #Utiliza expressão regular para remover links dos tweets
                msg = re.sub(r"@\S+", "", msg)                              #Utiliza expressão regular para remover menções no formato: @usuario 
                #msg = msg.strip()
                sentiment = self.classify.testing_average([msg])            #Classifica o sentimento do tweet utilizando o classificador sklearn
                packet.append([msg,sentiment])                              #Adiciona o tweet e o sentimento 
                i+= 1
