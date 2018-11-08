import { observable, action } from 'mobx'

class CartStore {
  @observable items = []

  @action addToCart(parameters = { id: 5 }) {
    this.push({ id: parameters.id })
  }
}

export default CartStore
