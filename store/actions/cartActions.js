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

export const removeProduct = ({ color, size, id }) => ({
  type: 'REMOVE_PRODUCT',
  color,
  size,
  id
})