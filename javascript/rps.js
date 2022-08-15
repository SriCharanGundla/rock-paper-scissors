let getComputerChoice = function () {
  let choiceArr = ["Rock", "Paper", "Scissors"];
  let randomIndex = Math.floor(Math.random() * choiceArr.length);
  let choice = choiceArr[randomIndex];
  return choice;
};

let playRound = function (playerSelection, computerSelection) {
  //let res;
  if (playerSelection === "rock" && computerSelection === "paper") {
    //res = 'You Lose! Paper beats Rock';
    computerScore += 1;
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    //res = 'You Win! Rock beats Scissors';
    playerScore += 1;
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    //res = 'You Win! Paper beats Rock';
    playerScore += 1;
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    //res = 'You Lose! Scissors beats Paper';
    computerScore += 1;
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    //res = 'You Win! Scissors beats Paper';
    playerScore += 1;
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
    //res = 'You Lose! Rock beats Scissors';
    computerScore += 1;
  } else if (playerSelection === computerSelection) {
    playerScore += 0;
    computerScore += 0;
    //res = "It's a tie!";
  }
  //return res;
};

let game = function () {
  let i;
  for (i = 0; i < 5; i++) {
    let playerSelection = prompt(
      "Enter a choice - Rock,Paper or Scissors"
    ).toLowerCase();
    let computerSelection = getComputerChoice().toLowerCase();
    playRound(playerSelection, computerSelection);
  }

  if (parseInt(playerScore) > parseInt(computerScore)) {
    console.log(
      `You Win! Your score is ${playerScore} and the computer's score is ${computerScore}`
    );
  } else if (parseInt(playerScore) < parseInt(computerScore)) {
    console.log(
      `You Lose! Your score is ${playerScore} and the computer's score is ${computerScore}`
    );
  } else if (parseInt(playerScore) == parseInt(computerScore)) {
    console.log(`It's a tie!`);
  }
};

let playerScore = 0;
let computerScore = 0;

game();
console.log(playerScore);
console.log(computerScore);

//console.log(playRound(playerSelection,computerSelection));