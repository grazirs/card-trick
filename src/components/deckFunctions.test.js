import mergeAndDistributeCards from "./deckFunctions";

describe("mergeAndDistributeCards", () => {
  const columns = [[0,1,2], [3,4,5], [6,7,8]];
  it("should merge the columns with column 0 in the middle", () => {
    const result = mergeAndDistributeCards(0, columns);
    expect(result).toEqual([[6,0,3], [7,1,4], [8,2,5]]);
  });

  it("should merge the columns with column 1 in the middle", () => {
    const result = mergeAndDistributeCards(1, columns);
    expect(result).toEqual([[6,3,0], [7,4,1], [8,5,2]]);
  });

  it("should merge the columns with column 2 in the middle", () => {
    const result = mergeAndDistributeCards(2, columns);
    expect(result).toEqual([[3,6,0], [4,7,1], [5,8,2]]);
  });
});
