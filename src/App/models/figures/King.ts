import { BaseFigure } from "./bases/BaseFigure";
import { Colors } from "../Colors";
import { Cell } from "../Cell";
import blackLogo from "../../../assets/black-king.png";
import whiteLogo from "../../../assets/white-king.png";
import { FigureNames } from "../../../contants/boardConfig";

export class King extends BaseFigure {
  constructor(color: Colors, cell: Cell) {
    super(color, cell);
    this.logo = color === Colors.BLACK ? blackLogo : whiteLogo;
    this.name = FigureNames.KING;
  }

  canMove(target: Cell): boolean {
    if (target.figure?.color === this.color) return false;
    const dx = Math.abs(this.cell.x - target.x);
    const dy = Math.abs(this.cell.y - target.y);
    return dx <= 1 && dy <= 1;
  }
}
