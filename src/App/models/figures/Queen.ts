import { BaseFigure } from "./bases/BaseFigure";
import { Colors } from "../Colors";
import { Cell } from "../Cell";
import blackLogo from "../../../assets/black-queen.png";
import whiteLogo from "../../../assets/white-queen.png";
import { FigureNames } from "../../../contants/boardConfig";

export class Queen extends BaseFigure {
  constructor(color: Colors, cell: Cell) {
    super(color, cell);
    this.logo = color === Colors.BLACK ? blackLogo : whiteLogo;
    this.name = FigureNames.QUEEN;
  }

  canMove(target: Cell): boolean {
    if (!super.canMove(target)) return false;
    if (this.cell.isEmptyVerical(target)) return true;
    if (this.cell.isEmptyHorizontal(target)) return true;
    if (this.cell.isEmptyDioganal(target)) return true;
    return false;
  }
}
