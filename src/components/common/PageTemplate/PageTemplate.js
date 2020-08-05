import React from "react";
import { Grid } from "@material-ui/core";
import "./PageTemplate.scss";

const PageTemplate = ({ header, children }) => {
    return (
        <div className="page-template">
            <Grid container direction="column" alignItems="center">
                <Grid item>
                    <header>{header}</header>
                </Grid>
                <Grid item>
                    <main>{children}</main>
                </Grid>
            </Grid>
        </div>
    );
};

export default PageTemplate;
