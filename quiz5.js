const scores = [36, 62, 72, 55, 86, 95, 92, 48, 81];

function editScores(scores) {
  for(let i=0; i<scores.length; i++) scores[i] = calculator(scores[i], "+", 3);
}

editScores(scores);

console.log(scores);
// 기대값: [39, 65, 75, 58, 89, 98, 95, 51, 84]

function calculator(a, op, b) {
  switch(op){
    case "+": return a + b;
    case "-": return a - b;
    case "*": return a * b;
    case "/": return a / b;
    default: return NaN;
  }
}