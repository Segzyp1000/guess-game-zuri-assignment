let hiddenNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 3;

document.getElementById('submit').addEventListener('click', guess);

function guess() {
	const userGuess = document.getElementById('guess').value;
	
	if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
		alert('Please enter a valid number between 1 and 100.');
		return;
	}
	
	attempts--;
	
	if (userGuess < hiddenNumber) {
		document.getElementById('result').textContent = `Your guess is too low. You have ${attempts} attempts left.`;
	} else if (userGuess > hiddenNumber) {
		document.getElementById('result').textContent = `Your guess is too high. You have ${attempts} attempts left.`;
	} else {
		document.getElementById('result').textContent = `Congratulations! You guessed the number in ${3 - attempts} attempts.`;
		attempts = 0;
	}
	
	if (attempts === 0) {
		document.getElementById('submit').disabled = true;
	}
}
