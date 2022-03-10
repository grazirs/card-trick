import { render, screen, fireEvent } from '@testing-library/react';
import Card from "./Card";
describe("<Card/>", () => {
  it("renders cards on the screen", () => {
    render (<Card />);
    const cards = screen.getByTestId("cards")
    expect(cards).toBeInTheDocument();
  })
});
