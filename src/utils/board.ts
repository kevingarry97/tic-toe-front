import { Board } from "../types/board";

export const getCurrentPlayer = (board: Board, player1: string, player2: string) => {

  const xAmountOnBoard = board.filter((value) => value.key === player1).length;
  const oAmountOnBoard = board.filter((value) => value.key === player2).length;

  return xAmountOnBoard <= oAmountOnBoard ? {key: player1, value: "O"} : {key: player2, value: "X"};
}

