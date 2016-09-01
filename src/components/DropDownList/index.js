import React, { PropTypes } from 'react';
import classNames from 'classnames';
import './styles.css';

const DropDownList = ({
  id,
  name,
  value,
  defaultValue,
  options,
  textKey,
  valueKey,
  className,
  style,
  error,
  onChange
}) => (
  <select
    id={id}
    name={name}
    value={value}
    defaultValue={defaultValue}
    className={classNames(
      className,
      'sec-ui-drop-down-list',
      { 'sec-ui-drop-down-list-error': error }
    )}
    style={style}
    onChange={onChange}
  >
    {options.map(x => (
      <option key={x[valueKey]} value={x[valueKey]}>
        {x[textKey]}
      </option>
    ))}
  </select>
);

DropDownList.defaultProps = {
  error: false
};

DropDownList.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  defaultValue: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  options: PropTypes.array.isRequired,
  textKey: PropTypes.string.isRequired,
  valueKey: PropTypes.string.isRequired,
  className: PropTypes.string,
  style: PropTypes.object,
  error: PropTypes.bool.isRequired,
  onChange: PropTypes.func
};

export default DropDownList;
