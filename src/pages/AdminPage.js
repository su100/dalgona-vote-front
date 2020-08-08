import React from "react";
import PageTemplate from "components/common/PageTemplate";
import AdminContainer from "containers/AdminContainer";
import Header from "components/common/Header";

const AdminPage = (props) => {
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
                <AdminContainer />
            </PageTemplate>
        </div>
    );
};

export default AdminPage;
