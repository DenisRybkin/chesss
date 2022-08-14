import { BaseFigure } from "./bases/BaseFigure";
import { Colors } from "../Colors";
import { Cell } from "../Cell";
import blackLogo from "../../../assets/black-rook.png";
import whiteLogo from "../../../assets/white-rook.png";
import { FigureNames } from "../../../constants/boardConfig";

export class Rook extends BaseFigure {
  constructor(color: Colors, cell: Cell) {
    super(color, cell);
    this.logo = color === Colors.BLACK ? blackLogo : whiteLogo;
    this.name = FigureNames.ROOK;
  }

  canMove(target: Cell): boolean {
    if (!super.canMove(target)) return false;
    if (this.cell.isEmptyVerical(target)) return true;
    if (this.cell.isEmptyHorizontal(target)) return true;
    return false;
  }
}
