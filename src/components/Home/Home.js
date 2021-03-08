import React, { Component } from "react";
import { Map, List } from "immutable";
import { Grid } from "@material-ui/core";
import StarLine from "components/common/StarLine";
import VoteCard from "components/common/VoteCard";
import moon from "images/moon.png";
import cheongha from 'images/청하.png'
import ohmygirl from 'images/오마이걸.png'
import "./Home.scss";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ongoing: true,
      nowhot:{
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
      },
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

  render() {
    const { isAuthenticated, postVote } = this.props;
    let {nowhot, votelist} = this.props;
    if(Object.keys(nowhot).length === 0){
      nowhot=this.state.nowhot;
    }
    if(votelist.size === 0){
      votelist=this.state.votelist
    }
    return (
      <div className="home">
        <div className="section home-intro">
          <div className="image-area">
            <img src={moon} alt="moon" />
          </div>
          <div className="description">
            <span>당신의 루나를 응원해주세요!</span>
            <span>Who’s your Luna?</span>
            {!this.props.isAuthenticated && (
              <span className="description-login">
                *로그인을 통해 투표에 참여해보세요
              </span>
            )}
          </div>
        </div>
        <div className="section hot">
          <h1>NOW HOT</h1>
          <StarLine main />
          {Object.keys(nowhot).length > 0 && (
            <VoteCard
              isHot
              title={nowhot.title}
              isVoted={nowhot.voted}
              isEnded={nowhot.ended}
              isAuthenticated={isAuthenticated}
              winner={nowhot.winner_id}
              luna={nowhot.contents}
              postVote={postVote}
            />
          )}
        </div>

        <div className="section luna">
          <h1>Luna</h1>
          <StarLine main />
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
          <Grid container justify="center" alignItems="center">
            {votelist.size > 0 &&
              votelist.map((vote) => {
                return (
                  vote.get("contents").length === 2 && (
                    <Grid
                      key={vote.get("id")}
                      item
                      xs={12}
                      md={6}
                      container
                      justify="center"
                      alignItems="center"
                    >
                      <VoteCard
                        title={vote.get("title")}
                        isVoted={vote.get("voted")}
                        isEnded={vote.get("ended")}
                        isAuthenticated={isAuthenticated}
                        winner={vote.get("winner_id")}
                        luna={vote.get("contents")}
                        postVote={postVote}
                      />
                    </Grid>
                  )
                );
              })}
          </Grid>
        </div>
      </div>
    );
  }
}

export default Home;
