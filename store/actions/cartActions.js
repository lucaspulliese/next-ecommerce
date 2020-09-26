export const addProduct = ({ thumb, name, price, count }) => ({
  type: 'ADD_PRODUCT',
  name,
  thumb,
  price,
  count
})