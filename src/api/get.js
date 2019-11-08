import { GET_LAND_OWNERS_DATA_PATH } from './constants'
const axios = require('axios');

const landOwnersData = () => {
    axios.get(GET_LAND_OWNERS_DATA_PATH)
        .then( (response) => response.data ) //needs to be data for some reason
        //.then( res => { console.log(res); this.setState({ fields: res.fields })})//then can be object name
        .then( (res) => {
            console.log(res)
            return res
        })//then can be object name
        .catch(error => console.log(error));
}

export {
    landOwnersData
}
