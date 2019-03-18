import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from "react-router-dom";

import ProductList from "./components/ProductList";
import Detail from "./components/Detail";
import logo from './logo.svg';
import './App.css';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <div>
            <Link to="/">Home</Link>
          </div>  
          <Route exact path="/" component={ProductList} />
          <Route path="/detail" component={Detail} />
        </div>
      </BrowserRouter>
    );
  }
};


export default App;
