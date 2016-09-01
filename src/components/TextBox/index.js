import React, { PropTypes } from 'react';
import classNames from 'classnames';
import './styles.css';

const TextBox = ({
  id,
  name,
  value,
  defaultValue,
  type,
  className,
  style,
  error,
  onChange,
  onBlur
}) => (
  <input
    id={id}
    name={name}
    value={value}
    defaultValue={defaultValue}
    type={type}
    className={classNames(
      className,
      'sec-ui-text-box',
      { 'sec-ui-text-box-error': error }
    )}
    style={style}
    onChange={onChange}
    onBlur={onBlur}
  />
);

TextBox.defaultProps = {
  type: 'text',
  error: false
};

TextBox.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  defaultValue: PropTypes.string,
  type: PropTypes.string.isRequired,
  className: PropTypes.string,
  style: PropTypes.object,
  error: PropTypes.bool.isRequired,
  onChange: PropTypes.func,
  onBlur: PropTypes.func
};

export default TextBox;
