import React, { createContext, useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Header from './components/Header/Header';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Admin from './components/Admin/Admin';
import CheckOut from './components/CheckOut/CheckOut';
import Orders from './components/Orders/Orders';
import AddBook from './components/AddBook/AddBook';
import ManageBook from './components/ManageBook/ManageBook';

export const UserContext = createContext();
export const TakenBookContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  const [takenBook, setTakenBook] = useState({});
  
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <TakenBookContext.Provider value={[takenBook, setTakenBook]}>
      {/* <p>Name: {loggedInUser.name}</p>
      <p>email: {loggedInUser.email}</p> */}
      <Router>
        <Header />
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <PrivateRoute path="/checkout">
            <CheckOut />
          </PrivateRoute>
          <PrivateRoute path="/admin">
            <Admin />
          </PrivateRoute>
          <PrivateRoute path="/manageBook">
            <ManageBook />
          </PrivateRoute>
          <PrivateRoute path="/addBook">
            <AddBook />
          </PrivateRoute>
          <PrivateRoute path="/orders">
            <Orders />
          </PrivateRoute>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </TakenBookContext.Provider>
    </UserContext.Provider>
  );
}

export default App;
