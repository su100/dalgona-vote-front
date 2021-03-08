import React, { Component } from "react";
import { Grid } from "@material-ui/core";
import { Link } from "react-router-dom";
import "./Header.scss";

class Header extends Component {
  menuRender = () => {
    //메뉴 렌더
    //권한: 비로그인: 0, 로그인: 1, 관리자: 2
    const path = this.props.location.pathname;
    if (this.props.isAuthenticated) {
      //로그인된 경우
      return (
        <Grid container justify="flex-end" className="menu">
          <Grid item>
            {this.props.isAdmin ? (
              <Link className={path === "/admin" ? "active" : ""} to="/admin">
                관리자페이지
              </Link>
            ) : (
              <Link className={path === "/my" ? "active" : ""} to="/my">
                마이페이지
              </Link>
            )}
          </Grid>
          <Grid item>
            <button onClick={this.signOut}>로그아웃</button>
          </Grid>
        </Grid>
      );
    } else {
      return (
        <Grid container justify="flex-end" className="menu">
          
          <Grid item>
            <Link className={path === "/login" ? "active" : ""} to="/login">
              로그인
            </Link>
          </Grid>
          <Grid item>
            <Link className={path === "/signup" ? "active" : ""} to="/signup">
              회원가입
            </Link>
          </Grid>
          <Grid item>
            <Link className={path === "/my" ? "active" : ""} to="/my">
              마이페이지
            </Link>
          </Grid>
          <Grid item>
            <Link className={path === "/admin" ? "active" : ""} to="/admin">
              관리자페이지
            </Link>
          </Grid>
        </Grid>
      );
    }
  };

  signOut = () => {
    if (window.confirm("로그아웃 하시겠습니까?")) {
      this.props.signOut();
      window.location.replace("/");
    }
  };

  render() {
    return (
      <div className="header">
        <div className="brand-name">
          <Link to="/">Dalgona</Link>
        </div>
        {this.menuRender()}
      </div>
    );
  }
}

export default Header;
