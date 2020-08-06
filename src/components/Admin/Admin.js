import React, { Component } from "react";
import { Grid } from "@material-ui/core";

import AddModal from "components/common/AddModal";
import Intro from "components/common/Intro";
import VoteLine from "components/common/VoteLine";
import "./Admin.scss";

class Admin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isModal: false,
        };
    }

    openModal = () => {
        this.setState({ isModal: true });
    };

    closeModal = () => {
        this.setState({ isModal: false });
    };

    ongoingClick = (type) => {
        this.setState({ ongoing: type === "ongoing" ? true : false });
    };

    render() {
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
                <Grid
                    container
                    direction="column"
                    justify="center"
                    alignItems="center"
                >
                    <Grid
                        item
                        container
                        direction="row"
                        justify="center"
                        alignItems="flex-start"
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
                            <button
                                className={
                                    this.state.ongoing
                                        ? "ongoing delete-button"
                                        : "complete delete-button"
                                }
                            >
                                삭제
                            </button>
                        </Grid>
                    </Grid>
                    <Grid
                        item
                        container
                        direction="row"
                        justify="center"
                        alignItems="flex-start"
                    >
                        <Grid item>
                            <VoteLine
                                name1="소향"
                                count1={80}
                                name2="에일리"
                                count2={70}
                                ongoing={this.state.ongoing}
                            />
                        </Grid>
                        <Grid item>
                            <button
                                className={
                                    this.state.ongoing
                                        ? "ongoing delete-button"
                                        : "complete delete-button"
                                }
                            >
                                삭제
                            </button>
                        </Grid>
                    </Grid>
                </Grid>
                <div className="add-button">
                    <button onClick={this.openModal}>+투표추가</button>
                </div>
                {this.state.isModal && (
                    <AddModal closeModal={this.closeModal} />
                )}
            </div>
        );
    }
}

export default Admin;
