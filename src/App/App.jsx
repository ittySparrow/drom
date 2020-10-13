import React from "react";
import { initializeApp } from "../_reducers/app";
import { connect } from "react-redux";
import RegisterPageContainer from "../RegisterPage/RegisterPageContainer";
import OrdersPageContainer from "../OrdersPage/OrdersPageContainer";
import { Redirect, Switch } from "react-router-dom/cjs/react-router-dom.min";
import { Route } from "react-router-dom";
import "./App.css";

class App extends React.Component {
  componentDidMount() {
    this.props.initializeApp();
  }

  render() {
    if (!this.props.initialized) {
      return <></>;
    }
    return (
      <div className="app-wrapper">
        <div className="app-wrapper-content">
          <Switch>
            <Route path="/orders" render={() => <OrdersPageContainer />} />
            <Route
              path="/index.html"
              render={() => <RegisterPageContainer />}
            />
            <Redirect exact from="*" to="/index.html" />
          </Switch>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ app }) => ({
  initialized: app.initialized,
});
export default connect(mapStateToProps, { initializeApp })(App);
