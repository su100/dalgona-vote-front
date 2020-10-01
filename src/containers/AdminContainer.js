import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as authActions from "store/modules/auth";
import Admin from "components/Admin";

class AdminContainer extends Component {
  componentDidMount() {
    if (!this.props.isAuthenticated) {
      //권한 없을 때 접근하면 로그인 페이지
      alert("로그인이 필요합니다.");
      this.props.history.push("/login");
    } else if (!this.props.isAdmin) {
      alert("접근 권한이 없습니다.");
      this.props.history.goBack();
    }
  }
  render() {
    return (
      <Fragment>
        <Admin />
      </Fragment>
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
)(AdminContainer);
