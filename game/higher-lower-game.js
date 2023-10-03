// Initialize variables
let lowerBound = 1;
let upperBound = 10;
let secretNumber = generateRandomNumber(lowerBound, upperBound);
let guess = 0;
let attempts = 0;

// Function to generate a random number within the bounds
function generateRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Function to handle user's guess
function handleGuess() {
  const userGuess = parseInt(document.getElementById('guess').value);

  if (isNaN(userGuess) || userGuess < lowerBound || userGuess > upperBound) {
    setMessage('Please enter a valid guess within the bounds.');
  } else {
    attempts++;
    if (userGuess < secretNumber) {
      setMessage(`Too low! Try a higher number. Attempts: ${attempts}`);
    } else if (userGuess > secretNumber) {
      setMessage(`Too high! Try a lower number. Attempts: ${attempts}`);
    } else {
      setMessage(`Congratulations! You guessed the right number in ${attempts} attempts!`);
      document.getElementById('guess').disabled = true;
      document.getElementById('check-button').disabled = true;
    }
  }
}

// Function to set the message in the UI
function setMessage(message) {
  document.getElementById('message').textContent = message;
}

// Function to reset the game
function resetGame() {
  secretNumber = generateRandomNumber(lowerBound, upperBound);
  guess = 0;
  attempts = 0;
  setMessage('');
  document.getElementById('guess').value = '';
  document.getElementById('guess').disabled = false;
  document.getElementById('check-button').disabled = false;
}

// Event listener for the "Check" button
document.getElementById('check-button').addEventListener('click', handleGuess);

// Event listener for the "Reset" button
document.getElementById('reset-button').addEventListener('click', resetGame);
