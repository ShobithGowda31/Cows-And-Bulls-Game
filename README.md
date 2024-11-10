                     Cows and Bulls Game Web Implementation
Project Overview : 

          > The Cows and Bulls game is a classic code-breaking game where players attempt to guess a secret 4-digit number.
          > Each digit must be unique, and the game provides feedback in terms of "bulls" (correct digit in the correct position) and "cows" (correct digit in an incorrect position).
          > The web-based implementation of the game is built using HTML, CSS, and JavaScript to provide an interactive user experience.
          
Tools and Technologies Used :

     1. HTML (Hypertext Markup Language):
            > Used for structuring the content and layout of the web page.
            > Provided form inputs for player name and guesses.
     2. CSS (Cascading Style Sheets):
            > Used for styling the web page to enhance the user interface and make it visually appealing.
            > Styling elements such as background color, text color, font size, margins, and padding were applied to improve the user experience.
            > Classes and IDs were used to uniquely style different sections like input boxes, feedback display, and the list of previous guesses.
     3. JavaScript (ES6):
            > Used for implementing the game logic and interaction with the user interface.

Implementation Details

  1.Game Setup: 
  
     - On page load, a 4-digit secret number is generated with unique digits.
     - Players enter their name and start making guesses.
     
  2.Game Logic:
  
     - Player inputs are validated to ensure the guess is a valid 4-digit number.
     - Feedback is provided for each guess, indicating the number of bulls and cows.
     - The game tracks the number of attempts and maintains a list of previous guesses.
     - When the player guesses correctly (4 bulls), a congratulatory message is displayed, and further input is disabled.


Example Usage

   1.Player Name Input: Players start by entering their name.
   2.Guess Submission: Enter a 4-digit number with unique digits and submit the guess.
   3.Feedback Display: Feedback on bulls and cows is displayed for each guess.
   4.Game Win Condition: If a player gets 4 bulls, they win the game, and feedback congratulates them.
