import React, { Component } from 'react';
import Devtools from 'mobx-react-devtools';
import { inject } from 'mobx-react'

import ProductList from './components/ProductList'

const enhance = inject(stores => ({
  cartItems: stores.CartStore.cartItems
}))

class App extends Component {
  render() {
    return (
      <div>
        <ProductList />
        <Devtools />
      </div>
    );
  }
}

export default enhance(App);
