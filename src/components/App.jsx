import React,{Component,ReactPropTypes} from "react";
//import { Table,TableCell,TableRow } from "./components";
import Table from "./Table";
import TableCell from "./TableCell";
import TableRow from "./TableRow";


class App extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return<div>
            <Table id="grid"></Table>
            <TableRow></TableRow>
            <TableCell></TableCell>
            <button onclick ="addRow">Add Row</button>
            <button onclick ="addCol">Add Column</button>
        </div>
    }
}
export default App;