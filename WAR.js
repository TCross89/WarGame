// create three classes(deck, cards, players) and the fields and 
// methods each class would have to implement into a game of WAR
// create the deck, shuffle the deck, and deal out 26 cards to 
// both players. Then play a game of WAR and score for each player.
// declare the winner with the higher point value or tie.

class Deck {
    constructor() {
        this.cards = [];
    }
    shuffle() {
        const suits = ["Spades", "Diamonds", "Club", "Heart"];
        const values = [2,3,4,5,6,7,8,9,10,11,12,13,14];

        for (let i = 0; i < suits.length; i++) {
            for (let x = 0; x < values.length; x++) {
                let card = new Cards (values[x], suits[i]);
                this.cards.push(card);
            }
        }
        for (let i = this.cards.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * i);
            let temp = this.cards[i];
            this.cards[i] = this.cards[j];
            this.cards[j] = temp;
        }
    }
    deal(players) {
        while (this.cards.length > 1) {
            players.forEach(player => {
                let card = this.cards.shift();
                player.cards.push(card);
            }); 
        }
    }
    
}

class Cards {
    constructor(value, suit) {
        this.suit = suit;
        this.value = value;
    } 
    getValue() {
        let x = "";
        switch(this.value) {
            case 14:
                x = "Ace";
                break;
            case 13:
                x = "King";
                break;
            case 12:
                x = "Queen";
                break;
            case 11:
                x = "Jack";
                break;
            default:
                x = this.value;
        }
        return x;
    }
}

class Player {
    constructor() {
        this.cards = [];
        this.score = 0;
    }
    play(card) {
        return this.cards[card];
    }
    increaseScore() {
        this.score++;
    }
}




let deck = new Deck();
let tyler = new Player;
let ann = new Player;
deck.shuffle();
deck.deal([tyler, ann]);
console.log(tyler.cards);
console.log(ann.cards)

for (let i = 0; i < tyler.cards.length; i++ ) {
    let tylerscard = tyler.play(i);
    let annscard = ann.play(i);
    console.log("Round " + i + " Tyler played: " + tylerscard.getValue() + " of " + tylerscard.suit);
    console.log("Round " + i + " Ann played: " + annscard.getValue() + " of " + annscard.suit);
    if (tylerscard.value > annscard.value) {
        tyler.increaseScore(); 
    } else if (tylerscard.value < annscard.value) {
        ann.increaseScore();
    } 
}

console.log("Scores are: ");
console.log("Tyler: " + tyler.score);
console.log("Ann: " + ann.score);

if (tyler.score > ann.score) {
    console.log("Tyler wins");
}   else if (tyler.score < ann.score) {
    console.log("Ann wins");
}   else {
    console.log("players tied");
}

