export const toggleFavProduct = ({ id }) => ({
  type: 'TOGGLE_FAV_PRODUCT',
  id
})

export const setUserLogged = ({ user }) => ({
  type: 'SET_USER_LOGGED',
  user
})