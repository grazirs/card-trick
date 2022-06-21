const mergeAndDistributeCards = (selectedColumn, columns) => {
  let cards;
  if (selectedColumn === 0) {
    cards = [...columns[2], ...columns[0], ...columns[1]];
  } else if (selectedColumn === 1) {
    cards = [...columns[2], ...columns[1], ...columns[0]];
  } else {
    cards = [...columns[1], ...columns[2], ...columns[0]];
  }
  const result = [[], [], []];
    cards.forEach((card, index) => {
      if (index % 3 === 1) result[1].push(card);
      else if (index % 3 === 2) result[2].push(card);
      else result[0].push(card);
    });

  return result;
}

export default  mergeAndDistributeCards 
