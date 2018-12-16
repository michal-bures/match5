import PropTypes from "prop-types";

export const PlayerType = PropTypes.shape({
    symbol: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired
});
