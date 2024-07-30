/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { Board } from "./component/board";

export default function App() {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const xIsNext = currentMove % 2 === 0;
  const currentSquares = history[currentMove];
  const [winner, setWinner] = useState(false);

  function handlePlay(nextSquares: any) {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  }

  function jumpTo(nextMove: any) {
    setCurrentMove(nextMove);
  }

  const moves = history.map((squares, move) => {
    let description;
    if (move > 0) {
      description = "Move number - " + move;
    } else {
      description = "Total moves";
    }
    return (
      <li key={move}>
        <button onClick={() => jumpTo(move)}>{description}</button>
      </li>
    );
  });

  const reset = () => {
    setHistory([Array(9).fill(null)]);
    setCurrentMove(0);
    setWinner(false);
  };
  return (
    <div className="flex min-w-full h-screen">
      <div className="w-1/2 flex flex-col items-center justify-center bg-blue-50 ">
        <div className="w-1/3 flex flex-col items-center justify-center p-4 border-2 border-black">
          <ol className="space-y-3 font-bold text-xl">{moves}</ol>
        </div>
        <div className="w-1/3 flex items-center justify-center border-2 border-black">
          <div className="flex items-center justify-center">
            <button
              onClick={reset}
              className="flex items-center justify-center p-3 font-bold text-xl"
            >
              Reset
            </button>
          </div>
        </div>
      </div>
      <div className="w-1/2 bg-blue-100">
        <Board
          xIsNext={xIsNext}
          squares={currentSquares}
          onPlay={handlePlay}
          winner={winner}
          setWinner={setWinner}
        />
      </div>
    </div>
  );
}
