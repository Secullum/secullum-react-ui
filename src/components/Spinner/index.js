import React from 'react';
import Overlay from '../Overlay';
import './styles.css';

const Spinner = () => (
  <Overlay>
    <div className="sec-ui-spinner-container">
      <i className="fa fa-spinner fa-spin sec-ui-spinner" />
    </div>
  </Overlay>
);

export default Spinner;
