import React from "react";
import { Grid } from "@material-ui/core";

import crown from "images/crown.png";
import "./VoteLine.scss";

function VoteLine({ name1, count1, name2, count2, ongoing }) {
    function calculateRatio(type) {
        const c1 = Number(count1);
        const c2 = Number(count2);
        if (type === "first") {
            return (c1 / (c1 + c2)) * 987;
        } else {
            return (c2 / (c1 + c2)) * 987;
        }
    }

    return (
        <div className="voteline">
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
                            <div className="name">{name1}</div>
                        </Grid>
                        <Grid item className="vs">
                            vs.
                        </Grid>
                        <Grid item>
                            <div className="name">{name2}</div>
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
                            <div className="name">{name1}</div>
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
                            <div className="name">{name2}</div>
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
