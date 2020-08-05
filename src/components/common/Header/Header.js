import React, { Component } from "react";
import { Grid } from "@material-ui/core";
import { Link } from "react-router-dom";
import "./Header.scss";

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            auth: 0, //권한
        };
    }

    menuRender = () => {
        //메뉴 렌더
        //권한: 비로그인: 0, 로그인: 1, 관리자: 2
        const path = this.props.location.pathname;
        switch (this.state.auth) {
            case 0:
                return (
                    <Grid
                        item
                        xs={6}
                        container
                        justify="flex-end"
                        className="menu"
                    >
                        <Grid item>
                            <Link
                                className={path === "/login" ? "active" : ""}
                                to="/login"
                            >
                                로그인
                            </Link>
                        </Grid>
                        <Grid item>
                            <Link
                                className={path === "/signup" ? "active" : ""}
                                to="/signup"
                            >
                                회원가입
                            </Link>
                        </Grid>
                    </Grid>
                );
            case 1:
                return (
                    <Grid
                        item
                        xs={6}
                        container
                        justify="flex-end"
                        className="menu"
                    >
                        <Grid item>
                            <Link
                                className={path === "/my" ? "active" : ""}
                                to="/my"
                            >
                                마이페이지
                            </Link>
                        </Grid>
                        <Grid item>
                            <button onClick={this.signOut}>로그아웃</button>
                        </Grid>
                    </Grid>
                );
            case 2:
                return (
                    <Grid
                        item
                        xs={6}
                        container
                        justify="flex-end"
                        className="menu"
                    >
                        <Grid item>
                            <Link
                                className={path === "/admin" ? "active" : ""}
                                to="/admin"
                            >
                                관리자페이지
                            </Link>
                        </Grid>
                        <Grid item>
                            <button onClick={this.signOut}>로그아웃</button>
                        </Grid>
                    </Grid>
                );
            default:
                return (
                    <Grid
                        item
                        xs={6}
                        container
                        justify="flex-end"
                        className="menu"
                    >
                        <Grid item>
                            <Link to="/login">로그인</Link>
                        </Grid>
                        <Grid item>
                            <Link to="/signup">회원가입</Link>
                        </Grid>
                    </Grid>
                );
        }
    };

    signOut = () => {
        if (window.confirm("로그아웃 하시겠습니까?")) {
            //로그아웃
            this.setState({ auth: 0 });
        }
    };

    render() {
        return (
            <div className="header">
                <Grid
                    container
                    direction="row"
                    justify="space-between"
                    alignItems="center"
                >
                    <Grid item xs={6} className="brand-name">
                        <Link to="/">Dalgona</Link>
                    </Grid>
                    {this.menuRender()}
                </Grid>
            </div>
        );
    }
}

export default Header;
