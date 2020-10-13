export const addProduct = ({ thumb, name, price, count, color, size, id }) => ({
  type: 'ADD_PRODUCT',
  name,
  thumb,
  price,
  count,
  color,
  size,
  id
})