import React, { Component } from "react";
import Intro from "components/common/Intro";
import { Grid } from "@material-ui/core";
import "./Signup.scss";

class Signup extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className="signup">
                <Intro
                    title="회원가입"
                    description="달고나의 회원이 되어 루나를 응원해주세요!"
                />
                <Grid
                    container
                    direction="row"
                    justify="center"
                    alignItems="flex-start"
                    className="form"
                    spacing={10}
                >
                    <Grid item xs={4}>
                        <span className="label">이름</span>
                        <input type="text" placeholder="이름을 입력해주세요" />
                    </Grid>
                    <Grid item xs={4} container direction="column">
                        <Grid item>
                            <span className="label">아이디</span>
                            <input
                                type="text"
                                placeholder="아이디를 입력해주세요"
                            />
                        </Grid>
                        <Grid item>
                            <span className="label">패스워드</span>
                            <input
                                type="password"
                                placeholder="패스워드를 입력해주세요"
                            />
                        </Grid>
                    </Grid>
                </Grid>
                <div className="submit">
                    <button>회원가입</button>
                </div>
            </div>
        );
    }
}

export default Signup;
