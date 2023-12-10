import "./App.css";
import KeyListener from "./components/KeyListener";
import GameModeSelector from "./components/GameModeSelector";
import Stats from "./components/Stats";
import TypingGame from "./components/TypingGame";
import { useGameState } from "./hooks/zustand/useGameState";

function App() {
  const { isFinished } = useGameState();
  return (
    <>
      <GameModeSelector />

      <TypingGame />
      {isFinished && <Stats />}

      <KeyListener />
    </>
  );
}

export default App;
