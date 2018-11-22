import React, { Component } from 'react';
import { connect } from 'react-redux';

const selectCartQuantity = ({ id, cartItems }) => {
  return cartItems[id] || 0
}

class Product extends Component {

  handleAdd = () => {
    const { id, dispatch } = this.props;
    dispatch({
      type: 'ADD',
      payload: { id }
    });
  }

  handleReduce = () => {
    const { id, dipatch } = this.props;
    dipatch({
      type: 'REDUCE',
      payload: { id }
    });
  }

  render() {
    const { id, name, price, items: cartItems } = this.props;
    return (
      <div>
        <div>{name}</div>
        <div>{price}</div>
        <div>{selectCartQuantity({ id, cartItems })}</div>
        <div>
          <button onClick={this.handleReduce}>-</button>
          <button onClick={this.handleAdd}>+</button>
        </div>
      </div>
    );
  }
}

export default connect()(Product);
