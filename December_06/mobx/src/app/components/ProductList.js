import React, { Component, Fragment } from 'react';
import { inject } from 'mobx-react'
import Product from './Product'

const enhance = inject(stores => ({
  listOfProducts: stores.ProductsStore.listOfProducts
}))

const styles = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center'
}

class ProductList extends Component {
  render() {
    const { listOfProducts } = this.props
    return (
      <div style={styles}>
        {listOfProducts.map((product, index) => (
          <Fragment key={index}>
            <Product {...product} />
          </Fragment>
        ))}
      </div>
    );
  }
}

export default enhance(ProductList);
