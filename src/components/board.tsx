import React, { useState } from "react";
import { RenderIf } from "./renderIf";
import { Square } from "./sqaure";
import { useBoard } from "../hooks/useBoard";
import { usePlayers } from "../context/players";
import PlayersInput from "./playersInput";
import { createGame } from "../services/gameService";

const boardInitialState = Array<{ key: string; value: string }>(9).fill({
  key: "",
  value: "",
});

const Board = () => {
  const { player1, player2, gameStart, setPlayer1, setPlayer2, setGameStart } = usePlayers();
  const [board, setBoard] = useState(boardInitialState);
  const { player, winner, isGameOver } = useBoard(board, player1, player2);

  function handleChooseSquare(index: number) {
    let boardCopy = [...board];
    boardCopy[index] = player;

    setBoard(boardCopy);
  }

  const handleRestartGame = async () => {
    const response = await createGame({player1, player2, winner})
    setBoard(boardInitialState);
  }

  const cancelGame = async () => {
    const response = await createGame({player1, player2, winner})
    setPlayer1('');
    setPlayer2('');
    setGameStart(false);
  }

  return (
    <div className="flex flex-col items-center gap-8">
      <section>
        <RenderIf condition={!gameStart}>
          <PlayersInput />
        </RenderIf>
        <RenderIf condition={gameStart}>
          <div className="flex justify-between items-center mb-20">
            <h2 className="text-2xl font-bold">{player1}: O</h2>
            <h2 className="text-2xl font-bold">{player2}: X</h2>
          </div>
          {Boolean(!winner) ? (
            <div className="relative grid grid-cols-3 grid-rows-3">
              {board.map((value, index) => (
                <Square
                  key={index}
                  item={value}
                  disabled={value.value !== "" || Boolean(winner) || isGameOver}
                  index={index}
                  onClick={() => handleChooseSquare(index)}
                />
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center py-4 w-full shadow-md border border-blue-600 rounded-md space-y-6">
              <h1 className="text-4xl font-bold text-white">Winner Is:</h1>
              <h2 className="text-3xl text-white font-bold">{winner?.key}</h2>
            </div>
          )}
          {Boolean(winner) ? (
            <div className="flex items-center space-x-20">
              <button
                className="px-4 rounded bg-transparent border border-blue-500 py-3 font-bold text-white transition-colors duration-300 hover:bg-blue-700 ml-8 mt-20"
                type="button"
                onClick={() => cancelGame()}
              >
                Stop
              </button>
              <button
                className="px-4 rounded bg-blue-500 py-3 font-bold text-white transition-colors duration-300 hover:bg-blue-700 ml-8 mt-20"
                type="button"
                onClick={() => handleRestartGame()}
              >
                Continue
              </button>
            </div>
          ) : (
            <button
              className="w-60 rounded bg-blue-500 py-4 font-bold text-white transition-colors duration-300 hover:bg-blue-700 ml-8 mt-20"
              type="button"
              onClick={() => handleRestartGame()}
            >
              Restart
            </button>
          )}
        </RenderIf>
      </section>
    </div>
  );
};

export default Board;
