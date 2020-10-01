import React from "react";
import PageTemplate from "components/common/PageTemplate";
import HomeContainer from "containers/HomeContainer";
import HeaderContainer from "containers/HeaderContainer";

const HomePage = (props) => {
  return (
    <div>
      <PageTemplate
        header={
          <HeaderContainer history={props.history} location={props.location} />
        }
      >
        <HomeContainer />
      </PageTemplate>
    </div>
  );
};

export default HomePage;
