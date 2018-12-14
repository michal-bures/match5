import React, { Component } from "react";

const PlayerSymbol = ({ player }) => {
    return <span style={{ color: player.color }}>{player.symbol}</span>;
};

export default PlayerSymbol;
