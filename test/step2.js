var add = require('../step2');
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

    it('Permitir que add receba quantidade desconhecida de números e valores aletorios', () => {
      expect(add('1,2,3,4,5,6')).to.equal(21);
      expect(add('1,2,123,4,235,6,2345')).to.equal(2716);
      expect(add('10,20,30')).to.equal(60);
      expect(add('1,20,30,50')).to.equal(101);
      expect(add('1,2,3,5,8,13,21,34,55,89')).to.equal(231);
    });
  });
});
