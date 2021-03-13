import React from "react";
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Reservation from './components/Reservation';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

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