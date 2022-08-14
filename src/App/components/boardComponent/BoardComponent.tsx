import React, { useEffect, useState } from "react";
import { IBoardComponent } from "./IBoardComponent";
import { CellComponent } from "../cellComponent/CellComponent";
import { Cell } from "../../models/Cell";
import { Colors } from "../../models/Colors";
import { Timer } from "../timer/Timer";

export const BoardComponent: React.FC<IBoardComponent> = (props) => {
  const [selectedCell, setSelectedCell] = useState<Cell | null>(null);

  const handleClickCell = (cell: Cell) => {
    if (selectedCell === cell) return setSelectedCell(null);
    if (selectedCell && selectedCell.figure?.canMove(cell)) {
      selectedCell.moveFigure(cell);
      setSelectedCell(null);
      props.onSwapPlayer();
    } else
      cell.figure?.color === props.currentPlayer?.color &&
        setSelectedCell(cell);
  };

  const handleHighlightCell = () => {
    props.board.higlightCells(selectedCell);
    props.onForceUpdate();
  };

  useEffect(() => handleHighlightCell(), [selectedCell]);

  return (
    <div className="board">
      {props.board.cells.map((row, index) => (
        <React.Fragment key={index}>
          {row.map((cell) => (
            <CellComponent
              key={cell.id}
              cell={cell}
              onClick={handleClickCell}
              onChangeSelected={setSelectedCell}
              isSelected={
                selectedCell?.x === cell.x && selectedCell?.y === cell.y
              }
            />
          ))}
        </React.Fragment>
      ))}
    </div>
  );
};
