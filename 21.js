// const deck = ['Ace', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten', 'Jack', 'Queen', 'King']
let deck = ['Ace', 'Ace', 'Ace', 'Jack']
// const deckObj = {'Ace': 1, 'Two': 2, 'Three': 3, 'Four': 4, 'Five': 5, 'Six': 6, 'Seven': 7, 'Eight': 8, 'Nine': 9, 'Ten':10, 'Jack': 10, 'Queen': 10, 'King': 10}

// let card = deckObj[deck[Math.floor(Math.random() * deck.length)]];

const draw = () => {
  let card = deck[Math.floor(Math.random() * deck.length)];
  console.log(`you drew ${card}`)
  delete deck[deck.indexOf(card)]
  // newDeck = deck.splice(deck.indexOf(card))
  return deck
  
}



console.log(draw())