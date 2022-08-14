import { Player } from "../../models/Player";

export interface ITimer {
  currentPlayer: Player | null;
  onRestart: () => void;
  onSwapPlayer: () => void;
}
