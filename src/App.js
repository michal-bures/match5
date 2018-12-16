import React, { Component } from "react";
import { GAME_CONFIG } from "./config";
import AppHeader from "./shared-components/AppHeader";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { ROUTES } from "./routes";
import PlayPage from "./pages/play/PlayPage";
import SetupPage from "./pages/setup/SetupPage";
import { AppContext } from "./model/AppContext";
import { GameState } from "./model/GameState";
import { Board } from "./model/Board";

class App extends Component {
    state = {
        gameConfig: GAME_CONFIG
    };

    render() {
        return (
            <AppContext.Provider value={this.getAppContext()}>
                <Router>
                    <div className="App">
                        <AppHeader />
                        <Route path={ROUTES.PLAY} component={PlayPage} />
                        <Route path={ROUTES.SETUP} component={SetupPage} />
                    </div>
                </Router>
            </AppContext.Provider>
        );
    }

    getAppContext = () => {
        return {
            config: this.state.gameConfig,
            setConfig: this.setConfig,
            GameState: GameState,
            Board: Board
        };
    };

    setConfig = newConfig => {
        this.setState({ gameConfig: newConfig });
    };
}

export default App;
