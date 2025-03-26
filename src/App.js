import React from "react";
import Header from "./components/Header";
import Banner from "./components/Banner";
import MainBody from "./components/MainBody";
import DisplayPage from "./components/DisplayPage";
import UserLog from "./components/UserLog";
import Cart from "./components/Cart";
import Footer from "./components/Footer";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/DisplayPage/:category/:id">
            <Header />
          </Route>
          <Route path="/cart">
            <Header />
            <Cart />
          </Route>
          <Route path="/Sign-In">
            <UserLog />
          </Route>
          <Route path="/">
            <Header />
            <Banner />
            <MainBody />
            <Footer />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
