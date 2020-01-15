import { AUTH, LOGOUT } from './type';

export default (state, action) => {
  switch (action.type) {
    case AUTH:
      return {
        ...state,
        user: action.payload,
        signed: true,
      };
    case LOGOUT:
      return {
        ...state,
        user: null,
        signed: false,
      };
    default:
      return state;
  }
};
