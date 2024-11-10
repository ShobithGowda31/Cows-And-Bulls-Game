function generateSecretNumber() {
    let digits = [];
    while (digits.length < 4) {
        let digit = Math.floor(Math.random() * 10); 
        if (!digits.includes(digit)) {  
            digits.push(digit);
        }
    }
    return digits.join('');
}

const secretNumber = generateSecretNumber();
let attempts = 0;
document.addEventListener('DOMContentLoaded', () => {
    const playerNameInput = document.getElementById('playerName');
    const guessInput = document.getElementById('guessInput');
    const submitButton = document.getElementById('submitGuess');
    const feedback = document.getElementById('feedback');
    const previousGuessesList = document.getElementById('previousGuesses');
    const secretNumber = generateSecretNumber();

    let playerName = '';
    let attempts = 0;
    let previousGuesses = [];

    function generateSecretNumber() {
        let digits = new Set();
        while (digits.size < 4) {
            const randomDigit = Math.floor(Math.random() * 10);
            digits.add(randomDigit);
        }
        return Array.from(digits).join('');
    }

    submitButton.addEventListener('click', () => {
        // Capture player's name if not already set
        if (!playerName) {
            playerName = playerNameInput.value.trim();
            if (!playerName) {
                feedback.textContent = 'Please enter your name before making a guess.';
                return;
            } else {
                feedback.textContent = `Welcome, ${playerName}! Make your first guess.`;
            }
        }

        const guess = guessInput.value.trim();
        if (guess.length !== 4 || isNaN(guess)) {
            return (feedback.textContent = 'Please enter a valid 4-digit number.');  
        }
        if (new Set(guess).size !== guess.length) {
            return (feedback.textContent = 'No duplicate digits allowed.');
        }
        
        attempts++;
        previousGuesses.push(guess);
        const { cows, bulls } = calculateCowsAndBulls(guess, secretNumber);

        if (bulls === 4) {
            feedback.textContent = `Congratulations, ${playerName}! You guessed the number ${secretNumber} correctly in ${attempts} attempts!`;
            submitButton.disabled = true; // Disable further input if the player wins
            return;
        }

        feedback.textContent = `Attempt ${attempts}: You guessed ${guess} - ${bulls} Bulls, ${cows} Cows`;
        updatePreviousGuesses();
        guessInput.value = '';
    });

    function updatePreviousGuesses() {
        previousGuessesList.innerHTML = ''; // Clear existing list
        previousGuesses.forEach((guess, index) => {
            const listItem = document.createElement('li');
            listItem.textContent = `Attempt ${index + 1}: ${guess}`;
            previousGuessesList.appendChild(listItem);
        });
    }
    function calculateCowsAndBulls(guess, secret) {
        let bulls = 0;
        let cows = 0;
        const secretArr = secret.split('');
        const guessArr = guess.split('');
        
        for (let i = 0; i < 4; i++) {
            if (guessArr[i] === secretArr[i]) {
                bulls++;
                guessArr[i] = secretArr[i] = null; // Mark matched digits
            }
        }
        for (let i = 0; i < 4; i++) {
            if (guessArr[i] !== null && secretArr.includes(guessArr[i])) {
                cows++;
                secretArr[secretArr.indexOf(guessArr[i])] = null; // Mark matched digit
            }
        }
        return { cows, bulls };
    }
});



