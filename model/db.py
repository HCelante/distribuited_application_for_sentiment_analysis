import sqlite3
from datetime import datetime, timedelta

class DB:
    def __init__(self):
        self.con = sqlite3.connect('db.sqlite3')
        self.cur = self.con.cursor()
        self.total_session = 0
        self.total_sucess = 0
        self.total_error = 0


        #self.create_tweet()

    def create_tweet(self):
        try:
            self.cur.execute('''CREATE TABLE IF NOT EXISTS Tweet (
                ID INTEGER PRIMARY KEY AUTOINCREMENT,
                moment    INTEGER NOT NULL,
                content  TEXT NOT NULL,
                sentiment INTEGER
                )''')
        except Exception as e:
            print(f'[x] Falha ao criar tabela [x]: {e}')
        else:
            print('[!] Tabela Tweet criada com sucesso [!]\n')

    def insert_tweet(self, tweet):
        self.total_session += 1
        #now = datetime.now.microsecond() ()
        #now = now.strftime("%Y/%m/%d %H:%M:%S")
        epoch = int(datetime.now().strftime("%s")) * 1000 
        tweet[0] =  tweet[0].translate({ord(c): " " for c in "!@#$%^&*()[]{};:,./<>?\|`~-=_+"})
        print(tweet[1])
        try:
            self.cur.execute(
                '''INSERT INTO Tweet (moment,content,sentiment) VALUES('''+str(epoch)+''', "'''+ str(tweet[0]) +'''",'''+str(tweet[1]) + ''')''')
        except Exception as e:
            self.total_error += 1
            self.con.rollback()
            return self.total_session, self.total_error, self.total_sucess
        else:
            self.total_sucess += 1
            self.con.commit()
            return self.total_session, self.total_error, self.total_sucess

    def get_tweet_last_hour(self, limit):
        now = datetime.now() - timedelta(hours=1, minutes=0)
        now = now.strftime("%Y/%m/%d %H:%M:%S")
        print(now)

        v_sql = '''SELECT * FROM Matricula WHERE moment >''' + now + ''' '''
        return self.cur.execute(v_sql + ''' LIMIT ?''', (limit,)).fetchall()

    def consult(self, limit, table):
        return self.cur.execute('''SELECT * FROM ''' + table + ''' LIMIT ?''', (limit,)).fetchall()

