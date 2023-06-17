import React,{Component,ReactPropTypes} from "react";
//import { Table,TableCell,TableRow } from "./components";
import Table from "./Table";
import TableCell from "./TableCell";
import TableRow from "./TableRow";


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            rows: 0,
            col: 0,
        }
    }
    addRow() {
        this.setState((prevState) => ({
            rows: prevState.rows + 1
        }));
    }
    addCell() {
        this.setState((prevState) => ({
            col: prevState.col + 1
        }));
    }
    removeRow() {
        this.setState((prevState) => ({
            rows: Math.max(prevState.rows - 1, 0)
        }));
    }
    removeCell() {
        this.setState((prevState) => ({
            col: Math.max(prevState.col - 1, 0)
        }));
    }
    colorChange(event) {
        this.setState({
          selColor: event.target.value,
        });
      }

    render() {
        return <div>
            <button onclick="addRow">Add Row</button>
            <button onclick="removeRow">Remove Row</button>
            <button onclick="addCell">Add Cell</button>
            <button onclick="removeCell">Remove Cell</button>
            <select value={selColor} onChange={(event) => this.colorChange(event)}>
                <option value="white">White</option>
                <option value="red">Red</option>
                <option value="blue">Blue</option>
                <option value="green">Green</option>
            </select>
            <Table rows={rows} columns={columns} selectedColor={selectedColor} />
        </div>

    }
}
export default App;