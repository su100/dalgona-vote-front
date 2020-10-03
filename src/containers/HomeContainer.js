import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as voteActions from "store/modules/vote";
import Home from "components/Home";

class HomeContainer extends Component {
  getVoteList = async (isEnded) => {
    //isEnded: 0:진행, 1:완료 / isVoted: 0:투표x 1:투표o
    const { VoteActions } = this.props;
    try {
      await VoteActions.getVoteList(isEnded);
    } catch (e) {
      console.log("error log:" + e);
    }
  };

  getHotBoard = async () => {
    //isEnded: 0:진행, 1:완료 / isVoted: 0:투표x 1:투표o
    const { VoteActions } = this.props;
    try {
      await VoteActions.getHotBoard();
    } catch (e) {
      console.log("error log:" + e);
    }
  };

  postVote = async (contentsId) => {
    const { VoteActions } = this.props;
    try {
      await VoteActions.postVote(contentsId);
    } catch (e) {
      console.log("error log:" + e);
    }
    this.getHotBoard();
    this.getVoteList(0); //진행중인 투표 가져오기
  };

  cancelVote = async (contentsId) => {
    const { VoteActions } = this.props;
    try {
      await VoteActions.cancelVote(contentsId);
    } catch (e) {
      console.log("error log:" + e);
    }
    this.getHotBoard();
    this.getVoteList(0); //진행중인 투표 가져오기
  };

  componentDidMount() {
    this.getHotBoard();
    this.getVoteList(0); //진행중인 투표 가져오기
  }

  render() {
    const { nowhot, votelist, isAuthenticated } = this.props;
    return (
      <Home
        nowhot={nowhot}
        votelist={votelist}
        isAuthenticated={isAuthenticated}
        getVoteList={this.getVoteList}
        postVote={this.postVote}
      />
    );
  }
}

export default connect(
  (state) => ({
    isAuthenticated: state.auth.get("isAuthenticated"),
    nowhot: state.vote.get("nowhot"),
    votelist: state.vote.get("votelist"),
  }),
  (dispatch) => ({
    VoteActions: bindActionCreators(voteActions, dispatch),
  })
)(HomeContainer);
