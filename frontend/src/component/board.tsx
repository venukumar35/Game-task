/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect } from "react";
import { objectOfApi } from "../api/network";

export function Board({ xIsNext, squares, onPlay, winner, setWinner }: any) {
  const [status, setStatus] = useState<string>(
    "Player: " + (xIsNext ? "X" : "O")
  );

  useEffect(() => {
    async function checkWinner() {
      const winner = await calculateWinner(squares);
      if (winner) {
        setStatus("Winner: " + winner);
        setWinner(true);
      } else if (squares.every((square: any) => square !== null)) {
        setStatus("Draw: No Winner");
        setWinner(true);
      } else {
        setStatus("Player: " + (xIsNext ? "X" : "O"));
      }
    }
    checkWinner();
  }, [squares, xIsNext]);

  async function handleClick(i: any) {
    const data = await calculateWinner(squares);

    if (data || squares[i]) {
      return;
    }

    const nextSquares = squares.slice();
    if (xIsNext) {
      nextSquares[i] = "X";
    } else {
      nextSquares[i] = "O";
    }
    onPlay(nextSquares);
  }

  const squareIndices = [0, 1, 2, 3, 4, 5, 6, 7, 8];
  return (
    <div className="min-w-full flex-col justify-center items-center">
      {winner ? (
        <>
          <div className="flex flex-col justify-center items-center h-screen">
            <div className="ml-12 font-bold text-2">{status}</div>
          </div>
        </>
      ) : (
        <div className="w-full flex justify-center items-center h-screen space-x-10">
          <div className="ml-12 font-bold">{status}</div>
          <div className="grid grid-cols-3 gap-2 w-52">
            {squareIndices.map((e, index) => (
              <div
                key={index}
                onClick={() => {
                  handleClick(e);
                }}
                className="w-16 h-14 bg-white flex justify-center items-center font-semibold text-xl shadow-sm"
              >
                {squares[e]}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

async function calculateWinner(squares: any) {
  const data = await objectOfApi.FindWinner(squares);
  return data;
}
