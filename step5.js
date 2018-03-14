
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

    //console.log('antes de tudo', listaNumeros)


    var tiposNumeros = isNumerosNegativos(listaNumeros)

    if (tiposNumeros[0].numerosNegativos.length > 0) {
      return 'negatives not allowed:' + tiposNumeros[0].numerosNegativos
    } else {
      listaNumeros = tiposNumeros[0].numerosPositivos
    }
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
  var delimitador = entrada[2]
  var preLista = entrada.substring(4)
  var lista = preLista.replace(/\n/g, delimitador).replace(/,/g, delimitador)
  var listaNumeros = lista.split(delimitador)
  return listaNumeros;
}


var isNumerosNegativos = function (entrada) {

  var contadorDeNumeros = {listaNumerosNegativos: [], listaNumerosPositivos: []}

  var tiposNumeros = entrada.map((numero) => {

    if (numero < 0 ) {
      contadorDeNumeros.listaNumerosNegativos.push(numero)
    } else {
      contadorDeNumeros.listaNumerosPositivos.push(numero)
    }
    return { numerosNegativos: contadorDeNumeros.listaNumerosNegativos, numerosPositivos: contadorDeNumeros.listaNumerosPositivos }
  });

  return tiposNumeros
}

module.exports = add
