import React from "react";

import "./StarLine.scss";

function StarLine({ main }) {
    return (
        <div className="starline">
            <div className={main ? "line main" : "line"}>
                <span>★</span>
            </div>
        </div>
    );
}

export default StarLine;
