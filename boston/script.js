// Generate random number between 1 and 6
function rndThrow() {
    return Math.floor(Math.random() * 6) + 1;
}

let score = 0;

// Loop 3 times
for (i = 3; i > 0; i--) {
    let dice = [];
    // throw the dice left
    for (c = 0; c < i; c++) {
        dice.push(rndThrow());
    }
    console.log(`\nYour dice: ${dice}`);

    // save max value from throw
    let max = Math.max(...dice);
    console.log(`Max dice this throw: ${max}`);

    score += max;
    console.log(`Current score: ${score}`);
}

console.log(`\nYour total score is: ${score}`);
