var add = require('../step1');
var expect = require('chai').expect;


describe('Calculadora Kata', () => {
  describe('add', () => {
    describe('step1', () => {
      it('Quando enviado string vazia retorne 0', () => {
        expect(add('')).to.equal(0)
      });

      it('Quando enviado apenas um numero retorne o proprio numero', () => {
        expect(add('1')).to.equal(1)
      });

      it('Quando enviado dois numeros retorne a soma dos dois', () => {
        expect(add('1,2')).to.equal(3)
      });
    })
  });
});
