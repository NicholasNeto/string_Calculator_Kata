
var add = function (dados) {

  if (stringVazia(dados)){
    return 0
  }

  if (dados.indexOf('//') !== -1) {
    var dados = encontraDelimitador(dados)
  };

  var preLista = dados.replace(/\n/g, ',')
  var listaNumeros = preLista.split(',')

  var resultado = listaNumeros.reduce(function (numero, cadaLetra) {
    return numero + parseInt(cadaLetra)
  }, 0)

  return resultado
}

var stringVazia = function (entrada) {
  return (entrada === '')
}

var encontraDelimitador = function(entrada) {
  var delimitador = entrada[2]
  var string = entrada.substring(4)
  var regexp = new RegExp(delimitador, 'g');
  var listaNumeros = string.replace(regexp, ",");
  return listaNumeros
}

module.exports = add
