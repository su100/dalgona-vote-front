import React from "react";
import PageTemplate from "components/common/PageTemplate";
import SignupContainer from "containers/SignupContainer";
import HeaderContainer from "containers/HeaderContainer";

const SignupPage = (props) => {
  return (
    <div>
      <PageTemplate
        header={
          <HeaderContainer history={props.history} location={props.location} />
        }
      >
        <SignupContainer history={props.history} />
      </PageTemplate>
    </div>
  );
};

export default SignupPage;
