import React from "react";
import PageTemplate from "components/common/PageTemplate";
import LoginContainer from "containers/LoginContainer";
import HeaderContainer from "containers/HeaderContainer";

const LoginPage = (props) => {
  return (
    <div>
      <PageTemplate
        header={
          <HeaderContainer history={props.history} location={props.location} />
        }
      >
        <LoginContainer history={props.history} />
      </PageTemplate>
    </div>
  );
};

export default LoginPage;
