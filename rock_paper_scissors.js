const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();
  if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb') {
    return userInput;
  } else {
    console.log('You have input invalid value.')
  }
}
function getComputerChoice() {
  const randomNum = Math.floor(Math.random() * 3);
  switch (randomNum) {
    case 0:
      return 'rock';
    case 1:
      return 'paper';
    case 2:
      return 'scissors';
  }
}
function determineWinner(userChoice, computerChoice) {
  if (userChoice === computerChoice) {
    return 'It is a tie';
  } if (userChoice === 'bomb') {
    return 'BOOOM!!! THE COMPUTER DEFEATED!!!';
  }
  if (userChoice === 'rock') {
    if (computerChoice === 'paper') {
      return 'The computer won!';
    } else {
      return 'You won!';
    }
  }
  if (userChoice === 'paper') {
    if (computerChoice === 'scissors') {
      return 'The computer won!';
    } else {
      return 'You won!';
    }
  }
  if (userChoice === 'scissors') {
    if (computerChoice === 'rock') {
      return 'The computer won!';
    } else {
      return 'You won!';
    }
  }
}
determineWinner();
const playGame = () => {
  const userChoice = getUserChoice('scissors');
  const computerChoice = getComputerChoice();
  console.log(`You choose: ${userChoice}`);
  console.log(`Computer choose: ${computerChoice}`);
  console.log(determineWinner(userChoice, computerChoice));
}
playGame();