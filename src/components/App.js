import React, { Component } from 'react';
import { Route, Link } from "react-router-dom";
import logo from '../assets/images/logo.svg';
import '../assets/css/App.css';
import Dashboard from './Dashboard';
import Payment from './Payment';

class App extends Component {
  render() {
    return (
      <div className="App">
        <nav className="navbar navbar-light" style={{"backgroundColor":"#fff !important"}}>
        <Link className="navbar-brand" to="/">      <img src={logo}  alt=""/> </Link>

        </nav>
        {/* <Dashboard  products={productData.products}/> */}
        <Route path="/payment" component={Payment} />
        <Route path="/" exact component={Dashboard} />
      </div>
    );
  }
}

export default App;
