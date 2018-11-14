import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import DashboardPage from "./pages/DashboardPage";
import ProfilePage from "./pages/ProfilePage";
import TablesPage from "./pages/TablesPage";
import MapsPage from "./pages/MapsPage";
import NotFoundPage from "./pages/NotFoundPage";

class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/home" exact component={DashboardPage} />
        <Route exact path="/home/dashboard" component={DashboardPage} />
        <Route exact path="/home/profile" component={ProfilePage} />
        <Route exact path="/home/tables" component={TablesPage} />
        <Route exact path="/home/maps" component={MapsPage} />
        <Route exact path="/home/404" component={NotFoundPage} />
      </Switch>
    );
  }
}

export default Routes;
