export const addProduct = text => ({
  type: 'ADD_PRODUCT',
  id: nextTodoId++,
  text
})