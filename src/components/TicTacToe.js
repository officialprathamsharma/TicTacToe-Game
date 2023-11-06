import { useState } from "react";
import calculateWinner from "./CalculateWinner";
import Board from "./Board";
import ResetButton from "./ResetButton";

function TicTacToe() {
  const initialSquares = Array(9).fill(null);
  const [squares, setSquares] = useState(initialSquares);
  const [xNext, setXIsNext] = useState(true);

  const handleClick = (i) => {
    if (isGameFinished() || squares[i]) {
      return;
    }

    const newSquares = squares.slice();
    newSquares[i] = xNext ? "X" : "O";
    setSquares(newSquares);
    setXIsNext(!xNext);
  };

  const isGameFinished = () => {
    return calculateWinner(squares) || squares.every((square) => square !== null);
  };

  const resetGame = () => {
    setSquares(initialSquares);
    setXIsNext(true);
  };

  const winner = calculateWinner(squares);
  const status = isGameFinished()
    ? winner
      ? `Congratultions!!! The Winner is: ${winner}`
      : "It's a draw!"
    : `Next player: ${xNext ? "X" : "O"}`;

  return (
    <div className="game">
      <Board squares={squares} onClick={handleClick} />
      <div className="game-info">
        <div className="status">{status}</div>
        <ResetButton onClick={resetGame} />
      </div>
    </div>
  );
}

export default TicTacToe;
