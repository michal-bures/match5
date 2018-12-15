import React from "react";
import "./Cell.css";
import PlayerSymbol from "../../shared-components/PlayerSymbol";

const Cell = ({ owner, highlighted, onClick, clickable }) => {
    return (
        <td className={getClassNames()} onClick={onClick}>
            {renderPlayerSymbol()}
        </td>
    );

    function renderPlayerSymbol() {
        if (owner) {
            return <PlayerSymbol player={owner} />;
        } else {
            return null;
        }
    }

    function getClassNames() {
        const classes = [];
        classes.push(clickable ? "clickable" : "not-clickable");
        if (highlighted) classes.push("highlighted");

        return classes.join(" ");
    }
};

export default Cell;
