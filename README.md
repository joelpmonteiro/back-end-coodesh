> This is a challenge by [Coodesh](https://coodesh.com/)

## Project setup
> Esse projeto ele faz uma requisição para a `API` do [Spaceflight](https://api.spaceflightnewsapi.net/v3/documentation)

### Bibliotecas e Framework Usado
> - [Express 4.17.1](https://expressjs.com/)
> - [Axios 0.24.0](https://vuejs.org/)
> - [mongodb 4.2.0](https://www.mongodb.com/)
> - [mongoose 6.0.13](https://www.mongodb.com/)
> - [mongoose-paginate-v2 1.4.2](https://www.npmjs.com/package/mongoose-paginate-v2)
> - [node-cron 3.0.0](https://www.npmjs.com/package/node-cron)
> - [nodemon 2.0.15](https://www.npmjs.com/package/nodemon)



## Como instalar o Projeto
```
Ao entrar na pasta do Projeto Rode o comando abaixo, para instalar as bibliotecas
```
- npm install

```
Logo apos isso ele irá lhe entregar esse endereço abaixo 
```
- `http://localhost:3333`

```
Para modificar a porta no arquivo index.js, e modifique o valor da port nestá variavel
```
- const port = 3333

## Rodar Projeto
```
Para Rodar o projeto existe 2 métodos via (npm start,npm dev)
```
- npm start : roda via node nativamente exemplo, node index.js
- npm dev : rodando via nodemon exemplo, nodemon index.js

## Rotas do projeto

- `[GET]/:` Retornar um Status: 200 e uma Mensagem "Fullstack Challenge 2021 🏅 - Space Flight News"
  
- `[GET]/articles/:`Listar todos os artigos da base de dados, utilizar o sistema de paginação na resposta do endpoint para não sobrecarregar a REQUEST
  
- `[GET]/articles/{id}:` Obter a informação somente de um artigo

- `[POST]/articles` Registrar novo artigo

- `[PUT]/articles/:id` atualizar informação

- `[DELETE]/articles/:id` deleta um registro



