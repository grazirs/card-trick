import {useState} from "react";
import Card from "./Card";
import mergeAndDistributeCards from "./deckFunctions"

const VALUES= [ "A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
const SUITS = ["♥", "♠", "♦", "♣"];
const CLASSES = ["heart", "spades", "diamond", "clubs"];
const TOTAL_OF_CARDS = 21;

const randomizeArray = (array) => [...array].sort(() => Math.random() - 0.5);

let deck = VALUES.flatMap((value)  => SUITS.map((suit, index) =>({value: value, suit: suit, className: CLASSES[index]})));

export let trickDeck = randomizeArray(deck).slice(0, TOTAL_OF_CARDS);

const Deck = () => {
  const [step, setStep] = useState(0);
  const [columns, setColumns] = useState(
    [
        trickDeck.slice(0, 7),
        trickDeck.slice(7, 14),
        trickDeck.slice(14)
    ]
  );

  const selectColum = (selectedColumn) => {
    if (step < 3) {
      const result = mergeAndDistributeCards(selectedColumn, columns)
      setColumns (result);
      setStep(step + 1);
    }
  }

  const reset = () => {
    trickDeck = randomizeArray(deck).slice(0, TOTAL_OF_CARDS);
    setColumns([
        trickDeck.slice(0, 7),
        trickDeck.slice(7, 14),
        trickDeck.slice(14)
    ]);
    setStep(0);
}

  return (
  <>
  <div className="container__info">
    <h1>
      {step < 3 ? 'In which column is your card? ' : `Your card is... ${columns[1][3]['value']}${columns[1][3]['suit']}`}
    </h1>
    {step === 3 && (<button className=" buttons__button buttons__button--reset" onClick={reset}> Play again</button>)}
  </div>
  
    <div>
    <button className="buttons__button" onClick={() => selectColum(0)}>Column 1</button>
    <button className="buttons__button" onClick={() => selectColum(1)}>Column 2</button>
    <button className="buttons__button"onClick={() => selectColum(2)}>Column 3</button>
      <div className="container__cards">
        {columns.flatMap((element)=> element).map(({value, suit, className}) => {
          return (
            <Card key={`${value}-${suit}`} value={value} suit={suit} className={className} role='deck'/>
          )
        })} 
      </div>
    </div>
  </>
  )
}
export default Deck;
