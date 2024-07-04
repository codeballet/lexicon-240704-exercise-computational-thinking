////////////
// Stegen //
////////////

let counter = 0;
let target = 1;

// Generate random number between 1 and 6
function rndThrow() {
    return Math.floor(Math.random() * 6) + 1;
}

// The game
while (target < 7) {
    counter++;
    let newThrow = rndThrow();
    if (newThrow === target) {
        target++;
    }
}
// Show result
console.log(`Number of throws to climb the ladder: ${counter}`);

///////////////
// Knock out //
///////////////
