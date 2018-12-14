import { Board } from "../model/Board";
import Cell from "./Cell";
import { GameState } from "../model/GameState";
import React, { Component } from "react";
import "./GameGrid.css";

export class GameGrid extends Component {
    render = () => {
        const gameState = this.props.gameState;
        const rows = [...Array(gameState.board.height).keys()];
        return (
            <div
                className="GameGrid"
                style={{ borderColor: GameState.getCurrentPlayer(gameState).color }}
            >
                <table>
                    <tbody>{rows.map(row => this.renderRow(row))}</tbody>
                </table>
            </div>
        );
    };
    renderRow = row => {
        const board = this.props.gameState.board;
        const columns = [...Array(board.width).keys()];
        return <tr key={row}>{columns.map(column => this.renderCell(row, column))}</tr>;
    };
    renderCell = (row, column) => {
        const gameState = this.props.gameState;
        const symbol = Board.getSymbolAt(gameState.board, column, row);
        const symbolOwner = GameState.getPlayerBySymbol(gameState, symbol);

        return (
            <Cell
                key={column}
                owner={symbolOwner}
                clickable={
                    Board.isCellEmpty(gameState.board, column, row) &&
                    !GameState.isGameOver(gameState)
                }
                highlighted={GameState.isCellOnWinningLine(gameState, column, row)}
                onClick={() => this.props.onCellSelected(column, row)}
            />
        );
    };
}
