import React, { PropTypes } from 'react';
import classNames from 'classnames';
import './styles.css';

const FormRow = ({
  label,
  renderLabel,
  className,
  style,
  required,
  errorMessage,
  children
}) => (
  <div className={classNames(className, 'sec-ui-form-row')} style={style}>
    <div className="sec-ui-form-row-label">
      {renderLabel ? renderLabel() : (
        <label>{label}</label>
      )}
    </div>
    <div className="sec-ui-form-row-field">
      {required && <span className="sec-ui-form-row-field-required">*</span>}
      {children}
    </div>
    {errorMessage && <span className="sec-ui-form-row-error-message">
      {errorMessage}
    </span>}
  </div>
);

FormRow.defaultProps = {
  required: false
};

FormRow.propTypes = {
  label: PropTypes.string,
  renderLabel: PropTypes.func,
  className: PropTypes.string,
  style: PropTypes.object,
  required: PropTypes.bool.isRequired,
  errorMessage: PropTypes.string,
  children: PropTypes.any
};

export default FormRow;
