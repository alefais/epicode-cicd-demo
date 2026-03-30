const { add, subtract, multiply, divide } = require('../src/calculator');

describe('add', () => {
  test('adds 2 + 3 to equal 5', () => {
    expect(add(2, 3)).toBe(5);
  });

  test('adds negative numbers', () => {
    expect(add(-1, -2)).toBe(-3);
  });

  test('adds zero', () => {
    expect(add(0, 5)).toBe(5);
  });
});

describe('subtract', () => {
  test('subtracts 5 - 3 to equal 2', () => {
    expect(subtract(5, 3)).toBe(2);
  });

  test('subtracts to a negative result', () => {
    expect(subtract(2, 5)).toBe(-3);
  });
});

describe('multiply', () => {
  test('multiplies 3 * 4 to equal 12', () => {
    expect(multiply(3, 4)).toBe(12);
  });

  test('multiplies by zero', () => {
    expect(multiply(7, 0)).toBe(0);
  });
});

describe('divide', () => {
  test('divides 10 / 2 to equal 5', () => {
    expect(divide(10, 2)).toBe(5);
  });

  test('divides to a decimal', () => {
    expect(divide(7, 2)).toBe(3.5);
  });

  test('throws on division by zero', () => {
    expect(() => divide(5, 0)).toThrow('Division by zero');
  });
});
