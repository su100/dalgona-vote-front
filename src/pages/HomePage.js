import React from "react";
import PageTemplate from "components/common/PageTemplate";
import HomeContainer from "containers/HomeContainer";
import Header from "components/common/Header";

const HomePage = ({ location }) => {
    return (
        <div>
            <PageTemplate header={<Header />}>
                <HomeContainer />
            </PageTemplate>
        </div>
    );
};

export default HomePage;
