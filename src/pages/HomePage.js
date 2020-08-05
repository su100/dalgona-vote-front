import React from "react";
import PageTemplate from "components/common/PageTemplate";
import HomeContainer from "containers/HomeContainer";
import Header from "components/common/Header";

const HomePage = (props) => {
    return (
        <div>
            <PageTemplate
                header={
                    <Header
                        location={props.location}
                        history={props.history}
                        match={props.match}
                    />
                }
            >
                <HomeContainer />
            </PageTemplate>
        </div>
    );
};

export default HomePage;
