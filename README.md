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
<br/>
**Class: Colector.py**
<br/>
#**Métodos:**
<br/>
#**create_auth_tweepy:**<br/>
Cria as credenciais de uso do twitter para utilização do Tweepy.<br/>
Params: null<br/>
Return: autenticação tweepy<br/>
<br/>
**#start_tweepy:**<br/>
Inicializa a coleta de tweets. Define as palavras chaves a serem buscadas e a data inicial.
Após definir as palavras chaves inicia-se a coleta. Adiciona cada tweet coletado a uma lista e posteriormente inserir esse pacote no banco de dados utilizando um objeto rmi.<br/>
Params: rmi_obj, ciclo, quantidade<br/>
Return: Insersão de tweets no banco de dados.<br/>

<br/>
#Class: Classify
<br/><br/>
Métodos: <br/><br/>
get_df: <br/>
Cria o dataset que será utilizado para treinar o modelo.<br/>
params: null<br/>
return: dataset<br/>
<br/>
get_vect: <br/>
Cria o modelo de vetor que será utilizado no sklearn.<br/>
params: null<br/>
return: vector criado<br/>
<br/>
create_clf:<br/>
Define como o modelo será treinado. Define Regressão Logistica como algmoritmo a ser utilizado. Utilizando o solucionador newton-cg. Cria os score de análise.
Testa a precisão do modelo.<br/>
params: null<br/>
return: clf<br/>
<br/>
testing_average:<br/>
Testa a predição do modelo.<br/>
params: eixo X do vetor teste.<br/>
return: predição do modelo.<br/>
<br/>
Arquivo: Tweets.csv<br/>
Dataset de treino para o modelo relacioanr os sentimentos.
<br/>

Interface: server_collector.py<br/>
Inicia o servidor para coleta de tweets. A biblioteca Pyro4 é utilizada para execução do servidor.<br/>

<br/>
##Classes e métodos do pacote Server_db:<br/>

#Class: DB<br/>
**Métodos**:<br/>

**Create_tweet:**<br/>
Cria a tabela de tweets caso não existe.<br/>
params: null<br/>
return: null<br/>
<br/>
**insert_tweet:**<br/>
Insere o tweet no bando de dados<br/>
params: tweets<br/>
return: total de registros inseridos, inseridos com sucesso e quantidade de falhas.<br/>
<br/>
**get_tweet_last_hour:**<br/>
Retorna os tweets da última hora.<br/>
params: Limite<br/>
return: consulta dos tweets.<br/>
<br/>
**#Class Interface(server.py)**<br/>
Interface de inicialização do servidor RMI<br/>

**#Métodos:**<br/>

**get_score:**<br/>
Retorna a classificação dos tweets da ultima hora.<br/>
Params: null<br/>
return: score dos tweets da ultima hora.<br/>
<br/>
**list_rows:**<br/>
Realiza uma consulta de 2000 tweets na tabela, salva a quantidade de retorno. Filtra a data atual<br/>
params: null <br/>
Return: retorna os 2000 registros; <br/>
<br/>
**send_tweet:**<br/>
Itera uma lista de tweets contabilizando o total de registros inseridos com sucesso, registros totais e registros com erro na inserção.<br/>
Params: tweet_list<br/>
Return: null<br/>
<br/>
**start_server:**<br/>
Inicia o servidor utilizando Pyro4<br/>
params: null<br/>
return: null<br/>


**Classes e métodos do pacote api**<br/>
Arquivo de rotas e endpoints da api rest.<br/>
<br/>
**Rota: '/'**<br/>
retorna o list dos registros como json.<br/>
<br/>
**Rota: '/collect/<num_tweets>**<br/>
Recebe via url o parametro de quantidade de tweets a ser coletado.<br/>
Após receber o parametros realiza uma requisição via RMI ao coletor.<br/>

<br/>
#Classes e métodos do pacote Front-End<br/>

**index.js caminho: front/pages/componentes/graph**<br/>

Recebe os dados da classificação dos tweets via requisição HTTP e renderiza o gráfico de pizza para visualização dos resultados da classificação dos dados.

