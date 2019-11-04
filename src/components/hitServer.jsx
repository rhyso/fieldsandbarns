import React, {Component} from "react";
const axios = require('axios');



class HitServer extends Component {

    constructor(props) {
        super(props);

        this.state = {
            users: [],
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
            .then(response =>  response.data)
            .then( res => this.setState({ users: res.data }))
           .catch(error => console.log(error));

    };



    render() {
        const { users } = this.state;
        return (
            <div>
                <ul>
                    {users.length <= 0 ? "NO DB ENTRIES YET" : users.map(dat => (
                        <li style={{ padding: "10px" }} key={dat}>
                            {dat.message}
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}
export default HitServer
