import React, {Component} from 'react';
import TableCell from './TableCell';

class TableRow extends Table{
    constructor(props){
        super(props);
    }
    render(){
        return <tr>{tableCells}</tr>;
    }
}
export default TableRow;