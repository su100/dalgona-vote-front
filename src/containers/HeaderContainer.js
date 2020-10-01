import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as authActions from "store/modules/auth";
import Header from "components/common/Header";

class HeaderContainer extends Component {
  render() {
    const {
      location,
      history,
      isAuthenticated,
      isAdmin,
      AuthActions,
    } = this.props;
    return (
      <Header
        location={location}
        history={history}
        isAuthenticated={isAuthenticated}
        isAdmin={isAdmin}
        signOut={AuthActions.signOut}
      />
    );
  }
}

export default connect(
  (state) => ({
    isAuthenticated: state.auth.get("isAuthenticated"),
    isAdmin: state.auth.get("isAdmin"),
  }),
  (dispatch) => ({
    AuthActions: bindActionCreators(authActions, dispatch),
  })
)(HeaderContainer);
