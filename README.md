# GITHUB APP - COMPASSO UOL CHALLENGE

## README IN ENGLISH

React application used to solve Compasso UOL's challenge in order to join it. It aims to search a GitHub user and to display its information, specially the lists of repositories and starred repositories.     

<a href="https://compasso-challenge-leonardo-federmann.surge.sh/">App URL</a>    
<a href="https://docs.github.com/en/rest">GitHub REST API</a>

### FUNCTIONALITIES AND NAVIGATION

Initially, a search page is displayed, presenting an input field in which you may enter the name of the user you wish to search for. The value inserted in this field must be exactly equal to a username in GitHub - in case it is, you will be directed to the profile page of this user; in case it is not, a "user was not found" message will be returned.     
This profile page presents:
- A header with the username in its left corner and a "Search a user" button in the right one. This button allows you to go to search page;
- User's picture;
- A container presenting user's full name, its email and local of residence, if those information are registered. In case there is no registered full name, username (the same one entered in search field) will be displayed instead;
- A navigation container presenting the quantities of followers, users the displayed user follows, repositories and starred repositories. This section will be explained subsequently;
- A container exhibiting user's bio, if registered.     

By clicking repositories quantity, you will be directed to a page presenting a list of the displayed user's repos. The same applies to the number of starred repos.     
Besides, by clicking the number of followers, you will be directed to a page which lists the followers of the displayed user. The same applies to the number of users it follows.     
Those pages are described below:
- **Repositories list:** it has a header with the user's repositories quantity and a "go back" button. Right below, an input field and the list of repositories are displayed. All the repositories are presented in cards which contain their names, descriptions (if registered) and numbers of stars. Besides, the input field intends to filter the repos in this list, enabling the search of one or more specific repositories according to their names. It is important to highlight not only the repositories which names correspond exactly to the entered value in this field shall be displayed. For instance: if letter A is inserted, all the repositories which names contain this letter will be exhibited;
- **Starred repositories list:** this page is identical to the one with the list of repositories. Although, it presents only the starred ones;
- **Followers list:** it has a header with user's followers quantity and a "go back" button. Right below, a filter input field (identical to the one presented in the other pages) and a list of followers are displayed. All those followers are presented in cards containing their pictures and names and a button in the right corner which shall direct you to the profile page of this follower;
- **Following users list:** this page is identical to the one with the list of followers. Although, it presents the users the displayed user follows instead of the ones that follow it.      

The profile page accessed through those lists is identical to the one exhibited in the beginning of the application. However, it contains a "go back" button in its header's left corner. This page also presents a "Search a user" button, which allows you to go to search page.     
Finally, in case the typed URL does not correspond to any of the routes of the application, you will be directed to an error page which presents an error message and a button through which it is possible to go straightly to search page.     

### UNIT TESTING

Jest was used to test application's requests, which are: get user, get user's repositories, get user's starred repositories, get user's followers and get users the user follows. Those tests were organized as follows:
- Mocks for the five requests can be found in **mocks** folder;
- Functions that use those mocks and Jest's assertions to run the tests can be found in **tests** folder;
- Those functions are called in **App.test.js** file, which runs the tests;
- For the assertions, the information of a random GitHub user which username is "aniltonveiga" were used. This user is defined in "username" variable, in **App.test.js** file. In case another user is used for the tests or aniltonveiga's information are changed, the assertions must be updated. 

### TECHNICAL INFORMATION

- Some of the tools that were used to develop this application were: React, Styled-Components, Material UI, Axios, React-Router, Hooks (useEffect, useState, useCallback, useHistory and useParams) and Custom Hooks (useForm);
- The application was developed through **Mobile First**, having been originally designed for Mobile (specifically IPhone 6/7/8), and was adapted to be responsive for Desktop;
- HTML semantic tags were used, such as header, section and nav;
- It was also used a proper attribute from WAI-ARIA named role, which aims to enhance application's accessibility;
- Clean Code good practices were used, such as indentation and code division in components.

### COMMENTS

