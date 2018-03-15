var add = function (dados) {
  var listaNumeros

  if (stringVazia(dados)){
    return 0
  }

  if (dados.indexOf('//') !== -1) {
    listaNumeros = encontraDelimitador(dados)
  } else {
    var preLista = dados.replace(/\n/g, ',')
    listaNumeros = preLista.split(',')

    var tiposNumeros = listaNumerosNegativos(listaNumeros)

    if (tiposNumeros.length > 0) {
      return 'negatives not allowed:' + tiposNumeros
    }
  }

  var a = listaNumerosMaiores1000(listaNumeros)
  var resultado = a.reduce(function (numero, cadaLetra) {
    return numero + parseInt(cadaLetra)
  }, 0)

  return resultado
}

var stringVazia = function (entrada) {
  return (entrada === '')
}

var encontraDelimitador = function(entrada) {
  var delimitador = entrada[2]
  var preLista = entrada.substring(4)
  var lista = preLista.replace(/\n/g, delimitador).replace(/,/g, delimitador)
  var listaNumeros = lista.split(delimitador)
  return listaNumeros;
}



var numerosNegativos = function(entrada) {
  return entrada < 0;
}

var numerosMaior1000 = function(entrada) {
  return entrada <= 1000;
}


var listaNumerosNegativos = function (entrada) {
  var listNumerosNegatvos = entrada.filter(numerosNegativos)
  return listNumerosNegatvos
}


var listaNumerosMenores1000 = function (entrada) {
  var listaNumerosMaiores1000 = entrada.filter(numerosMaior1000)
  return listaNumerosMaiores1000
}

module.exports = add
