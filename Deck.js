const SUITS = ["♥", "♦", "♠", "♣"];
const VALUES = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"];
const cardsValue = {
    "2" : 2,
    "3" : 3,
    "4" : 4,
    "5" : 5,
    "6" : 6,
    "7" : 7,
    "8" : 8,
    "9" : 9,
    "10" : 10,
    "J" : 11,
    "Q" : 12,
    "K" : 13,
    "A" : 14
}

class Deck {
    constructor(cards = newDeck()) {
        this.cards = cards;
    }

    get cardsInDeck() {
        return this.cards.length;
    }

    deckShuffle() {
        for (let i = this.cardsInDeck - 1; i > 0; i--) {
            const cardIndex = Math.floor(Math.random() * (i + 1))
            const oldCardIndex = this.cards[cardIndex]
            this.cards[cardIndex] = this.cards[i]
            this.cards[i] = oldCardIndex;
        }
    }
}
function newDeck() {
    return SUITS.flatMap(suits => {
        return VALUES.map(values => {
           return new Card(suits, values)
       })
    })
}



class Card{
    constructor(suits, values) {
        this.suits = suits;
        this.values = values;
    }
}

let playerOneDeck, playerTwoDeck;

startGameOfWar();
function startGameOfWar() {
  const deck = new Deck();
  deck.deckShuffle();

  const halfDeck = Math.ceil(deck.cardsInDeck / 2);
  playerOneDeck = new Deck(deck.cards.slice(0, halfDeck));
  playerTwoDeck = new Deck(deck.cards.slice(halfDeck, deck.cardsInDeck));

  console.log(playerOneDeck);
    console.log(playerTwoDeck);
    console.log("apples")
    
    
        for (let i = 0; i < playerOneDeck.length; i++){
            
            console.log(playerOneDeck[i]);
        }
    // function isWinner(playerOneDeck, playerTwoDeck) 
    //     return cardsValue[playerOneDeck.values] > cardsValue[playerTwoDeck.values];
    
        // if (isWinner(playerOneDeck, playerTwoDeck)) {
        //     console.log("Winner");
        // } else if (isWinner(playerTwoDeck, playerOneDeck)) {
        //     console.log("Lose")
        //  } else {
        //      console.log("Draw");
        //  }
    }

