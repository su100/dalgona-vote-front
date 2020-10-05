import React from "react";
import { CircularProgress } from "@material-ui/core";
import "./Progress.scss";

function Progress() {
  return (
    <div className="progress">
      <div className="progress-background">
        <CircularProgress />
      </div>
    </div>
  );
}

export default Progress;
