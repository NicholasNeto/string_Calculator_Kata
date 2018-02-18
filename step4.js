
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
  var lista = []
  var delimitador = entrada[2]
  var stringModificada = entrada.replace(/\n/g, delimitador)
  var preLista = stringModificada.split(delimitador)
  for(var x = 2; x < preLista.length; x++){
    lista.push(preLista[x])
  }
  return lista
}

module.exports = add
