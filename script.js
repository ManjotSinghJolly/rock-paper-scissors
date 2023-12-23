// console.log("Hello, World!");
// console.log("The JavaScript file is working!");

// Generates a random whole number between 1 and 3

//console.log(computerChoice);

//console.log(playerChoice);

let playerScore = 0;
let computerScore = 0;
//let playerChoice;
let isGameOver = false;

// prompt for the player's choice
// const playerChoice = prompt("Enter a choice: ").toLowerCase();
// console.log(playerChoice);

// Function for playing one round of the game
const result = document.getElementById("result");
const playerResult = document.getElementById("player");
const computerResult = document.getElementById("computer");
//const para = document.createElement("p");

function playRound(playerChoice) {
  // random choice for the computer's choice
  function getComputerChoice() {
    let x = Math.floor(Math.random() * 3 + 1);
    //console.log(x);

    if (x == 1) {
      return "Rock";
    } else if (x == 2) {
      return "Paper";
    } else {
      return "Scissors";
    }
  }

  const computerChoice = getComputerChoice();
  //console.log(computerChoice);

  // THE COMPUTER CHOOSES ROCK
  if (playerChoice === "rock" && computerChoice === "Rock") {
    result.textContent = "It's a tie.";
    playerResult.textContent = "Player Score: " + playerScore;
    computerResult.textContent = "Computer Score: " + computerScore;
  } else if (playerChoice === "scissors" && computerChoice === "Rock") {
    computerScore++;
    result.textContent = "You lose! The computer chose rock.";
    playerResult.textContent = "Player Score: " + playerScore;
    computerResult.textContent = "Computer Score: " + computerScore;
  } else if (playerChoice === "paper" && computerChoice === "Rock") {
    playerScore++;
    result.textContent = "You win! The computer chose rock.";
    playerResult.textContent = "Player Score: " + playerScore;
    computerResult.textContent = "Computer Score: " + computerScore;
  }
  // THE COMPUTER CHOOSES PAPER
  else if (playerChoice === "rock" && computerChoice === "Paper") {
    computerScore++;
    result.textContent = "You lose! The computer chose paper.";
    playerResult.textContent = "Player Score: " + playerScore;
    computerResult.textContent = "Computer Score: " + computerScore;
  } else if (playerChoice === "paper" && computerChoice === "Paper") {
    result.textContent = "It's a tie.";
    playerResult.textContent = "Player Score: " + playerScore;
    computerResult.textContent = "Computer Score: " + computerScore;
  } else if (playerChoice === "scissors" && computerChoice === "Paper") {
    playerScore++;
    result.textContent = "You win! The computer chose paper.";
    playerResult.textContent = "Player Score: " + playerScore;
    computerResult.textContent = "Computer Score: " + computerScore;
  }
  // THE COMPUTER CHOSE SCISSORS
  else if (playerChoice === "rock" && computerChoice === "Scissors") {
    playerScore++;
    result.textContent = "You win! The computer chose scissors.";
    playerResult.textContent = "Player Score: " + playerScore;
    computerResult.textContent = "Computer Score: " + computerScore;
  } else if (playerChoice === "paper" && computerChoice === "Scissors") {
    computerScore++;
    result.textContent = "You lose! The computer chose scissors.";
    playerResult.textContent = "Player Score: " + playerScore;
    computerResult.textContent = "Computer Score: " + computerScore;
  } else if (playerChoice === "scissors" && computerChoice === "Scissors") {
    result.textContent = "It's a tie.";
    playerResult.textContent = "Player Score: " + playerScore;
    computerResult.textContent = "Computer Score: " + computerScore;
  } else {
    result.textContent = "Please enter a valid choice.";
    playerResult.textContent = "Player Score: " + playerScore;
    computerResult.textContent = "Computer Score: " + computerScore;
  }

  // Checking if the game should continue or not
  if (playerScore === 5 || computerScore === 5) {
    // Showing an alert that the game is over and a reset is required
    //alert("Game over! Reset to play again.");

    // Disabling the buttons once one of the player has the score of 5.
    btn.forEach(function (input) {
      input.disabled = true;
    });
  }
}

// console.log(playRound(playerChoice, computerChoice));

// let i = 1;
// for (i = 1; i <= 5; i++) {
//   game();
// }

// Selecting all the button elements on the page
const btns = document.querySelectorAll(".input");

// Adding an event listener to each button
btns.forEach(function (btn) {
  btn.addEventListener("click", function () {
    //console.log("Button was clicked!");
    // Accessing the data-value of the button pressed
    var buttonValue = btn.getAttribute("data-value");
    playRound(buttonValue);
    // console.log("Player Score: " + playerScore);
    // console.log("Computer Score: " + computerScore);

    //Using the buttonValue variable in the alert prompt
    // alert("Button Clicked! Value: " + buttonValue);
    // if (
    //   buttonValue === "rock" ||
    //   buttonValue === "paper" ||
    //   buttonValue === "scissors"
    // ) {
    //   playerChoice = buttonValue;
    //   console.log(playRound(playerChoice));
    //   console.log("Player Score: " + playerScore);
    //   console.log("Computer Score: " + computerScore);
    // }
  });
});

// if (playerScore > computerScore) {
//   console.log(
//     `You won! Your score was ${playerScore}, and the computer's score was ${computerScore}.`
//   );
// } else if (playerScore < computerScore) {
//   console.log(
//     `You lost! Your score was ${playerScore}, and the computer's score was ${computerScore}.`
//   );
// } else {
//   console.log(
//     `It's a tie! Your score was ${playerScore}, and the computer's score was ${computerScore}.`
//   );
// }

// function myFunction() {
//   var buttonValue = ;
//   playRound(buttonValue);
// }
