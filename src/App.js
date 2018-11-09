import React, { Component } from "react";
import Routes from "../src/components/Routes";
import TopNavigation from "./components/topNavigation";
import SideNavigation from "./components/sideNavigation";
import Footer from "./components/Footer";
import "./index.css";
import ProductPage from '../src/components/pages/ProductPage'
import HomePage from '../src/components/HomePage'
import { Route, Switch } from 'react-router-dom';


class App extends Component {
  render() {
    return (
      <div className="flexible-content">
        <Switch>
          <Route path="/product" component={ProductPage}></Route>
          <Route path="/home" component={HomePage}/>
        </Switch>
        {/* <TopNavigation />
        <SideNavigation />
        <main id="content" className="p-5">
          <Routes />
        </main>
        <Footer /> */}
      </div>
    );
  }
}

export default App;
