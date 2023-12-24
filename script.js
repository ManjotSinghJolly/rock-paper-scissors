let playerScore = 0;
let computerScore = 0;

const result = document.getElementById("result");
const playerResult = document.getElementById("player");
const computerResult = document.getElementById("computer");
const choiceText = document.getElementById("choices");
var image1 = document.createElement("img");
var image2 = document.createElement("img");
var image3 = document.createElement("img");

var smallBox1 = document.getElementById("small-box-1");
var smallBox2 = document.getElementById("small-box-2");

function playRound(playerChoice) {
  if (playerScore === 5 || computerScore === 5) {
    alert("Please refresh the page to play again!");
  } else {
    function getComputerChoice() {
      let x = Math.floor(Math.random() * 3 + 1);

      if (x == 1) {
        return "Rock";
      } else if (x == 2) {
        return "Paper";
      } else {
        return "Scissors";
      }
    }

    const computerChoice = getComputerChoice();

    // THE COMPUTER CHOOSES ROCK
    if (playerChoice === "rock" && computerChoice === "Rock") {
      result.textContent = "It's a tie.";
      choiceText.textContent = "You both chose Rock!";

      smallBox1.innerHTML =
        '<img src = "rock.png" width = "90px" height = "90px" />';
      smallBox2.innerHTML =
        '<img src = "rock.png" width = "90px" height = "90px" />';

      playerResult.textContent = playerScore;
      computerResult.textContent = computerScore;
    } else if (playerChoice === "scissors" && computerChoice === "Rock") {
      computerScore++;
      result.textContent = "You lose!";
      choiceText.textContent = "The computer chose Rock!";

      smallBox1.innerHTML =
        '<img src = "scissors.png" width = "110px" height = "70px" />';
      smallBox2.innerHTML =
        '<img src = "rock.png" width = "90px" height = "90px" />';

      playerResult.textContent = playerScore;
      computerResult.textContent = computerScore;
    } else if (playerChoice === "paper" && computerChoice === "Rock") {
      playerScore++;
      result.textContent = "You win!";
      choiceText.textContent = "The computer chose Rock!";

      smallBox1.innerHTML =
        '<img src = "paper.png" width = "105px" height = "105px" />';
      smallBox2.innerHTML =
        '<img src = "rock.png" width = "90px" height = "90px" />';

      playerResult.textContent = playerScore;
      computerResult.textContent = +computerScore;
    }
    // THE COMPUTER CHOOSES PAPER
    else if (playerChoice === "rock" && computerChoice === "Paper") {
      computerScore++;
      result.textContent = "You lose!";
      choiceText.textContent = "The computer chose Paper!";

      smallBox1.innerHTML =
        '<img src = "rock.png" width = "90px" height = "90px" />';
      smallBox2.innerHTML =
        '<img src = "paper.png" width = "105px" height = "105px" />';

      playerResult.textContent = playerScore;
      computerResult.textContent = computerScore;
    } else if (playerChoice === "paper" && computerChoice === "Paper") {
      result.textContent = "It's a tie.";
      choiceText.textContent = "You both chose Paper!";

      smallBox1.innerHTML =
        '<img src = "paper.png" width = "105px" height = "105px" />';

      smallBox2.innerHTML =
        '<img src = "paper.png" width = "105px" height = "105px" />';

      playerResult.textContent = playerScore;
      computerResult.textContent = computerScore;
    } else if (playerChoice === "scissors" && computerChoice === "Paper") {
      playerScore++;
      result.textContent = "You win!";
      choiceText.textContent = "The computer chose Paper!";

      smallBox1.innerHTML =
        '<img src = "scissors.png" width = "110px" height = "70px" />';

      smallBox2.innerHTML =
        '<img src = "paper.png" width = "105px" height = "105px" />';

      playerResult.textContent = playerScore;
      computerResult.textContent = computerScore;
    }
    // THE COMPUTER CHOSE SCISSORS
    else if (playerChoice === "rock" && computerChoice === "Scissors") {
      playerScore++;
      result.textContent = "You win!";
      choiceText.textContent = "The computer chose Scissors!";

      smallBox1.innerHTML =
        '<img src = "rock.png" width = "90px" height = "90px" />';

      smallBox2.innerHTML =
        '<img src = "scissors.png" width = "110px" height = "70px" />';

      playerResult.textContent = playerScore;
      computerResult.textContent = computerScore;
    } else if (playerChoice === "paper" && computerChoice === "Scissors") {
      computerScore++;
      result.textContent = "You lose!";
      choiceText.textContent = "The computer chose Scissors!";

      smallBox1.innerHTML =
        '<img src = "paper.png" width = "105px" height = "105px" />';
      smallBox2.innerHTML =
        '<img src = "scissors.png" width = "110px" height = "70px" />';

      playerResult.textContent = playerScore;
      computerResult.textContent = computerScore;
    } else if (playerChoice === "scissors" && computerChoice === "Scissors") {
      result.textContent = "It's a tie.";
      choiceText.textContent = "You both chose Scissors!";

      smallBox1.innerHTML =
        '<img src = "scissors.png" width = "110px" height = "70px" />';
      smallBox2.innerHTML =
        '<img src = "scissors.png" width = "110px" height = "70px" />';

      playerResult.textContent = playerScore;
      computerResult.textContent = computerScore;
    } else {
      result.textContent = "Please enter a valid choice.";
      choiceText.textContent = "Please enter a valid choice.";
    }
  }
}

// Selecting all the button elements on the page

const btns = document.querySelectorAll(".input");

// Adding an event listener to each button
btns.forEach(function (btn) {
  btn.addEventListener("click", function () {
    // Checking which buttons was clicked and storing the value in the variable
    var buttonValue = btn.getAttribute("data-value");

    playRound(buttonValue);
  });
});
