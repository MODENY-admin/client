import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Reservation from "./pages/Reservation";

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Switch>
        {/* <Route exact path="/" component={Login}/> */}
        {/* <Route path="/" component={Reservation}/> */}
      </Switch>
    </BrowserRouter>
  );
}

export default App;
