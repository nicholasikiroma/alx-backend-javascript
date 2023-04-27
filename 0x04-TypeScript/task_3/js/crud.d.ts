import { RowID, RowElement } from "./interface";

export declare function insertRow(row: RowElement): RowID;
export declare function deleteRow(RowID: RowID): void;
export declare function updateRow(RowID: RowID, row: RowElement): RowID;
