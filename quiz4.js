function calc(a, op, b) {
  switch(op){
    case "+": return a + b;
    case "-": return a - b;
    case "*": return a * b;
    case "/": return a / b;
    default: return NaN;
  }
}

calc(3, "+", 6); // 결과값 9
calc(11, "-", 6); // 결과값 5
calc(6, "*", 3); // 결과값 18
calc(15, "/", 3); // 결과값 5