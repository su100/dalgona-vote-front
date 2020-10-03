import React from "react";
import LunaCard from "components/common/LunaCard";

import "./VoteCard.scss";

function VoteCard({
  isHot,
  title,
  isAuthenticated,
  isEnded,
  isVoted,
  winner,
  luna,
  postVote,
}) {
  return (
    <div className={isHot ? "hot vote-card" : "vote-card"}>
      <div className="vote-card-title">{title}</div>
      <div className="vote-card-contents">
        {luna.length === 0 ? (
          <LunaCard empty />
        ) : (
          <LunaCard
            isHot={isHot}
            isEnded={isEnded}
            isAuthenticated={isAuthenticated}
            id={luna[0].id}
            winner={
              winner.length === 2
                ? true
                : winner[0] === luna[0].id
                ? true
                : false
            }
            img={luna[0].image}
            name={luna[0].title}
            isVoted={isVoted}
            isVotedContents={luna[0].voted}
            count={luna[0].voter_count}
            postVote={postVote}
          />
        )}
        <span className="vs">vs.</span>
        {luna.length === 2 ? (
          <LunaCard
            isHot={isHot}
            isEnded={isEnded}
            isAuthenticated={isAuthenticated}
            id={luna[1].id}
            winner={
              winner.length === 2
                ? true
                : winner[0] === luna[1].id
                ? true
                : false
            }
            img={luna[1].image}
            name={luna[1].title}
            isVoted={isVoted}
            isVotedContents={luna[1].voted}
            count={luna[1].voter_count}
            postVote={postVote}
          />
        ) : (
          <LunaCard empty />
        )}
      </div>
    </div>
  );
}

export default VoteCard;
