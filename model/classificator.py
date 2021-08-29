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
      
    def get_df(self):
        print('Carregando o Dataset.')
        df  = pd.read_csv('./dataset/Tweets.csv')
        df.airline_sentiment = df['airline_sentiment'].map({'positive': 1, 'negative': 0,'neutral':2})
        return df
        
    def get_vect(self):
        vect = CountVectorizer(ngram_range=(1, 1))
        vect.fit(self.df.text)
        return vect
        

    def create_clf(self):
        text_vect = self.vect.transform(self.df.text)
        X_train,X_test,y_train,y_test = train_test_split(
            text_vect, 
            self.df.airline_sentiment,
            test_size = 0.3, 
            random_state = 42
        )
        clf = LogisticRegression(random_state=0, solver='newton-cg')
        clf = clf.fit(X_train, y_train)
        y_prediction = clf.predict(X_test)
        f1 = f1_score(y_prediction, y_test, average='weighted')
        self.predict_acurracy = f1
        print('\nPrecisao do modelo: ',f1)
        return clf
        
        
    
    def testing_average(self,X_test):
        y_prediction = self.clf.predict(self.vect.transform(X_test))  
        #print(y_prediction[0])      
        return int(y_prediction[0])