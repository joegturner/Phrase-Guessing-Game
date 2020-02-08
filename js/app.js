/******************************************
Treehouse Techdegree:
FSJS project 4 - Word Guessing Game
******************************************/
  
// by: Joe Turner
// Going for Exceeds!
// Rev 0: 2-8-2020 (peer review submission on Slack)


// add listener for the Start Game button
// creates new Game object, starts game
let game = null;
const startButton = document.getElementById('btn__reset');
startButton.addEventListener('click', function() {
    game = new Game();
    
    // initializes onscreen key buttons
    for (let i = 0; i < buttons.length; i++) {
        if (buttons[i].className != 'key') {
            buttons[i].disabled = false;
            buttons[i].className = 'key';    
        }
    }

    let hearts = document.querySelectorAll('.tries');
    for (let c = 0; c < hearts.length; c++) {
        hearts[c].firstElementChild.src = 'images/liveHeart.png';
    }

    game.startGame();
});

// add listener to each keyboard button
const buttons = document.getElementsByClassName('key');
for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function(event) {
        game.handleInteraction(event.target, event.target.textContent);
    });
}

// add listener for keyboard keys
document.addEventListener('keydown', function(event) {
    if (game) {
        game.handleInteraction(event, event.key);
    }
});