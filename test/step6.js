var add = require('../step6');
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
        expect(add('1,2,123,4,235,6,2345')).to.equal(371);
        expect(add('10,20,30')).to.equal(60);
        expect(add('1,20,30,50')).to.equal(101);
        expect(add('1,2,3,5,8,13,21,34,55,89')).to.equal(231);
      });

      it('Deve aceitar diferentes tipos de entrada', () => {
        expect(add("1\n2,3")).to.equal(6)
        expect(add("22\n33,43")).to.equal(98)
        expect(add("22,33,44,33,6\n43")).to.equal(181)
        expect(add("22,33,44\n33\n43")).to.equal(175)
      });

      it('Deve suportar diferentes tipos de delimitador', () => {
        expect(add("//;\n1;2")).to.equal(3)
        expect(add("//-\n1-2-32")).to.equal(35)
        expect(add("//_\n1_2_543_234")).to.equal(780)
        expect(add("//:\n1:2:123:1234,123")).to.equal(249)
        expect(add("//&\n1&2&3,4,5,6\n7\n8\n9")).to.equal(45)
      });

      it('não deve calcular com numeros negativos', () => {
        expect(() => add('1,2,3,-4,5,6')).to.throw('negatives not allowed:-4')
        expect(() => add('1,2,3,-4,534,634')).to.throw('negatives not allowed:-4')
        expect(() => add('1,-232,3,-4,534,634')).to.throw('negatives not allowed:-232,-4')
        expect(() => add("1\n2,-3,-4")).to.throw('negatives not allowed:-3,-4')
        expect(() => add("22,33,-44,-338,6\n43")).to.throw('negatives not allowed:-44,-338')
        expect(() => add("//&\n1&2&3,4,-5,6\n-7\n8\n9")).to.throw('negatives not allowed:-5,-7')
      });

      it('Deve ignorar numeros acima de 1000', () => {
        expect(add('100,101,1001')).to.equal(201)
        expect(add('1,43212,1001')).to.equal(1)
        expect(add('1,43212,1001, 1000')).to.equal(1001)
      });
  });
});
