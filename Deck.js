const SUITS = ["♥", "♦", "♠", "♣"];//Sets Decks Suits.
const VALUES = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"];//For the initial array of cards in the deck.
const playerOnePoints = [];//Array's to add up each players points.
const playerTwoPoints = [];
let playerSum = 0;
let playerOneDeck, playerTwoDeck;

//This Maps the Cards Actual Value's 
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

//Deck class in witch to make a new deck with cards.
class Deck {
    constructor(cards = newDeck()) {
        this.cards = cards;
    }

    get cardsInDeck() {
        return this.cards.length;
    }
//Pop function lets each card pop off the top to compare with the other players card.
    
    pop() {
        return this.cards.shift
    }
// this function takes the cards in the deck (52) and iterates backwards through them to mix them all up into a new array.
    
    deckShuffle() {
        for (let i = this.cardsInDeck - 1; i > 0; i--) {
            const cardIndex = Math.floor(Math.random() * (i + 1))
            const oldCardIndex = this.cards[cardIndex]
            this.cards[cardIndex] = this.cards[i]
            this.cards[i] = oldCardIndex;
        }
    }
}
//This function takes all the mixed up cards and creates a new deck from them.

function newDeck() {
    return SUITS.flatMap(suits => {
        return VALUES.map(values => {
            return new Card(suits, values)
        });
    });
}
//This function takes the points array at the end and adds them up for a final score.
//~~~~~~~~~~~~FOR SOME REASON IF YOU CHANGE ANYTHING IN THIS FUNCTION IT BREAKS JUST CTRL + Z AND IT FIXES IT ~~~~~~~~~~~
function averageArray(array1) {
    playerSum = array1.reduce((previousValue, currentValue) => {
        return previousValue + currentValue
      
    });if (typeof array1 === String || typeof array1 === Boolean) {
      throw new Error("array1 must be an Array([])");
    }
    return playerSum;
    
};
// ~~~~~~~~~~~~FOR SOME REASON IF YOU CHANGE ANYTHING IN THIS FUNCTION IT BREAKS JUST CTRL + Z AND IT FIXES IT ~~~~~~~~~~~
//This card class is necessary for the entire game too work because it needs to have the values and the suites to make sure their isn't multiples.

class Card{
    constructor(suits, values) {
        this.suits = suits;
        this.values = values;
    }
}
//This is pretty much were the game starts by declaring a new deck and calling the shuffle function.

const deck = new Deck();
deck.deckShuffle();

//This portion takes the new deck we just made and shuffled and splits it into two players.

const halfDeck = Math.ceil(deck.cardsInDeck / 2);
playerOneDeck = (deck.cards.slice(0, halfDeck));
playerTwoDeck = (deck.cards.slice(halfDeck, deck.cardsInDeck));
// console.log(playerOneDeck);

//Lets players enter their names

        let player1 = prompt("Player one enter a name please")
        console.log(player1);

        let player2 = prompt("Player two enter a name please")
        console.log(player2);
    
/*
This loop takes the two shuffled half of 
the deck and compares the numbers/values
of each card by calling the pop function each time it iterates!
Also assigns each player a half of the deck.
*/
for (let i = 0; i < 26; i++) {
    const playerOneCard = playerOneDeck.pop();
    const playerTwoCard = playerTwoDeck.pop();
    console.log(`
___Round ${i} Start!___
    ${player1}s Card: ${cardsValue[playerOneCard.values]}`);
    console.log(`
    ${player2}s Card: ${cardsValue[playerTwoCard.values]}
___Round ${i} End!___`);
    if (cardsValue[playerOneCard.values] > cardsValue[playerTwoCard.values]) {
        playerOnePoints.push(cardsValue[playerTwoCard.values], cardsValue[playerOneCard.values]);
        console.log(`${player1} Wins`);
    }  else if (cardsValue[playerTwoCard.values] > cardsValue[playerOneCard.values]) {
        playerTwoPoints.push(cardsValue[playerTwoCard.values],cardsValue[playerOneCard.values])
        console.log(`${player2} Wins`);
    } else {
        console.log("Draw no points");
    }
}

//This portion of code is the final score board prints final scores of each player and who the
console.log(`     ____FINAL SCORE'S____
  ${player1}s Total Score: ${averageArray(playerOnePoints)}
  ${player2}s Total Score: ${averageArray(playerTwoPoints)}`);
// This loop is here to tell what player won the game
let playerOneTotalSum = averageArray(playerOnePoints);
let playerTwoTotalSum = averageArray(playerTwoPoints);
if (playerOneTotalSum > playerTwoTotalSum) {
    console.log(`-END GAME-
    ${player1} Winner! with ${playerOneTotalSum} Points!`);
} else if (playerTwoTotalSum > playerOneTotalSum) {
  console.log(`-END GAME-
    ${player2} Winner! with ${playerTwoTotalSum} Points!`);
} else {
    console.log("-DRAW-")
}
