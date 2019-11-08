import React, {Component} from "react";
import AddNewField  from "../addNewField"
import { landOwnersData } from '../../api'
const axios = require('axios');

export class LandOwners extends Component {

    constructor(props) {
        super(props);

        this.state = {
            fields: [],
            intervalIsSet: false,
        };
    }

    componentDidMount() {
        this.props.getLandOwners();
        //this.getDataFromDb();
        if (!this.state.intervalIsSet) {
            let interval = setInterval(this.getLandOwners, 5000);
            this.setState({ intervalIsSet: interval });
        }
    }

    componentWillUnmount() {
        if (this.state.intervalIsSet) {
            clearInterval(this.state.intervalIsSet);
            this.setState({ intervalIsSet: null });
        }
    }

    componentWillReceiveProps(nextProps) {
        this.setState({fields: nextProps})
    }


    getDataFromDb = () => {

        axios.get("http://localhost:3001/api/getData")
            .then( (response) => response.data ) //needs to be data for some reason
            .then( res => { console.log(res); this.setState({ fields: res.fields })})//then can be object name
           .catch(error => console.log(error));

    };



    render() {
        const { fields } = this.state;
        console.log(this.state)

        if( this.state.isLoading) {
            return (
                <div>
                    <h1>no content yet</h1>
                </div>
            )
        }
        else return( <div> not loaded</div>)
        // if (this.state.fields) {
        //     return (
        //         <div>
        //             <ul>
        //                 {fields === undefined ? "NO DB ENTRIES YET" : fields.map(dat => (
        //                     <li style={{padding: "10px"}} key={Math.random()}>
        //                         <span>Field Name: {dat.name} </span>
        //                         <span>Field Alis: {dat.alias} </span>
        //                         <span>Field email: {dat.email} </span>
        //
        //                     </li>
        //                 ))}
        //             </ul>
        //             <div>}
        //                 <h1>add new field{this.props.mystate}</h1>
        //                 <AddNewField/>
        //             </div>
        //         </div>
        //     )
        // }else{
        //     return ( <h1>no data yet</h1>)
        //     }

    }
}

export default LandOwners
