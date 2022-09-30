let getComputerChoice = function () {
  //Picks a random option for computer's choice and returns the string.
  let choiceArr = ["Rock", "Paper", "Scissors"];
  let randomIndex = Math.floor(Math.random() * choiceArr.length);
  let choice = choiceArr[randomIndex];
  return choice;
};

let playRound = function (playerSelection, computerSelection) {
  //Function to check the winner of a round of RPS
  //let res;
  if (playerSelection === "rock" && computerSelection === "paper") {
    //res = "You Lose! Paper beats Rock";
    computerScore += 1;
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    //res = "You Win! Rock beats Scissors";
    playerScore += 1;
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    //res = "You Win! Paper beats Rock";
    playerScore += 1;
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    //res = "You Lose! Scissors beats Paper";
    computerScore += 1;
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    //res = "You Win! Scissors beats Paper";
    playerScore += 1;
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
    //res = "You Lose! Rock beats Scissors";
    computerScore += 1;
  } else if (playerSelection === computerSelection) {
    playerScore += 0;
    computerScore += 0;
    //res = "It's a tie!";
  }
  //console.log(res);
  //return res;
};

let game = function () {
  //Function which initiates 5 rounds of RPS, keeps the count of scores and displays the winner
  let computerSelection;

  rock.addEventListener("click", selectRock);
  paper.addEventListener("click", selectPaper);
  scissors.addEventListener("click", selectScissors);

  function selectRock() {
    if (playerScore == 5) {
      result.innerHTML = "<strong>You have won the game!</strong>";
    } else if (computerScore == 5) {
      result.innerHTML = "<strong>You have lost the game!</strong>";
    } else {
      computerSelection = getComputerChoice().toLowerCase();
      playRound("rock", computerSelection);
      result.innerHTML = "";
    }
    current.innerHTML = `You chose ROCK and Computer chose ${computerSelection.toUpperCase()} <br> Player: ${playerScore} Computer: ${computerScore}`;
    document.body.appendChild(current);
    resultDiv.appendChild(result);
    document.body.appendChild(resultDiv);
  }

  function selectPaper() {
    if (playerScore == 5) {
      result.innerHTML = "<strong>You have won the game!</strong>";
    } else if (computerScore == 5) {
      result.innerHTML = "<strong>You have lost the game!</strong>";
    } else {
      computerSelection = getComputerChoice().toLowerCase();
      playRound("paper", computerSelection);
      result.innerHTML = "";
    }
    current.innerHTML = `You chose PAPER and Computer chose ${computerSelection.toUpperCase()} <br> Player: ${playerScore} Computer: ${computerScore}`;
    document.body.appendChild(current);
    resultDiv.appendChild(result);
    document.body.appendChild(resultDiv);
  }

  function selectScissors() {
    if (playerScore == 5) {
      result.innerHTML = "<strong>You have won the game!</strong>";
    } else if (computerScore == 5) {
      result.innerHTML = "<strong>You have lost the game!</strong>";
    } else {
      computerSelection = getComputerChoice().toLowerCase();
      playRound("scissors", computerSelection);
      result.innerHTML = "";
    }
    current.innerHTML = `You chose SCISSORS and Computer chose ${computerSelection.toUpperCase()} <br> Player: ${playerScore} Computer: ${computerScore}`;
    document.body.appendChild(current);
    resultDiv.appendChild(result);
    document.body.appendChild(resultDiv);
  }
};

let playerScore = 0; //initialization
let computerScore = 0; //initialization

let div = document.createElement("div");
let current = document.createElement("p");
let resultDiv = document.createElement("div");
let result = document.createElement("p");

let para = document.createElement("p");
para.innerHTML = "First to 5 points wins! <br><br> Choose an option:";

let rock = document.createElement("button");
rock.textContent = "Rock";

let paper = document.createElement("button");
paper.textContent = "Paper";

let scissors = document.createElement("button");
scissors.textContent = "Scissors";

div.appendChild(para);
div.appendChild(rock);
div.appendChild(paper);
div.appendChild(scissors);
document.body.appendChild(div);

game();

//console.log(playRound(playerSelection,computerSelection));
