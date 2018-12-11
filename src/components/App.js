import React, { Component } from 'react';
import logo from '../assets/images/logo.svg';
import '../assets/css/App.css';
import Dashboard from './Dashboard';
import productData from './products_data.json';

class App extends Component {
  render() {
    return (
      <div className="App">
        <nav className="navbar navbar-light" style={{"backgroundColor":"#fff !important"}}>
          <a className="navbar-brand" href="#">
              <img src={logo}  alt=""/>
          </a>
        </nav>
        <Dashboard  products={productData.products}/>
      </div>
    );
  }
}

export default App;
