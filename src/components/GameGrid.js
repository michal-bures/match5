import { Board } from "../model/Board";
import Cell from "./Cell";
import { GameState } from "../model/GameState";
import React, { Component } from "react";
import "./GameGrid.css";
import { GameStateType } from "../prop-types/GameState.proptype";
import PropTypes from "prop-types";

export class GameGrid extends Component {
    static propTypes = {
        gameState: GameStateType.isRequired,
        onCellSelected: PropTypes.func
    };

    static defaultProps = {
        onCellSelected: () => {}
    };

    render = () => {
        console.debug("GameGrid.render()");
        //for testing error boundary :)
        //randomlyThrowError();

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

    randomlyThrowError() {
        if (Math.random() > 0.8) throw new Error("sample random error");
    }

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
                clickable={this.isCellClickable(row, column)}
                highlighted={GameState.isCellOnWinningLine(gameState, column, row)}
                onClick={() => this.props.onCellSelected(column, row)}
            />
        );
    };
    isCellClickable = (row, column) => {
        const gameState = this.props.gameState;
        return Board.isCellEmpty(gameState.board, column, row) && !GameState.isGameOver(gameState);
    };

    // testing lifecycle hooks
    componentDidMount = (...args) => {
        console.log("ComponentDidMount", args);
    };

    componentDidUpdate = (...args) => {
        console.log("ComponentDidUpdate", args);
    };

    componentWillMount = (...args) => {
        console.log("ComponentWillMount", args);
    };

    componentWillReceiveProps = (...args) => {
        console.log("ComponentWillReceiveProps", args);
    };

    componentWillUpdate = (...args) => {
        console.log("ComponentWillUpdate", args);
    };
}
