# encoding=utf8
from TwitterSearch import *
import io
import tweepy
import re

try:

    auth = tweepy.OAuthHandler("lwuvuhctoEIqrrt7ZlNP5IbAM", "9Kpthxs6HoWp32Me8j3jL3HA1LEMcHh4FPxcY17tCUqAw3IXBp")
    auth.set_access_token("3105648036-QD8OaF37KAqCoGgDrIgOoXHNai7fh8tSe7wot6a", "X9ntr9biRoxS3mXCXLBbgMYptwo2Y7HMHg98PCNKSDq7m")


    api = tweepy.API(auth)
    arquivo = io.open('tweets.txt', 'w', encoding="utf-8") #Abre o arquivo para escrita
    
    search_words = "Luffy"
    new_search = search_words + " -filter:retweets"
    date_since = "2021-01-01"
    public_tweets = tweepy.Cursor(api.search, q=new_search, lang="en", since=date_since).items(10000)
    
    for tweet in public_tweets:
        msg = re.sub(r"http\S+", "", tweet.text)
        final = re.sub(r"@\S+", "", msg)
        arquivo.write(final) #Escreve a variavel no arquivo.
        print(final)
    
    arquivo.close() #Fecha o arquivo

except TwitterSearchException as e:
    print(e)