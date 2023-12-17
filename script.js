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

const playerChoice = prompt("Enter a choice: ").toLowerCase();
console.log(playerChoice);

// Function for playing the game
function playRound(playerChoice, computerChoice) {
  // THE COMPUTER CHOOSES ROCK
  if (playerChoice === "rock" && computerChoice === "Rock") {
    return "It's a tie.";
  } else if (playerChoice === "scissors" && computerChoice === "Rock") {
    return "You lose! The computer chose rock.";
  } else if (playerChoice === "paper" && computerChoice === "Rock") {
    return "You win! The computer chose rock.";
  }
  // THE COMPUTER CHOOSES PAPER
  else if (playerChoice === "rock" && computerChoice === "Paper") {
    return "You lose! The computer chose paper.";
  } else if (playerChoice === "paper" && computerChoice === "Paper") {
    return "It's a tie.";
  } else if (playerChoice === "scissors" && computerChoice === "Paper") {
    return "You win! The computer chose paper.";
  }
  // THE COMPUTER CHOSE SCISSORS
  else if (playerChoice === "rock" && computerChoice === "Scissors") {
    return "You win! The computer chose scissors.";
  } else if (playerChoice === "paper" && computerChoice === "Scissors") {
    return "You lose! The computer chose scissors.";
  } else if (playerChoice === "scissors" && computerChoice === "Scissors") {
    return "It's a tie.";
  } else {
    return "Please enter a valid choice.";
  }
}

console.log(playRound(playerChoice, computerChoice));
