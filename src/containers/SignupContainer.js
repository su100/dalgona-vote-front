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
    if (this.props.success) {
      //가입 성공시 홈으로
      this.props.history.push("/");
    }
  };

  componentDidMount() {
    if (this.props.isAuthenticated) {
      //권한 있을 때 접근하면 뒤로가기
      alert("이미 로그인된 상태입니다.");
      this.props.history.goBack();
    }
  }

  render() {
    return (
      <Fragment>
        <Signup signUp={this.signUp} />
      </Fragment>
    );
  }
}

export default connect(
  (state) => ({
    isAuthenticated: state.auth.get("isAuthenticated"),
    success: state.pender.success["auth/SIGN_UP"],
  }),
  (dispatch) => ({
    AuthActions: bindActionCreators(authActions, dispatch),
  })
)(SignupContainer);
