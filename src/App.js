import React from "react";
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Appbar from './components/Appbar'
import Reservation from './pages/Reservation';

function App() {
  return (
    <BrowserRouter>
    <Appbar />
      <Switch>
        {/* <Route exact path="/" component={Login}/> */}
        <Route path="/" component={Reservation}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;