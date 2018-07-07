const PAPER_WIN = "Paper wins!";
const ROCK_WIN = "Rock wins!";
const SCISSORS_WIN = "Scissors wins!";
const TIE = "TIE";
const buttons = document.querySelectorAll('button');
const stats = document.querySelector('.Score');
const content = document.createElement('h2');
content.classList.add('content');




function computerPlay() {
	let rand_num = Math.floor((Math.random() * 10) + 1);
	if ( rand_num > 1 && rand_num <= 3) {
		return "Rock";
	} else if ( rand_num > 3 && rand_num <= 6 ) {
		return "Paper";
	} else {
		return "Scissors";
	}
}

function playGame(playerSelection, computerSelection) {
	//playerSelection = playerSelection.toLowerCase();
	//computerSelection = computerSelection.toLowerCase();
	playerSelection = playerSelection.toLowerCase();
	computerSelection = computerSelection.toLowerCase();
	if ( playerSelection == "rock" ){
		if ( computerSelection == "paper" ){
			content.textContent = PAPER_WIN;
		} else if ( computerSelection == "scissors" ) {
			content.textContent = ROCK_WIN;
		} else {
			content.textContent = TIE;
		}
	} else if ( playerSelection == "paper" ) {
		if ( computerSelection == "rock") {
			content.textContent = PAPER_WIN;
		} else if ( computerSelection == "scissors" ) {
			content.textContent = SCISSORS_WIN;
		} else {
			content.textContent = TIE;
		}
	} else if ( playerSelection == "scissors" ) {
		if ( computerSelection == "rock") {
			content.textContent = ROCK_WIN;
		} else if ( computerSelection == "paper" ) {
			content.textContent = SCISSORS_WIN;
		} else {
			content.textContent = TIE;
		}
	}
	stats.appendChild(content);
}

function determineWinner(playerScore, computerScore){
	if ( playerScore > computerScore ) { 
		console.log("You won!");
	} else if ( playerScore < computerScore ) {
		console.log("Computer won!");
	} else {
		console.log("Tie!");
	}
}
/*
function game() {
	let playerScore = 0;
	let computerScore = 0;

	for( let i = 0; i < 5; i++ ){
		let playerSelection = (prompt("Enter either Rock, Paper or Scissors")).toLowerCase();
		let computerSelection = (computerPlay()).toLowerCase();
		let results = playGame(playerSelection, computerSelection);

		if( results == playerSelection){
			playerScore++;
		} else if ( results == computerSelection ){
			computerScore++;
		}

		if( results != "tie" ){
			console.log(`The winner of round ${i+1} is ${results}!`);
		} else {
			console.log("This round resulted in a Tie!");
		}
	}
	console.log("Results:");
	console.log(`You: ${playerScore}`);
	console.log(`Computer: ${computerScore}`);
	determineWinner(playerScore, computerScore);

}
*/

// we use the .forEach method to iterate through each button
buttons.forEach((button) => {

  // and for each one we add a 'click' listener
  button.addEventListener('click', (e) => {
    playGame(button.id, computerPlay());
  });
});
