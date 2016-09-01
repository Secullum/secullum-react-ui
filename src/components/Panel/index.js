import React, { PropTypes } from 'react';
import classNames from 'classnames';
import './styles.css';

const Panel = ({
  icon,
  title,
  className,
  style,
  renderButtons,
  children
}) => {
  const iconClassName = `sec-ui-panel-header-icon fa fa-${icon}`;

  return (
    <div className={classNames(className, 'sec-ui-panel')} style={style}>
      <div className="sec-ui-panel-header">
        <i className={iconClassName} />
        <h2 className="sec-ui-panel-header-title">{title}</h2>
      </div>

      <div className="sec-ui-panel-body">
        {children}
      </div>

      {renderButtons && <div className="sec-ui-panel-footer">
        {renderButtons()}
      </div>}
    </div>
  );
};

Panel.propTypes = {
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  className: PropTypes.string,
  style: PropTypes.object,
  renderButtons: PropTypes.func,
  children: PropTypes.any
};

export default Panel;
