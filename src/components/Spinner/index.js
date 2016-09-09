import React from 'react';
import './styles.css';

const Spinner = () => (
  <div className="sec-ui-spinner-overlay">
    <div className="sec-ui-spinner-container">
      <i className="fa fa-spinner fa-spin sec-ui-spinner" />
    </div>
  </div>
);

export default Spinner;
