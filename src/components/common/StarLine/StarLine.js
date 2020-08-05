import React from "react";

import "./StarLine.scss";

function StarLine({ type }) {
    return (
        <div className="starline">
            <div className={type === "main" ? "line main" : "line"}>
                <span>★</span>
            </div>
        </div>
    );
}

export default StarLine;
