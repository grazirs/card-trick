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
const firstColumn = shuffledDeck.slice(0, 7);
const secondColumn = shuffledDeck.slice(8, 15);
const thirdColumn = shuffledDeck.slice(15, TOTAL_OF_CARDS+1);

const Deck = () => {
  return(
    <>
      <div className="cards" data-testid ="first-column">
        {firstColumn.map(({value, suit}) => {
          return (
            <div className ={`card card--${suit}`} key={`${value}-${suit}`}>{value}{suit}</div>
          )
        })}
      </div>

      <div className="cards" data-testid ="second-column">
        {secondColumn.map(({value, suit}) => {
          return (
            <div className ={`card card--${suit}`} key={`${value}-${suit}`}>{value}{suit}</div>
          )
        })}
      </div>
  
      <div className="cards" data-testid ="third-column">
        {thirdColumn.map(({value, suit}) => {
          return (
            <div className ={`card card--${suit}`} key={`${value}-${suit}`}>{value}{suit}</div>
          )
        })}
      </div>
    </>
  )
}
export default Deck;
