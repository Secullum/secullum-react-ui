import React, { PropTypes } from 'react';
import classNames from 'classnames';
import './styles.css';

const Button = ({
  id,
  children,
  type,
  className,
  style,
  disabled,
  primary,
  buttonRef,
  onClick
}) => (
  <button
    id={id}
    type={type}
    className={classNames(
      className,
      'sec-ui-button',
      { 'sec-ui-button-disabled': disabled },
      { 'sec-ui-button-primary': primary }
    )}
    style={style}
    disabled={disabled}
    ref={buttonRef}
    onClick={onClick}
  >
    {children}
  </button>
);

Button.defaultProps = {
  type: 'button',
  disabled: false,
  primary: false
};

Button.propTypes = {
  id: PropTypes.string,
  children: PropTypes.any,
  type: PropTypes.string.isRequired,
  className: PropTypes.string,
  style: PropTypes.object,
  disabled: PropTypes.bool.isRequired,
  primary: PropTypes.bool.isRequired,
  buttonRef: PropTypes.func,
  onClick: PropTypes.func
};

export default Button;
