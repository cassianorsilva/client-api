'use strict';
const Model = require('./model');

const CRUD = {
  create: function(req, res, cb) {
    var client = req.body;
    Model.create(client,  function(err) {
      if (err) {
        res.json(err);
      }else{
        res.json(client);
      }
    });
  },
  retrieveById: function(req, res, cb){
    var id = req.params.id;
    var query = {'id': id};
    Model.findOne(query, function (err, data) {
      cb(err, data, res);
    });
  },
  
  update: function(req, res, cb) {
    var id = req.params.id;
    var query = {id: id}; 
    var obj = req.body;
    delete obj.id;
    Model.update(query, obj, function (err, data) {
      cb(err, data, res);
    });
  },
  delete: function(req, res, cb) {
    var id = req.params.id;
    var query = {'id': id}; 
    Model.remove(query, function (err, data) {
      cb(err, data, res);
    });
  },
  list: function(req, res, cb) {
    Model.find({}, function (err, data) {
      cb(err, data, res);
    });
  },
  search: function(req, res, cb) {
    var query = req.body; 
    Model.find(query, function (err, data) {
      cb(err, data, res);
    });
  },
  
};

module.exports = CRUD;