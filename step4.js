
var add = function (dados) {

  if(stringVazia(dados)){
    return 0
  }

  if(dados.indexOf('//') !== -1){
    var listaNumeros = encontraDelimitador(dados)
  } else {
    var preLista = dados.replace(/\n/g, ',')
    var listaNumeros = preLista.split(',')
  }

  var resultado = listaNumeros.reduce(function (numero, cadaLetra) {
    return numero + parseInt(cadaLetra)
  }, 0)

  return resultado
}

var stringVazia = function (entrada) {
  return (entrada === '')
}

var encontraDelimitador = function(entrada) {
  var indexFinal = entrada.length
  var delimitador = entrada[2]
  var preLista = entrada.substring(4, indexFinal)
  var lista = preLista.replace(/\n/g, delimitador)
  var listaNUmeros = lista.split(delimitador)
  return listaNUmeros;

}

module.exports = add
