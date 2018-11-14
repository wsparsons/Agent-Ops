import React, { Component } from "react";
import Routes from "../src/components/Routes";
import TopNavigation from "./components/topNavigation";
import SideNavigation from "./components/sideNavigation";
import Footer from "./components/Footer";
import "./index.css";
import ProductPage from '../src/components/pages/ProductPage'
import DataPage from '../src/components/pages/DataPage'
import HomePage from '../src/components/HomePage'
import { Route, Switch, Redirect } from 'react-router-dom';


class App extends Component {
  render() {
    console.log('hello222222');
    
    return (
      <div className="flexible-content">
        <Switch>
          <Route exact path="/" component={ProductPage}></Route>
          <Route exact path="/data" component={DataPage}/>
          <Route path="/home" component={HomePage}/>
          <Redirect to="/" />
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
