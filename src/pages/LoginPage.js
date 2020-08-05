import React from "react";
import PageTemplate from "components/common/PageTemplate";
import LoginContainer from "containers/LoginContainer";
import Header from "components/common/Header";

const LoginPage = (props) => {
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
                <LoginContainer />
            </PageTemplate>
        </div>
    );
};

export default LoginPage;
