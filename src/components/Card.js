const Card = ({value, suit, className}) => {
  return (
    <div className ={`container__card card--${className}`}  data-testid ="cards">{value}{suit}</div>
  )
}
export default Card;
