'use strict';
var Module = (function () {
  var isValidCPF = function (strCPF) {
    var sum = 0;
    var remainder = 0;
    var radix = 10;
    if (strCPF === "00000000000" || strCPF.length < 11) {return false;}
      
    for (var i=1; i<=9; i++){
      sum = sum + parseInt(strCPF.substring(i-1, i), radix) * (11 - i); 
    }
    remainder = (sum * 10) % 11;
    if ((remainder == 10) || (remainder == 11)) {remainder = 0;}
    if (remainder != parseInt(strCPF.substring(9, 10), radix) ) {return false;}
  	sum = 0;
    for (i = 1; i <= 10; i++){
      sum = sum + parseInt(strCPF.substring(i-1, i), radix) * (12 - i);
    }
    remainder = (sum * 10) % 11;
    if ((remainder == 10) || (remainder == 11)) {remainder = 0;}
    if (remainder != parseInt(strCPF.substring(10, 11), 10) ){return false;}
    return true;
  };

  var isValidEmail = function (strEmail) {
  	var filtro = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
  	if(filtro.test(strEmail)) {
  		return true;
  	} else {
  		return false;
    }
  };

  return {
    isValidCPF: isValidCPF,
    isValidEmail: isValidEmail
  };

})();
module.exports = Module;
//referencias
//http://www.receita.fazenda.gov.br/aplicacoes/atcta/cpf/funcoes.js
//http://www.dicasdeprogramacao.com.br/algoritmo-para-validar-cpf/
//http://jlneto.com.br/jlneto/2010/05/validacao-de-e-mail-expressao-regular/