import Board from "./board";

export default class GameState {
    constructor() {}

    startNewGame(width, height) {
        this.board = new Board(width, height);
        this.players = ["X", "0"];
        this.currentPlayer = 0;
    }
}
