const Card = ({value, suit, className}) => {
  return (
    <div className ={`card card--${className}`} >{value}{suit}</div>
  )
}
export default Card;
