import sqlite3
from sqlite3 import Error
from datetime import datetime, timedelta


class DB:
    def __init__(self):
        self.con = sqlite3.connect('db.sqlite3')

        self.cur = self.con.cursor()

        self.create_tweet()

    def create_tweet(self):
        try:
            self.cur.execute('''CREATE TABLE IF NOT EXISTS Tweet (
                ID INTEGER PRIMARY KEY, 
                user TEXT  NOT NULL,
                moment    DATETIME NOT NULL,
                content  TEXT NOT NULL
                )''')
        except Exception as e:
            print(f'[x] Falha ao criar tabela [x]: {e}')
        else:
            print('[!] Tabela Tweet criada com sucesso [!]\n')

    def insert_tweet(self, tweet):
        now = datetime.now()
        now = now.strftime("%Y/%m/%d %H:%M:%S")
        try:
            self.cur.execute(
                '''INSERT INTO Tweet VALUES (?, ?, '''+now+''', ?)''', tweet)
        except Exception as e:
            print('\n[x] Falha ao inserir registro [x]\n')
            print(f'[x] Revertendo operação (rollback) [x]: {e}\n')
            self.con.rollback()
            return '\n[x] Falha ao inserir registro [x]\n[x] Revertendo operação (rollback) [x]: {e}\n'
        else:
            self.con.commit()
            print('\n[!] Registro inserido com sucesso [!]\n')
            return '\n[!] Registro inserido com sucesso [!]\n'

    def get_tweet_last_hour(self, limit):
        now = datetime.now() - timedelta(hours=1, minutes=0)
        now = now.strftime("%Y/%m/%d %H:%M:%S")
        print(now)

        v_sql = '''SELECT * FROM Matricula WHERE moment >''' + now + ''' '''
        return self.cur.execute(v_sql + ''' LIMIT ?''', (limit,)).fetchall()

    def consult(self, limit, table):
        return self.cur.execute('''SELECT * FROM ''' + table + ''' LIMIT ?''', (limit,)).fetchall()

