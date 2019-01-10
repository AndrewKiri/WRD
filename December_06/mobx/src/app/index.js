import React, { Component } from 'react';
import Devtools from 'mobx-react-devtools';
import { inject } from 'mobx-react'
import { compose, withProps } from 'recompose';

import ProductList from './components/ProductList'

const enhance = compose(
  inject(stores => ({
    cartItems: stores.CartStore.cartItems
  }))
)

class App extends Component {
  render() {
    return (
      <div>
        <ProductList />
      </div>
    );
  }
}

export default enhance(App);
