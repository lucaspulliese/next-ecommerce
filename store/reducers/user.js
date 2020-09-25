import {HYDRATE} from 'next-redux-wrapper';

const initialState = {
  user: 'Lucas Pulliese',
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'TICK':
      return {...state, tick: action.payload};
    default:
      return state;
  }
}