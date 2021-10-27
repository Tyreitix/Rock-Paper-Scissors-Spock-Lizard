//Used for keeping track of player and computer wins for each round
var playerWins = 0;
var computerWins = 0;
//Used to keep track of round to be played
var rtp;
const para = document.getElementById("rounds");

//Starts the game
function startGame() {
  rtp = document.getElementById("ROUNDS_TO_PLAY");
  console.log("Playing rounds: " + parseInt(rtp.value));
}

//Sets the specified number of rounds to be played after the game has been started
function setRounds() {

    const para = document.getElementById("rounds");

    para.innerHTML = document.getElementById("ROUNDS_TO_PLAY").value;

}

//Decrements the round count after each round so the game knows when to stop
function updateRounds() {
  const para = document.getElementById("rounds");
  rounds = Number(para.innerHTML);
  rounds--;
  if (rounds >= 0) {
    para.innerHTML = rounds;
  } else if(rounds < 0){
    winnerDisplay();
  }
}

//Randomly selects the computer's choice for each round
function calcCompChoice() {

  const choices = ["Rock", "Paper", "Scissors", "Spock", "Lizard"];

  let choice = Math.floor(Math.random() * 5);

  var computerAction = document.getElementById("computerAction");

  computerAction.innerHTML = "Computer Choice: " + choices[choice];

  return choices[choice];

}

//Registers the button pressed as the users choice for the round
function userChoice(buttonObj) {
  var theCompChoice = calcCompChoice();
  var userInput = buttonObj.innerHTML;
  //You can uncomment this if you would like the user's choice to be displayed in the console
  //console.log("Player choose: " + buttonObj.innerHTML);
  roundPlayed(userInput, theCompChoice);
}

//Compares comuter choice and user choice to determine the round winner
function roundPlayed(playerChoice, theCompChoice) {
  var round = document.getElementById("round");

  //for when computer and player choose same option
  if (theCompChoice === playerChoice) {
    round.innerHTML = "It's a draw";
  }

  //Paper vs. Rock
  if (theCompChoice == "Paper" && playerChoice == "Rock") {
    round.innerHTML = "Computer wins this round!";
    computerWins++;
  }
  if (theCompChoice == "Rock" && playerChoice == "Paper") {
    round.innerHTML = "Player wins this round!";
    playerWins++;
  }

  //Paper vs. Scissors
  if (theCompChoice == "Paper" && playerChoice == "Scissors") {
    round.innerHTML = "Player wins this round!";
    playerWins++;

  }
  if (theCompChoice == "Scissors" && playerChoice == "Paper") {
    round.innerHTML = "Computer wins this round!";
    computerWins++;
  }

  //Spock vs. Paper
  if (theCompChoice == "Paper" && playerChoice == "Spock") {
    round.innerHTML = "Computer wins this round!";
    computerWins++;
  }
  if (theCompChoice == "Spock" && playerChoice == "Paper") {
    round.innerHTML = "Player wins this round!";
    playerWins++;
  }

  //Paper vs. Lizard
  if (theCompChoice == "Paper" && playerChoice == "Lizard") {
    round.innerHTML = "Player wins this round!";
    playerWins++;
  }
  if (theCompChoice == "Lizard" && playerChoice == "Paper") {
    round.innerHTML = "Computer wins this round!";
    computerWins++;
  }

  //for when computer throws Rock 
  if (theCompChoice == "Rock" && playerChoice == "Lizard") {
    round.innerHTML = "Computer wins this round!";
    computerWins++;
  }
  if (theCompChoice == "Lizard" && playerChoice == "Rock") {
    round.innerHTML = "Player wins this round!";
    playerWins++;
  }

  //Rock vs. Scissors
  if (theCompChoice == "Rock" && playerChoice == "Scissors") {
    round.innerHTML = "Computer wins this round!";
    computerWins++;
  }
  if (theCompChoice == "Scissors" && playerChoice == "Rock") {
    round.innerHTML = "Player wins this round!";
    playerWins++;
  }

  //Rock vs. Spock
  if (theCompChoice == "Rock" && playerChoice == "Spock") {
    round.innerHTML = "Computer wins this round!";
    computerWins++;
  }
  if (theCompChoice == "Spock" && playerChoice == "Rock") {
    round.innerHTML = "Player wins this round!";
    playerWins++;
  }

  //Spock vs. Scissors
  if (theCompChoice == "Spock" && playerChoice == "Scissors") {
    round.innerHTML = "Computer wins this round!";
    computerWins++;
  }
  if (theCompChoice == "Scissors" && playerChoice == "Spock") {
    round.innerHTML = "Player wins this round!";
    playerWins++;
  }

  //Spock vs. Lizard
  if (theCompChoice == "Spock" && playerChoice == "Lizard") {
    round.innerHTML = "Player wins this round!";
    playerWins++;
  }
  if (theCompChoice == "Lizard" && playerChoice == "Spock") {
    round.innerHTML = "Computer wins this round!";
    computerWins++;
  }

  //Lizard vs. Scissors
  if (theCompChoice == "Lizard" && playerChoice == "Scissors") {
    round.innerHTML = "Player wins this round!";
    playerWins++;
  }
  if (theCompChoice == "Scissors" && playerChoice == "Lizard") {
    round.innerHTML = "Computer wins this round!";
    computerWins++;
  }
}

//This runs once the speficied number of rounds have been played
function winnerDisplay() {
  //This wholle block hides all of the elements on the scrren except for the winner message
  document.getElementById("ROCK").style.visibility = "hidden";
  document.getElementById("SPOK").style.visibility = "hidden";
  document.getElementById("SCIS").style.visibility = "hidden";
  document.getElementById("PAPR").style.visibility = "hidden";
  document.getElementById("LIZD").style.visibility = "hidden";
  document.getElementById("ROUNDS_TO_PLAY").style.visibility = "hidden";
  document.getElementById("rounds").style.visibility = "hidden";
  document.getElementById("rounds2").style.visibility = "hidden";
  document.getElementById("computerAction").style.visibility = "hidden";
  document.getElementById("round").style.visibility = "hidden";
  document.getElementById("starter").style.visibility = "hidden";
  document.getElementById("startButton").style.visibility = "hidden";

  //Determines the winner based off of round wins
  var win = document.getElementById("winner");
  rtp = parseInt(document.getElementById("ROUNDS_TO_PLAY").value);
  if (playerWins > computerWins) {
    win.innerHTML = "Player has won " + playerWins + " of " + rtp + " rounds to be the overall WINNER!";
  } else if (computerWins > playerWins) {
    win.innerHTML = "Computer has won " + computerWins + " of " + rtp + " to be the overall WINNER!";
  } else
    win.innerHTML = "It's a Tie!!";

  console.log("GAMEOVER!!");
}
