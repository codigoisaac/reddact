<p  align="center">
<img  src="https://styles.redditmedia.com/t5_2zldd/styles/communityIcon_fbblpo38vy941.png?width=256&s=13a87a036836ce95570a76feb53f27e61717ad1b" width="80"  alt="r/ReactJS icon"  />
</p>

# Reddact

Reddact é um simples aplicativo web que lê a Api do [Reddit](https://reddit.com), e exibe dados do sub-reddit [r/ReactJS](https://reddit.com/r/ReactJS), um forum online sobre a biblioteca de desenvolvimento front-end [ReactJS](https://reactjs.org).

## Visite o app online

Acesse Reddact em: https://redd-act.netlify.app/

## Status do Projeto

<h4 align="center"> 🚧 Em construção... 🚧 </h4>

# Tabela de conteúdos

<p align="center">  
  • 
	<a href="#tecnologias">Tecnologias</a> 
  • 
	<a href="#funcionalidades">Funcionalidades</a> 
  • 
  <a href="#roteiro">Roteiro</a> 
  •
	<a href="#executar-a-aplicação-em-modo-de-desenvolvimento">Executar a aplicação</a> 
  • 
	<a href="#licença">Licença</a> 
  • 
  <a href="#autor">Autor</a> 
  •
  <a href="#contribuindo">Contribuindo</a> 
  •
</p>

# Tecnologias

As seguintes ferramentas foram usadas na construção do projeto:

- [React.js](https://pt-br.reactjs.org/)
- [Tailwind.css](https://tailwindcss.com/)
- [TimeAgo.js](https://timeago.org/)

# Funcionalidades

- [x] Botões para navegar entre os tipos de listagem de posts: Hot, New, Top e Rising.
- [x] Botão "Ver mais" para carregar uma nova página de posts.
- [x] Mostrar há quanto tempo atrás o post foi feito e o usuário que o fez, com link para o post e para o perfil do usuário.
- [x] Mostrar a imagem do post se ele tiver uma e clicar para aumentar/diminuir o tamanho dela, ou uma imagem padrão caso contrário.
- [x] Mostrar o número da página.
- [x] Dark/Light mode.
- [x] Projeto rodando no [Netlify](https://netlify.com) com deploy automático (https://redd-act.netlify.app/) [![Netlify Status](https://api.netlify.com/api/v1/badges/3a34b761-eb9c-4abc-aab6-3740bf78aecd/deploy-status)](https://app.netlify.com/sites/redd-act/deploys).
- [x] Mostrar a devida badge em posts que são uma coleção ou que foram fixados.
- [x] Mostrar número de prêmios, de upvotes e de comentários no post.

# Roteiro

Aqui estão as próximas etapas desse projeto e o que está sendo feito agora:

- [ ] <img src="https://img.shields.io/badge/-%F0%9F%91%B7%20em%20andamento-%236324C6" alt="Status"/> Re-escrever Class Components como Hooks
- [ ] Aprender sobre os padrões do React e refatorar o projeto implementando-os (Responsabilidade Única, Imutabilidade, Composição, Reatividade)
  - [x] Responsabilidade Única
  - [ ] Imutabilidade
  - [ ] Composição
  - [ ] Reatividade
- [ ] Implementar testes Unitários
- [ ] Implementar testes e2e
- [ ] Escrever Documentação

# Executar a aplicação em modo de Desenvolvimento

## Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:

- [Git](https://git-scm.com)
- [Node.js](https://nodejs.org/en/)

Além disto é bom ter um editor decente para trabalhar com o código. Eu recomendo [VSCode](https://code.visualstudio.com/).

E um pequeno adendo: se você está usando o Google Chrome, talvez você precise ativar o modo de rolagem suave (visitando chrome://flags/#smooth-scrolling) para uma melhor experiência no app.

## Executando a aplicação

Para executar a aplicação em sua máquina, siga os seguintes passos:

```bash
# Clone este repositório
$ git clone https://github.com/codigoisaac/reddact

# Acesse a pasta do projeto no terminal/cmd
$ cd reddact

# Instale as dependências
$ npm install

# Execute a aplicação em modo de desenvolvimento
$ npm start

# O servidor inciará na porta:3000 - acesse http://localhost:3000
```

# Licença

[The Unlicense](https://choosealicense.com/licenses/unlicense/)

# Autor

[Isaac Muniz](https://campsite.bio/codigoisaac)

# Contribuindo

Pull requests são bem vindos. ;)
Para grandes alterações por favor abra um _issue_ antes para discutirmos o que você quer fazer.
Se você contribuir para esse projeto, seu perfil vai ser mostrado aqui.
