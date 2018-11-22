import React, { Component } from 'react';
import { connect } from 'react-redux';
import { listenerActions } from '../../store/actions'

class Product extends Component {

  handleAdd = () => {
    const { dispatch, id } = this.props;
    dispatch({
      type: listenerActions.ADD_REQUEST,
      payload: { id }
    })
  }

  handleReduce = () => {
    const { dispatch, id } = this.props;
    dispatch({
      type: listenerActions.REDUCE_REQUEST,
      payload: { id }
    })
  }

  render() {
    let { name, price, id, items } = this.props;
    let quantity = items[id] || 0
    
    return (
      <div>
        <div>{name}</div>
        <div>{price}</div>
        <div>{quantity}</div>
        <button onClick={this.handleAdd}>+</button>
        <button onClick={this.handleReduce}>-</button>
      </div>
    );
  }
}

const enhance = connect(state => ({
  items: state.CartReducer.items
}));

export default enhance(Product);
