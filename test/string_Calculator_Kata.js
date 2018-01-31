var calculadoraKata = require('../string_Calculator_Kata.js');
var expect = require('chai').expect;


describe('Calculadora Kata', () => {
  it('When empty string return 0 ', () => {
    expect(calculadoraKata(' ')).to.equal(0)
  });

  it('When string have 1 number return this number', () => {
    expect(calculadoraKata('1')).to.equal(1)
  });

  it('When string have 2 number returns soma this numbers', () => {
    expect(calculadoraKata('1,2')).to.equal(3)
  });

  it('Quando enviado mais de dois numeros', () => {
    expect(calculadoraKata('1,2,3')).to.equal(6)
  });

  it('Tipos diferente de entrada de dados \n', () => {
    expect(calculadoraKata("1\n2,3")).to.equal(6)
  });

  it('suporte a diferentes delimitadores', () => {
    expect(calculadoraKata("//;\n1;2")).to.equal(3)
  });

  it('"negativos não permitidos"', () => {
    expect(calculadoraKata("1,4,-1")).to.equal('negatives not allowed:-1')
  });

  it('Os números maiores do que 1000 devem ser ignorados', () => {
    expect(calculadoraKata("2,1001")).to.equal(2)
  });
});
