import React, { useState, useEffect, Fragment } from "react";
import HooksForm from './HooksForm'
import UserList from './UserList'
import { useAsync } from 'react-async-hook';
import {useAsyncHook} from '../api/'
const axios = require('axios');

// https://dev.to/vinodchauhan7/react-hooks-with-async-await-1n9g


  

const AddNewField = () => {
    const [fullName, setName] = useState(null);
    // const [surname, setSurname] = useState(null);
    const [email, setEmail] = useState(null);
    const [arrivalDate, setOutDate] = useState(null);
    const [departureDate, setInDate] = useState(null);
    const [users, setUsers] = useState({ users: [] });
    const [url, setUrl] = useState(
        'http://localhost:3001/api/getUsers',
      );
      const [result, loading] = useAsyncHook(url);

   
    const putDataToDB = () => {
          axios.post("http://localhost:3001/api/booking", {
            fullName,
            arrivalDate,
            departureDate,
            email
        });
    };


  
    return (
        <Fragment>

            <input type="text"  placeholder="Full Name" onChange={e => setName(e.target.value )}/>
            {/* <input type="text"  placeholder="Surname" onChange={e => setSurname(e.target.value )}/> */}
            <input type="text" data-provide="datepicker"   placeholder="Depature Date" onBlur={e => setOutDate(e.target.value )}/>
            <input type="text" data-provide="datepicker"  placeholder="Date you leave" onBlur={e => setInDate(e.target.value )}/>
            <input type="text"  placeholder="Email" onChange={e => setEmail(e.target.value )}/>

        



            <button onClick={() => putDataToDB()}>
                ADD
            </button>



            {loading === "false" ? (
                    <h1>Show users names</h1>
                ) : loading === "null" ? (
                    <h1>No Book Found</h1>
                ) : (
                    result.map(item => {
                    return <p>Book Title : {item.name}</p>;
                    })
                )}

        </Fragment>
    );
}

export default AddNewField
