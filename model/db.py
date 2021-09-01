import sqlite3
from datetime import datetime, timedelta

class DB:
    def __init__(self):
        self.con = sqlite3.connect('db.sqlite3')                       #Cria a conexão com sqlite
        self.cur = self.con.cursor()                                   #Define o cursos
        self.total_session = 0                                         #Define a sessão
        self.total_sucess = 0                                          #Contagem de registros inseridos com sucesso
        self.total_error = 0                                           #Contagem de registros com erro


        #self.create_tweet()
    #Cria a tabela 
    def create_tweet(self):
        try:
            self.cur.execute('''CREATE TABLE IF NOT EXISTS Tweet (
                ID INTEGER PRIMARY KEY AUTOINCREMENT,
                moment    TEXT NOT NULL,
                content  TEXT NOT NULL,
                sentiment INTEGER
                )''')
        except Exception as e:
            print(f'[x] Falha ao criar tabela [x]: {e}')
        else:
            print('[!] Tabela Tweet criada com sucesso [!]\n')
    #Entrada: registro do tweet
    #Saída: total de registros da sessão, total de registros com erro e total de registro com sucesso
    def insert_tweet(self, tweet):
        self.total_session += 1                                                         #Sessão utilizada para o buffer
        #now = datetime.now.microsecond() ()
        #now = now.strftime("%Y/%m/%d %H:%M:%S")
        epoch = int(datetime.now().strftime("%s")) * 1000                               #Cria a época do tweet
        tweet[0] =  tweet[0].translate({ord(c): " " for c in "!@#$%^&*()[]{};:,./<>?\|`~-=_+"}) #Remove caracteres especiais
        #print(str(tweet[2]))
        try:
            #Executa o comando de inserção
            self.cur.execute( 
                '''INSERT INTO Tweet (moment,content,sentiment) VALUES('''+'''"'''+ str(tweet[2])+'''"'''+''', "'''+ str(tweet[0]) +'''",'''+str(tweet[1]) + ''')''')
        except Exception as e:
            self.total_error += 1                                                      #Caso tenha erro adiciona 1 no total de erros
            self.con.rollback()                                                        #Realiza rollback na transação
            return self.total_session, self.total_error, self.total_sucess             #Retorna o total de registros da sessão
        else:
            self.total_sucess += 1                                                     #Caso tenha sucesso adiciona 1 no total de sucesso
            self.con.commit()                                                          #Commita a transação
            return self.total_session, self.total_error, self.total_sucess
    #Entrada: limite de tweets
    #Saída: tweets na última hora
    def get_tweet_last_hour(self, limit):
        now = datetime.now() - timedelta(hours=1, minutes=0)                           #Cria a hora atual
        epoch = int(now.strftime("%s")) * 1000                                         #Cria a epoca do tweet
        #now = now.strftime("%Y/%m/%d %H:%M:%S")
        print(now)

        v_sql = '''SELECT moment FROM Tweet '''                                        #Cria a consulta
        return self.cur.execute(v_sql + ''' LIMIT ?''', (limit,)).fetchall()           #Executa a consulta com o limite definido.
    #Entrada: limite de dados e tabela
    #Saída: Retorna a consulta de todos os tweets com o limite de data
    def consult(self, limit, table):
        return self.cur.execute('''SELECT sentiment FROM ''' + table + ''' ORDER BY moment LIMIT ?''', (limit,)).fetchall()

