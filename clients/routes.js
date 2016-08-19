'use strict';
var express = require('express');
var router = express.Router();
var _client = require('./controller');

var cb = function(err, data, res){
  var msg = '';
  msg = err ?  '{Erro: ' + err +'}' : data;
  res.json(msg);
};

router.get('/', function(req, res) {
  _client.list(req, res, cb);
});

router.get('/id/:id', function(req, res) {
  _client.retrieveById(req, res, cb);
});

router.put('/id/:id', function(req, res) {
  _client.update(req, res, cb);
});

router.post('/search', function(req, res) {
  _client.search(req, res, cb);
});

router.post('/add', function(req, res) {
  _client.create(req, res, cb);
});

router.delete('/id/:id', function(req, res) {
  _client.delete(req, res, cb);
});

module.exports = router;





