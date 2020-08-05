import React from "react";
import PageTemplate from "components/common/PageTemplate";
import MyContainer from "containers/MyContainer";
import Header from "components/common/Header";

const MyPage = (props) => {
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
                <MyContainer />
            </PageTemplate>
        </div>
    );
};

export default MyPage;
