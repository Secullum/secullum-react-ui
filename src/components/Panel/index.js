import React, { PropTypes } from 'react';
import classNames from 'classnames';
import './styles.css';

const Panel = ({
  title,
  icon,
  iconImageSrc,
  className,
  style,
  renderButtons,
  children
}) => {
  const iconClassName = `sec-ui-panel-header-icon fa fa-${icon}`;

  return (
    <div className={classNames(className, 'sec-ui-panel')} style={style}>
      <div className="sec-ui-panel-header">
        {icon ? (
          <i className={iconClassName} />
        ) : (
          <img src={iconImageSrc} alt="" className="sec-ui-panel-header-icon" />
        )}
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
  title: PropTypes.string.isRequired,
  icon: PropTypes.string,
  iconImageSrc: PropTypes.string,
  className: PropTypes.string,
  style: PropTypes.object,
  renderButtons: PropTypes.func,
  children: PropTypes.any
};

export default Panel;
