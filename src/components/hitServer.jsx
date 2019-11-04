import React, {Component} from "react";
import AddNewField  from "./addNewField"
const axios = require('axios');


class HitServer extends Component {

    constructor(props) {
        super(props);

        this.state = {
            fields: [],
            intervalIsSet: false,
        };
    }

    componentDidMount() {
        this.getDataFromDb();
        let counter = 0
        if (!this.state.intervalIsSet && counter < 5) {
            let interval = setInterval(this.getDataFromDb, 5000);
            counter++
            this.setState({ intervalIsSet: interval });
        }
    }

    componentWillUnmount() {
        if (this.state.intervalIsSet) {
            clearInterval(this.state.intervalIsSet);
            this.setState({ intervalIsSet: null });
        }
    }


    getDataFromDb = () => {
        axios.get("http://localhost:3001/api/getData")
            .then( (response) => response.data ) //needs to be data for some reason
            .then( res => { console.log(res); this.setState({ fields: res.fields })})//then can be object name
           .catch(error => console.log(error));

    };



    render() {
        const { fields } = this.state;
        console.log(fields)

        return (
            <div>
                <ul>
                    {fields && fields.length <= 0 ? "NO DB ENTRIES YET" : fields.map(dat => (
                        <li style={{ padding: "10px" }} key={dat}>
                            <span>Field Name: {dat.name} </span>
                            <span>Field Alis: {dat.alias} </span>
                            <span>Field email: {dat.email} </span>

                        </li>
                    ))}
                </ul>
            <div>
                <h1>add new field</h1>
            <AddNewField/>
            </div>
            </div>
        );
    }
}
export default HitServer
