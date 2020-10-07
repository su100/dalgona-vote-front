import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as authActions from "store/modules/auth";

import {
  HomePage,
  LoginPage,
  SignupPage,
  MyPage,
  AdminPage,
  NotFoundPage,
} from "pages";

class App extends Component {
  constructor(props) {
    super(props);
    const { AuthActions } = props;
    AuthActions.setAuth();
  }

  render() {
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
}

export default connect(
  (state) => ({}),
  (dispatch) => ({
    AuthActions: bindActionCreators(authActions, dispatch),
  })
)(App);
