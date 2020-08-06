import React, { Component } from "react";
import { Grid } from "@material-ui/core";
import LunaCard from "components/common/LunaCard";
import StarLine from "components/common/StarLine";
import ssak from "images/ssak.png";
import blackpink from "images/blackpink.png";
import moon from "images/moon.png";
import "./Home.scss";

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ongoing: true,
        };
    }

    ongoingClick = (type) => {
        this.setState({ ongoing: type === "ongoing" ? true : false });
    };

    render() {
        return (
            <div className="home">
                <div className="section intro">
                    <Grid container direction="row" alignItems="center">
                        <Grid item>
                            <img src={moon} alt="moon" />
                        </Grid>
                        <Grid item className="description">
                            <span>당신의 루나를 응원해주세요!</span>
                            <span>Who’s your Luna?</span>
                            <span>로그인을 통해 투표에 참여해보세요</span>
                        </Grid>
                    </Grid>
                </div>
                <div className="section hot">
                    <h1>NOW HOT</h1>
                    <StarLine main />
                    <Grid container justify="center" alignItems="center">
                        <Grid item>
                            <LunaCard
                                isHot={true}
                                winner={true}
                                img={ssak}
                                name="싹쓰리"
                                star={false}
                                count="300"
                            />
                        </Grid>
                        <Grid item>
                            <span className="vs">vs.</span>
                        </Grid>
                        <Grid item>
                            <LunaCard
                                isHot={true}
                                winner={false}
                                img={blackpink}
                                name="블랙핑크"
                                star={true}
                                count="200"
                            />
                        </Grid>
                    </Grid>
                </div>

                <div className="section luna">
                    <h1>Luna</h1>
                    <StarLine main />
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
                        spacing={8}
                        justify="center"
                        alignItems="center"
                    >
                        <Grid
                            item
                            xs={6}
                            container
                            justify="center"
                            alignItems="center"
                        >
                            <Grid item>
                                <LunaCard
                                    isHot={false}
                                    winner={true}
                                    img={ssak}
                                    name="싹쓰리"
                                    star={false}
                                    count="300"
                                />
                            </Grid>
                            <Grid item>
                                <span className="vs">vs.</span>
                            </Grid>
                            <Grid item>
                                <LunaCard
                                    isHot={false}
                                    winner={false}
                                    img={blackpink}
                                    name="블랙핑크"
                                    star={true}
                                    count="200"
                                />
                            </Grid>
                        </Grid>
                        <Grid
                            item
                            xs={6}
                            container
                            justify="center"
                            alignItems="center"
                        >
                            <Grid item>
                                <LunaCard
                                    isHot={false}
                                    winner={true}
                                    img={ssak}
                                    name="싹쓰리"
                                    star={false}
                                    count="300"
                                />
                            </Grid>
                            <Grid item>
                                <span className="vs">vs.</span>
                            </Grid>
                            <Grid item>
                                <LunaCard
                                    isHot={false}
                                    winner={false}
                                    img={blackpink}
                                    name="블랙핑크"
                                    star={true}
                                    count="200"
                                />
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid
                        container
                        spacing={8}
                        justify="center"
                        alignItems="center"
                    >
                        <Grid
                            item
                            xs={6}
                            container
                            justify="center"
                            alignItems="center"
                        >
                            <Grid item>
                                <LunaCard
                                    isHot={false}
                                    winner={true}
                                    img={ssak}
                                    name="싹쓰리"
                                    star={false}
                                    count="300"
                                />
                            </Grid>
                            <Grid item>
                                <span className="vs">vs.</span>
                            </Grid>
                            <Grid item>
                                <LunaCard
                                    isHot={false}
                                    winner={false}
                                    img={blackpink}
                                    name="블랙핑크"
                                    star={true}
                                    count="200"
                                />
                            </Grid>
                        </Grid>
                        <Grid
                            item
                            xs={6}
                            container
                            justify="center"
                            alignItems="center"
                        >
                            <Grid item>
                                <LunaCard
                                    isHot={false}
                                    winner={true}
                                    img={ssak}
                                    name="싹쓰리"
                                    star={false}
                                    count="300"
                                />
                            </Grid>
                            <Grid item>
                                <span className="vs">vs.</span>
                            </Grid>
                            <Grid item>
                                <LunaCard
                                    isHot={false}
                                    winner={false}
                                    img={blackpink}
                                    name="블랙핑크"
                                    star={true}
                                    count="200"
                                />
                            </Grid>
                        </Grid>
                    </Grid>
                </div>
            </div>
        );
    }
}

export default Home;
