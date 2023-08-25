import { Player } from '../types/player';

import { Board } from "../types/board";

import { getCurrentPlayer, getIsGameOver, getWinner } from "../utils/board";

type UseBoardResponse = {
  player: Player;
  winner: Player | null;
  isGameOver: boolean;
};

export function useBoard(board: Board, player1: string, player2: string): UseBoardResponse {
  const player = getCurrentPlayer(board, player1, player2);
  const winner = getWinner(board, player1, player2);
  const isGameOver = getIsGameOver(board, player1, player2);
  return {player, winner, isGameOver};
}