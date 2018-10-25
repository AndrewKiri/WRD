import fetch from 'api/category'

export const fetchProduct = () => {
  const { products } = fetch()

  return { products }
}
