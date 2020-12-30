/* eslint-disable no-undef */
/*

Desafio 'FizzBuzz'!
Escreva uma lib que receba um número e:

Se o número for divisível por 3, no lugar do número escreva 'Fizz';
Se o número for divisível por 5, no lugar do númeor escreva 'Buzz';
Se o número for divisível por 3 e 5, no lugar do número escreva 'FizzBuzz';
Se não for múltiplo de nada, retorne o número;

*/

import { expect } from 'chai';
import FizzBuzz from '../src/main';

describe('FizzBuzz', () => {
  it('Should retorn `Fizz` when multiple of 3', () => {
    expect(FizzBuzz(3)).to.be.equal('Fizz');
    expect(FizzBuzz(6)).to.be.equal('Fizz');
  });

  it('Should retorn `Buzz` when multiple of 5', () => {
    expect(FizzBuzz(5)).to.be.equal('Buzz');
    expect(FizzBuzz(10)).to.be.equal('Buzz');
  });

  it('Should retorn `FizzBuzz` when multiple of 3 and 5', () => {
    expect(FizzBuzz(15)).to.be.equal('FizzBuzz');
  });

  it('Should retorn the number when non-multiple', () => {
    expect(FizzBuzz(7)).to.be.equal(7);
  });
});