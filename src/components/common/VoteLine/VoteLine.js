import React from "react";
import { Grid } from "@material-ui/core";

import crown from "images/crown.png";
import "./VoteLine.scss";

function VoteLine({ openEditModal, isMy, contents, ongoing }) {
  const count1 = contents.length > 0 ? contents[0].voter_count : 0;
  const count2 = contents.length === 2 ? contents[1].voter_count : 0;

  function calculateRatio(type) {
    const screenWidth = window.screen.width;
    let width;
    if (screenWidth > 767) {
      width = isMy ? 880 : 680;
    } else {
      width = Math.ceil(screenWidth * 0.9);
    }
    if (count1 === 0 && count2 === 0) {
      return width / 2;
    } else {
      if (type === "first") {
        return (count1 / (count1 + count2)) * width;
      } else {
        return (count2 / (count1 + count2)) * width;
      }
    }
  }

  function openModal(e) {
    openEditModal(contents[e.currentTarget.value]);
  }

  return (
    <div className={isMy ? "my-voteline voteline" : "voteline"}>
      {ongoing ? (
        <div className="ongoing">
          <Grid
            container
            direction="row"
            justify="space-between"
            alignItems="flex-end"
          >
            <Grid item>
              <div className="count left">
                <span className="star">★</span>
                {count1}
              </div>
              {contents.length > 0 ? (
                isMy ? (
                  <div className="name">{contents[0].title}</div>
                ) : (
                  <button
                    className="name edit-name"
                    onClick={openModal}
                    value={0}
                  >
                    {contents[0].title}
                  </button>
                )
              ) : (
                <div className="name">항목 없음</div>
              )}
            </Grid>
            <Grid item className="vs">
              vs.
            </Grid>
            <Grid item>
              {contents.length === 2 ? (
                isMy ? (
                  <div className="name"> {contents[1].title}</div>
                ) : (
                  <button
                    className="name edit-name"
                    onClick={openModal}
                    value={1}
                  >
                    {contents[1].title}
                  </button>
                )
              ) : (
                <div className="name">항목 없음</div>
              )}
              <div className="count right">
                <span className="star">★</span>
                {count2}
              </div>
            </Grid>
          </Grid>
          <div className="gauge">
            <div
              className={count1 >= count2 ? "gauge-win" : ""}
              style={{ width: calculateRatio("first") }}
            ></div>
            <div
              className={count1 < count2 ? "gauge-win" : ""}
              style={{ width: calculateRatio("second") }}
            ></div>
          </div>
        </div>
      ) : (
        <Grid
          container
          className="complete"
          direction="row"
          justify="space-between"
          alignItems="center"
        >
          <Grid item container className="luna left" direction="row">
            {count1 > count2 && (
              <Grid item className="badge">
                <img src={crown} alt="crown" />
                <span>win</span>
              </Grid>
            )}
            <Grid item className="info">
              {contents.length > 0 ? (
                isMy ? (
                  <div className="name"> {contents[0].title}</div>
                ) : (
                  <button
                    className="name edit-name"
                    onClick={openModal}
                    value={0}
                  >
                    {contents[0].title}
                  </button>
                )
              ) : (
                <div className="name">항목 없음</div>
              )}
              <div className="count">
                <span className="star">★</span>
                {count1}
              </div>
            </Grid>
          </Grid>
          <Grid item className="vs">
            vs.
          </Grid>
          <Grid item container className="luna right">
            <Grid item className="info">
              {contents.length === 2 ? (
                isMy ? (
                  <div className="name"> {contents[0].title}</div>
                ) : (
                  <button
                    className="name edit-name"
                    onClick={openModal}
                    value={1}
                  >
                    {contents[1].title}
                  </button>
                )
              ) : (
                <div className="name">항목 없음</div>
              )}
              <div className="count">
                <span className="star">★</span>
                {count2}
              </div>
            </Grid>
            {count1 < count2 && (
              <Grid item className="badge">
                <img src={crown} alt="crown" />
                <span>win</span>
              </Grid>
            )}
          </Grid>
        </Grid>
      )}
    </div>
  );
}

export default VoteLine;
