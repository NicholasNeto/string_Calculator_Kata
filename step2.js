
var add = function (dados) {
  if(dados === ' ') {
    return 0
  }

  if(dados.length === 1){
    var numero = parseInt(dados)
    return numero;
  }

  if(dados.length > 1){
    var listaNumeros = dados.split(',')
    var resultado = listaNumeros.reduce(function (numero, cadaletra) {
      return numero + parseInt(cadaletra);
    }, 0);
    return resultado
  }
}

module.exports = add;
