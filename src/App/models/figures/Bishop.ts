import { BaseFigure } from "./bases/BaseFigure";
import { Colors } from "../Colors";
import { Cell } from "../Cell";
import blackLogo from "../../../assets/black-bishop.png";
import whiteLogo from "../../../assets/white-bishop.png";
import { FigureNames } from "../../../contants/boardConfig";

export class Bishop extends BaseFigure {
  constructor(color: Colors, cell: Cell) {
    super(color, cell);
    this.logo = color === Colors.BLACK ? blackLogo : whiteLogo;
    this.name = FigureNames.BISHOP;
  }

  canMove(target: Cell): boolean {
    if (!super.canMove(target)) return false;
    if (this.cell.isEmptyDioganal(target)) return true;
    return false;
  }
}
