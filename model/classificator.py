import pandas as pd
from sklearn.feature_extraction.text import CountVectorizer
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LogisticRegression

from sklearn.metrics import f1_score

class Classify:
    def __init__(self):
        self.df = self.create_df()
        self.vector = self.create_vector()
        self.model = self.train_RL()
        self.predict_acurracy = 0

    def create_df(self):
        print('Carregando o Dataset.')
        df = pd.read_csv('https://s3.amazonaws.com/sergio-prates-blog/imdb-reviews-pt-br.csv').sample(1000, random_state=42)
        df.sentiment.value_counts()
        print(df.head())

        df.sentiment = df['sentiment'].map({'pos': 1, 'neg': 0})
        print(df.head())        
        return df
    
    def create_vector(self):
        print('\nCriando o vetor de referencia.')
        vect = CountVectorizer(ngram_range=(1, 1))
        vect.fit(self.df.text_pt)
        text_vect = vect.transform(self.df.text_pt)
        
        return text_vect
    
    def train_RL(self):
        print('\nTreinando o modelo')
        X_train,X_test,y_train,y_test = train_test_split(
            self.vector, 
            self.df.sentiment,
            test_size = 0.3, 
            random_state = 42
        )
        clf = LogisticRegression(random_state=0, solver='newton-cg')
        clf = clf.fit(X_train, y_train)
        self.testing_average(X_test,y_test)
        return clf
    
    def testing_average(self,X_test,y_test):
        y_prediction = self.clf.predict(X_test)
        f1 = f1_score(y_prediction, y_test, average='weighted')
        self.predict_acurracy = f1