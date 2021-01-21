const choices = ['rock', 'paper', 'scissors'];
const computerPlay = () => choices[Math.floor(Math.random() * 3)];

const playRound = (computerSelection=computerPlay(), playerSelection=window.prompt('Rock, paper or scissors?:')) => {
    playerSelection = playerSelection.toLowerCase();

    if (choices.indexOf(playerSelection) === -1) {
        return 'You must have misspelled something';
    }
    if (playerSelection === computerSelection) {
        return ["It's a tie!", null];
    }

    let send;
    const result = (win) => {
        if (win) {
            return `You win! ${playerSelection} beats ${computerSelection}`;
        } else {
            return `You lose! ${computerSelection} beats ${playerSelection}`;
        }
    }
    switch (playerSelection) {
        case choices[0]:
            switch (computerSelection) {
                case choices[1]:
                    send = result(false);
                    break;
                case choices[2]:
                    send = result(true);
                    break;
            }
            break;
        case choices[1]:
            switch (computerSelection) {
                case choices[0]:
                    send = result(false);
                    break;
                case choices[2]:
                    send = result(true);
                    break;
            }
            break;
        case choices[2]:
            switch (computerSelection) {
                case choices[0]:
                    send = result(false);
                    break;
                case choices[1]:
                    send = result(true);
                    break;
            }
            break;
    }
    return send;
}
console.log(playRound())