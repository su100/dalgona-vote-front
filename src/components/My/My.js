import React, { Component } from "react";
import { Map, List } from "immutable";
import Intro from "components/common/Intro";
import VoteLine from "components/common/VoteLine";
import Progress from "components/common/Progress";
import { Grid, Tab, Tabs } from "@material-ui/core";
import cheongha from 'images/청하.png'
import ohmygirl from 'images/오마이걸.png'
import "./My.scss";

class My extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ongoing: true,
      tab: 0,
      nickname: "",
      password1: "",
      password2: "",
      votelist:List([
        Map({
          id:0,
          title:'여름하면 떠오르는 아이돌은?',
          isVoted: true,
          isEnded: false,
          winner_id: [1],
          contents:[
            {
              id:0,
              image:ohmygirl,
              title:'오마이걸',
              voter_count:8,
              voted:false,
            },
            {
              id:1,
              image:cheongha,
              title:'청하',
              voter_count:13,
              voted:true,
            }
          ]
        }),
        Map({
          id:1,
          title:'여름하면 떠오르는 아이돌은?',
          isVoted: true,
          isEnded: false,
          winner_id: [1],
          contents:[
            {
              id:0,
              image:ohmygirl,
              title:'오마이걸',
              voter_count:8,
              voted:false,
            },
            {
              id:1,
              image:cheongha,
              title:'청하',
              voter_count:13,
              voted:true,
            }
          ]
        }),
        Map({
          id:2,
          title:'여름하면 떠오르는 아이돌은?',
          isVoted: true,
          isEnded: false,
          winner_id: [1],
          contents:[
            {
              id:0,
              image:ohmygirl,
              title:'오마이걸',
              voter_count:8,
              voted:false,
            },
            {
              id:1,
              image:cheongha,
              title:'청하',
              voter_count:13,
              voted:true,
            }
          ]
        }),
      ])
    };
  }

  ongoingClick = (type) => {
    this.setState({ ongoing: type === "ongoing" ? true : false });
    this.props.getVoteList(type === "ongoing" ? 0 : 1);
  };

  withdrawal = () => {
    if (window.confirm("회원 탈퇴 하시겠습니까?")) this.props.deleteUser();
  };

  handleTab = (event, newValue) => {
    this.setState({ tab: newValue });
  };

  handleChange = (name) => (e) => {
    this.setState({ [name]: e.target.value });
  };

  updateUser = () => {
    const { nickname } = this.state;
    if (nickname === "") alert("닉네임을 입력해주세요");
    else {
      this.props.updateUser(nickname);
      this.setState({ nickname: "" });
    }
  };

  updatePassword = () => {
    const { password1, password2 } = this.state;
    if (password1 === "" || password2 === "") alert("항목을 모두 입력해주세요");
    else {
      this.props.updatePassword(password1, password2);
      this.setState({ password1: "", password2: "" });
    }
  };

  render() {
    const { votelist } = this.state;
    const { tab } = this.state;
    return (
      <div className="my">
        <Intro
          title="마이페이지"
          description="내가 투표했던 루나들을 확인해보세요"
        />
        <Tabs
          centered
          value={tab}
          onChange={this.handleTab}
          aria-label="simple tabs example"
        >
          <Tab label="나의 투표" />
          <Tab label="회원정보 수정" />
          <Tab label="비밀번호 변경" />
        </Tabs>
        {tab === 0 && (
          <div>
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
            <Grid
              container
              direction="column"
              justify="center"
              alignItems="center"
            >
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
        )}
        {tab === 1 && (
          <div className="member-info">
            <span>닉네임</span>
            <input onChange={this.handleChange("nickname")} type="text" />{" "}
            <button onClick={this.updateUser}>변경</button>
          </div>
        )}
        {tab === 2 && (
          <div className="member-info password">
            <div>
              <span>비밀번호</span>
              <input
                onChange={this.handleChange("password1")}
                type="password"
              />
            </div>
            <div>
              <span>비밀번호 확인</span>
              <input
                onChange={this.handleChange("password2")}
                type="password"
              />
            </div>
            <button onClick={this.updatePassword}>변경</button>
          </div>
        )}
      </div>
    );
  }
}

export default My;
