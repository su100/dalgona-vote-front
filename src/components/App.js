import React from "react";
import { Switch, Route } from "react-router-dom";
import { HomePage, NotFoundPage } from "pages";
import "./App.scss";

function App() {
    return (
        <div className="App">
            <Switch>
                <Route exact path="/" component={HomePage} />
                <Route component={NotFoundPage} />
            </Switch>
        </div>
    );
}

export default App;
