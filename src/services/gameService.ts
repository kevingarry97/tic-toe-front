import http from "./httpService";

type Board = {
  key: string;
  value: string;
};

interface Game {
  player1: string;
  player2: string;
  winner: any;
}

const apiEndPoint = "https://tic-toe-end-ff155f818e07.herokuapp.com/api";

export const getGame = () => {
  return http.get(apiEndPoint + "/game");
};

export const createGame = ({ player1, player2, winner }: Game) => {
  return http.post(apiEndPoint + "/game", { player1, player2, winner });
};
