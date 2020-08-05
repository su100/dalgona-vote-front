import React, { Component } from "react";
import { Grid } from "@material-ui/core";
import { Link } from "react-router-dom";
import Intro from "components/common/Intro";
import "./Login.scss";

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className="login">
                <Intro
                    title="로그인"
                    description="당신의 루나를 응원해주세요"
                />
                <Grid
                    container
                    className="form"
                    direction="column"
                    justify="center"
                    alignItems="center"
                >
                    <Grid item>
                        <input
                            type="text"
                            placeholder="아이디를 입력해주세요"
                        />
                    </Grid>
                    <Grid item>
                        <input
                            type="password"
                            placeholder="패스워드를 입력해주세요"
                        />
                    </Grid>
                </Grid>
                <div className="submit">
                    <button>로그인</button>
                </div>
                <Grid
                    container
                    className="join"
                    direction="column"
                    justify="center"
                    alignItems="center"
                >
                    <Grid item>아직 달고나 회원이 아니신가요?</Grid>
                    <Grid item>
                        <Link to="/signup">회원가입</Link>
                    </Grid>
                </Grid>
            </div>
        );
    }
}

export default Login;
