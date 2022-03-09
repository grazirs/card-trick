import { useState } from "react";
const VALUES= [ "A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
const SUITS = ["♥", "♠", "♦", "♣"];
const TOTAL_OF_CARDS = 21;

const buildDeck = () => {
  return (VALUES.flatMap((value) => SUITS.map(suit => ({ value: value, suit: suit})))
  )
}
let deck = buildDeck();

const shuffledDeck = [...deck].sort(() => Math.random() - 0.5);
const trickDeck = shuffledDeck.slice(0, TOTAL_OF_CARDS);

const Deck = () => {
  const [trickCards, setTrickCards] = useState(trickDeck);
  return(
    <div className="cards" data-testid ="cards">
      {trickCards.map(({value, suit}) => {
        return (
          <div className ={`card card--${suit}`} key={`${value}-${suit}`}>{value}{suit}</div>
        )
      })}
    </div>
  )
}
export default Deck;
