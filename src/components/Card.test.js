import { render, screen} from '@testing-library/react';
import Card from "./Card";

describe("<Card/>", () => {
  it("should render cards on the screen", () => {
    render (<Card />);
    const cards = screen.getByTestId("deck")
    expect(cards).toBeInTheDocument();
  })

  it('should render a card with value and suit', () => {
    const card = {value: '7', suit: '♥'};
    render(<Card value={card.value} suit={card.suit} />);
    const renderCard = screen.getByText(`${card.value}${card.suit}`);
    expect(renderCard).toBeInTheDocument();
  })
});
