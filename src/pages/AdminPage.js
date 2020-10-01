import React from "react";
import PageTemplate from "components/common/PageTemplate";
import AdminContainer from "containers/AdminContainer";
import HeaderContainer from "containers/HeaderContainer";

const AdminPage = (props) => {
  return (
    <div>
      <PageTemplate
        header={
          <HeaderContainer history={props.history} location={props.location} />
        }
      >
        <AdminContainer history={props.history} />
      </PageTemplate>
    </div>
  );
};

export default AdminPage;
