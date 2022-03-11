import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";
import Deck, { trickDeck } from "./Deck";
import result from "./Deck";

describe("<Deck />", () => {
  const deck = trickDeck;
    it("should create a shuffled deck", () => {
    expect(deck.length).toBe(21);
  });

  it('should render the info to choose a column', () => {
    render(<Deck />);
    const h1 = screen.getByRole('heading', {name: 'In which column is your card?'});
    expect(h1).toBeInTheDocument();
  })

  it('should render three buttons', () => {
    render(<Deck />);
    const button1 = screen.getByRole('button', {name:'Column 1'});
    userEvent.click(button1);
    const button2 = screen.getByRole('button', {name:'Column 2'});
    userEvent.click(button2);
    const button3 = screen.getByRole('button', {name:'Column 3'});
    userEvent.click(button3);
    expect(button1).toBeInTheDocument();
    expect(button2).toBeInTheDocument();
    expect(button3).toBeInTheDocument();
  })

  it('should not render the reset button before three steps', () => {
    render(<Deck />);
    const resetButton = screen.queryByRole('button', {name:'Play again'});
    expect(resetButton).toBeNull();
  })

  it('should render the reset button after three steps', () => {
    jest.spyOn(React, "useState").mockImplementationOnce(() => {
      return React.useState(3);
    })
    render(<Deck />);
    const resetButton = screen.queryByRole('button', {name:'Play again'});
    expect(resetButton).toBeInTheDocument();
  })
  
});
