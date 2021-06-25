import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Navbar from "../components/Navbar";

import Home from "./Home";
import Login from "./login";
import Maincomponent from "../components/MainComponent";

const ReactRouterSetup = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <div>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/profile">
              <Login />
            </Route>
            <Route path="/chocolate">
              <Maincomponent />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default ReactRouterSetup;
