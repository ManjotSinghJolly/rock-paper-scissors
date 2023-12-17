// console.log("Hello, World!");
// console.log("The JavaScript file is working!");

// Generates a random whole number between 1 and 3
function getComputerChoice() {
  let x = Math.floor(Math.random() * 3 + 1);
  console.log(x);

  if (x == 1) {
    return "Rock";
  } else if (x == 2) {
    return "Paper";
  } else {
    return "Scissors";
  }
}

const computerChoice = getComputerChoice();
console.log(computerChoice);

//console.log(playerChoice);

let playerScore = 0;
let computerScore = 0;

function game() {
  // prompt for the player's choice
  const playerChoice = prompt("Enter a choice: ").toLowerCase();

  // Function for playing one round of the game
  function playRound(playerChoice, computerChoice) {
    // THE COMPUTER CHOOSES ROCK
    if (playerChoice === "rock" && computerChoice === "Rock") {
      return "It's a tie.";
    } else if (playerChoice === "scissors" && computerChoice === "Rock") {
      computerScore++;
      return "You lose! The computer chose rock.";
    } else if (playerChoice === "paper" && computerChoice === "Rock") {
      playerScore++;
      return "You win! The computer chose rock.";
    }
    // THE COMPUTER CHOOSES PAPER
    else if (playerChoice === "rock" && computerChoice === "Paper") {
      computerScore++;
      return "You lose! The computer chose paper.";
    } else if (playerChoice === "paper" && computerChoice === "Paper") {
      return "It's a tie.";
    } else if (playerChoice === "scissors" && computerChoice === "Paper") {
      playerScore++;
      return "You win! The computer chose paper.";
    }
    // THE COMPUTER CHOSE SCISSORS
    else if (playerChoice === "rock" && computerChoice === "Scissors") {
      playerScore++;
      return "You win! The computer chose scissors.";
    } else if (playerChoice === "paper" && computerChoice === "Scissors") {
      computerScore++;
      return "You lose! The computer chose scissors.";
    } else if (playerChoice === "scissors" && computerChoice === "Scissors") {
      return "It's a tie.";
    } else {
      return "Please enter a valid choice.";
    }
  }

  console.log(playRound(playerChoice, computerChoice));
}

// calling the game() function 5 times
let i = 1;
for (i = 1; i <= 5; i++) {
  game();
}

//game();
if (playerScore > computerScore) {
  console.log(
    `You won! Your score was ${playerScore}, and the computer's score was ${computerScore}.`
  );
} else if (playerScore < computerScore) {
  console.log(
    `You lost! Your score was ${playerScore}, and the computer's score was ${computerScore}.`
  );
} else {
  console.log(
    `It's a tie! Your score was ${playerScore}, and the computer's score was ${computerScore}.`
  );
}
