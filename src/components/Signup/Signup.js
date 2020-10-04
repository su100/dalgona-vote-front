import React, { Component } from "react";
import Intro from "components/common/Intro";
import { Grid } from "@material-ui/core";
import "./Signup.scss";

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      nickname: "",
    };
  }

  signUp = () => {
    const tmp = this.state;
    //각 항목이 모두 비어있지 않을 때
    if (tmp.username !== "" && tmp.password !== "" && tmp.nickname !== "") {
      this.props.signUp(tmp.username, tmp.password, tmp.nickname);
    }
  };

  inputInfo = (name) => (e) => {
    this.setState({ [name]: e.target.value });
  };

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
        >
          <Grid item xs={4} className="signup-name">
            <span className="label">이름</span>
            <input
              type="text"
              onChange={this.inputInfo("nickname")}
              placeholder="이름을 입력해주세요"
            />
          </Grid>
          <Grid item xs={4} container direction="column">
            <Grid item>
              <span className="label">아이디</span>
              <input
                type="text"
                placeholder="아이디를 입력해주세요"
                onChange={this.inputInfo("username")}
              />
            </Grid>
            <Grid item>
              <span className="label">패스워드</span>
              <input
                type="password"
                placeholder="패스워드를 입력해주세요"
                onChange={this.inputInfo("password")}
              />
            </Grid>
          </Grid>
        </Grid>
        <div className="submit">
          <button onClick={this.signUp}>회원가입</button>
        </div>
      </div>
    );
  }
}

export default Signup;
