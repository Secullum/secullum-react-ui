import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';
import './styles.css';

class Table extends Component {
  static defaultProps = {
    idAttribute: 'id'
  };

  static propTypes = {
    columns: PropTypes.arrayOf(PropTypes.shape({
      key: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      width: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    })).isRequired,
    data: PropTypes.array.isRequired,
    idAttribute: PropTypes.string.isRequired,
    selection: PropTypes.array,
    className: PropTypes.string,
    style: PropTypes.object,
    onRowClick: PropTypes.func,
    onSelectionChange: PropTypes.func
  };

  state = {
    shouldRenderLastRowBorder: false
  };

  componentDidMount() {
    const containerRect = this.container.getBoundingClientRect();
    const tableRect = this.table.getBoundingClientRect();

    // subtract 2 because of borders
    if ((containerRect.height - 2) > tableRect.height) {
      this.setState({ shouldRenderLastRowBorder: true });
    }
  }

  handleSelectAllChange = e => {
    const { data, idAttribute, onSelectionChange } = this.props;

    const newSelection = e.target.checked ? (
      data.map(x => x[idAttribute])
    ) : [];

    onSelectionChange(newSelection);
  };

  handleSelectChange = (e, row) => {
    const { selection, idAttribute, onSelectionChange } = this.props;

    const newSelection = e.target.checked ? (
      [...selection, row[idAttribute]]
    ) : (
      selection.filter(x => x !== row[idAttribute])
    );

    onSelectionChange(newSelection);
  };

  render() {
    const { columns, data, idAttribute, selection, className, style, onRowClick } = this.props;

    return (
      <div
        className={classNames(className, 'sec-ui-table-container')}
        style={style}
        ref={ref => this.container = ref}
      >
        <table className="sec-ui-table" ref={ref => this.table = ref}>
          <thead>
            <tr>
              {selection != null && (
                <th className="sec-ui-table-selection-column">
                  <input type="checkbox" onChange={this.handleSelectAllChange} />
                </th>
              )}
              {columns.map(column => (
                <th key={column.key} style={{ width: column.width }}>
                  {column.title}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className={classNames({ 'sec-ui-table-render-last-row-border': this.state.shouldRenderLastRowBorder })}>
            {data.map(row => (
              <tr
                key={row[idAttribute]}
                className={classNames({ 'sec-ui-table-row-clickable': onRowClick != null })}
                onClick={onRowClick == null ? undefined : () => onRowClick(row)}
              >
                {selection != null && (
                  <td className="sec-ui-table-selection-column">
                    <input
                      type="checkbox"
                      checked={selection.some(x => x === row[idAttribute])}
                      onChange={e => this.handleSelectChange(e, row)}
                    />
                  </td>
                )}
                {columns.map(column => (
                  <td key={column.key} style={{ width: column.width }}>
                    {row[column.key]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Table;
