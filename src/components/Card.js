const Card = ({value, suit, className}) => {
  return (
    <div className ={`container__card card--${className}`} data-testid='deck'>{value}{suit}</div>
  )
}
export default Card;
