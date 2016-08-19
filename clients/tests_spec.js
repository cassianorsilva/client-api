'use strict';
var frisby = require('frisby');

var pathToApi = "http://desenvolvimento.cassianoraimar.com.br:8080";

frisby.create('Test client-api invalid create (invalid email)')
  .post(pathToApi + '/api/clients/add', 
  {"id":"22283176913","address":"rua","phoneNumber":[{"number":"123"},
  {"number":"234"}],
  "name":"Matt","email":"cass","maritalStatus":"solteiro"}, {json: true})
  .expectStatus(200)
  .expectHeaderContains('content-type', 'application/json')
  .expectJSON({
    
    "message": "Client validation failed",
    "name": "ValidationError",
    "errors": {
      "email": {
        "message": "Email invalido",
        "name": "ValidatorError",
        "properties": {
          "type": "user defined",
          "message": "Email invalido",
          "path": "email",
          "value": "cass"
        },
        "kind": "user defined",
        "path": "email",
        "value": "cass"
      }
    }
  })
.toss();

frisby.create('Test client-api invalid create (invalid cpf)')
  .post(pathToApi + '/api/clients/add', 
  {"id":"123","address":"rua","phoneNumber":[{"number":"123"},
  {"number":"234"}],
  "name":"Matt","email":"matt@daredevil.com","maritalStatus":"solteiro"}, {json: true})
  .expectStatus(200)
  .expectHeaderContains('content-type', 'application/json')
  .expectJSON({
    "message": "Client validation failed",
    "name": "ValidationError",
    "errors": {
      "id": {
        "message": "CPF inválido",
        "name": "ValidatorError",
        "properties": {
          "type": "user defined",
          "message": "CPF inválido",
          "path": "id",
          "value": "123"
        },
        "kind": "user defined",
        "path": "id",
        "value": "123"
      }
    }
  })
.toss();

frisby.create('Test client-api create')
  .post(pathToApi + '/api/clients/add', 
  {"id":"22283176913","address":"rua","phoneNumber":[{"number":"123"},
  {"number":"234"}],
  "name":"Matt","email":"matt@daredevil.com","maritalStatus":"solteiro"}, {json: true})
  .expectStatus(200)
  .expectHeaderContains('content-type', 'application/json')
  .expectJSON({
    "id": "22283176913",
    "address": "rua",
    "phoneNumber": [
      {
        "number": "123"
      },
      {
        "number": "234"
      }
    ],
    "name": "Matt",
    "email": "matt@daredevil.com",
    "maritalStatus": "solteiro"
  })
.toss();

frisby.create('Test client-api read')
  .get(pathToApi + '/api/clients/id/22283176913')
  .expectStatus(200)
  .expectHeaderContains('content-type', 'application/json')
.toss();

frisby.create('Test client-api update')
  .put(pathToApi + '/api/clients/id/22283176913', 
  {"phoneNumber":[{"number":"99866543"},
  {"number":"99755442"}],
  "name":"Matt Murdock","email":"mat@gmail.com","maritalStatus":"solteiro"}, {json: true})
  .expectStatus(200)
  .expectHeaderContains('content-type', 'application/json')
.toss();

frisby.create('Test client-api delete')
  .delete(pathToApi + '/api/clients/id/22283176913')
  .expectStatus(200)
  .expectHeaderContains('content-type', 'application/json')
.toss();