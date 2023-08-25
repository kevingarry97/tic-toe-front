import React from "react";
import { usePlayers } from "../context/players";

const PlayersInput = () => {
  const { player1, player2, setPlayer1, setPlayer2, setGameStart } = usePlayers();
  
  const startGame = () => {
    if (player1.length > 0 && player2.length > 0) return setGameStart(true);
  };

  return (
    <div>
      <h1 className="text-5xl font-medium">Create Players</h1>
      <div className="flex items-center space-x-10 mt-7">
        <form action="">
          <input
            type="text"
            className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 my-10"
            placeholder="Enter Player 1"
            onChange={({ target }) => setPlayer1(target.value)}
          />
          <input
            type="text"
            className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 my-10"
            placeholder="Enter Player 2"
            onChange={({ target }) => setPlayer2(target.value)}
          />
        </form>
        <button
          onClick={startGame}
          className="w-60 rounded bg-blue-500 py-4 font-bold text-white transition-colors duration-300 hover:bg-blue-700"
        >
          Start Game
        </button>
      </div>
    </div>
  );
};

export default PlayersInput;
