import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as authActions from "store/modules/auth";
import My from "components/My";

class MyContainer extends Component {
  componentDidMount() {
    if (!this.props.isAuthenticated) {
      //권한 없을 때 접근하면 로그인 페이지
      alert("로그인이 필요합니다");
      this.props.history.push("/login");
    }
  }
  render() {
    return (
      <Fragment>
        <My isAuthenticated={this.props.isAuthenticated} />
      </Fragment>
    );
  }
}

export default connect(
  (state) => ({
    isAuthenticated: state.auth.get("isAuthenticated"),
  }),
  (dispatch) => ({
    AuthActions: bindActionCreators(authActions, dispatch),
  })
)(MyContainer);
