import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "../index.css";

import { CartProvider } from "react-use-cart";

import Navbar from "../components/Navbar";

import Home from "./Home";
import Login from "./login";
import Maincomponent from "../components/MainComponent";
import Cart from "./Cart";

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
            <Route path="/cart">
              <CartProvider>
                <Cart />
              </CartProvider>
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default ReactRouterSetup;
