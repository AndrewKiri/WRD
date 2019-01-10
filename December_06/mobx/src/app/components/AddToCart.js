import React, { Component } from 'react';
import { inject } from 'mobx-react';
import {
  compose,
  withHandlers,
  branch,
  renderNothing
} from 'recompose';

const enhance = compose(
  inject(stores => ({
    add: stores.CartStore.add
  })),
  withHandlers({
    handleClick: ({ id, add }) => () => add({ id })
  }),
  branch(
    ({ handleClick }) => !(Boolean(handleClick)),
    renderNothing
  )
)

const AddToCart = ({
  handleClick,
  text = 'Add',
  children
}) => (
  <button onClick={handleClick}>
    {text || children}
  </button>
)

export default enhance(AddToCart);
