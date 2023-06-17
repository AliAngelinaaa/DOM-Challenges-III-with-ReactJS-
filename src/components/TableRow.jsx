import React, {Component} from 'react';
import TableCell from './TableCell';

class TableRow extends Component{
    constructor(props) {
        super(props);
    }

    renderTableCells(columns, selectedColor) {
        const tableCells = [];

        for (let i = 0; i < columns; i++) {
            tableCells.push(<TableCell key={i} selectedColor={selectedColor} />);
        }

        return tableCells;
    }
    

    render() {
        // const { columns, selectedColor } = this.props;
        // const tableCells = this.renderTableCells(columns, selectedColor);
        const tableCells = Array.from({ length: this.props.setCol+1 },
            (_, index) => <TableCell key={index}/>);
        console.log(tableCells);
        return <tr>
            {/* Render the TableCell component mutiple times by using the Array().fill()method.
             The numbers of TableCell component is based on (this.props.setCol+1), which is the number of columns. */}
            {Array(this.props.setCol+1).fill(<TableCell />)}
            </tr>;
    }
}
export default TableRow;