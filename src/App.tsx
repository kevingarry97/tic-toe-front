import Board from "./components/board";
import { PlayerProvider } from "./context/players";

function App() {
  return (
    <PlayerProvider>
      <main className="flex min-h-screen w-full flex-col items-center justify-center gap-4 transition-colors duration-300 dark:bg-black dark:text-white">
        <Board />
      </main>
    </PlayerProvider>
  );
}

export default App;
