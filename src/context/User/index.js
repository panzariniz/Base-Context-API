import React, { useReducer } from 'react';
import PropTypes from 'prop-types';

import apiAuth from 'services/api/auth';
import history from 'services/history';
import UserContext from './context';
import UserReducer from './reducer';

import { AUTH, LOGOUT } from './type';

const INITIAL_STATE = {
  user: null,
  signed: false,
};

export default function UserState({ children }) {
  const [state, dispatch] = useReducer(UserReducer, INITIAL_STATE);

  async function auth(payload) {
    const response = await apiAuth.auth(payload);

    dispatch({
      type: AUTH,
      payload,
    });

    history.push('/home');
  }

  async function logout() {
    // const response = await apiAuth.logout();

    dispatch({
      type: LOGOUT,
    });

    history.push('/');
  }

  const values = {
    user: state.user,
    signed: state.signed,
    auth,
    logout,
  };

  return <UserContext.Provider value={values}>{children}</UserContext.Provider>;
}

UserState.propTypes = {
  children: PropTypes.node.isRequired,
};
