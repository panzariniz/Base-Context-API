import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'utils/classList';

function Button({ children, disabled, type, variant, ...rest }) {
  const modifiers = classNames({
    'button--primary': variant === 'primary',
    'button--secondary': variant === 'secondary',
    'button--tertiary': variant === 'tertiary',
  });

  return (
    <button
      className={`button ${modifiers}`}
      disabled={disabled}
      type={type}
      {...rest}
    >
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  disabled: PropTypes.bool,
  type: PropTypes.oneOf(['submit', 'reset', 'button']),
  variant: PropTypes.oneOf(['primary', 'secondary']),
  // icon: PropTypes.oneOf([PropTypes.element, PropTypes.string]),
};

Button.defaultProps = {
  disabled: false,
  type: 'button',
  variant: null,
  //  icon: null,
};

export default Button;
