import './App.css';
import React, { createContext, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/Home/Home/Home';
import LogIn from './components/LogIn/LogIn';
import NotFound from './components/NotFound/NotFound';
import UserActions from './components/UserComponent/UserActions/UserActions';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import AdminActions from './components/AdminComponent/AdminActions/AdminActions';

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/login">
            <LogIn></LogIn>
          </Route>
          <PrivateRoute path="/admin">
            <AdminActions></AdminActions>
          </PrivateRoute>
          <PrivateRoute path="/booking/:bookingId">
            <UserActions></UserActions>
          </PrivateRoute>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>

        </Switch>     
      </Router>
    </UserContext.Provider>
  );
}

export default App;
