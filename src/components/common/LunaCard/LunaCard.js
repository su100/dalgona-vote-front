import React from "react";
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
                    <button>
                        {isUser
                            ? isVoted
                                ? "투표하기"
                                : "투표취소"
                            : "로그인"}
                    </button>
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
