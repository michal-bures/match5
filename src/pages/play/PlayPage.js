import React, { Component } from "react";
import { GameState } from "../../model/GameState";
import AppHeader from "../../shared-components/AppHeader";
import ErrorBoundary from "../../shared-components/ErrorBoundary";
import { GameGrid } from "./GameGrid";
import GameStateMessage from "./GameStateMessage";

class PlayPage extends Component {
    constructor({ gameConfig }) {
        super({ gameConfig });
        this.state = GameState.startNewGame(gameConfig);
    }

    render() {
        return (
            <div style={{ textAlign: "center" }}>
                <ErrorBoundary>
                    <GameGrid gameState={this.state} onCellSelected={this.handleCellSelected} />
                </ErrorBoundary>
                <GameStateMessage gameState={this.state} />
            </div>
        );
    }

    handleCellSelected = (x, y) => {
        if (!GameState.isGameOver(this.state) && GameState.isValidPlay(this.state, x, y)) {
            console.info(
                `Player ${GameState.getCurrentPlayer(this.state).symbol} making play at (${x},${y})`
            );
            this.setState(GameState.makePlay(this.state, x, y));
        }
    };

    handleStartNewGame = () => {
        this.setState(this.props.gameConfig);
    };
}

export default PlayPage;
