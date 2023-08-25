import { ReactNode, createContext, useContext, useState } from "react";

interface Players {
    player1: string;
    setPlayer1: React.Dispatch<React.SetStateAction<string>>;
    player2: string;
    setPlayer2: React.Dispatch<React.SetStateAction<string>>;
    gameStart: boolean;
    setGameStart: React.Dispatch<React.SetStateAction<boolean>>;
}

const PlayerContext = createContext({} as Players);

export const usePlayers = () => {
    return useContext(PlayerContext)
}

export const PlayerProvider = ({children}: {children: ReactNode}) => {
    const [player1, setPlayer1] = useState<string>('');
    const [player2, setPlayer2] = useState<string>('');
    const [gameStart, setGameStart] = useState<boolean>(false);

    return (
        <PlayerContext.Provider value={{player1, setPlayer1, player2, setPlayer2, gameStart, setGameStart}}>
            {children}
        </PlayerContext.Provider>
    )
}