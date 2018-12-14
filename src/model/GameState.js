import { Board } from "./Board";

export class GameState {
    static startNewGame(config) {
        return {
            board: Board.create(config.width, config.height),
            players: config.players,
            currentPlayerIndex: 0,
            winner: undefined,
            winningLine: undefined,
            winCondition: config.winCondition
        };
    }

    static getColorOfSymbol(state, symbol) {
        const player = this.getPlayerBySymbol(state, symbol);
        if (player) return player.color;
        return "black";
    }

    static getPlayerBySymbol(state, symbol) {
        return state.players.find(player => player.symbol === symbol);
    }

    static getCurrentPlayer(state) {
        return state.players[state.currentPlayerIndex];
    }

    static isValidPlay(state, x, y) {
        return Board.isCellEmpty(state.board, x, y);
    }

    static isGameOver(state) {
        return state.winner !== undefined;
    }

    static isCellOnWinningLine(state, candidateX, candidateY) {
        if (!this.isGameOver(state)) return false;
        return state.winningLine.some(({ x, y }) => candidateX === x && candidateY === y);
    }

    static makePlay(state, x, y) {
        if (this.isGameOver(state)) {
            throw new Error(`Cannot make play at ${x}:${y}, the game is over!`);
        }

        const newBoard = getNewBoardState();
        const newState = {
            ...state,
            board: newBoard,
            winningLine: getWinningLineOrUndefined(newBoard)
        };

        if (newState.winningLine) {
            newState.winner = this.getCurrentPlayer(state);
        } else {
            newState.currentPlayerIndex = nextPlayerIndex(state);
        }

        return newState;

        function getNewBoardState() {
            return Board.placeSymbol(state.board, x, y, GameState.getCurrentPlayer(state).symbol);
        }

        function nextPlayerIndex(state) {
            if (GameState.isGameOver(state)) return state.currentPlayerIndex;
            return (state.currentPlayerIndex + 1) % state.players.length;
        }

        function getWinningLineOrUndefined(board) {
            return Board.findMatchingLine({ board, x, y, requiredLength: state.winCondition });
        }
    }
}
