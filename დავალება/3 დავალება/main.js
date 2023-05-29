
const numbersInput = document.getElementById('numbersInput');
const calculateAverageButton = document.getElementById('calculateAverageButton');
const averageResult = document.getElementById('averageResult');
function calculateAverage() {
  const numbersString = numbersInput.value;
  const numbersArray = numbersString.split(':');
  const numbers = numbersArray.map(Number);
  if (numbers.length > 0 && numbersArray.length > 0) {
    const sum = numbers.reduce((acc, num) => acc + num, 0);
    const average = sum / numbers.length;
    averageResult.textContent = average};
  } 
  numbersInput.value = '';

calculateAverageButton.addEventListener('click', calculateAverage);