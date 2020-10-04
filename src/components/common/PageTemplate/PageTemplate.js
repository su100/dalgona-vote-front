import React from "react";
import "./PageTemplate.scss";

const PageTemplate = ({ header, children }) => {
  return (
    <div className="page-template">
      <div>
        <header>{header}</header>
      </div>
      <div>
        <main>{children}</main>
      </div>
    </div>
  );
};

export default PageTemplate;
