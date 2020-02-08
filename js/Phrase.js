class Phrase {
    constructor(phrase) {
        this.phrase = phrase.toLowerCase();
        this.phraseUl = document.querySelector('ul');
        this.letters = [];
    }
     
    /**
     * add letter placeholders to display
     */
    addPhraseToDisplay() {
        for (let i = 0; i < this.phrase.length; i++) {
            const letterLi = document.createElement('li');
            if (this.phrase.charAt(i) === ' ') {
                letterLi.textContent = this.phrase.charAt(i);
                letterLi.className = 'space';
                letterLi.style.display = 'hide';
                this.phraseUl.appendChild(letterLi);
            } else {
                letterLi.textContent = this.phrase.charAt(i);
                letterLi.className = `hide letter ${this.phrase.charAt(i)}`;
                letterLi.style.display = 'hide';
                this.phraseUl.appendChild(letterLi);
            }
        }
        this.letters = this.phraseUl.children;
    }

    /**
     * checks for letter match
     * @return {boolean}    true if letter matches
     */
    checkLetter(guess) {
        for (let i = 0; i < this.letters.length; i++) {
            if (guess != ' ' && this.letters[i].textContent === guess) {
                return true;
            }
        }
        return false;
    }

    /**
     * reveal matched letters
     */
    showMatchedLetter(guess) {
        for (let i = 0; i < this.letters.length; i++) {
            if (guess != ' ' && this.letters[i].textContent === guess) {
                this.letters[i].className = `show letter ${guess}`;
            }
        }
    }
 }