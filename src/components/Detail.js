import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';

class Detail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      item: null,
    }
  }
  
  componentDidMount() {
    const { id } =  this.props.location.state;
    fetch(`https://rideto-django-api.herokuapp.com/products/${id}`)
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            item: result
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
    const { error, isLoaded, item } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div className="Detail">
          <div className="header">
            <h1>Product</h1>
          </div>
          <div className="detail-container" key={item.id}>
            <div className="big-image">
              <img src={logo} />
            </div>
            <div className="title-container">
                <h3>{item.name}</h3>
                <p>{item.description}</p>
                <a href={item.external_url}>{item.external_url}</a>
                <p>Votes: {item.votes}</p>
                <p>Published by: {item.user}</p>
            </div>
          </div>
        </div>
      );
    }
  }
}

export default Detail;
