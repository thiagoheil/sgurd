import React from "react";
import { Switch, Route, withRouter } from "react-router-dom";
import { Galeria, Home } from "./pages";

function App() {
  return (
    <Switch>
      <Route exact path="/" component={() => <Home />} />
      <Route exact path="/galeria" component={() => <Galeria />} />
      <Route path="*" component={() => <h1>not found</h1>} />
    </Switch>
  );
}

export default withRouter(App);
