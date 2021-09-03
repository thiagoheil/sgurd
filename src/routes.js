import React from "react";
import { Switch, Route } from "react-router-dom";

import { Galeria, Home } from "./pages";

function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={() => <Home />} />
      <Route exact path="/galeria" component={() => <Galeria />} />
    </Switch>
  );
}

export default Routes;
