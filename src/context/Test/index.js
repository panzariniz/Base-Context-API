import React, { useReducer } from 'react';
import PropTypes from 'prop-types';

import TestContext from './context';
import TestReducer from './reducer';

import { GET_TEST, SET_TEST } from './types';

const INITIAL_STATE = {
  variable_one: null,
  variable_two: [],
};

export default function TestState({ children }) {
  const [state, dispatch] = useReducer(TestReducer, INITIAL_STATE);

  async function setSomeApi({ variables }) {
    // const response = await apiTest.setTest(variables);
    // dispatch({
    //   type: SET_TEST,
    //   payload: response.data,
    // });
  }

  async function getSomeApi({ variables }) {
    // const response = await apiTest.getTest(variables);
    // dispatch({
    //   type: GET_TEST,
    //   payload: response.data,
    // });
  }

  const values = {
    variable_one: state.variable_one,
    variable_two: state.variable_two,
    getSomeApi,
    setSomeApi,
  };

  return <TestContext.Provider value={values}>{children}</TestContext.Provider>;
}

TestState.propTypes = {
  children: PropTypes.node.isRequired,
};
