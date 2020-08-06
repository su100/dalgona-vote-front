import React from "react";
import { Switch, Route } from "react-router-dom";
import {
    HomePage,
    LoginPage,
    SignupPage,
    MyPage,
    AdminPage,
    NotFoundPage,
} from "pages";

function App() {
    return (
        <div className="App">
            <Switch>
                <Route exact path="/" component={HomePage} />
                <Route exact path="/login" component={LoginPage} />
                <Route exact path="/signup" component={SignupPage} />
                <Route exact path="/my" component={MyPage} />
                <Route exact path="/admin" component={AdminPage} />
                <Route component={NotFoundPage} />
            </Switch>
        </div>
    );
}

export default App;
