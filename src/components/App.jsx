import React,{Component,ReactPropTypes} from "react";
import { Table,TableCell,TableRow } from "./";



class App extends Component{
    constructor(props) {
        super(props);
        this.state = {
            rows: 0,
            col: 0,
            cellColor:''
        }
    this.addRow = this.addRow.bind(this);
    this.addCol = this.addCol.bind(this);
    this.delRow = this.delRow.bind(this);
    this.delCol = this.delCol.bind(this);
    this.pickColor = this.pickColor.bind(this);
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

    delRow() {
        console.log("Hi this is function delRow");
        this.setState({ rows : this.state.rows - 1});
    }

    delCol() {
        console.log("Hi this is function delCol");
        this.setState({ col : this.state.col - 1});
    }

    // colorChange(event) {
    //     this.setState({
    //       selColor: event.target.value,
    //     });
    //   }
    pickColor(e){
        this.setState({ cellColor : this.state.cellColor = e.target.value});
        console.log(this.state.cellColor);
    }

    render() {

        return <div>
            <button onClick={this.addRow}>Add Row</button>
            <button onClick={this.addCol}>Add Column</button>
            <button onClick={this.delRow}>Delete Row</button>  
            <button onClick={this.delCol}>Delete Column</button>
            <label htmlFor="colorSelect">Choose Color:</label>
            <select id="colorSelect" onClick = {this.pickColor}>
                <option>Options</option>
                <option value="red">Red</option>
                <option value="blue">Blue</option>
                <option value="green">Green</option>
                <option value="yellow">Yellow</option>
            </select>            
            {/* pass row and col as props to Table component*/}
            <Table onClickAddRows = {this.state.rows} onClickAddCols = {this.state.col} selectedColor={this.state.cellColor}/>
            {/* <Table rows={rows} columns={columns} selectedColor={selectedColor} /> */}
        </div>

    }
}
export default App;