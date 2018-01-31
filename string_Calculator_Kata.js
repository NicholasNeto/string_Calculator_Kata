
var findDelimiter = function (sIpuntDados) {
    var lista = sIpuntDados.split('//');
    return lista [1][0];
  }

var lineBrea = function(sIpuntDados){
    var inumbersSemQuebraDeLinha = sIpuntDados.split('\n');
    return inumbersSemQuebraDeLinha
  }

var preListForSum = function(list, ltemporaryList){
  for(var eachValue = 0; eachValue < ltemporaryList.length; eachValue++){
    list.push(ltemporaryList[eachValue]);
  }
  return list
}


var calculadoraKata = function(sIpuntDados) {
  var inumber = 0;
  var list = [];

  if(sIpuntDados == '' || sIpuntDados == ' ') {
    return 0;
  }

  if(sIpuntDados.length == 1){
    return parseInt(sIpuntDados);
  }

  if(sIpuntDados.indexOf('//') != -1) {
     var sdelimiter = findDelimiter(sIpuntDados);
     var preList = lineBrea(sIpuntDados);
     var ltemporaryList = preList[1].split(sdelimiter);
     preListForSum(list, ltemporaryList);

  } else if(sIpuntDados.indexOf('\n') != -1) {
    var preList = lineBrea(sIpuntDados)
    list.push(preList[0])
    var ltemporaryList = preList[1].split(',')

   preListForSum(list ,ltemporaryList)

  } else {
    var list = sIpuntDados.split(',')
  }

  var isNegative = Math.min.apply(Math, list);
  var isMax1000 = Math.max.apply(Math, list);

  if(isNegative < 0 ) {
    return 'negatives not allowed:' + isNegative;
  } else if(isMax1000 > 1000) {

      var index = isMax1000.toString();
      var string = list.indexOf(index);
      list.splice(string);
  }

  for(var eachValue = 0; eachValue <= list.length -1; eachValue++) {
    inumber = inumber + parseInt(list[eachValue])
  }
  return inumber;
}

module.exports = calculadoraKata
