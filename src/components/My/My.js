import React, { Component } from "react";
import Intro from "components/common/Intro";
import VoteLine from "components/common/VoteLine";
import Progress from "components/common/Progress";
import { Grid } from "@material-ui/core";
import "./My.scss";

class My extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ongoing: true,
    };
  }

  ongoingClick = (type) => {
    this.setState({ ongoing: type === "ongoing" ? true : false });
    this.props.getVoteList(type === "ongoing" ? 0 : 1);
  };

  withdrawal = () => {
    if (window.confirm("회원 탈퇴 하시겠습니까?")) this.props.deleteUser();
  };

  render() {
    const { votelist } = this.props;
    return (
      <div className="my">
        <Intro
          title="마이페이지"
          description="내가 투표했던 루나들을 확인해보세요"
        />
        <div className="ongoing-tab">
          <button
            onClick={this.ongoingClick.bind(this, "ongoing")}
            className={this.state.ongoing ? "active" : ""}
          >
            투표진행중
          </button>
          <button
            onClick={this.ongoingClick.bind(this, "complete")}
            className={this.state.ongoing ? "" : "active"}
          >
            투표완료
          </button>
        </div>
        <Grid container direction="column" justify="center" alignItems="center">
          <Grid item>
            {this.props.loading ? (
              <Progress />
            ) : votelist.size > 0 ? (
              votelist.map((vote) => {
                return (
                  <VoteLine
                    key={vote.get("id")}
                    isMy
                    contents={vote.get("contents")}
                    ongoing={this.state.ongoing}
                  />
                );
              })
            ) : (
              <span className="empty-vote">항목없음</span>
            )}
          </Grid>
        </Grid>
        <Grid
          container
          className="secession"
          direction="column"
          justify="center"
          alignItems="center"
        >
          <Grid item>회원을 탈퇴하시겠습니까?</Grid>
          <Grid item>
            <button onClick={this.withdrawal}>회원탈퇴</button>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default My;
