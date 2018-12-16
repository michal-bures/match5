import Cell from "./Cell";
import React, { Component } from "react";
import "./GameGrid.css";
import PropTypes from "prop-types";
import { GameStateType } from "../../prop-types/GameStateType";
import { AppContext } from "../../model/AppContext";

export class GameGrid extends Component {
    static propTypes = {
        gameState: GameStateType.isRequired,
        onCellSelected: PropTypes.func
    };

    static contextType = AppContext;

    static defaultProps = {
        onCellSelected: () => {}
    };

    render = () => {
        console.debug("GameGrid.render()");

        const gameState = this.props.gameState;
        const GameState = this.context.GameState;
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
        const { GameState, Board } = this.context;
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
        const { GameState, Board } = this.context;
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
