import React, { useEffect, useState } from "react";
import { BoardComponent } from "../../components/boardComponent/BoardComponent";
import { Board } from "../../models/Board";
import { Player } from "../../models/Player";
import { Colors } from "../../models/Colors";
import { LostFigures } from "../../components/lostFigures/LostFigures";
import { Timer } from "../../components/timer/Timer";
import { BoardBar } from "../../components/boardBar/BoardBar";

export const GamePage = () => {
  const [board, setBoard] = useState<Board>(new Board());
  const [whitePlayer, setWhitePlayer] = useState<Player>(
    new Player(Colors.WHITE)
  );
  const [blackPlayer, setBlackPlayer] = useState<Player>(
    new Player(Colors.BLACK)
  );
  const [currentPlayer, setCurrentPlayer] = useState<Player | null>(null);

  const handleRestart = () => {
    const newBoard = new Board();
    newBoard.initCells();
    newBoard.addFigures();
    setBoard(newBoard);
  };

  const handleUpdateBoard = () => {
    const newBoard = board.getCoppyBoard();
    setBoard(newBoard);
  };

  const handleSwapPlayer = () =>
    setCurrentPlayer(
      currentPlayer?.color === Colors.WHITE ? blackPlayer : whitePlayer
    );

  useEffect(() => {
    handleRestart();
    setCurrentPlayer(whitePlayer);
  }, []);

  return (
    <>
      <div className="board-wrapper">
        <BoardBar
          currentPlayer={currentPlayer}
          onSwapPlayer={handleSwapPlayer}
          onRestart={handleRestart}
        />
        <BoardComponent
          currentPlayer={currentPlayer}
          onSwapPlayer={handleSwapPlayer}
          onForceUpdate={handleUpdateBoard}
          board={board}
          onChangeBoard={setBoard}
        />
      </div>
      <div>
        <LostFigures title="Black figures" figures={board.lostBlackFigures} />
        <LostFigures title="White figures" figures={board.lostWhiteFigures} />
      </div>
    </>
  );
};
