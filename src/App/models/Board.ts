import { Cell } from "./Cell";
import {
  BlackFiguresPosition,
  BoardConfig,
  WhiteFiguresPosition,
} from "../../contants/boardConfig";
import { Colors } from "./Colors";
import { Pawn } from "./figures/Pawn";
import { King } from "./figures/King";
import { Queen } from "./figures/Queen";
import { Bishop } from "./figures/Bishop";
import { Knight } from "./figures/Knight";
import { Rook } from "./figures/Rook";
import { BaseFigure } from "./figures/bases/BaseFigure";

export class Board {
  cells: Cell[][] = [];
  lostBlackFigures: BaseFigure[] = [];
  lostWhiteFigures: BaseFigure[] = [];

  public initCells() {
    for (let i = 0; i < BoardConfig.countRows; i++) {
      const row: Cell[] = [];
      for (let j = 0; j < BoardConfig.countColumns; j++) {
        if ((i + j) % 2 != 0)
          row.push(new Cell(this, j, i, Colors.BLACK, null)); // black cell
        else row.push(new Cell(this, j, i, Colors.WHITE, null)); // white cell
      }
      this.cells.push(row);
    }
  }

  public getCell(x: number, y: number) {
    return this.cells[y][x];
  }

  public getCoppyBoard(): Board {
    const newBoard = new Board();
    newBoard.cells = this.cells;
    newBoard.lostBlackFigures = this.lostBlackFigures;
    newBoard.lostWhiteFigures = this.lostWhiteFigures;
    return newBoard;
  }

  public higlightCells(selectedCell: Cell | null) {
    for (let i = 0; i < this.cells.length; i++) {
      const row = this.cells[i];
      for (let j = 0; j < row.length; j++) {
        const target = row[j];
        target.available = !!selectedCell?.figure?.canMove(target);
      }
    }
  }

  private addKings() {
    new King(
      Colors.BLACK,
      this.getCell(BlackFiguresPosition.KINGX, BlackFiguresPosition.KINGY)
    );
    new King(
      Colors.WHITE,
      this.getCell(WhiteFiguresPosition.KINGX, WhiteFiguresPosition.KINGY)
    );
  }

  private addKnights() {
    new Knight(
      Colors.BLACK,
      this.getCell(
        BlackFiguresPosition.LEFTKNIGHTX,
        BlackFiguresPosition.LEFTKNIGHTY
      )
    );
    new Knight(
      Colors.BLACK,
      this.getCell(
        BlackFiguresPosition.RIGHTKNIGHTX,
        BlackFiguresPosition.RIGHTKNIGHTY
      )
    );
    new Knight(
      Colors.WHITE,
      this.getCell(
        WhiteFiguresPosition.LEFTKNIGHTX,
        WhiteFiguresPosition.LEFTKNIGHTY
      )
    );
    new Knight(
      Colors.WHITE,
      this.getCell(
        WhiteFiguresPosition.RIGHTKNIGHTX,
        WhiteFiguresPosition.RIGHTKNIGHTY
      )
    );
  }

  private addPawns() {
    for (let i = 0; i < BoardConfig.countColumns; i++) {
      new Pawn(Colors.BLACK, this.getCell(i, BlackFiguresPosition.PAWNY));
      new Pawn(Colors.WHITE, this.getCell(i, WhiteFiguresPosition.PAWNY));
    }
  }

  private addQueens() {
    new Queen(
      Colors.BLACK,
      this.getCell(BlackFiguresPosition.QEENX, BlackFiguresPosition.QEENY)
    );
    new Queen(
      Colors.WHITE,
      this.getCell(WhiteFiguresPosition.QEENX, WhiteFiguresPosition.QEENY)
    );
  }

  private addRooks() {
    new Rook(
      Colors.BLACK,
      this.getCell(
        BlackFiguresPosition.LEFTROOKX,
        BlackFiguresPosition.LEFTROOKY
      )
    );
    new Rook(
      Colors.BLACK,
      this.getCell(
        BlackFiguresPosition.RIGHTROOKX,
        BlackFiguresPosition.RIGHTROOKY
      )
    );
    new Rook(
      Colors.WHITE,
      this.getCell(
        WhiteFiguresPosition.LEFTROOKX,
        WhiteFiguresPosition.LEFTROOKY
      )
    );
    new Rook(
      Colors.WHITE,
      this.getCell(
        WhiteFiguresPosition.RIGHTROOKX,
        WhiteFiguresPosition.RIGHTROOKY
      )
    );
  }

  private addBishops() {
    new Bishop(
      Colors.BLACK,
      this.getCell(
        BlackFiguresPosition.LEFTBISHOPX,
        BlackFiguresPosition.LEFTBISHOPY
      )
    );
    new Bishop(
      Colors.BLACK,
      this.getCell(
        BlackFiguresPosition.RIGHTBISHOPX,
        BlackFiguresPosition.RIGHTBISHOPY
      )
    );
    new Bishop(
      Colors.WHITE,
      this.getCell(
        WhiteFiguresPosition.LEFTBISHOPX,
        WhiteFiguresPosition.LEFTBISHOPY
      )
    );
    new Bishop(
      Colors.WHITE,
      this.getCell(
        WhiteFiguresPosition.RIGHTBISHOPX,
        WhiteFiguresPosition.RIGHTBISHOPY
      )
    );
  }

  public addFigures() {
    this.addKings();
    this.addKnights();
    this.addPawns();
    this.addQueens();
    this.addBishops();
    this.addRooks();
  }
}
