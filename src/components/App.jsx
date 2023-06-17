import React,{Component,ReactPropTypes} from "react";
import { Table,TableCell,TableRow } from "./";



class App extends Component{
    constructor(props) {
        super(props);
        this.state = {
            rows: 0,
            col: 0,
        }
    this.addRow = this.addRow.bind(this);
    this.addCol = this.addCol.bind(this);
    }

    //increment the value of row
    addRow() {
        console.log("Hi this is function addRow");
        this.setState({ rows : this.state.rows + 1});
    }

    //increment the value of column
    addCol() {
        console.log("Hi this is function addCol");
        this.setState({ col : this.state.col + 1});
    }

    // colorChange(event) {
    //     this.setState({
    //       selColor: event.target.value,
    //     });
    //   }

    render() {

        return <div>
            <button onClick={this.addRow}>Add Row</button>
            <button onClick={this.addCol}>Add Column</button>          
            {/* pass row and col as props to Table component*/}
            <Table onClickAddRows = {this.state.rows} onClickAddCols = {this.state.col}/>
            {/* <select value={selColor} onChange={(event) => this.colorChange(event)}>
                <option value="white">White</option>
                <option value="red">Red</option>
                <option value="blue">Blue</option>
                <option value="green">Green</option>
            </select> */}
            {/* <Table rows={rows} columns={columns} selectedColor={selectedColor} /> */}
        </div>

    }
}
export default App;