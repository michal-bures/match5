import React, { Component } from "react";
import { GAME_CONFIG } from "./config";
import AppHeader from "./shared-components/AppHeader";
import { BrowserRouter as Router, Route, withRouter } from "react-router-dom";
import { ROUTES } from "./routes";
import PlayPage from "./pages/play/PlayPage";
import SetupPage from "./pages/setup/SetupPage";

class App extends Component {
    state = {
        gameConfig: GAME_CONFIG
    };

    render() {
        return (
            <Router>
                <div className="App">
                    <AppHeader
                        matchHowMany={this.state.gameConfig.winCondition}
                        onNewGameClicked={this.handleStartNewGame}
                    />
                    <Route
                        path={ROUTES.PLAY}
                        render={props => <PlayPage gameConfig={this.state.gameConfig} />}
                    />
                    <Route
                        path={ROUTES.SETUP}
                        render={props => (
                            <SetupPage
                                defaultConfig={props.gameConfig}
                                onSetupConfirmed={this.handleSetupConfirmed}
                            />
                        )}
                    />
                </div>
            </Router>
        );
    }

    handleStartNewGame = () => {
        alert("TODO");
    };

    handleSetupConfirmed = newConfig => {
        this.setState({ gameConfig: { ...newConfig } });
        this.props.history.push(ROUTES.PLAY);
    };
}

export default App;
