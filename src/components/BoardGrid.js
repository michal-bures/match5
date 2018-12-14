import React, { Component } from "react";
import { Board } from "../model/Board";
import Cell from "./Cell";
import "./BoardGrid.css";

class BoardGrid extends Component {
    render = () => {
        const rows = [...Array(this.props.board.height).keys()];
        return (
            <table>
                <tbody>{rows.map(row => this.renderRow(row))}</tbody>
            </table>
        );
    };
    renderRow = row => {
        const columns = [...Array(this.props.board.width).keys()];
        return <tr key={row}>{columns.map(column => this.renderColumn(row, column))}</tr>;
    };

    renderColumn = (row, column) => {
        return (
            <Cell
                key={column}
                symbol={Board.getSymbolAt(this.props.board, column, row)}
                clickable={Board.isCellEmpty(this.props.board, column, row)}
                onClick={() => this.props.onCellSelected(column, row)}
            />
        );
    };
}

export default BoardGrid;
