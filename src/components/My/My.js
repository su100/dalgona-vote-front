import React, { Component } from "react";
import Intro from "components/common/Intro";
import VoteLine from "components/common/VoteLine";
import { Grid } from "@material-ui/core";
import "./My.scss";

class My extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ongoing: false,
        };
    }

    ongoingClick = (type) => {
        this.setState({ ongoing: type === "ongoing" ? true : false });
    };

    render() {
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
                <Grid
                    container
                    direction="column"
                    justify="center"
                    alignItems="center"
                >
                    <Grid item>
                        <VoteLine
                            name1="아이유"
                            count1={100}
                            name2="청하"
                            count2={119}
                            ongoing={this.state.ongoing}
                        />
                    </Grid>
                    <Grid item>
                        <VoteLine
                            name1="소향"
                            count1={80}
                            name2="에일리"
                            count2={70}
                            ongoing={this.state.ongoing}
                        />
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
                        <button>회원탈퇴</button>
                    </Grid>
                </Grid>
            </div>
        );
    }
}

export default My;
