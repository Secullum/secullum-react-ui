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
  readOnly,
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
      { 'sec-ui-text-box-error': error },
      { 'sec-ui-text-box-readonly': readOnly }
    )}
    style={style}
    readOnly={readOnly}
    onChange={onChange}
    onBlur={onBlur}
  />
);

TextBox.defaultProps = {
  type: 'text',
  error: false,
  readOnly: false
};

TextBox.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  defaultValue: PropTypes.string,
  type: PropTypes.string.isRequired,
  className: PropTypes.string,
  style: PropTypes.object,
  readOnly: PropTypes.bool.isRequired,
  error: PropTypes.bool.isRequired,
  onChange: PropTypes.func,
  onBlur: PropTypes.func
};

export default TextBox;
