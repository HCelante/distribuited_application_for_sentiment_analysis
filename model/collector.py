# encoding=utf8
from TwitterSearch import *
import time
from model.classificator import Classify
import re
import tweepy
#from googletrans import Translator

class Colector:
    def __init__(self):
        self.auth = self.create_auth_tweepy()
        self.classify = Classify()
        self.api_tweepy= tweepy.API(self.auth)
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
        tso.set_keywords(['luffy'], or_operator = True)
        tso.set_language('en')  # Define idioma dos tweets.
        return tso
    
    def create_auth_tweepy(self):
        auth = tweepy.OAuthHandler("lwuvuhctoEIqrrt7ZlNP5IbAM", "9Kpthxs6HoWp32Me8j3jL3HA1LEMcHh4FPxcY17tCUqAw3IXBp")
        auth.set_access_token("3105648036-QD8OaF37KAqCoGgDrIgOoXHNai7fh8tSe7wot6a", "X9ntr9biRoxS3mXCXLBbgMYptwo2Y7HMHg98PCNKSDq7m")
        return auth
        
    def start_tweepy(self, rmi_obj, cicle):
        packet = []
        #api.update_status(status='Test')
        search_words = "Luffy -filter:retweets"
        date_since = "2021-01-01"
        i = 0
        colecteds = tweepy.Cursor(self.api_tweepy.search, q=search_words, lang="en", since=date_since).items(10000)
        for tweet in colecteds:
            
            #print(tweet.text)
            if(i == cicle):
                msg = re.sub(r"http\S+", "", tweet.text)
                msg = re.sub(r"@\S+", "", msg)
                sentiment = self.classify.testing_average([msg])
                packet.append([msg,sentiment])
                
                print('sending',cicle)
                rmi_obj(packet)
                packet = []
                i = 0
                #time.sleep(5)
            else:
                msg = re.sub(r"http\S+", "", tweet.text)  # Armazena o tweet em uma variavem
                msg = re.sub(r"@\S+", "", msg)
                #msg = msg.strip()
                sentiment = self.classify.testing_average([msg])
                packet.append([msg,sentiment])
                i+= 1
            
       
    def start(self, rmi_obj, cicle):
        packet = []
        # Itera a lista de tweets
        i = 0
        for tweet in self.ts_obj.search_tweets_iterable(self.search_order):
            if(i == cicle):
                msg = re.sub(r"http\S+", "", tweet.text)
                msg = re.sub(r"@\S+", "", msg)
                sentiment = self.classify.testing_average([msg])
                packet.append([msg,sentiment])
                
                print('sending')
                rmi_obj(packet)
                packet = []
                i = 0
                time.sleep(5)
            else:
                msg = re.sub(r"http\S+", "", tweet.text)  # Armazena o tweet em uma variavem
                msg = re.sub(r"@\S+", "", msg)
                #msg = msg.strip()
                sentiment = self.classify.testing_average([msg])
                packet.append([msg,sentiment])
                i+= 1
