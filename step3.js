

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

//expect(add("1\n2,3")).to.equal(6)
//expect(add("22\n33,43")).to.equal(98)
//expect(add("22,33,44,33,6,\n43")).to.equal(181)
//expect(add("22,33,44,\n33,\n43")).to.equal(175)



//    1\n2,3
var criaLista = function(dados){
  var lista = []


  var preLista = dados.split('\n');
  console.log('>>>>>>>>> preLISTA >>>>>>>>>>>>',preLista)

  for(var x = 0; x < preLista.length; x++) {


    if(preLista[x].indexOf(',') != -1) {
      console.log('estou dentro do verdadeiro')
      var listaSecundaria = preLista[x].split(',')

      for(var y = 0; y < listaSecundaria.length; y++){
        lista.push(listaSecundaria[y])
      }

    } else {
      console.log('estou dentro do false  ')
      lista.push(preLista[x])

    }
  }
  return lista
}

module.exports = add;
