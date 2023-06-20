import React, {Component} from 'react';


class TableCell extends Component{
    constructor(props){
        super(props);
        this.state = {
            colorOfCell: 'white'
        }
        this.changeColor = this.changeColor.bind(this);
    }
    changeColor(){
        this.setState({ colorOfCell : this.state.colorOfCell =this.props.selectedColor});
    }
    render(){
        return <td style={{
            height: "50px",
            width: "50px",
            backgroundColor:this.state.colorOfCell,
            border: "1px solid black"
        }} onClick={this.changeColor}></td>
    }
    
}
export default TableCell;