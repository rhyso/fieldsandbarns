import React, {Component} from "react";
const axios = require('axios');

class AddNewField extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: null,
            alias: null,
            email: null,
        }
    }

        putDataToDB = () => {
            // let currentIds = this.state.data.map(data => data.id);
            // let idToBeAdded = 0;
            // while (currentIds.includes(idToBeAdded)) {
            //     ++idToBeAdded;
            // }

            const { name, alias, email } = this.state

            axios.post("http://localhost:3001/api/putData", {
                name: name,
                alias: alias,
                email: email
            });
        };

    render() {
        return (
            <div style={{ padding: "10px" }}>
                <input
                    type="text"
                    onChange={e => this.setState({ name: e.target.value })}
                    placeholder="Field Name"
                    style={{ width: "200px" }}
                />
                <input
                    type="text"
                    onChange={e => this.setState({ alias: e.target.value })}
                    placeholder="Field alias"
                    style={{ width: "200px" }}
                />
                <input
                    type="text"
                    onChange={e => this.setState({ email: e.target.value })}
                    placeholder="Field email"
                    style={{ width: "200px" }}
                />
                <button onClick={() => this.putDataToDB()}>
                    ADD
                </button>
            </div>
        );
    }
}
export default AddNewField
