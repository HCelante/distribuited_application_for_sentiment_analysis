import pandas as pd
from sklearn.feature_extraction.text import CountVectorizer
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LogisticRegression

from sklearn.metrics import f1_score



class Classify:
    def __init__(self):
        self.df = self.get_df() 
        self.vect = self.get_vect()
        self.clf = self.create_clf()
        self.y_test = []
        self.x_test = []
        self.predict_acurracy = 0
    #Saída: Retorna o dataset de treino
    def get_df(self):
        print('Carregando o Dataset.') 
        df  = pd.read_csv('./dataset/Tweets.csv')                                                        #Define o dataset de treino com origem em um CSV.
        df.airline_sentiment = df['airline_sentiment'].map({'positive': 1, 'negative': 0,'neutral':2})   #Define os sentimentos Positivo, neutro e negativo
        return df   
    #Saída: cria o modelo do vetor utilizado pelo sklearn criado
    def get_vect(self):
        vect = CountVectorizer(ngram_range=(1, 1))                      #Cria o modelo do vetor
        vect.fit(self.df.text)                                          #Cria a instância fit do vetor
        return vect 
        
    #Saída: Instância do vetor 
    def create_clf(self):
        text_vect = self.vect.transform(self.df.text)                   #Inicializa o vetor com o modelo criado
        X_train,X_test,y_train,y_test = train_test_split(               #Define as opções do vetor
            text_vect, 
            self.df.airline_sentiment,
            test_size = 0.3, 
            random_state = 42
        )
        clf = LogisticRegression(random_state=0, solver='newton-cg')    #Define a regressão logística e o solver newton-cg
        clf = clf.fit(X_train, y_train)                                 #Cria o fit com eixo x, y do dataset de treino
        y_prediction = clf.predict(X_test)                              #Inicia a predição com a predição do eixo X
        f1 = f1_score(y_prediction, y_test, average='weighted')         #Cria o score de cada analise
        self.predict_acurracy = f1                                      #Precisão das classificações
        print('\nPrecisao do modelo: ',f1)
        return clf 
        
        
    #Entrada: eixo X do dataset de teste
    def testing_average(self,X_test): 
        y_prediction = self.clf.predict(self.vect.transform(X_test))    #cria a predição de teste
        #print(y_prediction[0])      
        return int(y_prediction[0])                                     #Retorna a predição