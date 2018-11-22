import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { listenerActions } from '../../store/actions';
import Product from './Product'

const containerStyles = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center'
}

class ProductList extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch({
      type: listenerActions.FETCH_REQUEST
    })
  }

  render() {
    let { listOfProducts } = this.props;

    return (
      <div style={containerStyles}>
        {listOfProducts.map((product, index) => (
          <Fragment key={index}>
            <Product {...product} />
          </Fragment>
        ))}
      </div>
    );
  }
}

const enhance = connect(state => ({
  listOfProducts: state.ListingReducer.listOfProducts
}))

export default enhance(ProductList);
