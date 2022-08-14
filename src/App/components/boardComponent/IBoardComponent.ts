import { Board } from "../../models/Board";
import { Player } from "../../models/Player";

export interface IBoardComponent {
  board: Board;
  currentPlayer: Player | null;
  onSwapPlayer: () => void;
  onForceUpdate: () => void;
  onChangeBoard: (board: Board) => void;
}
