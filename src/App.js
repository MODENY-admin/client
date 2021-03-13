import React from "react";
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Reservation from './components/Reservation';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        {/* <Route exact path="/" component={Login}/> */}
        <Route path="/reservation" component={Reservation}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;