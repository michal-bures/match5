import { createContext } from "react";
import { GAME_CONFIG } from "../config";

export const AppContext = createContext({
    config: GAME_CONFIG,
    setConfig: newConfig => {},
    GameState: null,
    Board: null
});
