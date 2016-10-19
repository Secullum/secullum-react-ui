import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';
import './styles.css';

class List extends Component {
  static defaultProps = {
    valueKey: 'value',
    descriptionKey: 'description'
  };

  static propTypes = {
    options: PropTypes.array.isRequired,
    value: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.string
    ]),
    valueKey: PropTypes.string.isRequired,
    descriptionKey: PropTypes.string.isRequired,
    className: PropTypes.string,
    style: PropTypes.object,
    onChange: PropTypes.func.isRequired
  };

  handleKeyDown = e => {
    if (e.key !== 'ArrowUp' && e.key !== 'ArrowDown') {
      return;
    }

    e.preventDefault();

    const { options, valueKey, value } = this.props;

    let selectedIndex = options.findIndex(option => option[valueKey] === value);

    if (e.key === 'ArrowUp') {
      selectedIndex--;
    } else {
      selectedIndex++;
    }

    if (selectedIndex < 0) {
      selectedIndex = 0;
    } else if (selectedIndex >= options.length) {
      selectedIndex = options.length - 1;
    }

    this.props.onChange(options[selectedIndex][valueKey]);
  };

  renderOption = option => {
    const value = option[this.props.valueKey];
    const description = option[this.props.descriptionKey];

    return (
      <div
        key={value}
        className={classNames(
          'sec-ui-list-option',
          { 'sec-ui-list-option-selected': value === this.props.value }
        )}
        onClick={() => {
          this.props.onChange(value);
        }}
      >
        {description}
      </div>
    );
  };

  render() {
    return (
      <div
        className={classNames('sec-ui-list', this.props.className)}
        tabIndex="0"
        onKeyDown={this.handleKeyDown}
        style={this.props.style}
      >
        {this.props.options.map(this.renderOption)}
      </div>
    );
  }
}

export default List;
