import React, { Component } from 'react';
import {inject, observer} from "mobx-react";
import AddToCart from './AddToCart'
import { lifecycle, compose } from 'recompose';

const enhance = compose(
  inject(stores => ({
    cartItems: stores.CartStore.cartItems
  })),
  lifecycle({
    componentDidMount() {
      console.log(`I'm mounted: ${this.props.name}`)
    }
  })
)

// @observer
class Product extends Component {
  render() {
    const { name, price, stock, id, cartItems } = this.props;
    return (
      <div>
        <div>{name}</div>
        <div>{price}</div>
        <div>{stock}</div>
        <br />
        <div>{cartItems[id] || 0}</div>
        <br />
        <AddToCart id={id} />
      </div>
    );
  }
}

export default enhance(observer(Product));
