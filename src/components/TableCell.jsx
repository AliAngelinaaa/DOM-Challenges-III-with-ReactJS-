import React, {Component} from 'react';


class TableCell extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return <td style={{
            height: "50px",
            width: "50px",
            backgroundColor:"white",
            border: "1px solid black"
        }}></td>
    }
    
}
export default TableCell;