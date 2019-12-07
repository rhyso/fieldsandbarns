import React, { useState } from "react";
import HooksForm from './HooksForm'
const axios = require('axios');

const AddNewField = () => {
    const [firstName, setName] = useState(null);
    const [surname, setSurname] = useState(null);
    const [bio, setBio] = useState(null);
    const [alias, setAlias] = useState(null);
    const [email, setEmail] = useState(null);

    const putDataToDB = () => {
        axios.post("http://localhost:3001/api/addOwner", {
            firstName,
            surname,
            bio,
            alias,
            email
        });
    };

    return (
        <div>
            <input type="text"  placeholder="Name" onChange={e => setName(e.target.value )}/>
            <input type="text"  placeholder="Surname" onChange={e => setSurname(e.target.value )}/>
            <input type="text"  placeholder="Alias" onChange={e => setAlias(e.target.value )}/>
            <input type="text"  placeholder="Email" onChange={e => setEmail(e.target.value )}/>
            <input type="text"  placeholder="Bio" onChange={e => setBio(e.target.value )}/>

            <button onClick={() => putDataToDB()}>
                ADD
            </button>

            <br />

            {/*<HooksForm />*/}


        </div>
    );
}

export default AddNewField
