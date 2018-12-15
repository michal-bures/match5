import React from "react";
import "./GameStateMessage.css";
import { GameState } from "../../model/GameState";
import PlayerSymbol from "../../shared-components/PlayerSymbol";

const GameStateMessage = ({ gameState }) => {
    return (
        <div className="GameStateMessage card">
            <div className="card-body">{renderMessage()}</div>
        </div>
    );

    function renderMessage() {
        if (GameState.isGameOver(gameState)) {
            return (
                <span>
                    Game Over! The winner is <PlayerSymbol player={gameState.winner} />
                </span>
            );
        } else {
            return (
                <span>
                    Place <PlayerSymbol player={GameState.getCurrentPlayer(gameState)} />!
                </span>
            );
        }
    }
};

export default GameStateMessage;
