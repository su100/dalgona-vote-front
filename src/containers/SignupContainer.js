import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as authActions from "store/modules/auth";
import Signup from "components/Signup";

class SignupContainer extends Component {
  signUp = async (username, password, nickname) => {
    const { AuthActions } = this.props;
    try {
      await AuthActions.signUp(username, password, password, nickname);
    } catch (e) {
      console.log("error log:" + e);
    }
  };

  render() {
    return (
      <Fragment>
        <Signup signUp={this.signUp} />
      </Fragment>
    );
  }
}

export default connect((dispatch) => ({
  AuthActions: bindActionCreators(authActions, dispatch),
}))(SignupContainer);
