import React, { Component } from "react";
import Intro from "components/common/Intro";
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
    if (tmp.username === "" || tmp.password === "" || tmp.nickname === "") {
      alert("항목을 모두 입력해주세요");
    } else if (tmp.nickname.length < 3) {
      alert("닉네임을 3글자 이상 입력해주세요");
    } else if (!isNaN(tmp.password) || tmp.password.length < 8) {
      alert("비밀번호는 영문, 영문+숫자 8자리 이상입니다.");
    } else {
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
        <div className="form">
          <div className="form-section">
            <span className="label">닉네임</span>
            <input
              type="text"
              onChange={this.inputInfo("nickname")}
              placeholder="닉네임을 입력해주세요: 3글자 이상"
            />
          </div>
          <div className="form-section">
            <div>
              <span className="label">아이디</span>
              <input
                type="text"
                placeholder="아이디를 입력해주세요"
                onChange={this.inputInfo("username")}
              />
            </div>
            <div>
              <span className="label">패스워드</span>
              <input
                type="password"
                placeholder="패스워드를 입력해주세요: 영문,영문+숫자 8자리 이상"
                onChange={this.inputInfo("password")}
              />
            </div>
          </div>
        </div>
        <div className="submit">
          <button onClick={this.signUp}>회원가입</button>
        </div>
      </div>
    );
  }
}

export default Signup;
