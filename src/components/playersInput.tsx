import React, { Fragment, useEffect, useState } from "react";
import { usePlayers } from "../context/players";
import { getGame } from "../services/gameService";

type Player = {
  key: string;
  value: string
}

interface Game {
  _id: string;
  player1: string;
  player2: string;
  winner: Player
}

const PlayersInput = () => {
  const { player1, player2, setPlayer1, setPlayer2, setGameStart } = usePlayers();
  const [games, setGames] = useState<Game[]>([]);
  const [loadGame, setLoadGame] = useState<Boolean>(false);
  
  const startGame = () => {
    if (player1.length > 0 && player2.length > 0) return setGameStart(true);
  };

  const populateGames = async () => {
    const {data} = await getGame();
    setGames(data);
  }

  const handleStartGame = () => {
    setLoadGame(true)
  }

  useEffect(() => {
    setLoadGame(false);
    populateGames()
  }, [])

  return (
    <div>
      {!loadGame ? (
        <Fragment>
          <h1 className="text-3xl font-medium text-center my-5 mx-20">List of Matches </h1>
          <div className="flex flex-col w-full items-center space-y-5">
            {games.map((g, i) => (
              <div className="flex flex-col items-center w-full border border-blue-600 rounded p-4">
                <h3 className="text-2xl">Players</h3>
                <div className="flex w-full justify-between my-1">
                  <h3 className="text-2xl text-white font-bold">{g.player1}</h3>
                  <h3 className="text-2xl text-white font-bold">{g.player2}</h3>
                </div>
                <h3 className="text-2xl text-white font-bold">{g.winner.key} <small>with {g.winner.value}</small></h3>
              </div>
            ))}
          </div>
          <button className="w-full rounded bg-blue-500 py-4 font-bold text-white transition-colors duration-300 hover:bg-blue-700 mt-8" onClick={() => handleStartGame()}>
            Start New Game
          </button>
        </Fragment>
      ) : (
        <Fragment>
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
              Start
            </button>
          </div>
        </Fragment>
      )}
    </div>
  );
};

export default PlayersInput;
