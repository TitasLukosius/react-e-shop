import React from 'react';
import ItemCard from 'components/ItemCard';
import HooksExample from 'pages/HooksExample';
import Catalog from 'pages/Catalog';
import Home from 'pages/Home';
import Login from 'pages/Login';
import Register from 'pages/Register';
import Contact from 'pages/Contact';
import Item from 'pages/Item';
import Basket from 'pages/Basket';
import Navbar from 'components/Navbar';
import Footer from 'components/Footer';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

const App = () => {

  return (
    <Router>
    <Navbar />
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/catalog">
        <Catalog />
      </Route>
      <Route path="/login">
        <Login />
      </Route>
      <Route path="/register">
        <Register />
      </Route>
      <Route path="/item">
        <Item />
      </Route>
      <Route path="/basket">
      <Basket />
    </Route>
    </Switch>
    <Footer />
  </Router>
  );
}

export default App;

