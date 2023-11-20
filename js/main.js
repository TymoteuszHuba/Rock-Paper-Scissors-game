const gameTitle = document.querySelector('.game__content .title');
const gameDescription = document.querySelector('.game__content .text');
const playerChoiceIcon = document.querySelector('.player__icon');
const computerChoiceIcon = document.querySelector('.computer__icon');
const playerScore = document.querySelector('.player__score');
const computerScore = document.querySelector('.computer__score');
const gameBtn = document.querySelectorAll('.game__btn');
const popup = document.querySelector('.game__popup');

let computerOption = ['rock', 'paper', 'scissors'];

let playerScoreCount = 0;
let computerScoreCount = 0;

// function which add correct icons after choose by user or computer
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

// function game handle all moves from user and computer
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

	// call function which are check the result of game
	checkWinner();
};

// function reseting all values of game
resetGame = () => {
	playerScoreCount = 0;
	computerScoreCount = 0;
	gameTitle.textContent = 'Choose rock, paper or scissors!';
	gameDescription.textContent = 'First who score 5 points wins the game';
	playerChoiceIcon.innerHTML = `<i class="fa-solid fa-question"></i>`;
	computerChoiceIcon.innerHTML = `<i class="fa-solid fa-question"></i>`;
	playerScore.textContent = '0';
	computerScore.textContent = '0';
	popup.classList.remove('game__popup__active');
};

// function check the result of game (who win user or computer)
const checkWinner = () => {
	const popupText = document.querySelector('.popup__content .popup__text');
	const popupBtn = document.querySelector('.popup__btn');

	if (playerScoreCount === 5) {
		popup.classList.add('game__popup__active');
		popupText.textContent = 'You won!';
		popupBtn.addEventListener('click', () => {
			resetGame();
		});
	} else if (computerScoreCount === 5) {
		popup.classList.add('game__popup__active');
		popupText.textContent = 'You lost...';
		popupBtn.addEventListener('click', () => {
			resetGame();
		});
	}
};

// function starting game after click for each btn
const startGame = () => {
	gameBtn.forEach((btn) => {
		btn.addEventListener('click', () => {
			game(btn);
		});
	});
};

// call function startGame()
startGame();
