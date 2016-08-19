'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var invalidCPFMessage = 'CPF inválido';
var invalidEmailMessage = 'Email invalido';

var validate = require('../validations/validations');
var isValidCPF = validate.isValidCPF;
var isValidEmail = validate.isValidEmail;

var ClientSchema = new Schema({
  id: { type: String, index: true, validate: [isValidCPF, invalidCPFMessage]},
  address: { type: String, required: true },
  phoneNumber: [{ number: { type: String, default: ''}}],
  name: { type: String, required: true },
  email: { type: String, validate: [isValidEmail, invalidEmailMessage]},
  maritalStatus: { type: String, required: true }
  }
);

module.exports = mongoose.model('Client', ClientSchema);
