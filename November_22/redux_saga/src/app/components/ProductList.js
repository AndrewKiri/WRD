import React, { Component, Fragment } from 'react';
import Product from './Product'
import { connect } from 'react-redux'

class ProductList extends Component {
  componentDidMount() {
    const { dispatch } = this.props
    dispatch({
      type: 'FETCH_LIST_OF_PRODUCTS'
    })
  }
  
  
  render() {
    const { products, items } = this.props;
    return (
      <Fragment>
        {products.map((product, index) => (
          <Fragment key={index}>
            <Product {...product} items={items} />
          </Fragment>
        ))}
      </Fragment>
    );
  }
}

export default connect(state => ({
  products: state.CategoryReducer.products,
  items: state.CartReducer.items
}))(ProductList);
