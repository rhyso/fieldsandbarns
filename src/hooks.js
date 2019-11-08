// hooks.js
import { useState, useEffect } from "react";

const useFetch = url => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const fetchData = async () => {
        const response = await fetch(url);
        setData(await response.json());
        setLoading(false);
    };
    useEffect(() => {
        fetchData();
    }, []);
    return [data, loading];
};
export { useFetch };



// BACKUP
// axios.get("http://localhost:3001/api/getData")
//     .then( (response) => response.data ) //needs to be data for some reason
//     .then( res => { console.log(res); this.setState({ rhys: res.fields })})//then can be object name
//     .catch(error => console.log(error));
