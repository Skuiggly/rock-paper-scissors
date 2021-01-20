const display = (x) => {
    //Alternative to console.log where the output is displayed as a p element
    const p = document.createElement('p');
    p.innerHTML = `${JSON.stringify(x)}`;
    document.querySelector('body').appendChild(p);
}

function* cycle(_array, start=_array[_array.length - 1], clockwise=true) {
    //Cycles through an array in a circle
    let i = choices.indexOf(start);
    if (clockwise) {
        while (true) {
            if (i == _array.length - 1) {
                i = 0;
            } else {
                i++
            }
            yield _array[i];
        }
    } else {
        while (true) {
            if (i === 0) {
                i = _array.length - 1;
            } else {
                i--;
            }
            yield _array[i];
        }
    }
}

const choices = ['rock', 'paper', 'scissors'];
const computerPlay = () => choices[Math.floor(Math.random() * 3)];

const playRound = (computerSelection, playerSelection=window.prompt('Rock, paper or scissors?:')) => {
    playerSelection = playerSelection.toLowerCase();
    if (choices.indexOf(playerSelection) === -1) {
        return 'You must have misspelled something';
    }
    if (playerSelection === computerSelection) {
        return "It's a tie!";
    }

    const notChosen = choices.filter((choice) => {
        if (choice == playerSelection || choice == computerSelection) {
            return false;
        } else {
            return true;
        }
    })[0]; //First item instead of entire array

    const rps = cycle(choices, notChosen, false);
    const winningChoice = rps.next().value;
    display(winningChoice);
    let winText = 'what?';
    if (playerSelection === winningChoice) {
        winText = `You win! ${playerSelection} beats ${computerSelection}`;
    } else if (computerSelection === winningChoice) {
        winText = `You lose! ${computerSelection} beats ${playerSelection}`;
    }
    return winText;
}
display(playRound('scissors'));

const game = () => {}