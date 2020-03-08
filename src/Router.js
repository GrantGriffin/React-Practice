import { Route, Switch } from "react-router-dom";
import React from "react";
import Home from "./Home";
import About from "./About";

export default function Router() {
  return (
    <Switch>
      <Route path="/about">
        <About />
      </Route>
      <Route path="/users">Users</Route>
      <Route path="/">
        Home
        <Home />
      </Route>
    </Switch>
  );
}
