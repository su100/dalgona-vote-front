import React, { Component } from "react";
import { Map, List } from "immutable";
import { Grid, Switch } from "@material-ui/core";

import ContentsModal from "components/common/ContentsModal";
import Intro from "components/common/Intro";
import VoteLine from "components/common/VoteLine";
import Progress from "components/common/Progress";
import cheongha from 'images/청하.png'
import ohmygirl from 'images/오마이걸.png'
import "./Admin.scss";

class Admin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ongoing: true,
      votename: "",
      addOngoing: true,
      isEdit: false,
      editId: 0,
      editName: "",
      editOngoing: true,
      isModal: false,
      modalType: "",
      editContents: {},
      
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

  openModal = (type) => { 
    this.setState({ isModal: true, modalType: type });
  };

  closeModal = () => {
    //addmodal 닫기
    this.setState({ isModal: false, modalType: "" });
  };

  openAddModal = (e) => {
    //투표 항목 추가버튼 눌렀을 때
    this.setState({ boardId: e.target.value });
    this.openModal("add");
  };

  openEditModal = (contents) => {
    this.setState({ editContents: contents });
    this.openModal("edit");
  };

  ongoingClick = (type) => {
    // 투표진행중, 투표완료 선택해 리스트 가져오기
    this.setState({ ongoing: type === "ongoing" ? true : false });
    this.props.getVoteList(type === "ongoing" ? 0 : 1);
  };

  handleOngoing = (name) => (e) => {
    //투표 완료, 진행 상태 스위치
    this.setState({ [name]: e.target.checked });
  };

  handleVoteName = (name) => (e) => {
    this.setState({ [name]: e.target.value });
  };

  editVote = (value) => {
    const { editId, isEdit } = this.state;
    const targetId = Number(value.id);
    if (isEdit && targetId !== editId) {
      //수정 중에 다른 항목 수정버튼 눌렀을 때
      this.setState({
        editName: value.title,
        editId: targetId,
        editOngoing: true,
      }); //타겟 변경
    } else if (isEdit && targetId === editId) {
      //수정 상태를 취소할 때
      this.setState({
        editName: "",
        isEdit: false,
        editId: 0,
        editOngoing: true,
      });
    } else {
      this.setState({
        editName: value.title,
        isEdit: true,
        editId: targetId,
        editOngoing: true,
      });
    }
  };

  postVoteBoard = () => {
    const tmp = this.state;
    if (tmp.votename) {
      this.setState({ votename: "" });
      this.props.postVoteBoard(
        tmp.votename,
        !tmp.addOngoing,
        this.state.ongoing ? 0 : 1
      ); //완료 여부로 바꿔야함
    } else {
      alert("투표 이름을 입력해주세요");
    }
  };

  updateVote = (e) => {
    const { editName, editOngoing, ongoing } = this.state;
    this.props.updateVoteBoard(
      e.target.value,
      editName,
      !editOngoing,
      ongoing ? 0 : 1
    ); //boardId, title, ended, isEnded(수정 후 가져올 투표리스트)
    this.setState({
      editName: "",
      isEdit: false,
      editId: 0,
      editOngoing: true,
    });
  };

  deleteVote = (e) => {
    if (window.confirm("투표를 삭제하시겠습니까?"))
      this.props.deleteVoteBoard(e.target.value, this.state.ongoing ? 0 : 1);
  };

  render() {
    const {votelist} = this.state;

    return (
      <div className="admin">
        <Intro
          title="관리자페이지"
          description="투표 진행 과정을 볼 수 있고, 투표 추가 및 삭제를 할 수 있습니다."
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
          {this.props.loading ? (
            <Progress />
          ) : (
            votelist.map((vote) => {
              const contents = vote.get("contents");
              return (
                <Grid
                  key={vote.get("id")}
                  className="vote"
                  item
                  container
                  direction="column"
                  justify="center"
                  alignItems="center"
                >
                  <Grid item className="edit-area">
                    {this.state.isEdit &&
                    this.state.editId === vote.get("id") ? (
                      <>
                        <input
                          type="text"
                          value={this.state.editName}
                          onChange={this.handleVoteName("editName")}
                        />
                        <span>완료</span>
                        <Switch
                          value="editOngoing"
                          checked={this.state.editOngoing}
                          onChange={this.handleOngoing("editOngoing")}
                        />
                        <span>진행</span>
                        <button
                          onClick={this.updateVote}
                          value={vote.get("id")}
                        >
                          확인
                        </button>
                      </>
                    ) : (
                      <div className="vote-title">{vote.get("title")}</div>
                    )}
                  </Grid>
                  <Grid
                    item
                    container
                    direction="row"
                    justify="center"
                    alignItems="center"
                  >
                    <Grid item className="vote-id">
                      {vote.get("id")}
                    </Grid>
                    <Grid item>
                      <VoteLine
                        setContents={this.setContents}
                        openEditModal={this.openEditModal}
                        contents={vote.get("contents")}
                        ongoing={this.state.ongoing}
                      />
                    </Grid>
                    <Grid item className="button-area">
                      {contents.length < 2 && (
                        <button
                          className="add-contents-button"
                          onClick={this.openAddModal}
                          value={vote.get("id")}
                        >
                          추가
                        </button>
                      )}
                      <button
                        onClick={this.editVote.bind(this, {
                          id: vote.get("id"),
                          title: vote.get("title"),
                        })}
                      >
                        {this.state.isEdit &&
                        this.state.editId === vote.get("id")
                          ? "취소"
                          : "수정"}
                      </button>
                      <button onClick={this.deleteVote} value={vote.get("id")}>
                        삭제
                      </button>
                    </Grid>
                  </Grid>
                </Grid>
              );
            })
          )}

          <Grid
            className="add-vote"
            item
            container
            direcion="row"
            justify="center"
            alignItems="center"
          >
            <Grid item>
              <input
                placeholder="투표 이름"
                value={this.state.votename}
                onChange={this.handleVoteName("votename")}
              />
            </Grid>
            <Grid
              item
              xs={12}
              sm={3}
              container
              direction="row"
              justify="center"
              alignItems="center"
            >
              <Grid item>완료</Grid>
              <Grid item>
                <Switch
                  value="addOngoing"
                  checked={this.state.addOngoing}
                  onChange={this.handleOngoing("addOngoing")}
                />
              </Grid>
              <Grid item>진행</Grid>
            </Grid>
            <Grid item xs={12} sm={3} className="add-button">
              <button onClick={this.postVoteBoard}>+투표추가</button>
            </Grid>
          </Grid>
        </Grid>

        {this.state.isModal && (
          <ContentsModal
            updateVoteContents={this.props.updateVoteContents}
            deleteVoteContents={this.props.deleteVoteContents}
            modalType={this.state.modalType}
            editContents={this.state.editContents}
            boardId={this.state.boardId}
            isEnded={!this.state.ongoing}
            closeModal={this.closeModal}
            postVoteContents={this.props.postVoteContents}
          />
        )}
      </div>
    );
  }
}

export default Admin;
