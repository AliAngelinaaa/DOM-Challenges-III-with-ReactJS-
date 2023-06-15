import { HeaderView, MainView, FooterView, RoutesView } from "./components";
import Table from "./Table";

class App extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return<div>
            <Table></Table>
            <button onclick ="addRow">Add Row</button>
            <button onclick ="addCell">Add Cell</button>
        </div>
    }
}
export default App;