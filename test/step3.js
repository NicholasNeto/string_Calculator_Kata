var add = require('../step3');
var expect = require('chai').expect;

describe('Calculadora Kata', () => {
  describe('add', () => {

      it('Quando enviado string vazia retorne 0', () => {
        expect(add('')).to.equal(0)
      });

      it('Quando enviado apenas um numero retorne o proprio numero', () => {
        expect(add('1')).to.equal(1)
        expect(add('123')).to.equal(123)
      });

      it('Quando enviado dois numeros retorne a soma dos dois', () => {
        expect(add('1,2')).to.equal(3)
        expect(add('33,45')).to.equal(78)
        expect(add('123,456')).to.equal(579)
      });

      it('Permitir que add receba quantidade desconhecida de números (passando mais de dois numeros)', () => {
        expect(add('1,2,3,4,5,6')).to.equal(21)
      });

      it('Deve aceitar diferentes tipos de entrada', () => {
        expect(add("1\n2,3")).to.equal(6)
        expect(add("22\n33,43")).to.equal(98)
      });

  });
});
