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

Antes de rodar os testes, é necessário configurar a variável pathToApi no 
arquivo tests_spec.js que está na pasta clients, para a url da api.

Para rodar os testes, ao estar no diretório do projeto digite o comando abaixo:

```
jasmine-node clients/
```