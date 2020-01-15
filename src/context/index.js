import React from 'react';
import PropTypes from 'prop-types';

import UserState from './User';

export default function Context({ children }) {
  return <UserState>{children}</UserState>;
}

Context.propTypes = {
  children: PropTypes.node.isRequired,
};
