import React, {Component} from 'react';
import TableRow from './TableRow';

class Table extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return<table>
        <tbody>{tableRows}</tbody>
      </table>
    }
}
export default Table;