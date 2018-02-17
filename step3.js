

var add = function (dados) {

  if(stringVazia(dados)){
    return 0
  }

  var preLista = dados.replace(/\n/g, ',')
  var listaNumeros = preLista.split(',')

  var resultado = listaNumeros.reduce(function (numero, cadaLetra) {
    return numero + parseInt(cadaLetra)
  }, 0)

  return resultado
}

var stringVazia = function (entrada) {
  if (entrada === '') {
    return (entrada === '')
  } else {
    return (entrada === '')
  }
}

module.exports = add
