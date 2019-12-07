import React, { useState } from "react";
import HooksForm from './HooksForm'
const axios = require('axios');

const AddNewField = () => {
    const [name, setName] = useState(null);
    const [alias, setAlias] = useState(null);
    const [email, setEmail] = useState(null);


    const putDataToDB = () => {
            axios.post("http://localhost:3001/api/putData", {
                name,
                alias,
                email
            });
        };

        return (
            <div>
                <input type="text"  placeholder="Name" onChange={e => setName(e.target.value )}/>
                <input type="text"  placeholder="Alias" onChange={e => setAlias(e.target.value )}/>
                <input type="text"  placeholder="Email" onChange={e => setEmail(e.target.value )}/>
                <h1>test</h1>
                <button onClick={() => putDataToDB()}>
                    ADD
                </button>

                <br />

                <HooksForm />


            </div>
        );
    }

export default AddNewField
