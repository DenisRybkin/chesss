import {Cell} from "../../models/Cell";

export interface ICellComponent {
    cell: Cell;
    isSelected: boolean;
    onChangeSelected: (cell: Cell) => void;
    onClick: (cell: Cell) => void;
}