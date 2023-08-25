import React, { useState } from "react";
import { RenderIf } from "./renderIf";
import { Square } from "./sqaure";
import { useBoard } from "../hooks/useBoard";
import { usePlayers } from "../context/players";
import PlayersInput from "./playersInput";

const boardInitialState = Array<{ key: string; value: string }>(9).fill({
  key: "",
  value: "",
});

const Board = () => {
  const { player1, player2, gameStart } = usePlayers();
  const [board, setBoard] = useState(boardInitialState);
  const { player } = useBoard(board, player1, player2);

  function handleChooseSquare(index: number) {
    let boardCopy = [...board];
    boardCopy[index] = player;

    setBoard(boardCopy);
  }
  console.log('Board ', board);
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
          <div className="relative grid grid-cols-3 grid-rows-3">
            {board.map((value, index) => (
              <Square
                key={index}
                value={value.value}
                disabled={value.value !== ""}
                index={index}
                onClick={() => handleChooseSquare(index)}
              />
            ))}
          </div>
          <button
            className="w-60 rounded bg-blue-500 py-4 font-bold text-white transition-colors duration-300 hover:bg-blue-700 ml-8 mt-20"
            type="button"
            onClick={() => console.log("Restart")}
          >
            Restart
          </button>
        </RenderIf>
      </section>
    </div>
  );
};

export default Board;
