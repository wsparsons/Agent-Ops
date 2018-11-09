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
        <Route path="/home/" exact component={DashboardPage} />
        <Route path="/home/dashboard" component={DashboardPage} />
        <Route path="/home/profile" component={ProfilePage} />
        <Route path="/home/tables" component={TablesPage} />
        <Route path="/home/maps" component={MapsPage} />
        <Route path="/home/404" component={NotFoundPage} />
      </Switch>
    );
  }
}

export default Routes;
