import React from "react";
import PageTemplate from "components/common/PageTemplate";
import Header from "components/common/Header";

const NotFoundPage = (props) => {
    return (
        <PageTemplate
            header={
                <Header
                    location={props.location}
                    history={props.history}
                    match={props.match}
                />
            }
        >
            NOT FOUND
        </PageTemplate>
    );
};

export default NotFoundPage;
