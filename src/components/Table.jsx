import React, { Component } from 'react';
import TableRow from './TableRow';

class Table extends Component{
    constructor(props) {
        super(props);
      }

    render() {

    console.log(this.props.onClickAddRows);
    console.log(this.props.onClickAddCols);


    // const tableRow = Array.from({ length: this.props.onClickAddRows },
    //    (_, index) => <TableRow key={index} setCol={this.props.onClickAddCols}/>);
    //    console.log(tableRow);
    return(
      <table>
        <tbody>
          {/* Render the TableRow component mutiple times by using the Array().fill()method.
             The numbers of TableRow component is based on this.props.onClickAddRows, which is the number of rows.
             setCol is the props pass to TableRow  */}
          {Array(this.props.onClickAddRows).fill(<TableRow setCol={this.props.onClickAddCols} selectedColor={this.props.selectedColor}/>)}
        </tbody>
      </table>
    )
    }
}
export default Table;