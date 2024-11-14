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
console.log('Secret Number: ${SecretNumber}');
let playerName = '';
let attempts = 0;
let previousGuesses = [];

document.addEventListener('DOMContentLoaded', () => {
    const playerNameInput = document.getElementById('playerName');
    const guessInput = document.getElementById('guessInput');
    const submitButton = document.getElementById('submitGuess');
    const feedback = document.getElementById('feedback');
    const previousGuessesList = document.getElementById('previousGuesses');
    const secretNumber = generateSecretNumber();

    submitButton.addEventListener('click', () => {
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
        if (previousGuesses.includes(guess)) {
            feedback.textContent = 'You already tried this number. Enter a new guess.';//Repated number is updated
            return;
        }
        
        attempts++;
        previousGuesses.push(guess);
        const { cows, bulls } = calculateCowsAndBulls(guess, secretNumber);
        console.log(guess,bulls,cows);

        if (bulls === 4) {
            feedback.textContent = `Congratulations, ${playerName}! You guessed the number ${secretNumber} correctly in ${attempts} attempts!`;
            submitButton.disabled = true; 
            return;
        }

        feedback.textContent = `Attempt ${attempts}: You guessed ${guess} - ${bulls} Bulls, ${cows} Cows`;
        updatePreviousGuesses(guess,bulls,cows);// mentioned the previous guesses lists
        guessInput.value = '';
    });

    function updatePreviousGuesses(guess,bulls,cows) {
        const listItem = document.createElement('li');
        listItem.textContent = `Attempt ${attempts}: ${guess} - ${bulls} Bulls, ${cows} Cows`; //Updated here to display bulls cows in list
        previousGuessesList.appendChild(listItem);
    }
    function calculateCowsAndBulls(guess, secret) {
        let bulls = 0;
        let cows = 0;
        const secretArr = secret.split('');
        const guessArr = guess.split('');
        
        for (let i = 0; i < 4; i++) {
            if (guessArr[i] === secretArr[i]) {
                bulls++;
                guessArr[i] = secretArr[i] = null;
            }
        }
        for (let i = 0; i < 4; i++) {
            if (guessArr[i] !== null && secretArr.includes(guessArr[i])) {
                cows++;
                secretArr[secretArr.indexOf(guessArr[i])] = null;
            }
        }
        return { cows, bulls };
    }
});



