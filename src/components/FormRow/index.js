import React, { PropTypes } from 'react';
import classNames from 'classnames';
import './styles.css';

const FormRow = ({
  label,
  renderLabel,
  className,
  style,
  labelClassName,
  labelStyle,
  fieldClassName,
  fieldStyle,
  required,
  errorMessage,
  children
}) => (
  <div className={classNames(className, 'sec-ui-form-row')} style={style}>
    <div className={classNames(labelClassName, 'sec-ui-form-row-label')} style={labelStyle}>
      {renderLabel ? renderLabel() : (
        <label>{label}</label>
      )}
    </div>
    <div className={classNames(fieldClassName, 'sec-ui-form-row-field')} style={fieldStyle}>
      {required && <span className="sec-ui-form-row-field-required">*</span>}
      {children}
      {errorMessage && <span className="sec-ui-form-row-error-message">
        {errorMessage}
      </span>}
    </div>
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
  labelClassName: PropTypes.string,
  labelStyle: PropTypes.object,
  fieldClassName: PropTypes.string,
  fieldStyle: PropTypes.object,
  required: PropTypes.bool.isRequired,
  errorMessage: PropTypes.string,
  children: PropTypes.any
};

export default FormRow;
