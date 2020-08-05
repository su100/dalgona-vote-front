import React from "react";
import { Link } from "react-router-dom";
import { Grid } from "@material-ui/core";
import crown from "images/crown.png";
import "./LunaCard.scss";

function LunaCard({ isHot, winner, img, name, star, count, isUser, isVoted }) {
    return (
        <div className={isHot ? "luna-card hot" : "luna-card"}>
            <div className="crown">
                {winner && <img src={crown} alt="crown" />}
            </div>
            <div className={winner ? "card winner" : "card"}>
                <img src={img} alt="luna" />
                <div className="card-background">
                    {isUser ? (
                        isVoted ? (
                            <button>투표하기</button>
                        ) : (
                            <button>투표취소</button>
                        )
                    ) : (
                        <Link to="/login">
                            <button>로그인</button>
                        </Link>
                    )}
                </div>
            </div>
            <Grid
                container
                direction="row"
                justify="space-between"
                alignItems="center"
            >
                <Grid item>{name}</Grid>
                <Grid item>
                    <div className={star ? "star_filled" : "star"}>
                        {star ? "★" : "☆"}
                    </div>
                    {count}
                </Grid>
            </Grid>
        </div>
    );
}

export default LunaCard;
