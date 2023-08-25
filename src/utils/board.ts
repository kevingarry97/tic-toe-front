import { victoriousPositions } from "../constants/positions";

import { Board } from "../types/board";

export const getCurrentPlayer = (board: Board, player1: string, player2: string) => {

  const xAmountOnBoard = board.filter((value) => value.key === player1).length;
  const oAmountOnBoard = board.filter((value) => value.key === player2).length;

  return xAmountOnBoard <= oAmountOnBoard ? {key: player1, value: "O"} : {key: player2, value: "X"};
}

export function getWinner(board: Board, player1: string, player2: string) {
  const x = board.map((value) => (value.value === "X" ? "X" : null));
  const o = board.map((value) => (value.value === "O" ? "O" : null));
  
  const xWins = victoriousPositions.some((list) =>
    list.every((number) => x[number] !== null),
  );
  const oWins = victoriousPositions.some((list) =>
    list.every((number) => o[number] !== null),
  );

  if (xWins) {
    return {key: player2, value: "X"};
  } else if (oWins) {
    return {key: player1, value: "O"};
  } else {
    return null;
  }
}

export function getIsGameOver(board: Board, player1: string, player2: string) {
  const winner = getWinner(board, player1, player2);
  const isBoardFilled = board.every((value) => value.value !== "");
  return Boolean(winner) || isBoardFilled;
}
