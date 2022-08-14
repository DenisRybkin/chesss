import { Player } from "../../models/Player";

export interface IBoardBar {
  currentPlayer: Player | null;
  onRestart: () => void;
  onSwapPlayer: () => void;
}
