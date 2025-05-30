function getRandomInt(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled); // The maximum is exclusive and the minimum is inclusive
}

function getComputerChoice() {
    choice = getRandomInt(1, 4);
    if (choice == 1) {
        out = 'rock';
    }
    if (choice == 2) {
        out = 'paper';
    }
    if (choice == 3) {
        out = 'scissors';
    }
    //console.log(out);
    return out
}

function getHumanChoice() {
    sign = window.prompt("Rock, paper, or scissors?");
    sign = sign.toLowerCase();
    if (['rock', 'paper', 'scissors'].includes(sign)) {
        out = sign;
    } else {
        out = null;
        console.log('Not a valid response.')
    }
    //['rock']
    return out
}

function playRound(humanChoice, computerChoice) {
    console.log('...Your choice: ' + humanChoice)
    console.log('...Computer choice: ' + computerChoice)
    if (
        (humanChoice == 'rock' && computerChoice == 'scissors') ||
        (humanChoice == 'paper' && computerChoice == 'rock') ||
        (humanChoice == 'scissors' && computerChoice == 'paper')
    ) {
        msg = 'You win!  ' + humanChoice + ' beats ' + computerChoice
        out = 'Human'
    } else if (humanChoice == computerChoice) {
        msg = 'You both picked: ' + humanChoice + ". It's a tie!"
        out = 'No one wins!'
    } else {
        msg = 'You lose! ' + humanChoice + ' loses to ' + computerChoice
        out = 'Computer'
    }

    console.log(msg)
    return out
}



function playGame() {

    var humanScore = 0;
    var computerScore = 0;
    
    for (let i = 1; i < 6; i++) {
        console.log('##### Round ' + i);
        console.log('');

        let humanSelection = getHumanChoice();
        let computerSelection = getComputerChoice();

        winner = playRound(humanSelection, computerSelection);

        switch (winner) {
            case 'Human':
                humanScore++
            case 'Computer':
                computerScore++
        }   

        // if (winner == 'Human') {
        //     humanScore = humanScore++;
        // } else if (winner == 'Computer') {
        //     computerScore = computerScore++;
        // }

        console.log('Current Score is:')
        console.log('...Your score: ' + humanScore)
        console.log('...Computer score: ' + computerScore)

        console.log('');
    }
}

//playGame()