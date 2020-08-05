import React from "react";
import { Grid } from "@material-ui/core";
import StarLine from "components/common/StarLine";
import moon from "images/moon.png";

import "./Intro.scss";

function Intro({ title, description }) {
    return (
        <div>
            <Grid
                container
                direction="row"
                justify="center"
                alignItems="center"
            >
                <Grid item xs={3}>
                    <img src={moon} alt="moon" />
                </Grid>
                <Grid item className="intro">
                    <div className="title">{title}</div>
                    <StarLine />
                    <div className="description">{description}</div>
                </Grid>
            </Grid>
        </div>
    );
}

export default Intro;
