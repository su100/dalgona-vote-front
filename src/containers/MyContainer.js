import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as authActions from "store/modules/auth";
import * as voteActions from "store/modules/vote";
import My from "components/My";

class MyContainer extends Component {
  getVoteList = async (isEnded) => {
    const { VoteActions } = this.props;
    try {
      await VoteActions.getVoteList(isEnded, 1);
      //isEnded: 0:진행, 1:완료 / isVoted: 0:투표x 1:투표o
    } catch (e) {
      console.log("error log:" + e);
    }
  };

  deleteUser = async () => {
    const { AuthActions } = this.props;
    try {
      await AuthActions.deleteUser();
    } catch (e) {
      console.log("error log:" + e);
    }
    if (this.props.success) {
      //회원탈퇴 성공시
      this.props.history.push("/");
    }
  };

  updateUser = async (nickname) => {
    const { AuthActions } = this.props;
    try {
      await AuthActions.updateUser(nickname);
    } catch (e) {
      console.log("error log:" + e);
    }
  };

  updatePassword = async (new_password1, new_password2) => {
    const { AuthActions } = this.props;
    try {
      await AuthActions.updatePassword(new_password1, new_password2);
    } catch (e) {
      console.log("error log:" + e);
    }
  };
  componentDidMount() {
    // if (!this.props.isAuthenticated) {
    //   //권한 없을 때 접근하면 로그인 페이지
    //   alert("로그인이 필요합니다");
    //   this.props.history.push("/login");
    // } else {
    //   this.getVoteList(0);
    // }
  }

  render() {
    const { loading, votelist, isAuthenticated } = this.props;
    return (
      <Fragment>
        <My
          loading={loading}
          votelist={votelist}
          isAuthenticated={isAuthenticated}
          getVoteList={this.getVoteList}
          updateUser={this.updateUser}
          updatePassword={this.updatePassword}
          deleteUser={this.deleteUser}
        />
      </Fragment>
    );
  }
}

export default connect(
  (state) => ({
    loading: state.pender.pending["vote/LIST_VOTE_BOARD"],
    isAuthenticated: state.auth.get("isAuthenticated"),
    votelist: state.vote.get("votelist"),
    success: state.pender.success["auth/DELETE_USER"],
  }),
  (dispatch) => ({
    AuthActions: bindActionCreators(authActions, dispatch),
    VoteActions: bindActionCreators(voteActions, dispatch),
  })
)(MyContainer);
