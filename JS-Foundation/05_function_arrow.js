class Calculator {
  add(a, b) {
    return a + b;
  }

  subtract(a, b) {
    return a - b;
  }

  multiple(a, b) {
    return a * b;
  }

  divide(a, b) {
    if (b == 0) {
      return "Infinity";
    } else {
      return a / b;
    }
  }
}

const calculate = (price, quantity) => price * quantity;
