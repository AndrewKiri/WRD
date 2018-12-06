import {
  observable,
  action
} from 'mobx'

export default class CartStore {
  @observable cartItems

  constructor() {
    this.cartItems = {
      0: 0,
      1: 0,
      2: 0,
      3: 0
    }
  }
  
  
  @action.bound add({ id }) {
    const isProductInCart = this.cartItems[String(id)]

    if (isProductInCart) {
      // debugger
      let prevQuantity = this.cartItems[String(id)]

      this.cartItems[String(id)] = prevQuantity + 1
    } else {
      // debugger
      this.cartItems[String(id)] = 1
      // this.cartItems[String(id)] = 1
    }
  }
}
