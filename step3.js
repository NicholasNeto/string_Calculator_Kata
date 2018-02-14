

var add = function (dados) {

  if(stringVazia(dados)){
    return 0
  }

  if (dados.indexOf('\n') !== -1 ) {
    var listaNumeros = criaLista(dados)
  } else {
    var listaNumeros = dados.split(',')
  }

  var resultado = listaNumeros.reduce(function (numero, cadaletra) {
      if(!isNaN(cadaletra)){
        return numero + parseInt(cadaletra);
      }

    }, 0);

  return resultado
}

var criaLista = function (dados) {
  var lista = []
  var preLista = dados.split('\n')

  for (var x = 0; x < preLista.length; x++) {
    if (preLista[x].indexOf(',') !== -1) {
      var listaSecundaria = preLista[x].split(',')

      for (var y = 0; y < listaSecundaria.length; y++) {
        if (stringVazia(listaSecundaria[y])) {
          lista.push(0)
        } else {
          if (isNaN(listaSecundaria[y]) === false) {
            lista.push(listaSecundaria[y])
          }
        }
      }
    } else {
      lista.push(preLista[x])
    }
  }
  return lista
}

var stringVazia = function (entrada) {
  if (entrada === '') {
    return true
  }
}

module.exports = add
