let correctAnswer;

function generateEquation() {
  const operation = document.getElementById('operation').value;
  const digits = parseInt(document.getElementById('digits').value, 10);
  const maxNumber = parseInt(document.getElementById('maxNumber').value, 10);

  const randomNumber = () => Math.floor(Math.random() * maxNumber) + 1;

  let equation = '';
  correctAnswer = 0;

  for (let i = 0; i < digits; i++) {
    const operand = randomNumber();
    equation += `${operand} `;
    correctAnswer = calculateCorrectAnswer(operation, equation);
    if (i < digits - 1) {
      if (operation === 'addition') equation += '+ ';
      else if (operation === 'subtraction') equation += '- ';
      else if (operation === 'multiplication') equation += '× ';
      else if (operation === 'division') equation += '÷ ';
    }
  }
  
  document.getElementById('equation').innerText = equation;
}

function calculateCorrectAnswer(operation, equation) {
  if (operation === 'addition') return eval(equation);
  else if (operation === 'subtraction') return eval(equation);
  else if (operation === 'multiplication') {
    equation = equation.replace(/×/g, '*')
    return eval(equation)
  }
  else if (operation === 'division') {
    equation = equation.replace(/÷/g, '/')
    return eval(equation)
  };
}

function checkAnswer() {
  const userAnswer = parseFloat(document.getElementById('answer').value, 10);
  if (userAnswer == parseFloat(correctAnswer.toFixed(2))) {
    document.getElementById('result').innerText = 'Correct!';
  } else {
    document.getElementById('result').innerText = 'Incorrect. Try again!';
  }
}

function handleKeyPress(event) {
    if (event.key === 'Enter') {
      checkAnswer();
    }
  }