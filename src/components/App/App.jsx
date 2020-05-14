import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import Header from '../Header/Header';
import List from '../List/List';
import Detail from '../Detail/Detail';
import './App.css';

export default function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={List} />
        <Route exact path="/detail/:id" component={Detail} />
      </Switch>
    </Router>
  );
}
