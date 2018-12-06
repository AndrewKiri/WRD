import React, { Component } from 'react';
import {inject, observer} from "mobx-react";
import AddToCart from './AddToCart'

const enhance = inject(stores => ({
  cartItems: stores.CartStore.cartItems
}))

// @observer
class Product extends Component {
  render() {
    const { name, price, stock, id, cartItems } = this.props;
    console.log(cartItems[String(id)])
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
