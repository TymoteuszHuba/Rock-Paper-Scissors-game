const gameTitle = document.querySelector('.game__content .title');
const gameDescription = document.querySelector('.game__content .text');
const playerChoiceIcon = document.querySelector('.player__icon');
const computerChoiceIcon = document.querySelector('.computer__icon');
const playerScore = document.querySelector('.player__score');
const computerScore = document.querySelector('.computer__score');
const gameBtn = document.querySelectorAll('.game__btn');

let computerOption = ['rock', 'paper', 'scissors'];

let playerScoreCount = 0;
let computerScoreCount = 0;

const addChoiceIcon = (btn, compChoice) => {
	// more simple solution than ifs
	const iconMapping = {
		rock: `<i class="fa-solid fa-hand-fist"></i>`,
		paper: `<i class="fa-solid fa-hand"></i>`,
		scissors: `<i class="fa-solid fa-hand-peace"></i>`,
	};

	playerChoiceIcon.innerHTML = iconMapping[btn.id];
	computerChoiceIcon.innerHTML = iconMapping[compChoice];
};

const game = (btn) => {
	let computerChoiceRandom = Math.floor(Math.random() * computerOption.length);
	let computerChoice = computerOption[computerChoiceRandom];
	console.log(computerChoice);
	addChoiceIcon(btn, computerChoice);

	// if it's tie
	if (
		(btn.id === 'rock' && computerChoice === 'rock') ||
		(btn.id === 'paper' && computerChoice === 'paper') ||
		(btn.id === 'scissors' && computerChoice === 'scissors')
	) {
		gameTitle.textContent = "It's a tie!";
		gameDescription.textContent = `${btn.id} ties with ${computerChoice}`;
		// if player win
	} else if (
		(btn.id === 'rock' && computerChoice === 'scissors') ||
		(btn.id === 'paper' && computerChoice === 'rock') ||
		(btn.id === 'scissors' && computerChoice === 'paper')
	) {
		gameTitle.textContent = 'You won!';
		gameDescription.textContent = `${btn.id} beats ${computerChoice}`;
		playerScoreCount++;
		playerScore.textContent = `${playerScoreCount}`;
		// if computer win
	} else if (
		(btn.id === 'rock' && computerChoice === 'paper') ||
		(btn.id === 'paper' && computerChoice === 'scissors') ||
		(btn.id === 'scissors' && computerChoice === 'rock')
	) {
		gameTitle.textContent = 'You lost!';
		gameDescription.textContent = `${computerChoice} beats ${btn.id}`;
		computerScoreCount++;
		computerScore.textContent = `${computerScoreCount}`;
	}
	checkWinner();
};

resetGame = () => {
	playerScoreCount = 0;
	computerScoreCount = 0;
	gameTitle.textContent = 'Choose rock, paper or scissors!';
	gameDescription.textContent = 'First who score 5 points wins the game';
	playerChoiceIcon.innerHTML = `<i class="fa-solid fa-question"></i>`;
	computerChoiceIcon.innerHTML = `<i class="fa-solid fa-question"></i>`;
	playerScore.textContent = '0';
	computerScore.textContent = '0';
};

const checkWinner = () => {
	if (playerScoreCount === 5) {
		setTimeout(() => {
			alert('You won!');
			resetGame();
		}, 200);
	} else if (computerScoreCount === 5) {
		setTimeout(() => {
			alert('You lost...');
			resetGame();
		}, 200);
	}
};

const startGame = () => {
	gameBtn.forEach((btn) => {
		btn.addEventListener('click', () => {
			game(btn);
		});
	});
};

startGame();