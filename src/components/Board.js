import Square from "./Square";
import '../styles.css';

function Board({ squares, onClick }) {
  const renderBoard = () => {
    const board = [];

    for (let row = 0; row < 3; row++) {
      const rowSquares = [];

      for (let col = 0; col < 3; col++) {
        const index = row * 3 + col;
        rowSquares.push(
          <Square
            key={index}
            value={squares[index]}
            onClick={() => onClick(index)}
          />
        );
      }

      board.push(
        <div className="board-row" key={row}>
          {rowSquares}
        </div>
      );
    }

    return board;
  };

  return <div className="game-board">{renderBoard()}</div>;
}

export default Board;
