import React from "react";
import { IBoardBar } from "./BoardBar.interface";
import { Colors } from "../../models/Colors";
import { Timer } from "../timer/Timer";

export const BoardBar: React.FC<IBoardBar> = (props) => {
  const handleGetCurrentColor = () => {
    switch (props.currentPlayer?.color) {
      case Colors.WHITE:
        return "var(--color-white-cell)";
      case Colors.BLACK:
        return "var(--color-black-cell)";
    }
  };

  return (
    <>
      <div
        className="board-info-block"
        style={{ borderColor: handleGetCurrentColor() }}
      >
        <h3>turn {props.currentPlayer?.color}</h3>
        <Timer
          onSwapPlayer={props.onSwapPlayer}
          currentPlayer={props.currentPlayer}
          onRestart={props.onRestart}
        />
      </div>
    </>
  );
};
