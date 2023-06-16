import React, {Component} from 'react';
import TableCell from './TableCell';

class TableRow extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return <tr><TableCell></TableCell><TableCell></TableCell></tr>
    }
}
export default TableRow;