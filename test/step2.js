var add = require('../step1');
var expect = require('chai').expect;

describe('Calculadora Kata', () => {
  describe('add', () => {

      it('Step1: Quando enviado string vazia retorne 0', () => {
        expect(add('')).to.equal(0)
      });

      it('STep1: Quando enviado apenas um numero retorne o proprio numero', () => {
        expect(add('1')).to.equal(1)
      });

      it('Step1: Quando enviado apenas um numero retorne o proprio numero', () => {
        expect(add('123')).to.equal(123)
      });

      it('Step1: Quando enviado dois numeros retorne a soma dos dois', () => {
        expect(add('1,2')).to.equal(3)
      });

      it('Stpe1: Quando enviado dois numeros retorne a soma dos dois', () => {
        expect(add('123,456')).to.equal(579)
      });

      it('step2: Permitir que add receba quantidade desconhecida de números (passando um numero)', () => {
        expect(add('1')).to.equal(1)
      });

      it('step2: Permitir que add receba quantidade desconhecida de números (passando dois numeros)', () => {
        expect(add('33,45')).to.equal(78)
      });

      it('step2: Permitir que add receba quantidade desconhecida de números (passando mais de dois numeros)', () => {
        expect(add('1,2,3,4,5,6')).to.equal(21)
      });
  });
});
