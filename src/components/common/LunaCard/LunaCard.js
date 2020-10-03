import React from "react";
import { Link } from "react-router-dom";
import { Grid } from "@material-ui/core";
import crown from "images/crown.png";
import "./LunaCard.scss";

function LunaCard({
  empty,
  isHot,
  isEnded,
  id,
  winner,
  img,
  name,
  count,
  isAuthenticated,
  isVoted,
  isVotedContents,
  postVote,
}) {
  const addVote = () => {
    if (isVoted && !isVotedContents) {
      //다른 항목에 투표한경우
      if (
        window.confirm(
          "다른 항목의 투표가 취소됩니다. 이대로 투표하시려면 확인을 눌러주세요."
        )
      )
        postVote(id);
    } else if (window.confirm("투표하시겠습니까?")) {
      postVote(id);
    }
  };

  const deleteVote = () => {
    if (window.confirm("투표를 취소하시겠습니까?")) postVote(id);
  };

  return (
    <div className={isHot ? "luna-card hot" : "luna-card"}>
      <div className="crown">{winner && <img src={crown} alt="crown" />}</div>
      {empty ? (
        <>
          <div className="empty card"></div>
          <Grid
            container
            direction="row"
            justify="space-between"
            alignItems="center"
          >
            <Grid item>항목 없음</Grid>
            <Grid item>
              <div className="star">☆</div>0
            </Grid>
          </Grid>
        </>
      ) : (
        <>
          <div className={winner ? "card winner" : "card"}>
            <img src={img} alt="luna" />
            {!isEnded && (
              <div className="card-background">
                {isAuthenticated ? (
                  isVotedContents ? (
                    <button onClick={deleteVote}>투표취소</button>
                  ) : (
                    <button onClick={addVote}>투표하기</button>
                  )
                ) : (
                  <Link to="/login">
                    <button>로그인</button>
                  </Link>
                )}
              </div>
            )}
          </div>
          <Grid
            container
            direction="row"
            justify="space-between"
            alignItems="center"
          >
            <Grid item>{name}</Grid>
            <Grid item>
              <div className={isVotedContents ? "star_filled" : "star"}>
                {isVotedContents ? "★" : "☆"}
              </div>
              {count}
            </Grid>
          </Grid>
        </>
      )}
    </div>
  );
}

export default LunaCard;
