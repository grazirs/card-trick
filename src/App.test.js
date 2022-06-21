import { render, screen } from '@testing-library/react';
import Deck from "./components/Deck";

describe("<Deck />", () => {
  it("renders three columns", () => {
    render (<Deck />);
    const first = screen.getByTestId("first-column")
    const second = screen.getByTestId("second-column")
    const third = screen.getByTestId("third-column")
    expect(first).toBeInTheDocument();
    expect(second).toBeInTheDocument();
    expect(third).toBeInTheDocument();
  })
});
