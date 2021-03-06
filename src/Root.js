import React from "react";
import { BrowserRouter } from "react-router-dom";
import ScrollToTop from "components/common/ScrollToTop";
import App from "components/App";
import { Provider } from "react-redux";
import configure from "store/configure";
import { Route } from "react-router-dom";

const store = configure();

const Root = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <ScrollToTop>
          <Route path="/" component={App} />
        </ScrollToTop>
      </BrowserRouter>
    </Provider>
  );
};

export default Root;
