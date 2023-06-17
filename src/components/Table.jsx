import React, {Component} from 'react';
import TableRow from './TableRow';

class Table extends Component{
    constructor(props) {
        super(props);
    }
    renderTableRows(rows, columns, selectedColor) {
        const tableRows = [];
    
        for (let i = 0; i < rows; i++) {
          tableRows.push(<TableRow key={i} columns={columns} selectedColor={selectedColor} />);
        }
    
        return tableRows;
      }
    render() {
        const { rows, columns, selectedColor } = this.props;
    const tableRows = this.renderTableRows(rows, columns, selectedColor);

    return<table>
        <tbody>{tableRows}</tbody>
      </table>
    }
}
export default Table;