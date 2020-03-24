import React, { Component } from "react";
import "./App.css";
import { Route, Switch, Redirect, withRouter } from "react-router-dom";
import MainLayout from "./view/mainLayout";
import Nav from "./components/nav";

class App extends Component {
  componentDidMount() {
    this.props.history.push("/upcoming");
  }
  render() {
    return (
      <div className="main-container">
        <div style={{ marginBottom: "0.5rem" }}>Schedule</div>
        <Nav />
        <Switch>
          <Route
            path={this.props.location.pathname}
            exact
            component={() => (
              <MainLayout routerPath={this.props.location.pathname} />
            )}
          ></Route>
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);
