import React, { Component } from "react";
import "./App.css";
import AppHeader from "./components/AppHeader";
import { GameGrid } from "./components/GameGrid";
import { GameState } from "./model/GameState";
import GameStateMessage from "./components/GameStateMessage";
import { GAME_CONFIG } from "./config";

function getInitialGameState() {
    return GameState.startNewGame(GAME_CONFIG);
}

class App extends Component {
    state = getInitialGameState();

    render() {
        return (
            <div className="App">
                <AppHeader gameState={this.state} onNewGameClicked={this.startNewGame} />
                <GameGrid gameState={this.state} onCellSelected={this.onCellSelected} />
                <GameStateMessage gameState={this.state} />
            </div>
        );
    }

    onCellSelected = (x, y) => {
        if (!GameState.isGameOver(this.state) && GameState.isValidPlay(this.state, x, y)) {
            console.info(
                `Player ${GameState.getCurrentPlayer(this.state).symbol} making play at (${x},${y})`
            );
            this.setState(GameState.makePlay(this.state, x, y));
        }
    };

    startNewGame = () => {
        this.setState(getInitialGameState());
    };
}

export default App;
