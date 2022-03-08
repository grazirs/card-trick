import { render, screen } from '@testing-library/react';
import DisplayDeck from "./components/DisplayDeck";

describe("<DisplayDeck />", () => {
  it("renders cards", () => {
    render (<DisplayDeck />);
    const cards = screen.getByTestId("cards")
    expect(cards).toBeInTheDocument();
  })
});
