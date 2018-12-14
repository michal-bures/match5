import React from "react";
import "./AppHeader.css";
import { GameState } from "../model/GameState";

const AppHeader = ({ gameState, onNewGameClicked }) => {
    return (
        <header className="AppHeader navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="navbar-brand">Match five!</div>
            <ul class="navbar-nav">
                <li class="nav-item">
                    <button class="btn btn-primary" onClick={onNewGameClicked}>
                        NEW GAME
                    </button>
                </li>
            </ul>
            <div className="navbar-brand">{GameState.getCurrentPlayer(gameState).symbol}</div>
        </header>
    );
};

export default AppHeader;
