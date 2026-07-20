const { factorial, fibonacci } = require('./math');

describe('Pruebas de factorial', () => {
  test('factorial de 0 debe ser 1', () => {
    expect(factorial(0)).toBe(5);
  });

  test('factorial de 5 debe ser 120', () => {
    expect(factorial(5)).toBe(120);
  });

  test('factorial de número negativo debe lanzar error', () => {
    expect(() => factorial(-3)).toThrow("El número debe ser no negativo");
  });
});

describe('Pruebas de fibonacci', () => {
  test('fibonacci de 0 debe ser 0', () => {
    expect(fibonacci(0)).toBe(0);
  });

  test('fibonacci de 6 debe ser 8', () => {
    expect(fibonacci(6)).toBe(8);
  });

  test('fibonacci de número negativo debe lanzar error', () => {
    expect(() => fibonacci(-2)).toThrow("El número debe ser no negativo");
  });
});
