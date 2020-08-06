import React, { Component } from 'react';
import { Link } from "react-router-dom";

import logo from '../logo.svg';
import '../App.css';

class ProductList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: [],
    }
  }
  
  componentDidMount() {
    fetch("https://product-clone-django.herokuapp.com/products/")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result.results
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error: error,
          });
        }
      )
  }
  
  render() {
    const { error, isLoaded, items } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div className="Detail">
          <div className="header">
              <h1>Products</h1>
            </div>
            
            {items.map(item => (
              <Link key={item.id} to={{ pathname: "/detail", state: { id: item.id } }} >
                <div  className="container" >
                  <div className="thumbnail">
                    <img src={logo} alt=" "/>
                  </div>
                  <div className="title-container">
                      <h3>{item.name}</h3>
                      <p>{item.description}</p>
                  </div>
                </div>
              </Link>
            ))}
        </div>
      );
    }
  }
}

export default ProductList;
