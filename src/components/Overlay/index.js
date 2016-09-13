import React, { PropTypes } from 'react';
import classNames from 'classnames';
import './styles.css';

const Overlay = ({
  className,
  style,
  children
}) => (
  <div className={classNames(className, 'sec-ui-overlay')} style={style}>
    {children}
  </div>
);

Overlay.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  children: PropTypes.any
};

export default Overlay;
