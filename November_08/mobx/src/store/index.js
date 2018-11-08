import MainStore from './MainStore'
import ProductsStore from './ProductsStore'
import CartStore from './CartStore'

export default {
  CartStore: new CartStore(),
  MainStore: new MainStore(),
  ProductsStore: new ProductsStore()
}
