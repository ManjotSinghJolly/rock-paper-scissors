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
