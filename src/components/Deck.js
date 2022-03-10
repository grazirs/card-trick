import {useState} from "react";
import Card from "./Card";

const VALUES= [ "A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
const SUITS = ["♥", "♠", "♦", "♣"];
const CLASSES = ["heart", "spades", "diamond", "clubs"];
const TOTAL_OF_CARDS = 21;

const randomizeArray = (array) => [...array].sort(() => Math.random() - 0.5);

let deck = VALUES.flatMap((value)  => SUITS.map((suit, index) =>({value: value, suit: suit, className: CLASSES[index]})));

let trickDeck = randomizeArray(deck).slice(0, TOTAL_OF_CARDS);

const Deck = () => {
  const [step, setStep] = useState(0);
  const [columns, setColumns] = useState(
    [
        trickDeck.slice(0, 7),
        trickDeck.slice(7, 14),
        trickDeck.slice(14)
    ]
  );

  const mergeAndDistribute = (selectedColumn) => {
    let cards;
    if (selectedColumn === 0) {
      cards = [...columns[2], ...columns[0], ...columns[1]];
    } else if (selectedColumn === 1) {
      cards = [...columns[2], ...columns[1], ...columns[0]];
    } else {
      cards = [...columns[1], ...columns[2], ...columns[0]];
    }
  const result = [[], [], []];
    cards.forEach((card, index) => {
      if (index % 3 === 1) result[1].push(card);
      else if (index % 3 === 2) result[2].push(card);
      else result[0].push(card);
    });

    setColumns(result);
  }

  const selectColum = (selectedColumn) => {
    if (step < 3) {
      mergeAndDistribute(selectedColumn);
      setStep(step + 1);
    }
  }

  return (
  <>
  <div className="container__info">
    <h1>
      {step < 3 ? 'In which column is your card? ' : `Your card is... ${columns[1][3]['value']}${columns[1][3]['suit']}`}
    </h1>
  </div>
    <div>
    <button className="buttons__button" onClick={() => selectColum(0)}>Column 1</button>
    <button className="buttons__button" onClick={() => selectColum(1)}>Column 2</button>
    <button className="buttons__button"onClick={() => selectColum(2)}>Column 3</button>
      <div className="container__cards">
        {columns.flatMap((element)=> element).map(({value, suit, className}) => {
          return (
            <Card key={`${value}-${suit}`} value={value} suit={suit} className={className}/>
          )
        })} 
      </div>
    </div>
  </>
  )
}
export default Deck;
