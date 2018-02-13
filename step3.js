

var add = function (dados) {
  if(dados === '') {
    return 0
  }

  if(dados.indexOf('\n') != -1 ) {
    var listaNumeros = criaLista(dados)
  } else {
    var listaNumeros = dados.split(',')
  }

  var resultado = listaNumeros.reduce(function (numero, cadaletra) {
      return numero + parseInt(cadaletra);
    }, 0);

  return resultado
}

var criaLista = function(dados){
  var lista = []

  var preLista = dados.split('\n');
  lista.push(parseInt(preLista[0]));

  var numeros = preLista[1].split(',')

  for(var x = 0; x < numeros.length; x++){
    lista.push(parseInt(numeros[x]))
  }
  return lista
}

module.exports = add;
