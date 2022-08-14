import React from "react";
import { ILostFigures } from "./LostFigures.interface";

export const LostFigures: React.FC<ILostFigures> = (props) => {
  return (
    <div className="lost">
      <h3>{props.title}</h3>
      {props.figures.map((item) => (
        <div style={{ display: "flex" }} key={item.id}>
          <p>{item.name}</p>
          {item.logo && (
            <img width={20} height={20} src={item.logo} alt={item.name} />
          )}
        </div>
      ))}
    </div>
  );
};
