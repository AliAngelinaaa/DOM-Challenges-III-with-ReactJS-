import React, {Component} from 'react';
import TableRow from './TableRow';

class Table extends Component{
    constructor(props) {
        super(props);
        // this.state = {
        //   rows: 0,
        //   col: 0,
      }
    
    // renderTableRows(rows, columns, selectedColor) {
    //     const tableRows = [];
    
    //     for (let i = 0; i < rows; i++) {
    //       tableRows.push(<TableRow key={i} columns={columns} selectedColor={selectedColor} />);
    //     }
    
    //     return tableRows;
    //   }

    render() {
    //     const { rows, columns, selectedColor } = this.props;
    // const tableRows = this.renderTableRows(rows, columns, selectedColor);
    console.log(this.props.onClickAddRows);
    console.log(this.props.onClickAddCols);
    // var {numOfRows} = this.props.onClickAddRows;

    const tableRow = Array.from({ length: this.props.onClickAddRows },
       (_, index) => <TableRow key={index} setCol={this.props.onClickAddCols}/>);
       console.log(tableRow);
    return(
      <table>
        <tbody>
          {tableRow}
        </tbody>
      </table>
    )
    }
}
export default Table;