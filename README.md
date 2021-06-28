## GITHUB APP
### DESAFIO COMPASSO UOL

Prezados membros da Compasso,

Segue neste repositório a aplicação em React solicitada em seu desafio. Seu objetivo é buscar um dos usuários do GitHub e exibir suas informações, especialmente as listas de todos os seus repositórios e de seus repositórios estrelados (os chamados "starred repositories").    
<a href="https://compasso-challenge-leonardo-federmann.surge.sh/">Link da aplicação</a>    
<a href="https://docs.github.com/en/rest">API do GitHub</a>    

### FUNCIONALIDADES E NAVEGAÇÃO

Inicialmente, é exibida uma página de busca, que apresentará um campo de input no qual deve ser inserido o nome de usuário buscado. O valor inserido nesse campo deverá corresponder exatamente a um nome de usuário do GitHub - caso corresponda, será exibida a página de detalhes do referido usuário; caso contrário, será retornada uma mensagem de "usuário não encontrado".    
A página de detalhes de usuário conterá:
- Um header com o nome de usuário no canto superior esquerdo e um botão de "Buscar usuário" no superior direito, por meio do qual é possível navegar diretamente à página de busca;
- A foto de perfil do usuário;
- Um container apresentando o nome completo do usuário, seu email e seu local de residência, caso essas informações estejam registradas. No caso específico do nome completo, caso não esteja registrado, será exibido em seu lugar o nome de usuário (o mesmo inserido no campo de busca);
- Um container de navegação contendo a quantidade de seguidores do usuário, a quantidade de usuários seguidos por ele, a de repositórios em geral e a de repositórios estrelados. Tal seção será explanada posteriormente;
- Um container exibindo a biografia do usuário, caso esteja registrada.    

Conforme pedido no desafio, ao clicar no número de repositórios, será exibida uma página contendo uma lista de todos os repositórios do usuário em questão. O mesmo se aplica ao número de repositórios estrelados.    
Tomei a liberdade de adicionar uma funcionalidade extra: ao clicar no número de seguidores, será exibida uma página contendo uma lista dos seguidores do usuário em questão, sendo que o mesmo se aplica ao número de usuários por ele seguidos.    
Tais páginas são explanadas a seguir:
- **Lista de repositórios:** contém um header apresentando a quantidade de repositórios do referido usuário e um botão de "voltar". Logo abaixo, é exibido um campo de input e a lista de repositórios, todos apresentados em um card contendo seu nome, sua descrição (caso haja) e sua quantidade de estrelas. Tal campo de input visa a filtrar os itens dessa lista, permitindo pesquisar um ou mais repositórios específicos de acordo com seu nome. Vale salientar que não serão exibidos somente os repositórios cujo nome corresponda exatamente ao valor inserido - se, por exemplo, for inserida apenas a letra A, serão apresentados todos os repositórios cujo nome contenha tal letra;
- **Lista de repositórios estrelados:** idêntica à lista de repositórios, porém contendo somente os estrelados;
- **Lista de seguidores:** contém um header apresentando a quantidade de seguidores do referido usuário e um botão de "voltar". Logo abaixo, é exibido um campo de input com o objetivo de filtrar usuários (idêntico ao filtro das demais listas) e uma lista de todos os seguidores, todos apresentados em cards contendo a foto do seguidor, seu nome de usuário e um botão na lateral direita que, se clicado, direcionará a aplicação à página de detalhes de tal seguidor;
- **Lista de usuários seguidos:** idêntica à lista de seguidores, porém contendo aqueles que o usuário em questão segue.    

A página de detalhes de usuário acessada por meio dessas listas é idêntica à exibida no início da aplicação, porém contendo um botão de "voltar" na lateral esquerda do header. Tal página foi incluida como uma funcionalidade extra e também apresenta o botão "Buscar usuário", por meio do qual é possível navegar diretamente à página de busca.    
Por fim, caso seja digitada uma URL que não corresponda a nenhuma rota da aplicação, será exibida uma página com uma mensagem de erro e um botão por meio do qual é possível navegar diretamente à página de busca.

### TESTES

Conforme orientado no enunciado do desafio, foi utilizado Jest para testar as requisições realizadas, a saber: obter usuário, obter repositórios de um usuário, obter repositórios estrelados, obter seus seguidores e obter usuários seguidos. Tais testes foram organizados da seguinte forma:
- Foram elaborados mocks para as cinco requisições, todos concentrados na pasta **mocks**;
- Foram elaboradas funções que utilizam tais mocks e as assertions próprias do Jest para realizar os testes, todas concentradas na pasta **tests**;
- Tais funções são chamadas no arquivo **App.test.js**, no qual os testes são efetivamente realizados;
- Nas assertions, foram usadas as informações de um usuário aleatório do GitHub, chamado "aniltonveiga". Tal usuário é definido em uma variável chamada "username", no arquivo **App.test.js**. Caso seja usado outro usuário ou as informações de "aniltonveiga" sejam alteradas, as assertions dos testes deverão ser atualizadas.

### REQUISITOS TÉCNICOS

- Algumas das ferramentas utilizadas na elaboração da aplicação foram: React.js, Styled-Components, Material UI, Axios, React Router, Hooks e Custom Hooks;
- A aplicação foi desenvolvida por meio de Mobile First, sendo originalmente planejada para Mobile (especialmente IPhone 6/7/8) e tendo sido adaptada de modo a tornar-se responsiva para Desktop;
- Conforme solicitado, foram usadas tags semânticas do HTML, tais como header, section e nav;
- Foram usadas boas práticas de Clean Code, tais como componentização do código e identação. 

### OBSERVAÇÕES

- O endpoint utilizado na funcionalidade de busca de usuário foi o solicitado no enunciado do desafio. Por conseguinte, tal funcionalidade possui as mesmas limitações desse endpoint, tais como:
  - o valor inserido deve corresponder exatamente a um nome de usuário no GitHub;
  - a busca retorna somente um usuário em vez de uma lista. Sendo assim, seus resultados conterão as informações de apenas um usuário.    
- Por questão de organização, optei por exibir o resultado da busca (contendo as informações do usuário) em uma página à parte do campo de busca;
- Não ficou claro o que foi solicitado na seção CENÁRIO do enunciado do desafio. Sendo assim, optei por permitir que seja buscado somente o nome de usuário no campo de busca; em compensação, inclui a funcionalidade de filtro nas listas de repositórios em geral e de repositórios estrelados, viabilizando a pesquisa de repositórios do usuário em questão;
- As listas de seguidores e de usuários seguidos apresentarão no máximo 30 usuários, pois esse é o limite retornado pela API do GitHub.

No mais, gostaria de agradecer imensamente pela oportunidade de realizar seu desafio!    
Fico no aguardo de futuras orientações.

Atenciosamente,    
Leonardo Federmann
