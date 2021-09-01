# Análise de sentimenos em tweets sobre o personagem Luffy de One Piece
Trabalho da disciplina de Sistemas Distribuidos. Consiste em coletar tweets via api Tweepy e realizar a classificação com com sklearn;

Tecnologias utilizadas: 

Flask: https://flask.palletsprojects.com/en/2.0.x/<br/>
Tweepy: https://www.tweepy.org/<br/>
Next: https://nextjs.org/<br/>
React: https://pt-br.reactjs.org/<br/>
skLearn: https://scikit-learn.org/stable/<br/>


Linguagens de programação: Python e javascript


<img src="https://github.com/HCelante/distribuited_application/blob/main/Twitter.png?raw=true"/><img src="https://github.com/HCelante/distribuited_application/blob/main/nextjs.jpg?raw=true"/><img src="https://github.com/HCelante/distribuited_application/blob/main/react.png?raw=true"/> <img src="https://github.com/HCelante/distribuited_application/blob/main/tweepy.png?raw=true"/> <img src="https://github.com/HCelante/distribuited_application/blob/main/sklearn.png?raw=true"/> <img src="https://github.com/HCelante/distribuited_application/blob/main/Luffy.jpg?raw=true"/> 

<img src="https://github.com/HCelante/distribuited_application/blob/main/arquitetura.jpeg?raw=true"/> 

**#Protocolo de comunicação e fluxo de trabalho**
O coletor ira realizar uma requisição utilizando a api Tweepy ao twitter enviando palavras chaves, filtros e quantidade de tweets a ser coletado. O twitter responde esta requisição com um objeto contendo data, usuario, entidade e texto. Após o coletor receber uma lista de objetos é realizado um processamento utilizando expressões regulares para remover links e mensções no formato: "@usuario". Após o processamento o classificador é utilizado para analisar o sentimento do tweet com sklearn. Existem três sentimentos possiveis: Neutro, Negativo e Positivo. Após devidamente classificado é inserido um registro no banco de dados via invocação remota. O registro possui: a classificação, o texto do tweet e a data do mesmo. Após essa coleta, classificação e inserção, a api rest irá requisitar uma contagem de cada sentimento, total de positivos, total de negativos e  total de neutros. Essa informação é enviada ao front end onde será renderizado um grafico do tipo PieChart para a visualização dos resultados. Outra possivel interação no front-end é a passagem de uma quantidade de tweets diretamente para o coletor via invocação remota, assim reiniciando o processo.


Documentação de métodos e classes:

**Class: Colector.py**

#**Métodos:**

#**create_auth_tweepy:**
Cria as credenciais de uso do twitter para utilização do Tweepy.
Params: null
Return: autenticação tweepy

**#start_tweepy:**
Inicializa a coleta de tweets. Define as palavras chaves a serem buscadas e a data inicial.
Após definir as palavras chaves inicia-se a coleta. Adiciona cada tweet coletado a uma lista e posteriormente inserir esse pacote no banco de dados utilizando um objeto rmi.
Params: rmi_obj, ciclo, quantidade
Return: Insersão de tweets no banco de dados.


**#Class: Classify**

#**Métodos:**
**get_df:**
Cria o dataset que será utilizado para treinar o modelo.
params: null
return: dataset

**get_vect:**
Cria o modelo de vetor que será utilizado no sklearn.
params: null
return: vector criado

**create_clf:**
Define como o modelo será treinado. Define Regressão Logistica como algmoritmo a ser utilizado. Utilizando o solucionador newton-cg. Cria os score de análise.
Testa a precisão do modelo.
params: null
return: clf

**testing_average:**
Testa a predição do modelo.
params: eixo X do vetor teste.
return: predição do modelo.

**Arquivo: Tweets.csv**
Dataset de treino para o modelo relacioanr os sentimentos.


Interface: server_collector.py
Inicia o servidor para coleta de tweets. A biblioteca Pyro4 é utilizada para execução do servidor.


##**Classes e métodos do pacote Server_db:**

**#Class: DB**
**Métodos:**

**Create_tweet:**
Cria a tabela de tweets caso não existe.
params: null
return: null

**insert_tweet:**
Insere o tweet no bando de dados
params: tweets
return: total de registros inseridos, inseridos com sucesso e quantidade de falhas.

**get_tweet_last_hour:**
Retorna os tweets da última hora.
params: Limite
return: consulta dos tweets.

**#Class Interface(server.py)**
Interface de inicialização do servidor RMI

**#Métodos:**

**get_score:**
Retorna a classificação dos tweets da ultima hora.
Params: null
return: score dos tweets da ultima hora.

**list_rows:**
Realiza uma consulta de 2000 tweets na tabela, salva a quantidade de retorno. Filtra a data atua
params: null
Return: retorna os 2000 registros;

**send_tweet:**
Itera uma lista de tweets contabilizando o total de registros inseridos com sucesso, registros totais e registros com erro na inserção.
Params: tweet_list
Return: null

**start_server:**
Inicia o servidor utilizando Pyro4
params: null
return: null


**Classes e métodos do pacote api**
Arquivo de rotas e endpoints da api rest.

**Rota: '/'**
retorna o list dos registros como json.

**Rota: '/collect/<num_tweets>**
Recebe via url o parametro de quantidade de tweets a ser coletado.
Após receber o parametros realiza uma requisição via RMI ao coletor.


**#Classes e métodos do pacote Fron-End**

**index.js caminho: front/pages/componentes/graph**

Recebe os dados da classificação dos tweets via requisição HTTP e renderiza o gráfico de pizza para visualização dos resultados da classificação dos dados.

