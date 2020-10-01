import React from "react";
import PageTemplate from "components/common/PageTemplate";
import MyContainer from "containers/MyContainer";
import HeaderContainer from "containers/HeaderContainer";

const MyPage = (props) => {
  return (
    <div>
      <PageTemplate
        header={
          <HeaderContainer history={props.history} location={props.location} />
        }
      >
        <MyContainer history={props.history} />
      </PageTemplate>
    </div>
  );
};

export default MyPage;
