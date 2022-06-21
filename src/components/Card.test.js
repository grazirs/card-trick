import { render, screen} from '@testing-library/react';
import Card from "./Card";

describe("<Card/>", () => {
  it("renders cards on the screen", () => {
    render (<Card />);
    const cards = screen.getByRole("deck")
    expect(cards).toBeInTheDocument();
  })
});
