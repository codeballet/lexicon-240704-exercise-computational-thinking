// Generate random number between 1 and 6
function rndThrow() {
    return Math.floor(Math.random() * 6) + 1;
}

// Variables
let gameover = false;
let score = 0;

// Get user input
let knockout = parseInt(prompt("Choose knockout number (6 to 9)"));
let winScore = parseInt(prompt("Choose score to win"));

// Check user input
if (isNaN(knockout) || isNaN(winScore)) {
    gameover = true;
}

// Play the game
while (gameover === false) {
    let dice1 = rndThrow();
    let dice2 = rndThrow();
    result = dice1 + dice2;
    console.log(`\nDice 1: ${dice1}`);
    console.log(`Dice 2: ${dice2}`);
    console.log(`Your throw got the result: ${result}`);

    // Check the result
    if (result === knockout) {
        score -= 5;
        console.log(`Your present score is: ${score}`);
    } else {
        score += result;
        console.log(`Your present score is: ${score}`);
    }

    // Check status of game
    if (score < 0) {
        // Announce knockout
        console.log("\nYou got knocked out, looser!");
        gameover = true;
    } else if (score >= winScore) {
        // Announce win
        console.log(`\nCongratulations, you won with score: ${score}!`);
        gameover = true;
    }
}

console.log("Game Over!");
