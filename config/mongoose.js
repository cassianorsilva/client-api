'use strict';
var mongoose = require('mongoose');
var db = mongoose.connection;

var init = function () {
  mongoose.connect('mongodb://localhost/clients');
  db.on('error', function(err){
      console.log('Erro de conexao.', err);
  });
  db.on('open', function () {
    console.log('Conexão aberta.');
  });
  db.on('connected', function(err){
      console.log('Conectado');
  });
  db.on('disconnected', function(err){
      console.log('Desconectado');
  });
};

module.exports = init;