// app.test.js
const { sum, multiply, toUpperCase } = require('../public/app');

test('soma dois números', () => {
    expect(sum(1, 2)).toBe(3);
});

test('multiplica dois números', () => {
    expect(multiply(2, 3)).toBe(6);
});

test('converte texto para maiúsculas', () => {
    expect(toUpperCase('texto')).toBe('TEXTO');
});
