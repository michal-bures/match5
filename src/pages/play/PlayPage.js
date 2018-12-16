import React, { Component } from "react";
import { GameState } from "../../model/GameState";
import ErrorBoundary from "../../shared-components/ErrorBoundary";
import { GameGrid } from "./GameGrid";
import GameStateMessage from "./GameStateMessage";
import { AppContext } from "../../model/AppContext";

class PlayPage extends Component {
    static contextType = AppContext;

    state = { gameState: GameState.startNewGame(this.context.config) };

    render() {
        const gameState = this.state.gameState;
        console.log("RENDER GAME STATE", gameState);

        return (
            <div style={{ textAlign: "center" }}>
                <ErrorBoundary>
                    <GameGrid gameState={gameState} onCellSelected={this.handleCellSelected} />
                </ErrorBoundary>
                <GameStateMessage gameState={gameState} />
            </div>
        );
    }

    handleCellSelected = (x, y) => {
        const GameState = this.context.GameState;
        const gameState = this.state.gameState;
        if (!GameState.isGameOver(gameState) && GameState.isValidPlay(gameState, x, y)) {
            console.info(
                `Player ${GameState.getCurrentPlayer(gameState).symbol} making play at (${x},${y})`
            );
            this.setState({ gameState: GameState.makePlay(gameState, x, y) });
        }
    };
}

export default PlayPage;
