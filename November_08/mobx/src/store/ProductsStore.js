import { observable } from "mobx";

export default class ProductsStore {
  @observable listOfProducts = [
      {
        id: 0,
        name: 'Kinder',
        price: 2.50,
        stock: 5
      },
      {
        id: 1,
        name: 'Bounty',
        price: 2.00,
        stock: 10
      },
      {
        id: 2,
        name: 'Mars',
        price: 2.00,
        stock: 3
      },
      {
        id: 3,
        name: 'Milka',
        price: 3.50,
        stock: 1
      }
    ]
}
