import { GET_TEST, SET_TEST } from './types';

export default (state, action) => {
  switch (action.type) {
    case GET_TEST:
      return {
        ...state,
        variable_one: action.payload,
      };
    case SET_TEST:
      return {
        ...state,
        variable_two: action.payload,
      };
    default:
      return state;
  }
};
