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

## README EM PORTUGU??S

Aplica????o em React utilizada para solucionar o desafio proposto pela Compasso UOL, visando a ingressar na empresa. Seu objetivo ?? buscar um dos usu??rios do GitHub e exibir suas informa????es, especialmente as listas de todos os seus reposit??rios e de seus reposit??rios estrelados (os chamados "starred repositories").    
<a href="https://compasso-challenge-leonardo-federmann.surge.sh/">Link da aplica????o</a>    
<a href="https://docs.github.com/en/rest">API do GitHub</a>    

### FUNCIONALIDADES E NAVEGA????O

Inicialmente, ?? exibida uma p??gina de busca, que apresentar?? um campo de input no qual deve ser inserido o nome de usu??rio buscado. O valor inserido nesse campo dever?? corresponder exatamente a um nome de usu??rio do GitHub - caso corresponda, ser?? exibida a p??gina de detalhes do referido usu??rio; caso contr??rio, ser?? retornada a mensagem "user was not found" ("usu??rio n??o encontrado").    
A p??gina de detalhes de usu??rio conter??:
- Um header com o nome de usu??rio no canto esquerdo e um bot??o de "Search a user" ("buscar um usu??rio") no direito, por meio do qual ?? poss??vel navegar diretamente ?? p??gina de busca;
- A foto de perfil do usu??rio;
- Um container apresentando o nome completo do usu??rio, seu email e seu local de resid??ncia, caso essas informa????es estejam registradas. No caso espec??fico do nome completo, caso n??o esteja registrado, ser?? exibido em seu lugar o nome de usu??rio (o mesmo inserido no campo de busca);
- Um container de navega????o contendo a quantidade de seguidores do usu??rio, a quantidade de usu??rios seguidos por ele, a de reposit??rios em geral e a de reposit??rios estrelados. Tal se????o ser?? explanada posteriormente;
- Um container exibindo a biografia do usu??rio, caso esteja registrada.    

Ao clicar no n??mero de reposit??rios, ser?? exibida uma p??gina contendo uma lista de todos os reposit??rios do usu??rio em quest??o. O mesmo se aplica ao n??mero de reposit??rios estrelados.    
Ademais, ao clicar no n??mero de seguidores, ser?? exibida uma p??gina contendo uma lista dos seguidores do usu??rio em quest??o, sendo que o mesmo se aplica ao n??mero de usu??rios por ele seguidos.    
Tais p??ginas s??o explanadas a seguir:
- **Lista de reposit??rios:** cont??m um header apresentando a quantidade de reposit??rios do referido usu??rio e um bot??o de "voltar". Logo abaixo, ?? exibido um campo de input e a lista de reposit??rios, todos apresentados em um card contendo seu nome, sua descri????o (caso haja) e sua quantidade de estrelas. Tal campo de input visa a filtrar os itens dessa lista, permitindo pesquisar um ou mais reposit??rios espec??ficos de acordo com seus nomes. Vale salientar que n??o ser??o exibidos somente os reposit??rios cujo nome corresponda exatamente ao valor inserido - se, por exemplo, for inserida apenas a letra A, ser??o apresentados todos os reposit??rios cujo nome contenha tal letra;
- **Lista de reposit??rios estrelados:** id??ntica ?? lista de reposit??rios, por??m contendo somente os estrelados;
- **Lista de seguidores:** cont??m um header apresentando a quantidade de seguidores do referido usu??rio e um bot??o de "voltar". Logo abaixo, ?? exibido um campo de input com o objetivo de filtrar usu??rios (id??ntico ao filtro das demais listas) e uma lista de todos os seguidores, todos apresentados em cards contendo a foto do seguidor, seu nome de usu??rio e um bot??o na lateral direita que, se clicado, direcionar?? a aplica????o ?? p??gina de detalhes de tal seguidor;
- **Lista de usu??rios seguidos:** id??ntica ?? lista de seguidores, por??m contendo aqueles que o usu??rio em quest??o segue.    

A p??gina de detalhes de usu??rio acessada por meio dessas listas ?? id??ntica ?? exibida no in??cio da aplica????o, por??m contendo um bot??o de "voltar" na lateral esquerda do header. Tal p??gina tamb??m apresenta o bot??o "Search a user" ("buscar um usu??rio"), por meio do qual ?? poss??vel navegar diretamente ?? p??gina de busca.    
Por fim, caso seja digitada uma URL que n??o corresponda a nenhuma rota da aplica????o, ser?? exibida uma p??gina com uma mensagem de erro e um bot??o por meio do qual ?? poss??vel navegar diretamente ?? p??gina de busca.

### TESTES UNIT??RIOS

Foi utilizado Jest para testar as requisi????es realizadas, a saber: obter usu??rio, obter reposit??rios de um usu??rio, obter reposit??rios estrelados, obter seus seguidores e obter usu??rios seguidos. Tais testes foram organizados da seguinte forma:
- Foram elaborados mocks para as cinco requisi????es, todos concentrados na pasta **mocks**;
- Foram elaboradas fun????es que utilizam tais mocks e as assertions pr??prias do Jest para realizar os testes, todas concentradas na pasta **tests**;
- Tais fun????es s??o chamadas no arquivo **App.test.js**, no qual os testes s??o efetivamente realizados;
- Nas assertions, foram usadas as informa????es de um usu??rio aleat??rio do GitHub, chamado "aniltonveiga". Tal usu??rio ?? definido em uma vari??vel chamada "username", no arquivo **App.test.js**. Caso seja usado outro usu??rio ou as informa????es de "aniltonveiga" sejam alteradas, as assertions dos testes dever??o ser atualizadas.

### REQUISITOS T??CNICOS

- Algumas das ferramentas utilizadas na elabora????o da aplica????o foram: React.js, Styled-Components, Material UI, Axios, React Router, Hooks (useEffect, useState, useCallback, useHistory e useParams) e Custom Hooks (useForm);
- A aplica????o foi desenvolvida por meio de **Mobile First**, sendo originalmente planejada para Mobile (especialmente IPhone 6/7/8) e tendo sido adaptada de modo a tornar-se responsiva para Desktop;
- Foram usadas tags sem??nticas do HTML, tais como header, section e nav;
- Foi usado tamb??m o atributo role, pr??prio da especifica????o WAI-ARIA, que visa a elevar a acessibilidade da aplica????o;
- Foram usadas boas pr??ticas de Clean Code, tais como componentiza????o do c??digo e identa????o. 

### OBSERVA????ES

- A funcionalidade de busca de usu??rio possui as mesmas limita????es do endpoint utilizado para tal ("get a user", cujas informa????es podem ser averiguadas na documenta????o da API do GitHub), tais como:
  - o valor inserido deve corresponder exatamente a um nome de usu??rio no GitHub;
  - a busca retorna somente um usu??rio em vez de uma lista. Sendo assim, seus resultados conter??o as informa????es de apenas um usu??rio.    
- As listas de seguidores, de usu??rios seguidos, de reposit??rios e de reposit??rios estrelados apresentar??o no m??ximo 30 itens, pois esse ?? o limite retornado pela API do GitHub.
