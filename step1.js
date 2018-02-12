

var add = function (dados) {
  if(dados === '') {
    return 0
  }

  var listaNumeros = dados.split(',')

  var resultado = listaNumeros.reduce(function (numero, cadaletra) {
      return numero + parseInt(cadaletra);
    }, 0);

  return resultado
}

module.exports = add;