- Search user functionality has the same limitations the request it uses ("get a user", which information can be found in GitHub REST API's documentation) has, for instance:     
  - The entered value must correspond exactly to a GitHub's username;
  - The search returns only the information of a single user instead of a list of users. Therefore, its results shall contain only the information of this user;
- Followers, following users, repositories and starred repositories lists will present up to 30 items, since this is the limit returned by GitHub REST API.     
          
______________________

## README EM PORTUGUÊS

Aplicação em React utilizada para solucionar o desafio proposto pela Compasso UOL, visando a ingressar na empresa. Seu objetivo é buscar um dos usuários do GitHub e exibir suas informações, especialmente as listas de todos os seus repositórios e de seus repositórios estrelados (os chamados "starred repositories").    
<a href="https://compasso-challenge-leonardo-federmann.surge.sh/">Link da aplicação</a>    
<a href="https://docs.github.com/en/rest">API do GitHub</a>    

### FUNCIONALIDADES E NAVEGAÇÃO

Inicialmente, é exibida uma página de busca, que apresentará um campo de input no qual deve ser inserido o nome de usuário buscado. O valor inserido nesse campo deverá corresponder exatamente a um nome de usuário do GitHub - caso corresponda, será exibida a página de detalhes do referido usuário; caso contrário, será retornada a mensagem "user was not found" ("usuário não encontrado").    
A página de detalhes de usuário conterá:
- Um header com o nome de usuário no canto esquerdo e um botão de "Search a user" ("buscar um usuário") no direito, por meio do qual é possível navegar diretamente à página de busca;
- A foto de perfil do usuário;
- Um container apresentando o nome completo do usuário, seu email e seu local de residência, caso essas informações estejam registradas. No caso específico do nome completo, caso não esteja registrado, será exibido em seu lugar o nome de usuário (o mesmo inserido no campo de busca);
- Um container de navegação contendo a quantidade de seguidores do usuário, a quantidade de usuários seguidos por ele, a de repositórios em geral e a de repositórios estrelados. Tal seção será explanada posteriormente;
- Um container exibindo a biografia do usuário, caso esteja registrada.    

Ao clicar no número de repositórios, será exibida uma página contendo uma lista de todos os repositórios do usuário em questão. O mesmo se aplica ao número de repositórios estrelados.    
Ademais, ao clicar no número de seguidores, será exibida uma página contendo uma lista dos seguidores do usuário em questão, sendo que o mesmo se aplica ao número de usuários por ele seguidos.    
Tais páginas são explanadas a seguir:
- **Lista de repositórios:** contém um header apresentando a quantidade de repositórios do referido usuário e um botão de "voltar". Logo abaixo, é exibido um campo de input e a lista de repositórios, todos apresentados em um card contendo seu nome, sua descrição (caso haja) e sua quantidade de estrelas. Tal campo de input visa a filtrar os itens dessa lista, permitindo pesquisar um ou mais repositórios específicos de acordo com seus nomes. Vale salientar que não serão exibidos somente os repositórios cujo nome corresponda exatamente ao valor inserido - se, por exemplo, for inserida apenas a letra A, serão apresentados todos os repositórios cujo nome contenha tal letra;
- **Lista de repositórios estrelados:** idêntica à lista de repositórios, porém contendo somente os estrelados;
- **Lista de seguidores:** contém um header apresentando a quantidade de seguidores do referido usuário e um botão de "voltar". Logo abaixo, é exibido um campo de input com o objetivo de filtrar usuários (idêntico ao filtro das demais listas) e uma lista de todos os seguidores, todos apresentados em cards contendo a foto do seguidor, seu nome de usuário e um botão na lateral direita que, se clicado, direcionará a aplicação à página de detalhes de tal seguidor;
- **Lista de usuários seguidos:** idêntica à lista de seguidores, porém contendo aqueles que o usuário em questão segue.    

A página de detalhes de usuário acessada por meio dessas listas é idêntica à exibida no início da aplicação, porém contendo um botão de "voltar" na lateral esquerda do header. Tal página também apresenta o botão "Search a user" ("buscar um usuário"), por meio do qual é possível navegar diretamente à página de busca.    
Por fim, caso seja digitada uma URL que não corresponda a nenhuma rota da aplicação, será exibida uma página com uma mensagem de erro e um botão por meio do qual é possível navegar diretamente à página de busca.

### TESTES UNITÁRIOS

Foi utilizado Jest para testar as requisições realizadas, a saber: obter usuário, obter repositórios de um usuário, obter repositórios estrelados, obter seus seguidores e obter usuários seguidos. Tais testes foram organizados da seguinte forma:
- Foram elaborados mocks para as cinco requisições, todos concentrados na pasta **mocks**;
- Foram elaboradas funções que utilizam tais mocks e as assertions próprias do Jest para realizar os testes, todas concentradas na pasta **tests**;
- Tais funções são chamadas no arquivo **App.test.js**, no qual os testes são efetivamente realizados;
- Nas assertions, foram usadas as informações de um usuário aleatório do GitHub, chamado "aniltonveiga". Tal usuário é definido em uma variável chamada "username", no arquivo **App.test.js**. Caso seja usado outro usuário ou as informações de "aniltonveiga" sejam alteradas, as assertions dos testes deverão ser atualizadas.

### REQUISITOS TÉCNICOS

- Algumas das ferramentas utilizadas na elaboração da aplicação foram: React.js, Styled-Components, Material UI, Axios, React Router, Hooks (useEffect, useState, useCallback, useHistory e useParams) e Custom Hooks (useForm);
- A aplicação foi desenvolvida por meio de **Mobile First**, sendo originalmente planejada para Mobile (especialmente IPhone 6/7/8) e tendo sido adaptada de modo a tornar-se responsiva para Desktop;
- Foram usadas tags semânticas do HTML, tais como header, section e nav;
- Foi usado também o atributo role, próprio da especificação WAI-ARIA, que visa a elevar a acessibilidade da aplicação;
- Foram usadas boas práticas de Clean Code, tais como componentização do código e identação. 

### OBSERVAÇÕES

- A funcionalidade de busca de usuário possui as mesmas limitações do endpoint utilizado para tal ("get a user", cujas informações podem ser averiguadas na documentação da API do GitHub), tais como:
  - o valor inserido deve corresponder exatamente a um nome de usuário no GitHub;
  - a busca retorna somente um usuário em vez de uma lista. Sendo assim, seus resultados conterão as informações de apenas um usuário.    
- As listas de seguidores, de usuários seguidos, de repositórios e de repositórios estrelados apresentarão no máximo 30 itens, pois esse é o limite retornado pela API do GitHub.
