import React from "react";
import { ICellComponent } from "./CellComponent.interface";
import { Cell } from "../../models/Cell";

export const CellComponent: React.FC<ICellComponent> = (props) => {
  const handleClick = () => props.onClick(props.cell);

  return (
    <div
      onClick={handleClick}
      style={{
        backgroundColor:
          props.cell.available && props.cell.figure ? "green" : "",
      }}
      className={["cell", props.cell.color].join(" ")}
    >
      {props.isSelected && <div className="selected-cell" />}
      {props.cell.available && !props.cell.figure && (
        <div className="avaible" />
      )}
      {props.cell.figure?.logo && (
        <img src={props.cell.figure.logo} alt={props.cell.figure.name} />
      )}
    </div>
  );
};
