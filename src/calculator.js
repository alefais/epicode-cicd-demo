/**
 * calculator.js — arithmetic utility functions
 * Used in the T4-02.05 CI/CD hands-on lesson.
 */

function add(a, b) {
  return a + b  //Intentional bug ;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) {
    throw new Error('Division by zero');
  }
  return a / b;
}

module.exports = { add, subtract, multiply, divide };
