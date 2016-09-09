import React, { PropTypes } from 'react';
import serialize from 'form-serialize';

const Form = ({
  id,
  className,
  style,
  formRef,
  children,
  onSubmit
}) => (
  <form
    id={id}
    className={className}
    style={style}
    ref={formRef}
    onSubmit={e => {
      e.preventDefault();
      const formData = serialize(e.target, { hash: true, empty: true });
      onSubmit(formData);
    }}
  >
    {children}
  </form>
);

Form.propTypes = {
  id: PropTypes.string,
  className: PropTypes.string,
  style: PropTypes.object,
  formRef: PropTypes.func,
  children: PropTypes.any,
  onSubmit: PropTypes.func
};

export default Form;
