# client-api
### Proposta de uma api para registro de clientes.

É necessária a prévia instalação das seguintes ferramentas 
* git, 
* mongo, 
* node, 
* npm

Após a instalação dos softwares requeridos, baixe o repositório através do
comando 
git clone https://github.com/cassianorsilva/client-api.git

Para instalar as dependências, entre no diretório contendo o projeto e digite
o comando:
```
npm install 
```


Para iniciar a api o comando é:
```
DEBUG=client-api:* npm start
```
Para acessar a API, a porta padrão é a 8080.
Exemplos configurados no Postman:
https://documenter.getpostman.com/collection/view/587653-15e81c72-80ad-bcba-7b7e-0a5a4bf6f923

Antes de rodar os testes, é necessário configurar a variável pathToApi no 
arquivo tests_spec.js que está na pasta clients, para a url da api.

Para rodar os testes, ao estar no diretório do projeto digite o comando abaixo:

```
jasmine-node clients/
```