//function that generates a random number between 0 and 2 and convert that number in Rock, paper or scissor.

function computerPlay() {
  const randomNumber = Math.floor(Math.random() * 3);

  // Rock = 0 | Paper = 1 | Scissor = 2

  if (randomNumber == 0) {
    return "rock";
  } else if (randomNumber == 1) {
    return "paper";
  } else if (randomNumber == 2) {
    return "scissor";
  }
}

//function that gives the output of the winning team.

function playRound(playerSelection, computerSelection) {
  if (playerSelection == "rock" && computerSelection == "scissor") {
    return "Player wins, rock beats scissor";
  } else if (playerSelection == "scissor" && computerSelection == "rock") {
    return "Computer wins, rock beats scissor";
  } else if (playerSelection == "scissor" && computerSelection == "paper") {
    return "Player wins,̉ scissor beats paper";
  } else if (playerSelection == "paper" && computerSelection == "scissor") {
    return "Computer wins, scissor beats paper";
  } else if (playerSelection == "paper" && computerSelection == "rock") {
    return "Player wins, paper beats rock";
  } else if (playerSelection == "rock" && computerSelection == "paper") {
    return "Computer wins, paper beats rock";
  } else if (playerSelection == "rock" && computerSelection == "rock") {
    return "Tie, rock is equal to rock";
  } else if (playerSelection == "paper" && computerSelection == "paper") {
    return "Tie, paper is equal to paper";
  } else if (playerSelection == "scissor" && computerSelection == "scissor") {
    return "Tie, scissor is equal to scissor";
  } else {
    return "oh no, a dinnosaur wins this game";
  }
}

//const playerSelection = prompt("Rock, paper or scissor?");
//const computerSelection = computerPlay();

//let playRoundVar = playRound(playerSelection, computerSelection);
//console.log(playRoundVar);

function searchWin(playRoundVar) {
  if (playRoundVar.includes("Player")) {
    return "1 point for Player";
  } else if (playRoundVar.includes("Computer")) {
    return "1 point for Computer";
  } else {
    return "Tie. No points given";
  }
}
//console.log(searchWin(playRoundVar));

let playerCount = 0;
let computerCount = 0;


while (playerCount <5 && computerCount <5) {

  const playerSelection = prompt("Rock, paper or scissor?").toLowerCase();
  const computerSelection = computerPlay();
  let playRoundVar = playRound(playerSelection, computerSelection);

  console.log(playRoundVar);
  console.log(searchWin(playRoundVar));

  if (playRoundVar.includes("Player")) {
    playerCount++;
    console.log(`Player has ${playerCount} points.`);
  } else if (playRoundVar.includes("Computer")) {
    computerCount++;
    console.log(`Computer has ${computerCount} points.`);
  }

  if (playerCount == 5) {
    console.log("The Player has won the Game!");
  } else if (computerCount == 5) {
    console.log("The Computer has won the Game!");
  }

}
