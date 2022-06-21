import Card from "./Card";
const VALUES= [ "A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
const SUITS = ["♥", "♠", "♦", "♣"];
const CLASSES = ["heart", "spades", "diamond", "clubs"];
const TOTAL_OF_CARDS = 21;

const buildDeck = () => {
  return VALUES.flatMap((value) => SUITS.map((suit, index) => {
      return { value: value, suit: suit, className: CLASSES[index]};
  }));
}
let deck = buildDeck();

const shuffledDeck = [...deck].sort(() => Math.random() - 0.5);
const firstColumn = shuffledDeck.slice(0, 7);
const secondColumn = shuffledDeck.slice(7, 14);
const thirdColumn = shuffledDeck.slice(14, TOTAL_OF_CARDS);
const columnsArray = [firstColumn, secondColumn, thirdColumn];

const Deck = () => {
  return(
    <div className="cards" data-testid ="columns">
      {columnsArray.flatMap((element)=> element).map(({value, suit, className}) => {
        return (
          <Card key={`${value}-${suit}`} value={value} suit={suit} className={className}/>
        )
      })}
    </div>
  )
}
export default Deck;
