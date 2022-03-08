import { useState } from "react";
const VALUES= [ "A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
const SUITS = ["♥", "♠", "♦", "♣"];
const TOTAL_OF_CARDS = 21;

const BuildDeck = () => {
  return (VALUES.flatMap((value) => SUITS.flatMap(suit => ({ value: value, suit: suit})))
  )
}
let deck = BuildDeck();

const shuffledDeck = [...deck].sort(() => Math.random() - 0.5);
const trickDeck = [...shuffledDeck].slice(0, TOTAL_OF_CARDS);

const DisplayDeck = () => {
  const [trickCards, setTrickCards] = useState(trickDeck);
  return(
    <>
    <div className="cards" data-testid ="cards">
      {trickCards.map(({value, suit},index) => {
        return (
          <div className ={`card card--${suit}`} key={index}>{value}{suit}</div>
        )
      })}
    </div>
    </>
  )
}
export default DisplayDeck;
