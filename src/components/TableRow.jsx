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
            {tableCells}
            {/* <TableCell></TableCell> */}
            </tr>;
    }
}
export default TableRow;