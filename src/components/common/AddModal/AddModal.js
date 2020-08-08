import React from "react";
import { Grid } from "@material-ui/core";
import "./AddModal.scss";

import addpic from "images/addpic.png";

function Addmodal({ closeModal }) {
    return (
        <div className="add-modal">
            <Grid
                container
                direction="column"
                justify="center"
                alignItems="center"
            >
                <Grid
                    item
                    container
                    className="title-bar"
                    justify="space-between"
                    alignItems="center"
                >
                    <Grid item className="title">
                        투표 추가하기
                    </Grid>
                    <Grid item className="close-button">
                        <button onClick={closeModal}>X</button>
                    </Grid>
                </Grid>
                <Grid
                    item
                    className="contents"
                    container
                    direction="row"
                    justify="space-between"
                    alignItems="flex-start"
                >
                    <Grid item>
                        <div className="pic-background">
                            <img src={addpic} alt="addpic" />
                            <span className="pic-text">사진 추가</span>
                        </div>
                        <div className="name">
                            <span className="label">이름</span>
                            <input type="text" />
                        </div>
                    </Grid>
                    <Grid item>
                        <div item className="pic-background">
                            <img src={addpic} alt="addpic" />
                            <span className="pic-text">사진 추가</span>
                        </div>
                        <div className="name">
                            <span className="label">이름</span>
                            <input type="text" />
                        </div>
                    </Grid>
                </Grid>
                <Grid item className="button-area">
                    <button className="cancel-button" onClick={closeModal}>
                        취소
                    </button>
                    <button className="post-button" onClick={closeModal}>
                        추가
                    </button>
                </Grid>
            </Grid>
        </div>
    );
}

export default Addmodal;
