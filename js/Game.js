class Game {
    constructor () {
        this.missed = 0;
        this.phrases = [
            // new Phrase('Hey chagiya babe'),
            // new Phrase('Avocado toast for my babe'),
            // new Phrase('Rion is cute'),
            new Phrase('I love New York')
        ];
        this.activePhrase = null;
    }

    /**
     * hides screen overlay
     * chooses phrase and adds it to the board
     */
    startGame() {
        document.getElementById('overlay').style.display = 'none';
        this.activePhrase = this.getRandomPhrase();
        this.activePhrase.addPhraseToDisplay();
    }

    /**
     * randomy retrive a phrase
     * @return {object}     phrase object
     */
    getRandomPhrase() {
        return this.phrases[Math.floor(Math.random() * this.phrases.length)];
    }

    /**
     * manages interaction between user input and board
     */
    handleInteraction(button, guess) {

        // associate keydown key with onscreen key button
        for (let i = 0; i < buttons.length; i++) {
            if (buttons[i].textContent === guess) {
                button = buttons[i];
            }
        }

        button.disabled = true;

        if (this.activePhrase.checkLetter(guess)){
            button.className = 'key chosen';
            this.activePhrase.showMatchedLetter(guess);
            if (this.checkForWin()) {this.gameOver()}
        } else {
            if (button.className != 'key wrong') {
                button.className = 'key wrong';
                this.removeLife();
            } 
        }
    }

    /**
     * removes life from scoreboard
     */
    removeLife() {
        const hearts = document.querySelectorAll('.tries');
        hearts[this.missed].firstElementChild.src = 'images/lostHeart.png';
        this.missed += 1;
        if (this.missed === 5) {
            this.gameOver();
        }
    }

    /**
     * check to see if all letters are revealed
     */
    checkForWin() {
        const phrase = this.activePhrase.letters;

        for (let i = 0; i < phrase.length; i++) {
            let status = phrase[i].className.substring(0, 4);
            if (status === 'hide') {
                return false;
            } 
        }
        return true;
    }

    /**
     * ends game based on win or loss
     */
    gameOver() {
        const overlay = document.getElementById('overlay');
        const h1 = document.getElementById('game-over-message');
        
        if (this.checkForWin()) {
            overlay.className = 'win';
            h1.textContent = 'Congratulations you win!';
        } else if (!this.checkForWin() && this.missed === 5) {
            overlay.className = 'lose';
            h1.textContent = 'You lose!';
        }
        overlay.style.display = '';
        
        const oldPhrase = document.querySelector('ul');
        
        while (oldPhrase.hasChildNodes()) {
            oldPhrase.removeChild(oldPhrase.lastElementChild);
        }
    
    }
}