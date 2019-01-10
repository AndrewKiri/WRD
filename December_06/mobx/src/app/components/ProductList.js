import React, { Component, Fragment } from 'react';
import { inject } from 'mobx-react'
import Product from './Product'
import { compose, withProps } from 'recompose'

const enhance = compose(
  inject(stores => ({
    listOfProducts: stores.ProductsStore.listOfProducts
  })),
  withProps(console.log),
  withProps(({ listOfProducts }) => ({
    listOfProducts: listOfProducts.filter(product => product.price < 3)
  })),
  withProps(console.log)
)

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
