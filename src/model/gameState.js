import { Board } from "./Board";

export class GameState {
    static startNewGame(width, height) {
        return {
            board: Board.create(width, height),
            players: [{ symbol: "╳" }, { symbol: "◯" }],
            currentPlayerIndex: 0,
            winner: undefined
        };
    }

    static getCurrentPlayer(state) {
        return state.players[state.currentPlayerIndex];
    }

    static isValidPlay(state, x, y) {
        return Board.isCellEmpty(state.board, x, y);
    }

    static makePlay(state, x, y) {
        return {
            ...state,
            board: Board.placeSymbol(
                state.board,
                x,
                y,
                state.players[state.currentPlayerIndex].symbol
            ),
            currentPlayerIndex: (state.currentPlayerIndex + 1) % state.players.length
        };
    }
}
