import React from "react";
import Routes from "./routes.js";
import { Switch, Route, withRouter } from "react-router-dom";
import { Galeria, Home } from "./pages";

function App() {
  return (
    <Switch>
      <Route exact path="/" component={() => <Home />} />
      <Route exact path="/galeria" component={() => <Galeria />} />
    </Switch>
  );
}

export default withRouter(App);
