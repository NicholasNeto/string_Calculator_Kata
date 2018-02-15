

var add = function (dados) {

  if(stringVazia(dados)){
    return 0
  } else if (dados.indexOf('\n') !== -1 ) {
    var listaNumeros = criaLista(dados)
  } else {
    var listaNumeros = dados.split(',')
  }

  var resultado = listaNumeros.reduce(function (numero, cadaLetra) {
    return numero + parseInt(cadaLetra)
  }, 0)

  return resultado
}

var criaLista = function (dados) {
  var preLista = dados.replace(/\n/g, ',').replace(/,,/g, ',0,')
  var lista = preLista.split(',')
  return lista
}

var stringVazia = function (entrada) {
  if (entrada === '') {
    return true
  }
}

module.exports = add
