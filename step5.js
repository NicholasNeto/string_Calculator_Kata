
var add = function (dados) {
  //var e = new Error();
  //var e = function () { throw new TypeError('negatives not allowed:'); };
  var err = new TypeError('negatives not allowed:');
  var listaNumeros

  if (stringVazia(dados)){
    return 0
  }

  if (dados.indexOf('//') !== -1) {
    listaNumeros = encontraDelimitador(dados)
  } else {
    var preLista = dados.replace(/\n/g, ',')
    listaNumeros = preLista.split(',')
  }

  var tiposNumeros = listaNumerosNegativos(listaNumeros)

  if (tiposNumeros.length > 0) {
    throw err;
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



var numerosNegativos = function(entrada) {
  return entrada < 0;
}

var listaNumerosNegativos = function (entrada) {
  var listNumerosNegatvos = entrada.filter(numerosNegativos)
  return listNumerosNegatvos
}

module.exports = add
