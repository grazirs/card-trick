import { render, screen } from '@testing-library/react';
import Deck from "./components/Deck";

describe("<DisplayDeck />", () => {
  it("renders cards", () => {
    render (<Deck />);
    const cards = screen.getByTestId("cards")
    expect(cards).toBeInTheDocument();
  })
});
