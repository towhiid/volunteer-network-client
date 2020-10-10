import React, { createContext, useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Login from './components/Login/Login';
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import NotFound from './components/NotFound/NotFound';
import Register from './components/Register/Register';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Event from './components/Event/Event';

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value = {[loggedInUser, setLoggedInUser]}>
      <div className= 'App'>
      <Router>
      <Header />
          <Switch>
            <Route path="/home">
            <Home />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <PrivateRoute path="/register/:name">
              <Register />
            </PrivateRoute>
            <Route path ="/event">
              <Event />
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path ="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
      </Router>
      </div>
    </UserContext.Provider>
  );
}

export default App;
