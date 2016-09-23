import React, { PropTypes } from 'react';
import classNames from 'classnames';
import './styles.css';

const Table = ({
  columns,
  data,
  idAttribute,
  selection,
  className,
  style,
  onRowClick,
  onSelectionChange
}) => (
  <div className={classNames(className, 'sec-ui-table-container')} style={style}>
    <table className="sec-ui-table">
      <thead>
        <tr>
          {selection != null && (
            <th className="sec-ui-table-selection-column">
              <input
                type="checkbox"
                onChange={e => {
                  const newSelection = e.target.checked ? (
                    data.map(x => x[idAttribute])
                  ) : [];
                  onSelectionChange(newSelection);
                }}
              />
            </th>
          )}
          {columns.map(column => (
            <th key={column.key} style={{ width: column.width }}>
              {column.title}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
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
                  onChange={e => {
                    const newSelection = e.target.checked ? (
                      [...selection, row[idAttribute]]
                    ) : (
                      selection.filter(x => x !== row[idAttribute])
                    );
                    onSelectionChange(newSelection);
                  }}
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

Table.defaultProps = {
  idAttribute: 'id'
};

Table.propTypes = {
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

export default Table;
