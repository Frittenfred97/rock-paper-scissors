//Gobal Variables
const rock = document.getElementById("rock_btn");
const paper = document.getElementById("paper_btn");
const scissor = document.getElementById("scissor_btn");
const restart_btn = document.getElementById("restart_btn");
restart_btn.style.display = "none";
let playerSelection = "";
let gplayerCount = 0;
let gcomputerCount = 0;
roundNote.textContent = "Choose an option!";
countUser.textContent = `No points gained! | ${gplayerCount} | 👨‍💻`;
countComputer.textContent = `🖥 | ${gcomputerCount} | No points gained!`;

//function that generates a random number between 0 and 2 and convert that number in Rock, paper or scissor.

function computerSelection() {
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

function playRound(playerSelection) {
  const roundNote = document.getElementById("roundNote");
  let computerPlay = computerSelection();

  if (playerSelection == "rock" && computerPlay == "scissor") {
    roundNote.textContent = "Player wins, rock beats scissor";
    return "Player";
  } else if (playerSelection == "scissor" && computerPlay == "rock") {
    roundNote.textContent = "Computer wins, rock beats scissor";
    return "Computer";
  } else if (playerSelection == "scissor" && computerPlay == "paper") {
    roundNote.textContent = "Player wins, scissor beats paper";
    return "Player";
  } else if (playerSelection == "paper" && computerPlay == "scissor") {
    roundNote.textContent = "Computer wins, scissor beats paper";
    return "Computer";
  } else if (playerSelection == "paper" && computerPlay == "rock") {
    roundNote.textContent = "Player wins, paper beats rock";
    return "Player";
  } else if (playerSelection == "rock" && computerPlay == "paper") {
    roundNote.textContent = "Computer wins, paper beats rock";
    return "Computer";
  } else if (playerSelection == "rock" && computerPlay == "rock") {
    roundNote.textContent = "Tie, rock is equal to rock";
    return "Tie";
  } else if (playerSelection == "paper" && computerPlay == "paper") {
    roundNote.textContent = "Tie, paper is equal to paper";
    return "Tie";
  } else if (playerSelection == "scissor" && computerPlay == "scissor") {
    roundNote.textContent = "Tie, scissor is equal to scissor";
    return "Tie";
  } else {
    roundNote.textContent = "oh no, a dinosaur wins this game";
    return "error";
  }
}

function countPoints(playerCount, computerCount) {
  const countUser = document.getElementById("countUser");
  const countComputer = document.getElementById("countComputer");

  while (playerCount < 5 && computerCount < 5) {
    let playRoundVar = playRound(playerSelection);

    if (playRoundVar.includes("Player")) {
      playerCount++;
      countUser.textContent = `Point for player! | ${playerCount} | 👨‍💻`;
      countComputer.textContent = `🖥 | ${computerCount} | No points gained!`;
    } else if (playRoundVar.includes("Computer")) {
      computerCount++;
      countComputer.textContent = `🖥 | ${computerCount} | Point for computer!`;
      countUser.textContent = `No points gained! | ${playerCount} | 👨‍💻`;
    }

    if (playerCount === 5) {
      roundNote.textContent = "The Player has won the Game!";
      restart_btn.style.display = "";
    } else if (computerCount === 5) {
      roundNote.textContent = "The Computer has won the Game!";
      restart_btn.style.display = "";
    }

    gplayerCount = playerCount;
    gcomputerCount = computerCount;

    break;
  }
}

function removeButton() {
  const divRemove = document.getElementById("restart");
  divRemove.removeChild(createButton);
}

function restart() {
  playerSelection = "";
  gplayerCount = 0;
  gcomputerCount = 0;
  roundNote.textContent = "Choose an option!";
  countUser.textContent = `No points gained! | ${gplayerCount} | 👨‍💻`;
  countComputer.textContent = `🖥 | ${gcomputerCount} | No points gained!`;
  restart_btn.style.display = "none";
}

rock.addEventListener("click", () => {
  playerSelection = "rock";
  countPoints(gplayerCount, gcomputerCount);
});
paper.addEventListener("click", () => {
  playerSelection = "paper";
  countPoints(gplayerCount, gcomputerCount);
});
scissor.addEventListener("click", () => {
  playerSelection = "scissor";
  countPoints(gplayerCount, gcomputerCount);
});

restart_btn.addEventListener("click", restart);
