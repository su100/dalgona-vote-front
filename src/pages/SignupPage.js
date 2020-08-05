import React from "react";
import PageTemplate from "components/common/PageTemplate";
import SignupContainer from "containers/SignupContainer";
import Header from "components/common/Header";

const SignupPage = (props) => {
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
                <SignupContainer />
            </PageTemplate>
        </div>
    );
};

export default SignupPage;
