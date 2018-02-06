var add = require('../step1');
var expect = require('chai').expect;


describe.only('Calculadora Kata', () => {
  describe('add', () => {

    it('Quando enviado string vazia retorne 0', () => {
      expect(add(' ')).to.equal(0)
    });

    it('Quando enviado apenas um numero retorne o proprio numero', () => {
      expect(add('1')).to.equal(1)
    });
  });
});