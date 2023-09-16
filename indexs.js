let correctAnswer;

function generateEquation() {
  const digits = '2';
  const maxNumber = "12";

  const randomNumber = () => Math.floor(Math.random() * maxNumber) + 1;

  let equation = '';
  correctAnswer = 0;

  for (let i = 0; i < digits; i++) {
    const operand = randomNumber();
    equation += `${operand} `;
    correctAnswer = calculateCorrectAnswer(equation);
    if (i < digits - 1) {
      equation += '× ';
    }
  }
  
  document.getElementById('equation').innerText = equation;
}

function calculateCorrectAnswer(equation) {
    equation = equation.replace(/×/g, '*')
    return eval(equation)
}

function checkAnswer() {
  const userAnswer = parseFloat(document.getElementById('answer').value, 10);
  if (userAnswer == parseFloat(correctAnswer)) {
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
  generateEquation()