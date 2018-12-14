import React, { Component } from "react";
import "./App.css";
import AppHeader from "./components/AppHeader";
import BoardGrid from "./components/BoardGrid";
import { GameState } from "./model/GameState";
import GameStateMessage from "./components/GameStateMessage";

function getInitialGameState() {
    return GameState.startNewGame(20, 20);
}

class App extends Component {
    state = getInitialGameState();

    render() {
        return (
            <div className="App">
                <AppHeader gameState={this.state} onNewGameClicked={this.startNewGame} />
                <BoardGrid board={this.state.board} onCellSelected={this.onCellSelected} />
                <GameStateMessage gameState={this.state} />
            </div>
        );
    }

    onCellSelected = (x, y) => {
        if (GameState.isValidPlay(this.state, x, y)) {
            console.info(
                `Player ${GameState.getCurrentPlayer(this.state).symbol} making play at ${x}:${y}`
            );
            this.setState(GameState.makePlay(this.state, x, y));
        }
    };

    startNewGame = () => {
        this.setState(getInitialGameState());
    };
}

export default App;
