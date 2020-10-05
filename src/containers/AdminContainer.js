import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as voteActions from "store/modules/vote";
import Admin from "components/Admin";

class AdminContainer extends Component {
  getVoteList = async (isEnded) => {
    //isEnded: 0:진행, 1:완료
    const { VoteActions } = this.props;
    try {
      await VoteActions.getVoteList(isEnded);
    } catch (e) {
      console.log("error log:" + e);
    }
  };

  postVoteBoard = async (title, ended, isEnded) => {
    const { VoteActions } = this.props;
    try {
      await VoteActions.postVoteBoard(title, ended);
    } catch (e) {
      console.log("error log:" + e);
    }
    this.getVoteList(isEnded);
  };

  updateVoteBoard = async (boardId, title, ended, isEnded) => {
    const { VoteActions } = this.props;
    try {
      await VoteActions.updateVoteBoard(boardId, title, ended);
    } catch (e) {
      console.log("error log:" + e);
    }
    this.getVoteList(isEnded);
  };

  deleteVoteBoard = async (boardId, isEnded) => {
    const { VoteActions } = this.props;
    try {
      await VoteActions.deleteVoteBoard(boardId);
    } catch (e) {
      console.log("error log:" + e);
    }
    this.getVoteList(isEnded);
  };

  postVoteContents = async (isEnded, formdata) => {
    const { VoteActions } = this.props;
    try {
      await VoteActions.postVoteContents(formdata);
    } catch (e) {
      console.log("error log:" + e);
    }
    this.getVoteList(isEnded);
  };

  componentDidMount() {
    if (!this.props.isAuthenticated) {
      //권한 없을 때 접근하면 로그인 페이지
      alert("로그인이 필요합니다.");
      this.props.history.push("/login");
    } else if (!this.props.isAdmin) {
      alert("접근 권한이 없습니다.");
      this.props.history.goBack();
    } else {
      this.getVoteList(0);
    }
  }

  render() {
    const { loading, votelist } = this.props;
    return (
      <Admin
        loading={loading}
        votelist={votelist}
        postVoteBoard={this.postVoteBoard}
        getVoteList={this.getVoteList}
        updateVoteBoard={this.updateVoteBoard}
        deleteVoteBoard={this.deleteVoteBoard}
        postVoteContents={this.postVoteContents}
      />
    );
  }
}

export default connect(
  (state) => ({
    loading: state.pender.pending["vote/LIST_VOTE_BOARD"],
    isAuthenticated: state.auth.get("isAuthenticated"),
    isAdmin: state.auth.get("isAdmin"),
    votelist: state.vote.get("votelist"),
  }),
  (dispatch) => ({
    VoteActions: bindActionCreators(voteActions, dispatch),
  })
)(AdminContainer);
