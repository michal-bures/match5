import PropTypes from "prop-types";
import { PlayerType } from "./PlayerType";

export const CellType = PropTypes.shape({
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired
});

export const GameStateType = PropTypes.shape({
    board: PropTypes.shape({
        width: PropTypes.number.isRequired,
        height: PropTypes.number.isRequired,
        cells: PropTypes.arrayOf(PropTypes.string).isRequired
    }),
    players: PropTypes.arrayOf(PlayerType.isRequired).isRequired,
    currentPlayerIndex: PropTypes.number.isRequired,
    winner: PlayerType,
    winningLine: PropTypes.arrayOf(CellType.isRequired),
    winCondition: PropTypes.number
});
