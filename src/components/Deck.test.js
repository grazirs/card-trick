import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Deck, { trickDeck } from "./Deck";
import result from "./Deck";

describe("<Deck />", () => {
  const deck = trickDeck;
    it("should create a shuffled deck", () => {
    expect(deck.length).toBe(21);
  });
});
