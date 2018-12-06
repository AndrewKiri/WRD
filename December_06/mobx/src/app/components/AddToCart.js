import React, { Component } from 'react';
import { inject } from 'mobx-react'

const enhance = inject(stores => ({
  add: stores.CartStore.add
}))

class AddToCart extends Component {

  handleClick = () => {
    const { id, add } = this.props;
    add({ id })
  } 

  render() {
    return (
      <button onClick={this.handleClick}>
        Add
      </button>
    );
  }
}

export default enhance(AddToCart);
