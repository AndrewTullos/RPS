// Define a class for the Rock, Paper, Scissors game
class RockPaperScissorsGame {
  constructor() {
    // Array of possible choices
    this.choices = ['rock', 'paper', 'scissors'];
    
    // Initialize scores for the user and CPU
    this.userScore = 0;
    this.cpuScore = 0;

    // Select choice elements and result text from the HTML
    this.choicesElements = document.querySelectorAll('.choice');
    this.resultText = document.getElementById('result-text');
    this.userWins = document.getElementById('user-wins');
    this.cpuWins = document.getElementById('cpu-wins');

    // Add event listeners to each choice element
    this.choicesElements.forEach(choice => {
      choice.addEventListener('click', () => this.playGame(choice.id));
    });
  }

  // Method to play a game round
  playGame(userChoice) {
    // Generate a random CPU choice
    const randomIndex = Math.floor(Math.random() * 3);
    const cpuChoice = this.choices[randomIndex];

    // Determine the winner of the round
    const winner = this.decideWinner(userChoice, cpuChoice);

    // Update the result and scores based on the winner
    if (winner === 'user') {
      this.updateResult(`You win! ${userChoice} beats ${cpuChoice}.`);
      this.userScore++;
      this.updateScores();
    } else if (winner === 'cpu') {
      this.updateResult(`You lose! ${cpuChoice} beats ${userChoice}.`);
      this.cpuScore++;
      this.updateScores();
    } else {
      this.updateResult(`It's a tie! Both chose ${userChoice}.`);
    }
  }

  // Method to determine the winner of a round
  decideWinner(user, cpu) {
    if (user === cpu) {
      return 'tie';
    } else if (
      (user === 'rock' && cpu === 'scissors') ||
      (user === 'paper' && cpu === 'rock') ||
      (user === 'scissors' && cpu === 'paper')
    ) {
      return 'user';
    } else {
      return 'cpu';
    }
  }

  // Method to update the result text
  updateResult(message) {
    this.resultText.textContent = message;
  }

  // Method to update the user and CPU scores
  updateScores() {
    this.userWins.textContent = this.userScore;
    this.cpuWins.textContent = this.cpuScore;
  }
}

// Create an instance of the game class
const game = new RockPaperScissorsGame();
