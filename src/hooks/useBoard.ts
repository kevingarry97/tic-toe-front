import { Player } from '../types/player';

import { Board } from "../types/board";

import { getCurrentPlayer } from "../utils/board";

type UseBoardResponse = {
  player: Player;
};

export function useBoard(board: Board, player1: string, player2: string): UseBoardResponse {
  const player = getCurrentPlayer(board, player1, player2);

  return {player};
}